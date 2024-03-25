import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import telescopesRoutes from './routes/telescopesRoutes.js';
import binocularsRoutes from './routes/binocularsRoutes.js';
import accessoriesRoutes from './routes/accessoriesRoutes.js';
import authRoutes from './routes/authRoutes.js';

const app = express();

app.use(express.json());
dotenv.config();

connectDB();

app.use('/product/telescopes', telescopesRoutes);
app.use('/product/binoculars', binocularsRoutes);
app.use('/product/accessories', accessoriesRoutes);

app.use('/login', authRoutes)

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server working in ${port}`);
});