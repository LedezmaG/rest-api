const { Router } = require('express');
const { Get, Post, Put, Patch, Delete } = require('../controllers/User');
const router = Router();

router.get('/', Get );
router.post('/', Post );
router.put('/:id', Put );
router.patch('/', Patch );
router.delete('/', Delete);

module.exports = router;