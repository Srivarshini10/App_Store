const App=require("../models/userModel")

exports.getApps=async(req,res)=>{
    try{
        const apps=await App.find()
        res.status(200).json(apps)
    }
    catch(err){
        res.status(500).json(
            {message:err.message}
        )

    }
}
