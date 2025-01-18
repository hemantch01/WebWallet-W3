//adding pnemonics
import express from 'express';
import walletRouter from './routes/wallet';
const app =  express();
const port = 3000;
app.use('/api/v1',walletRouter);


app.listen(port,()=>{console.log(`this app is listening on port ${port}`)});