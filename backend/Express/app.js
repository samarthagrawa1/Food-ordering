const express = require("express");
const fs=require("fs");
const { Agent } = require("http");
const { SocketAddress } = require("net");
var encrypt = require('mongoose-encryption');
const bcrypt=require("bcrypt");
const saltRounds=10;
const GoogleStrategy = require('passport-google-oauth2').Strategy; 
const findOrCreate=require("mongoose-findorcreate")
const passport = require('passport'); 
const cookieSession = require('cookie-session'); 




const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
   await mongoose.connect('mongodb://127.0.0.1:27017/userDB');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
const app = express();
const bodyParser=require("body-parser")
const path = require("path");
const { resourceLimits } = require("worker_threads");
const port=5000;
const menuSchema = new mongoose.Schema({
    name: String,
    categ: String,
    rate: String,
    meid: String,
  });
  const Menu = mongoose.model('Menu', menuSchema);
  const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String,
    number: Number,
  });
  userSchema.plugin(findOrCreate);
  const secret ="Thisisourlittlesecret";
userSchema.plugin(encrypt, { secret: secret ,encryptedFields:["password"]});
  const User = mongoose.model('User', userSchema);
  const orderSchema = new mongoose.Schema({
    orderdata: Array,
    price: String,
    mail:String
  });
  const Order = mongoose.model('Order', orderSchema);
  
  const silence = new Menu({ name: 'Silence' });
console.log(silence.name); 
app.use('/static',express.static('static'))
app.use(express.urlencoded({extended:true}))
app.get("/menuitem",async(req,res)=>{
    await Menu.find({}).then((err,posts)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(posts);
            console.log("saved");
        }
    });
})
app.get("/cart/ordered",async(req,res)=>{
    await Order.find({}).then((err,posts)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json(posts);
            console.log("saved");
        }
    });
})
app.delete("/cart/ordered/:ni",(req,res)=>{
    Order.deleteOne({_id:req.params.ni}).then(function(err){
        if(err){
            res.json(err);
        }
        else{
            res.json(posts);
            console.log("Not");
        }
    });
})
app.get("/cart/:ni",(req,res)=>{
    Menu.findOne({meid:req.params.ni}).then(function(err){
        if(err){
            res.json(err);
            console.log(err);
        }
        else{
            res.json(posts);
            console.log("Not");
        }
    });
})
app.get("/admin/menu/update/:ni",(req,res)=>{
    Menu.findOne({meid:req.params.ni}).then(function(err){
        if(err){
            res.json(err);
            console.log(err);
        }
        else{
            res.json(posts);
            console.log("Not");
        }
    });
})
app.delete("/cart/order/:ni",(req,res)=>{
    Menu.deleteOne({meid:req.params.ni}).then(function(err){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(posts);
        }

    });
        

})

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));
app.post('/cart',async(req,res)=>{
    let data=req.body.order_data;
    console.log(data);
    let pr=req.body.price;
    let m=req.body.mail;
    try{
        const newitem=new Order({
            orderdata:data,
            price:String(pr),
            mail:m
        });
        await newitem.save().then(()=>{
            res.json({_id:newitem._id})
        })
    }catch(error){
        res.send("Server Error",error.message)
    }
})
app.patch("/menu/:ni",(req,res)=>{
    console.log(req.body);
    Menu.updateOne({meid:req.params.ni},{$set:req.body}).then(function(err){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(posts);
        }

    });
})
app.post("/menu/add",async(req,res)=>{
    console.log(req.body);
        const newit=new Menu({
            name:req.body.name,
            categ:req.body.categ,
            rate:req.body.rate,
            meid:req.body.meid
        });
        console.log(newit);
        await newit.save().then(()=>{
            res.json({_id:newit._id})
        })
})
app.post("/user/add",async(req,res)=>{
    console.log(req.body);
    bcrypt.hash(req.body.password,saltRounds,async function(err,hash){
        const newit=new User({
            email:req.body.email,
            password:hash,
            name:req.body.name,
            number:req.body.number
        });
        console.log(newit);
        await newit.save().then(()=>{
            res.json({_id:newit._id})
        })
    })
        
})


passport.use(new GoogleStrategy({ 
	clientID:"274044072209-tjt191ofpglvuqluc70i0vleiu6a538m.apps.googleusercontent.com", // Your Credentials here. 
	clientSecret:"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", // Your Credentials here. 
	callbackURL:"/auth/google/home", 
	passReqToCallback:true,
    scope:['profile','email']
}, 
function(request, accessToken, refreshToken, profile, done) { 
	User.findOrCreate({email:profile.emails[0].value,name:profile.givenName,password:profile.password},
        function(err,value)
        {
            return done(err,value)
        })
} 
));



app.use(cookieSession({ 
	name: 'google-auth-session', 
	keys: ['key1', 'key2'] 
})); 
app.use(passport.initialize()); 
app.use(passport.session()); 
	
passport.serializeUser((user , done) => { 
	done(null , user); 
}) 
passport.deserializeUser(function(user, done) { 
	done(null, user); 
}); 

app.get('/googlelogin', (req, res) => { 
	res.send("<button><a href='/auth'>Login With Google</a></button>") 
}); 
app.get("/auth/callback",passport.authenticate("google"));
app.post("/auth/callback",passport.authenticate("google"));

// Auth 
/*app.get('/auth' , passport.authenticate('google', { scope: 
	[ 'email', 'profile' ] 
}));*/ 

// Auth Callback 
app.get( '/auth/google/home', 
	passport.authenticate( 'google', { 
		 
		failureRedirect: '/auth/callback/failure'
}),
function(req,res){
    res.redirect("http://localhost:3000/home")
}); 
// Success 


// failure 
app.get('/auth/callback/failure' , (req , res) => { 
	res.send("Error"); 
}) 


app.post("/login",function(req,res){
    const username=req.body.email;
    const password=req.body.password;
    console.log(username);
    User.findOne({email:username}).then(function(foundUser)
    {
    if(foundUser)
    {
        bcrypt.compare(password,foundUser.password,function(err,result)
        {
            if(result===true)
            {
                res.json("good");
            console.log("food");
        }
        });
            

    }
})
})





app.listen(port,()=>{
    console.log(`The application started successfully on ${port}`)
})