const express = require('express');
const router = express.Router();

// GET
router.get('/', (req, res) => {
    res.status(200).json({
        message: 'GET - SUCCESS',
        metadata: {
            hostname: req.hostname,
            port: req.method,
            id: req.params.id
        }
    });

});
// GET by ID
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'GET by ID - SUCCESS',
        metadata: {
            hostname: req.hostname,
            port: req.method,
            id: id,
        }
    });
});

// PUT
router.put('/', (req, res) => {
    res.status(200).json({
        message: 'PUT - SUCCESS',
        metadata: {
            hostname: req.hostname,
            port: req.method,
        }
    });
});
// PUT by ID
router.put('/:id', (req, res) => {
    const id = req.params.id;
    res.status(200).json({
        message: 'PUT by ID - SUCCESS',
        metadata: {
            hostname: req.hostname,
            port: req.method,
            id: id,
        }
    });
});
// POST
router.post('/', (req, res) => {
    res.status(200).json({
        message: 'POST - SUCCESS',
        metadata: {
            hostname: req.hostname,
            port: req.method,
        }
    });
    //POST by ID
    router.post('/:id', (req, res) => {
        res.status(200).json({
            message: 'POST - SUCCESS',
            metadata: {
                hostname: req.hostname,
                port: req.method,
                id: req.params.id
            }
        });
    });
    //PATCH
    router.patch('/', (req, res) => {
        res.status(200).json({
            message: 'PATCH - SUCCESS',
            metadata: {
                hostname: req.hostname,
                port: req.method,
            }
        });
    });
    //PATCH by ID
    router.patch('/:id', (req, res) => {
        const id = req.params.id;
        res.status(200).json({
            message: 'PATCH by ID - SUCCESS',
            metadata: {
                hostname: req.hostname,
                port: req.method,
                id: id,
            }
        });
    });
    //DELETE
    router.delete('/', (req, res) => {
        res.status(200).json({
            message: 'DELETE - SUCCESS',
            metadata: {
                hostname: req.hostname,
                port: req.method,
            }
        });
    });

    // DELETE by ID
    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        res.status(200).json({
            message: 'DELETE by ID - SUCCESS',
            metadata: {
                hostname: req.hostname,
                port: req.method,
                id: id,
            }
        });
    });

});

module.exports = router;
