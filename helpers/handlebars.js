module.exports = {
    skillsSelected: (selected = [], options) => {
        const skills = ['HTML5', 'CSS3', 'CSSGrid', 'Flexbox', 'JavaScript', 'jQuery', 'Node', 'Angular', 'VueJS', 'ReactJS', 'React Hooks', 'Redux', 'Apollo', 'GraphQL', 'TypeScript', 'PHP', 'Laravel', 'Symfony', 'Python', 'Django', 'ORM', 'Sequelize', 'Mongoose', 'SQL', 'MVC', 'SASS', 'WordPress'];
        let html = '';

        console.log('Seleccionadas', selected );
        skills.forEach( skill => {
            html += `
                <li ${selected.includes(skill) ? 'class="activo"' : ""}>${skill}</li>
            `
        });
        return options.fn().html = html
    },
    contractType: (selected, options) => {

        console.log('', options.fn());
        return options.fn(this).replace(
            new RegExp(`value="${selected}"`), '$& selected="selected"'
        )
    },
    showAlerts: (errors = {}, alerts) => {
        const category = Object.keys(errors);
        let html = '';
        if (category && typeof category !== 'undefined' && category.length > 0) {
            errors[category].forEach( error => {
                html += `
                        <div class="${category.toString().toLowerCase()} alerta">
                            ${error}
                        </div>
                        `
            })
        }
        return alerts.fn().html = html;
    }
};