const express = require('express');
const { getDb } = require('../utils/mongoDB');

module.exports = class postController {
    static find(req, res) {
        const post = getDb();
        post
            .collection('posts')
            .find()
            .toArray()
            .then((posts) => {
                res.render("home", { posts })
            })
            .catch((error) => {
                res.status(400).json({ error: error.message })
            });
    };

    static findOne(req, res) {
        const post = getDb();
        post
        .collection('posts')
        .findOne({id: req.body.id})
        .then((post) => {
            if (post){
                res.render('post', { post })
            }
            else{
                    res.status(400).render('error', { 
                        layout: 'error',
                        error: 'Not Found'
                    })
            }
        })
        .catch((error) => {
            res.status(400).render('error')
        });
    };
};