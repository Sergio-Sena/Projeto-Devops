import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth.routes';

require('dotenv').config();

const app = express();

// Middleware para parse JSON
app.use(express.json());

// Rota de autenticação
app.use('/api/auth', authRoutes);

// Conectar ao MongoDB
if (!process.env.MONGODB_URI) {
  throw new Error('Variável de ambiente MONGODB_URI não definida');
}

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});