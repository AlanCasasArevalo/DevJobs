const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const slug = require('slug');
const shortId = require('shortid');

const vacanciesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'El nombre de la vacante es obligatorio',
        trim: true
    },
    company: {
        type: String,
        trim: true
    },
    place: {
        type: String,
        trim: true,
        required: 'La ubicacion es obligatoria'
    },
    salary : {
        type: String,
        default: 0,
        trim: true
    },
    contract: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        lowercase: true
    },
    skills: [String],
    candidate: [{
        name: String,
        email: String,
        cv: String
    }]
});

vacanciesSchema.pre('save', (next) => {
    const url = slug(this.title);

    if (url && typeof url !== 'undefined') {
        this.url = `${url}-${shortId.generate()}`;
    }

    

    next();
});

module.exports = mongoose.model('Vacancy', vacanciesSchema);















