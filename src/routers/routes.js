const express = require('express');
const routers = express.Router();
const upload = require('../controller/control-multer');
const fs = require('fs');

routers.get('/galeria', (req, res) => {
    const imgFolder = './src/img/';
    fs.readdir(imgFolder, (err, files) => {
        if (err) {
            console.error('Error al leer la carpeta de imágenes:', err);
            return res.status(500).send('Error al cargar las imágenes');
        }
        // Renderiza la vista index.hbs y pasa la lista de archivos
        res.render('galeria', { images: files });
    });
});

routers.post('/', upload.single('img'), (req, res)=>{
        res.redirect('/')
});

routers.get('/', (req, res) => {
    const imgFolder = './src/img';
    fs.readdir(imgFolder, (err, files) => {
        if (err) {
            console.error('Error al leer la carpeta de imágenes:', err);
            return res.status(500).send('Error al cargar las imágenes');
        }
        // Selecciona solo las tres primeras imágenes
        const firstThreeImages = files.slice(0, 4);
        // Renderiza la vista index.hbs y pasa la lista reducida de archivos
        res.render('index', { images: firstThreeImages });
    });
});


module.exports = routers; 