require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/user');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/usersdb';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Mongo connected'))
    .catch(err => console.error('Mongo error', err));

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.post('/users', async (req, res) => {
    try {
        const u = new User(req.body);
        await u.save();
        res.status(201).json(u);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

app.get('/users', async (req, res) => {
    const users = await User.find().limit(100);
    res.json(users);
});

app.get('/users/:id', async (req, res) => {
    try {
        const u = await User.findById(req.params.id);
        if (!u) return res.status(404).json({ error: 'not found' });
        res.json(u);
    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Users service running on ${port}`));
