const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = express.Router();

// routes.get('/', (req, res) => {
//     let p1 = req.query.name;

//     // return res.send('Hello world - ' + p1);
//     // return res.send(`Hello ${p1}`);
//     return res.json({message: `Olá ${p1}`});
// });

// routes.post('/devs', (req, res) => {
//     console.log(req.body);

//     return res.json({ ok: true  });
// });

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;