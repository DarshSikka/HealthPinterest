const express=require("express");
const Post=require("../models/Post");
const router=express.Router();
router.post("/new", (req, res)=>{
	const {title, author, content, img}=req.body;
	const post=new Post({title, author, content, img});
	post.save();
	res.send(post._id?post:{error: true});
	console.log(post);
})
router.get("/all", async (req, res)=>{
   const posts=await Post.find({}).sort([["timestamp", -1]]);
   res.send(posts);
})
router.get("/top", async (req, res)=>{
	const posts=await Post.find({}).sort([["likes", -1]])
})
router.get("/id/:id", async (req, res)=>{
	const post=await Post.findOne({_id: req.params.id});
	if(!post._id){
		return res.send({error: true})
	}
	else{	
	post.likes+=1;
	post.save();
		return res.send(post);
	}
})
module.exports=router;