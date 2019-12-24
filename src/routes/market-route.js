'use strict';

const express = require('express');
const router =  express.Router();
const controller = require('../controllers/market-controller');

//const authService = require('../services/auth-service');

const multer = require('multer');
const multerConfig = require('../multer');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.del);

module.exports = router;