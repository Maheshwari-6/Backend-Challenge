const feed = require('../model/Feed')

const getHomePage = (req,res) => {
    feed.find()
    .then(result => {res.render('index.ejs', {users : result})})
    .catch(err => {console.log(err)});
    
}

const createPost = (req,res) => {
    let feed1 = new feed(req.body)
    feed1.save()
    .then(() => {res.redirect('/feed')})
    .catch(err => {console.log(err)})
}

const showArticle = (req,res) => {
    feed.findById(req.params.id)
    .then(result => {
        res.render('show.ejs', {user: result,})
    })
    .catch(err => console.log(err))
}

const deletePost = (req,res) => {
    feed.findByIdAndDelete(req.params.id)
    .then(() => {res.redirect('/feed')})
    .catch(err => {console.log(err)});
}

const editPost = (req, res) => {
    feed.findById(req.params.id)
    .then(result => {
        res.render('edit.ejs' , {
            users : result,
        })
    })
    .catch(err => {console.log(err)});
}

const updatePost = (req, res) => {
    feed.findByIdAndUpdate(req.params.id, req.body)
    .then(result => res.redirect(`/feed/${result._id}`))
    .catch(err => {console.log(err)});
}
module.exports ={
    getHomePage,
    createPost,
    showArticle,
    deletePost,
    editPost,
    updatePost
}