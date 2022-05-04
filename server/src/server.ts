import { routes } from './routes';
import express from 'express';
import cors from 'cors'

/**
 * GET = Busca
 * POST = Cadastra
 * PUT = Atualiza uma entidade
 * PATCH = Atualiza uma informação de uma entidade
 * DELETE = Deleta
 */

const app = express();

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(3333, () => {
  console.log('HTTP server running')
})