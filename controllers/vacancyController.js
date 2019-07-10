exports.newVacancyForm = (req, res) => {
    res.render('new-vacancy', {
        pageName: 'Nueva vacante',
        tagline: 'Llena el formulario y publica tu vacante',
    })
};