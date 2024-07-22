const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware para permitir solicitações de diferentes origens
app.use(cors());

// Middleware para parsear JSON e URLs
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuração do armazenamento do multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Defina o diretório de destino para os arquivos enviados
    const uploadDir = 'uploads/';
    // Verifique se o diretório existe; se não, crie-o
    if (!fs.existsSync(uploadDir)){
      fs.mkdirSync(uploadDir);
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    // Define o nome do arquivo como o campo do arquivo + data atual + extensão
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Endpoint para upload de imagem
app.post('/products/:id/upload', upload.single('file'), (req, res) => {
  const produtoId = req.params.id;

  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded.' });
  }

  // URL pública para acessar a imagem
  const imageUrl = `/uploads/${req.file.filename}`;

  // Aqui você deve atualizar o produto no banco de dados com a URL da imagem
  // Exemplo fictício para atualização do produto com a URL da imagem
  updateProductImageUrl(produtoId, imageUrl)
    .then(() => res.json({ imageUrl }))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Função fictícia para atualizar a URL da imagem do produto
function updateProductImageUrl(produtoId, imageUrl) {
  // Implementar lógica para atualizar o produto no banco de dados
  return Promise.resolve(); // Simulação de sucesso
}

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
