'use strict';

const express = require('express');
const router =  express.Router();
const controller = require('../controllers/user-controller');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.del);
router.post('/autenticate', controller.autenticate);

module.exports = router;
