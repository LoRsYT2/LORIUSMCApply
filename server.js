require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Import Application model
const ApplicationModel = require('./models/application');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname)));

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGO_URI;
if (!MONGODB_URI) {
  console.error('No MongoDB URI provided in environment variables!');
  process.exit(1);
}

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// -------------------- Routes --------------------

// Submit application (يقبل أي حقل من الفورم)
app.post('/api/submit', async (req, res) => {
  try {
    const payload = req.body;

    if (!payload || Object.keys(payload).length === 0) {
      return res.status(400).json({ ok: false, error: 'No data provided' });
    }

    const doc = new ApplicationModel({ data: payload });
    await doc.save();

    res.json({ ok: true, entry: doc });
  } catch (err) {
    console.error('Error saving application', err);
    res.status(500).json({ ok: false, error: 'Internal server error' });
  }
});

// List all applications
app.get('/api/list', async (req, res) => {
  try {
    const applications = await ApplicationModel.find().sort({ createdAt: -1 }).lean();
    res.json({ ok: true, count: applications.length, applications });
  } catch (err) {
    console.error('Error fetching applications', err);
    res.status(500).json({ ok: false, error: 'Could not read applications' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
