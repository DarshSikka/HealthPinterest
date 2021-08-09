const express=require("express");
const Post=require("../models/Post");
const router=express.Router();
router.post("/new", (req, res)=>{
	const {title, author, content}=req.body;
	const post=new Post({title, author, content});
	post.save();
	res.send(post);
	console.log(post);
})
module.exports=router;