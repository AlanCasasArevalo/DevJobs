document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelector('.lista-conocimientos')

    let alerts = document.querySelector('.alertas')

    if(alerts && typeof alerts !== 'undefined') {
        cleanAlerts()
    }

    if (skills && typeof skills !== 'undefined'){
        skills.addEventListener('click', addNewSkill)
        // Si estamos en editar llamamos a la funcion
        skillsSelected ()
    }

});

const skills = new Set();

const addNewSkill = (e) => {
    if (e.target  && typeof e.target  !== 'undefined') {
        if (e.target.tagName === 'LI') {
            if (e.target.classList.contains('activo')) {
                skills.delete(e.target.textContent);
                e.target.classList.remove('activo');
            } else {
                skills.add(e.target.textContent);
                e.target.classList.add('activo');
            }
        }
        console.log('Skills', skills);
        const skillsArray = [...skills];
        document.querySelector('#skills').value = skillsArray;
    }
};

const skillsSelected = () => {
    const selected = Array.from(document.querySelectorAll('.lista-conocimientos .activo'));
    const skillsArray = [...skills];

    selected.forEach( selected => {
       skills.add(selected.textContent);
    });

    document.querySelector('#skills').value = skillsArray;
    console.log('Seleccionadas:', selected);
};

const cleanAlerts = () => {
    const alerts = document.querySelector('.alertas');
    const interval = setInterval(() => {
        if (alerts.children.length > 0) {
            alerts.removeChild(alerts.children[0])
        } else if (alerts.children.length === 0) {
            alerts.parentElement.removeChild(alerts);
            clearInterval(interval);
        }
    }, 2000)
};