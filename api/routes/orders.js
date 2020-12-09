
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'HJandling GET req to /orders'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'HJandling POST req to /orders'
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'toy discovered special ID',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'deleted order'
    });
});


module.exports = router;

