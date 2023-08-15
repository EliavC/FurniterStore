const mongoose=require("mongoose")

//mongoose.connect("mongodb://0.0.0.0:27017/OurShop")
mongoose.connect("mongodb+srv://Shhhh")
    console.log('mongoose connected');
    
})
.catch(()=>{
    console.log('failed');
})

const object = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    color:{
        type:String,
        required:true
    },
    matter:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    pic:{
        type:String,
        required:true
    },
    category:{
        type:String,
        //enum:['chair','bed','couch','mirror','rug','table'],
        required:true
    }
})

const cart={
    objs:{
        type:[object],
        default:[]
    },
    totalPrice:{
        type:Number,
        default:0
    },
    totalSize:{
        type:Number,
        default:0
    }
}
 
const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    admin:{
        type:Boolean,
        default:false
    },
    cart:{
        type:cart,
        default:{}
    }
})

const history=new mongoose.Schema({
    purHis:{
        type:[object],
        default:[]
    },
    date:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})


const objectCollection = new mongoose.model("objects",object)
const collection=new mongoose.model("users",LogInSchema)
const purchaseCollection = new mongoose.model("historys",history)
module.exports = {
    collection,objectCollection,purchaseCollection
}

