import express from "express";
import axios from 'axios';
const cors = require('cors')
const app = express();

const apiURL: string = "https://cnctesteapl.azurewebsites.net/odata/CategoriaCliente?$select=nome,descricao&$Filter=IdEntidadeSindical/Id eq 6a8be2a2-2636-43d4-b9c0-002a50888604"

app.get('/category',  cors(), async (req, res) => {
    let response = await axios.get(apiURL)
    res.json(response.data.value)
})

app.listen(8080);

