const mongoose=require("mongoose");
const schema=new mongoose.Schema({
   title:{
   	type: String,
   	required: true
   },
   content: {
   	type: String,
   	required: true
   },
   img: {
   	type: String,
   	required: false,
   	default: ""
   },
   timestamp:{
      type: Date,
      default: new Date()
   },
   author: {
   	type: Object,
   	required: true
   }
})
const Post = mongoose.model("Post", schema, "posts");
module.exports=Post;