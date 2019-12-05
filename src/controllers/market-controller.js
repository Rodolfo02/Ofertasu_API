const mongoose = require('mongoose');
const marketService = require('../services/market-service');

exports.get = async (req, res, next) => {
    try {
        var data = await marketService.get();
        res.status(200).send(data);
    }catch(err) {
        res.status(500).send({
            messege: 'Falha ao processar sua consulta'
        });
    }
};

exports.getById = async (req, res, next) => {
    try {
        var data = await marketService.getById(req.params.id);
        res.status(200).send(data);
    }catch(err) {
        res.status(500).send({
            messege: 'Falha ao processar sua requisição'
        });
    }
    
};

exports.post = async(req, res, next) => {
    try{
        await marketService.create(req.body);
        res.status(201).send({
            messege: 'Supermercado Cadastrado!'
        });
    }catch(err) {
        res.status(500).send({
            messege: 'Falha',
            data: err
        });
    }
    
};

exports.put = function(req, res, next) {
    marketService.update(req.params.id, req.body).then(x => {
        res.status(201).send({
            messege: 'Dados atualizado com sucesso'
        }).catch(e => {
            res.status(404).send({
                messege: 'Falha ao atualizar!',
                data: e
            });
        });
    })
};

exports.del = async(req, res, next) => {
    try{
        var data = await marketService.delete(req.params.id);
        res.status(200).send({
            messege: 'Excluido com sucesso!'
        });
    }catch(err) {
        res.status(500).send({
            messege: 'Erro ao excluir!'
        });
    }
    
};