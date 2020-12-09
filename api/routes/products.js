
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'HJandling GET req to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'HJandling POST req to /products'
    });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'toy discovered special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'you passed an ID'
        });
    }
});

module.exports = router;

