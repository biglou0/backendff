const TQP = require('../Models/TQP');

const recupererTQp = async(req,res) =>{
    let data = await TQP.find(
     {
         "$or":[
             {NUM_QP:{$regex:req.params.key}}
         ]
     }
    ).select('INTITULE_QP DATE_QP')
    res.send(data);
    
   }

module.exports ={
    recupererTQp
 }