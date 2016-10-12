var express = require('express');
//using just the Router constructor in express

var router = express.Router();


//requiring the film controller
var gameController = require('../controller/gameController');





//sessions routes
router.route('/')
        .get(gameController.index);
router.route('/end')
        .get(gameController.end);
router.route('/deal')
            .get(gameController.deal);
router.route('/game')
            .post(gameController.game);






module.exports = router;


