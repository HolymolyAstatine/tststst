import express from "express";
import { Pool } from "pg";

const app = express();
const port = 3001;

app.get('/',(req,res) => {
    res.send('hi 게이')
    console.log('짱호')
})

app.listen(port,() => {
    console.log('짱쉬운 수학')
    console.log(`서버 오픈 포트:${port}`)
})