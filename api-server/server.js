
// Basic Express server
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('public'));

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    version: '1.0.0',
  });
});

app.get('/api/v1/docs', (req, res) => {
  res.json({
    title: 'AICPA Audit Data API',
    endpoints: [],
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default app;
