// // src/api/consultations.js
// const express = require('express');
// const router = express.Router();

// let consultations = [];
// let nextId = 1;

// // GET /api/consultations
// router.get('/', (req, res) => res.json(consultations));

// // GET /api/consultations/:id
// router.get('/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const item = consultations.find(x => x.id === id);
//   if (!item) return res.status(404).json({message: 'Not found'});
//   res.json(item);
// });

// // POST /api/consultations
// router.post('/', (req, res) => {
//   // expected body: { farmerId, subject, initialMessage, images(optional) }
//   const { farmerId, subject, initialMessage, images } = req.body;
//   const newCon = {
//     id: nextId++,
//     farmerId,
//     subject,
//     messages: [{sender: 'farmer', text: initialMessage, time: new Date()}],
//     images: images || [],
//     status: 'open',
//     createdAt: new Date()
//   };
//   consultations.push(newCon);
//   res.status(201).json(newCon);
// });

// // PUT /api/consultations/:id  (e.g., add reply or update status)
// router.put('/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const idx = consultations.findIndex(x => x.id === id);
//   if (idx === -1) return res.status(404).json({message: 'Not found'});

//   // you can use this to add messages or change status
//   const { message, status } = req.body;
//   if (message) consultations[idx].messages.push({sender: 'expert', text: message, time: new Date()});
//   if (status) consultations[idx].status = status;
//   consultations[idx].updatedAt = new Date();
//   res.json(consultations[idx]);
// });

// // DELETE /api/consultations/:id
// router.delete('/:id', (req, res) => {
//   const id = parseInt(req.params.id);
//   const idx = consultations.findIndex(x => x.id === id);
//   if (idx === -1) return res.status(404).json({message: 'Not found'});
//   const removed = consultations.splice(idx,1)[0];
//   res.json(removed);
// });

// module.exports = router;


// src/api/consultations.js
const express = require('express');
const router = express.Router();

let consultations = [];
let nextId = 1;

// GET /api/consultations
router.get('/', (req, res) => res.json(consultations));

// GET /api/consultations/:id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = consultations.find(x => x.id === id);
  if (!item) return res.status(404).json({message: 'Not found'});
  res.json(item);
});

// POST /api/consultations
router.post('/', (req, res) => {
  // expected body: { farmerId, subject, initialMessage, images(optional) }
  const { farmerId, subject, initialMessage, images } = req.body;
  const newCon = {
    id: nextId++,
    farmerId,
    subject,
    messages: [{sender: 'farmer', text: initialMessage, time: new Date()}],
    images: images || [],
    status: 'open',
    createdAt: new Date()
  };
  consultations.push(newCon);
  res.status(201).json(newCon);
});

// PUT /api/consultations/:id  (e.g., add reply or update status)
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const idx = consultations.findIndex(x => x.id === id);
  if (idx === -1) return res.status(404).json({message: 'Not found'});

  // you can use this to add messages or change status
  const { message, status } = req.body;
  if (message) consultations[idx].messages.push({sender: 'expert', text: message, time: new Date()});
  if (status) consultations[idx].status = status;
  consultations[idx].updatedAt = new Date();
  res.json(consultations[idx]);
});

// DELETE /api/consultations/:id
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const idx = consultations.findIndex(x => x.id === id);
  if (idx === -1) return res.status(404).json({message: 'Not found'});
  const removed = consultations.splice(idx,1)[0];
  res.json(removed);
});

module.exports = router;