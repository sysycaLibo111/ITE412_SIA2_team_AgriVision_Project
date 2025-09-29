// src/api/detections.js
const express = require('express');
const router = express.Router();

let detections = [];
let nextId = 1;

// GET /api/detections
router.get('/', (req, res) => res.json(detections));

// GET /api/detections/:id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const d = detections.find(x => x.id === id);
  if (!d) return res.status(404).json({message: 'Not found'});
  res.json(d);
});

// POST /api/detections
router.post('/', (req, res) => {
  // expected body: { imageName, farmerId, predictedLabel, confidence, notes }
  const { imageName, farmerId, predictedLabel, confidence, notes } = req.body;
  const newDet = {
    id: nextId++,
    imageName: imageName || null,
    farmerId: farmerId || null,
    predictedLabel: predictedLabel || null,
    confidence: confidence || null,
    notes: notes || null,
    createdAt: new Date()
  };
  detections.push(newDet);
  res.status(201).json(newDet);
});

// PUT /api/detections/:id
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const idx = detections.findIndex(x => x.id === id);
  if (idx === -1) return res.status(404).json({message: 'Not found'});
  detections[idx] = { ...detections[idx], ...req.body, updatedAt: new Date() };
  res.json(detections[idx]);
});

// DELETE /api/detections/:id
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const idx = detections.findIndex(x => x.id === id);
  if (idx === -1) return res.status(404).json({message: 'Not found'});
  const removed = detections.splice(idx, 1)[0];
  res.json(removed);
});

module.exports = router;
