const express = require('express')
const route = express.Router()
const userController = require('../controller/users')

route.get('/feed', userController.getHomePage)

route.post('/feed/create-post', userController.createPost)

route.get('/feed/:id', userController.showArticle)

route.post('/feed/delete-user/:id', userController.deletePost)

route.get('/feed/edit/:id', userController.editPost)

route.post('/feed/update/:id', userController.updatePost)

module.exports = route