exports.showJobs = (req, res) => {
    res.render('home', {
        pageName: 'devJobs',
        tagline: 'Encuentra y publica trabajos para desarrolladores',
        barra: true,
        boton: true
    })
};