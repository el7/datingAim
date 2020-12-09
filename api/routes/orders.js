
const express = require('express');
const router = express.Router();

// handling incoming get requests
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'HJandling GET req to /orders'
    });
});

// handling incoming post requests
router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };   
    res.status(201).json({
        message: 'Order was created',
        order: order
    });
});

router.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'order details: ',
        orderId: req.params.orderId
    });
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'deleted order',
        orderId: req.params.orderId
    });
});

module.exports = router;

