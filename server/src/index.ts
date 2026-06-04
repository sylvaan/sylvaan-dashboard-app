import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env['PORT'] || 3000;

app.use(cors());
app.use(express.json());

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'Sylvaan Backend API is running smoothly',
    timestamp: new Date().toISOString()
  });
});

// Live Standings Endpoint (Proxy to Football-Data.org)
app.get('/api/standings', async (req, res) => {
  const API_KEY = process.env['FOOTBALL_API_KEY'];

  if (!API_KEY || API_KEY === 'your_api_key_here') {
    res.status(500).json({
      error: 'API Key Configuration Error',
      message: 'FOOTBALL_API_KEY is not configured on the server .env file.'
    });
    return;
  }

  const url = 'https://api.football-data.org/v4/competitions/PL/standings';

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Auth-Token': API_KEY
      }
    });

    if (!response.ok) {
      res.status(response.status).json({
        error: 'External API Error',
        message: `Failed to fetch data from Football-Data.org. Status: ${response.status}`
      });
      return;
    }

    const data = await response.json();
    
    // Kirim data langsung ke client (browser/Angular)
    res.json(data);
  } catch (error: any) {
    res.status(500).json({
      error: 'Internal Server Error',
      message: error.message || 'An unexpected error occurred while fetching standings.'
    });
  }
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://localhost:${PORT}`);
});
