const mongoose=require("mongoose")


const UserSchema=new mongoose.Schema({
    name:String,
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    address:{type:mongoose.Schema.Types.ObjectId,ref:"Address"}
})

module.exports=mongoose.model("User",UserSchema);

console.log(module.exports)