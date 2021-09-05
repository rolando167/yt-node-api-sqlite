const Post = require('../models/Post');


exports.listar = async(req, res) =>{
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

exports.search = async(req, res) => {
	try {
		const {id} = req.params;
	 

		const post = await Post.findAll({
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
	try {
		
	} catch (error) {
		throw new Error('noooo');
	}
}

exports.delete = async(req, res) => {
	try {
		
	} catch (error) {
		throw new Error('Noooo');
	}
}