'use strict';

const productService = require('../services/product-service');
const authService = require('../services/auth-service');

exports.get = async (req, res, next) => {
    try {
        var data = await productService.get();
        res.status(200).send(data);
    }catch(err) {
        res.status(500).send({
            messege: 'Falha ao processar sua consulta'
        });
    }
};

exports.getById = async (req, res, next) => {
    try {
        var data = await productService.getById(req.params.id);
        res.status(200).send(data);
    }catch(err) {
        res.status(500).send({
            messege: 'Falha ao processar sua requisição',
            data: err
        });
    }
    
};

exports.post = async(req, res, next) => { 
    try {

        //const token = req.body.token || req.query.token || req.headers['x-access-token'];

        //const data = await authService.decodeToke(token);
        
        await productService.create({
            //user: data.id,
            market: req.body.market,
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
            market_id: req.body.market_id
        });
        res.status(201).send({ messege: 'Produto cadastrado com sucesso' });
    } catch (error) {
        res.status(400).send({ 
            messege: 'Falha ao cadastrar o produto!',
            data: error
        });
    };
};

exports.put = async(req, res, next) => {
    
    try {
        await productService.update(req.params.id, {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
            market_id: req.body.market_id
        })
        res.status(201).send({
            messege: 'Produto atualizado com sucesso'
        })
    } catch (error) {
        res.status(404).send({
            messege: 'Falha ao atualizar o produto',
            data: error
        });
    };
};

exports.delete = async(req, res, next) => {
    try{
        await productService.delete(req.params.id);
        res.status(200).send({
            messege: 'Produto excluido com sucesso!'
        });
    }catch(err) {
        res.status(500).send({
            messege: 'Erro ao excluir!',
            data: err
        });
    }
    
};