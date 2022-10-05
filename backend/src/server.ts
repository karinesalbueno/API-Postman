import express from 'express'
import { Router } from "express";
import cors from 'cors'

const app = express();
const router = Router()

app.use(express.json());
app.use(router)
app.listen(8080)

app.use(express.urlencoded({extended: true}));

app.use(cors())
export default app
