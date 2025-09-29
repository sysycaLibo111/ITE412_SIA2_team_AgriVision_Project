// server.js
const express = require('express');
const cors = require('cors');

const detectionRoutes = require('./src/api/detections');
const consultationRoutes = require('./src/api/consultations');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/detections', detectionRoutes);
app.use('/api/consultations', consultationRoutes);

const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(AgriExpert API running on :${PORT}));
app.listen(PORT, () => console.log(`AgriExpert API running on :${PORT}`));