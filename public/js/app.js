document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelector('.lista-conocimientos')

    if (skills && typeof skills !== 'undefined'){
        skills.addEventListener('click', addNewSkill)
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