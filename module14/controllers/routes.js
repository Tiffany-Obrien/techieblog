const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);

    router.get('/', (req, res) => {
        Post.findAll({
          attributes: [
            'id',
            'title',
            "post_text",
            'created_at'      
          ],
         


module.exports = router;