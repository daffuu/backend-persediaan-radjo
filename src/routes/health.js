const express = require('express');
const sequelize = require('../config/database');

const router = express.Router();

// GET /api/health : cek server hidup dan koneksi database
router.get('/', async (req, res) => {
  let database = 'terhubung';
  try {
    await sequelize.authenticate();
  } catch (err) {
    database = 'tidak terhubung';
  }
  res.json({
    success: true,
    message: 'API Persediaan Radjo berjalan',
    database,
    waktu: new Date().toISOString(),
  });
});

module.exports = router;
