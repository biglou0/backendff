const AFFECTATION   = require('../Models/affectation');
const CLIENT = require('../Models/Client');
const Auditeur   = require('../Models/auditeur');
const TQT = require('../Models/TQT')




const recupereaff = async(req,res) =>{
 
    let data = await AFFECTATION.find(
        { 
            NUM_CLIENT:req.params.key,
         }
        ).select('INTITULE_QT')
        
    res.send(data);
    
   }

   const recupereaffaud = async(req,res) =>{
 
    let data = await AFFECTATION.find(
        { 
            COD_AUDITEUR:req.params.key,
         }
        ).select('INTITULE_QT')
        
    res.send(data);
    
   }


   const histo = async(req,res) =>{
 
    let data = await AFFECTATION.find().select('INTITULE_QT RS_CLIENT NOM_AUDITEUR DATE_AFF')
        
    res.send(data);
    
   }

   const deletehisto = async (req, res) => {
    const id = req.params.id;
    AFFECTATION.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Impossible de supprimer Client avec id=${id}. Client est possiblement introuvable!`
        });
      } else {
        res.send({
          message: "CLient supprimée avec succès!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Impossible de supprimer Client avec id=" + id
      });
    });
    }


const affecte= async (req, res) => {
    console.log(
        req.body.que
)


console.log(
    req.body.DATE_AFF
)
console.log(
    req.body.num
)
console.log(
    req.body.aud
)

console.log(
    req.body.iti
)





  
const { DATE_AFF } = req.body;
    
    
  

    const pharm = await CLIENT.findOne({RS_CLIENT : req.body.num})
    const s1 = await TQT.findOne({ INTITULE_QT : req.body.que})
    const s2 = await Auditeur.findOne({NOM_AUDITEUR : req.body.aud})
    //const s3 = await TQT.findOne({NOM_AUDITEUR : req.body.iti}).select('INTITULE_QT')
    

console.log(s2)
    let nouvellenews = new AFFECTATION({});

    nouvellenews.NUM_QT = s1.NUM_QT;
    nouvellenews.DATE_AFF = DATE_AFF;
    nouvellenews.NUM_CLIENT = pharm.NUM_CLIENT;
    nouvellenews.COD_AUDITEUR = s2.COD_AUDITEUR;
    nouvellenews.INTITULE_QT = s1.INTITULE_QT;
    nouvellenews.NOM_AUDITEUR = s2.NOM_AUDITEUR;
    nouvellenews.RS_CLIENT = pharm.RS_CLIENT;
  
  
    
    nouvellenews.save();

    res.status(201).send({ message: "success"});
}
module.exports = {
    affecte,recupereaff,recupereaffaud,histo,deletehisto

}