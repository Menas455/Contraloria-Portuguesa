exports.home = (err)=>{
    if(err){
    console.log(err)    
    }else{
    const imgFolder = './src/img';
    fs.readdir(imgFolder, (err, files) => {
        if (err) {
            console.error('Error al leer la carpeta de imágenes:', err);
            return res.status(500).send('Error al cargar las imágenes');
        }
        // Renderiza la vista index.hbs y pasa la lista de archivos
        res.render('index', { images: files });
    });
    }

}