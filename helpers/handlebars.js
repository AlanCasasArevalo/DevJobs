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
    }

};