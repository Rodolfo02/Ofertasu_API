const mongoose = require('mongoose');
const md5 = require('md5');
const userService = require('../services/user-service');

const authService = require('../services/auth-service');

exports.autenticate = async(req, res, next) => {
    try{
        const user = await userService.autenticate({
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });

        if (!user) {
            res.status(404).send({
                messege: 'Usuário ou senha invalidos!'
            });
            return;
        }

        const token = await authService.generateToken({
            id: user._id,
            email: user.email,
            FirstName: user.FirstName,
            LastName: user.LastName
        });

        res.status(201).send({
            token: token,
            data: {
                FirstName: user.FirstName,
                LastName: user.LastName,
                Email: user.email
            }
        });
    }catch(err) {
        res.status(500).send({
            messege: 'Falha ao autenticar usuário!',
            data: err
        });
    }
    
};

exports.get = async (req, res, next) => {
    try {
        var data = await userService.get();
        res.status(200).send(data);
    }catch(err) {
        res.status(500).send({
            messege: 'Falha ao processar sua consulta'
        });
    }
};

exports.getById = async (req, res, next) => {
    try {
        var data = await userService.getById(req.params.id);
        res.status(200).send(data);
    }catch(err) {
        res.status(500).send({
            messege: 'Falha ao processar sua requisição'
        });
    }
    
};

exports.post = async(req, res, next) => {
    try{
        await userService.create({
            FirstName: req.body.FirstName,
            LastName: req.body.LastName,
            email: req.body.email,
            password: md5(req.body.password + global.SALT_KEY)
        });
        res.status(201).send({
            messege: 'Usuário Cadastrado!'
        });
    }catch(err) {
        res.status(500).send({
            messege: 'Falha ao criar usuário!',
            data: err
        });
    }
    
};

exports.put = function(req, res, next) {
    userService.update(req.params.id, req.body).then(x => {
        res.status(201).send({
            messege: 'Usuário atualizado com sucesso'
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
        var data = await userService.delete(req.params.id);
        res.status(200).send({
            messege: 'Produto excluido com sucesso!'
        });
    }catch(err) {
        res.status(500).send({
            messege: 'Erro ao excluir!'
        });
    }
    
};