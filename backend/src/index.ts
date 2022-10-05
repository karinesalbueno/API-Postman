import axios from 'axios';
import cors from 'cors';
import app from './server';

import { getApi, postApi, deleteApi } from './routes';

export interface ClientCategory {
  _IdEntidadeSindical: string;
  Nome: string;
  Descricao?: string;
}

app.get('/category', cors(), async (_req: any, res: any) => {
  let response = await axios.get(getApi)
  res.json(response.data.value)
});

app.post('/category/:Nome/:Descricao?', cors(), async (req: any, res: any) => {

  let value = await axios.post(postApi, {
    _IdEntidadeSindical: '6a8be2a2-2636-43d4-b9c0-002a50888604',
    Nome: req.params['Nome'],
    Descricao: req.params['Descricao']
  })
  res.json(value.data.value);
});


app.delete('/category/:id', cors(), async (req: any, res: any) => {

  const data = { id: req.params['id'] }
  let value = await axios.delete(deleteApi(data.id), {
    data: { id: req.params['id'] }
  })

  res.send(value.data.value)
}); 