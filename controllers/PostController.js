const { Op } = require("sequelize");
const Post = require('../models/Post');


exports.show = async(req, res) =>{
	try {
		const posts = await Post.findAll();

		res.json(posts);
	} catch (error) {
		throw new Error('nooooooooo 😞');
	}
}

exports.create = async(req, res) => {
	try {
			const {title, content} = req.body;
			// al hacer test en POSTMAN, NO OLVIDAR el content-type :application/json
		   await Post.create({
			   title: title,
			   content: content
		   })
		   .then(post => {
				console.log('Auto-generated ID: ', post.id);
				res.status(201).json(post)
			})
		   .catch(error => res.status(400).json({error:error, msg:'Ocurrio algo 😞'}));
	} catch (error) {
		throw new Error('nooooooooo 😞');
	}
}

// http://localhost:4000/api/v1/post/1
exports.search = async(req, res) => {
	try {
		const {id} = req.params;

		const post = await Post.findOne({
			where:{
				id: id
			}
		});

		res.json(post);

	} catch (error) {
		throw new Error('nooo');
	}
}


exports.update = async(req, res) => {
	const {id} = req.params;
	const {title} = req.body;

	try {
		const post = await Post.update({title: title},{
			where:{
				id: id
			}
		});

		console.log('Post Actualizado ✔️');
		res.json(post);

	} catch (error) {
		throw new Error('noooo');
	}
}

exports.delete = async(req, res) => {
	const {id} = req.params;
	try {
		const post = await Post.destroy({
			where:{
				id:id
			}
		});
		res.json(post);
	} catch (error) {
		throw new Error('Noooo');
	}
}


//otra forma de eliminar
exports.deletePost = async (req, res, next) => {
    const id = req.params['id'];
    if (!id) res.status(404).json({ message: `Post not found` });
    Post.findOne({ where: { id } })
        .then(result => {
            if (result)
                return result.destroy()
            return res.status(404).json({ message: `Post not found` });
        })
        .then(() => res.status(200).json({ message: `Post with id ${id} is deleted successfully` }))
        .catch(error => res.status(500).json(error));
};