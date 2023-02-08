const Posts = require('../models/posts.models')

const findAllPosts = async() => {
    const data = await Posts.findAll()
    return data
}

const findPostById = async(id) => {
    const data = await Posts.findOne({
        where: {
            id : id
        }
    })
    return data
}

const createPost = async(postInf) => {
    const newPost = {
        content: postInf.content,
        userName: postInf.userName,
        isPublished: postInf.isPublished
    }
    const data = await Posts.create(newPost)
    return data
}

const updatePost = async(id, postInf) => {
    const data = await Posts.update(postInf, {
        where: {
            id : id
        }
    })
    return data

}

const deletePost = async(id) => {
    const data = await Posts.destroy({
        where: {
            id : id
        }
    })
    return data
}

module.exports = {
    findAllPosts,
    findPostById,
    createPost,
    updatePost,
    deletePost
}