// importando lib multer
const multer = require('multer');
// importando lib path
const path = require('path');

// Criando modulo para exportar a função
module.exports = {
    // utilizando o multer para armazenar no disco
    storage: multer.diskStorage({
        // setando o caminho
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        // definindo o arquivo
        filename: (req, file, cb) => {
            const ext  = path.extname(file.originalname);
            // Criando o nome do arquivo.
            const name = path.basename(file.originalname, ext);
            //função chamada assim que o nome do arquivo estiver pronto
            // `` template string
            cb(null, `${name}-${Date.now()}${path.extname(ext)}`);
        },
    })
}