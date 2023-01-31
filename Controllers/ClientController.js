const CLIENT = require('../Models/Client');
const bcrypt  =require('bcryptjs');
const config = require("../config.json");
const jwt    =require('jsonwebtoken')
const nodemailer = require('nodemailer');




const add = async (req, res) => {
  const { NUM_CLIENT , RS_CLIENT, STATUT_CLIENT, TEL_CLIENT,FAX_CLIENT,ANCA_CLIENT,E_mail} = req.body;
  console.log(
    req.body.NUM_CLIENT
)
console.log(
  req.body.RS_CLIENT
)
console.log(
req.body.STATUT_CLIENT
)
console.log(
req.body.TEL_CLIENT
)
console.log(
  req.body.FAX_CLIENT
  )
  console.log(
    req.body.ANCA_CLIENT
    )
    console.log(
      req.body.E_mail
      )




  const verifUtilisateur = await CLIENT.findOne({ E_mail });
  if (verifUtilisateur) {
    res.status(403).send({ message: "Utilisateur existe deja !" });
  } else {
    const nouveauUtilisateur = new CLIENT();


    mdpEncrypted = bcrypt.hashSync(TEL_CLIENT,10);

    
    nouveauUtilisateur.NUM_CLIENT = NUM_CLIENT;
    nouveauUtilisateur.RS_CLIENT = RS_CLIENT;
    nouveauUtilisateur.STATUT_CLIENT = STATUT_CLIENT;
    nouveauUtilisateur.TEL_CLIENT = TEL_CLIENT;
    nouveauUtilisateur.FAX_CLIENT = FAX_CLIENT;
    nouveauUtilisateur.ANCA_CLIENT = ANCA_CLIENT;
    nouveauUtilisateur.E_mail = E_mail;
    nouveauUtilisateur.password = mdpEncrypted; 
    //nouveauUtilisateur.isVerified = false;
    
  
    nouveauUtilisateur.save();

    console.log(
      mdpEncrypted
    )
    // token creation
    const token = jwt.sign({ _id: nouveauUtilisateur._id }, config.token_secret, {
      expiresIn: "120000", // in Milliseconds (3600000 = 1 hour)
    });

    sendConfirmationEmail(E_mail);
    res.status(201).send({ message: "success", uses: nouveauUtilisateur, "Token": jwt.verify(token, config.token_secret) });
  }
};

async function sendConfirmationEmail(Email) {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'louay.kasdallah12@gmail.com',
      pass: 'tpteyexpxgzjeqac'
    }
  });

  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
      console.log("Server not ready");
    } else {
      console.log("Server is ready to take our messages");
    }
  });





  const mailOptions = {
    from: 'ASCII-QUALITATEM<louay.kasdallah12@gmail.com>',
    to: Email,
    subject: 'ASCII-QUALITATEM Account ',
    html:`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    
    <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="telephone=no" name="format-detection">
        <title></title>
        <!--[if (mso 16)]>
        <style type="text/css">
        a {text-decoration: none;}
        </style>
        <![endif]-->
        <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
        <!--[if gte mso 9]>
    <xml>
        <o:OfficeDocumentSettings>
        <o:AllowPNG></o:AllowPNG>
        <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
    </xml>
    <![endif]-->
        <!--[if !mso]><!-- -->
        <link href="https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
        <!--<![endif]-->
    </head>
    
    <body data-new-gr-c-s-loaded="14.1027.0">
        <div class="es-wrapper-color">
            <!--[if gte mso 9]>
          <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" src="https://ymjipk.stripocdn.email/content/guids/CABINET_bf3f28777a864b4fca3f15706a2554aa/images/group_10.png" color="#12022f" origin="0.5, 0" position="0.5, 0"></v:fill>
          </v:background>
        <![endif]-->
            <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" background="https://ymjipk.stripocdn.email/content/guids/CABINET_bf3f28777a864b4fca3f15706a2554aa/images/group_10.png" style="background-position: left top;">
                <tbody>
                    <tr>
                        <td class="esd-email-paddings" valign="top">
                            <table cellpadding="0" cellspacing="0" class="es-content esd-footer-popover" align="center">
                                <tbody>
                                    <tr>
                                        <td class="esd-stripe es-m-p15r es-m-p15l" align="center">
                                            <table class="es-content-body" align="center" cellpadding="0" cellspacing="0" width="640" style="background-color: transparent;">
                                                <tbody>
                                                    <tr>
                                                        <td class="esd-structure es-p30t es-p40r es-p40l" align="left">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" class="esd-container-frame" align="center" valign="top">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr class="es-mobile-hidden">
                                                                                        <td align="center" class="esd-block-spacer" height="15"></td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p30t es-p40b es-p40r es-p40l es-m-p20" align="left" bgcolor="#ffffff" style="background-color: #ffffff; border-radius: 20px 20px 0px 0px;">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" align="left" class="esd-container-frame">
                                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-image" style="font-size: 0px;" height="32"><a target="_blank" href><img class="adapt-img" src="https://ymjipk.stripocdn.email/content/guids/CABINET_c169c92c5d96d71c95c754e2141868e98731fb8080acf2c407f133c859c13372/images/logo1.png" alt style="display: block;" width="230"></a></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-image" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://ymjipk.stripocdn.email/content/guids/CABINET_c169c92c5d96d71c95c754e2141868e98731fb8080acf2c407f133c859c13372/images/asciii_v0A.png" alt style="display: block;" height="150"></a></td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td align="left" class="esd-block-text es-p30t">
                                                                                            <p><br><br><strong>Hi !</strong><br>Your account as CLient was created successfully.Your email for the A-Q account associated with your Email: `+Email+`  .<br>And Your password is&nbsp; your phone Number<br><br><strong>Regards,&nbsp;</strong><b><i>ASCII - QUALITATEM</i></b></p>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="esd-structure es-p40 es-m-p20" align="left" bgcolor="#f9f9f9" style="background-color: #f9f9f9; border-radius: 0px 0px 20px 20px;">
                                                            <table cellpadding="0" cellspacing="0" width="100%">
                                                                <tbody>
                                                                    <tr>
                                                                        <td width="560" align="left" class="esd-container-frame">
                                                                            <table cellpadding="0" cellspacing="0" width="100%" bgcolor="#f9f9f9" style="background-size: initial; background-attachment: initial; background-origin: initial; background-clip: initial; background-color: #f9f9f9; border-radius: 20px; border-collapse: separate;">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td class="esd-block-html">
                                                                                            <table width="100%">
                                                                                                <tbody>
                                                                                                    <tr>
                                                                                                        <td width="64" valign="top">
                                                                                                            <table>
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                        <td class="esd-block-image" style="font-size: 0px;"><a target="_blank" href><img src="https://ymjipk.stripocdn.email/content/guids/CABINET_c169c92c5d96d71c95c754e2141868e98731fb8080acf2c407f133c859c13372/images/asciii_v0A.png" class="p_image" alt="Avatar" width="64" style="display: block; border-radius: 18px; font-size: 12px;" title="Avatar"></a></td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                        <td width="20"></td>
                                                                                                        <td valign="top">
                                                                                                            <table width="100%">
                                                                                                                <tbody>
                                                                                                                    <tr>
                                                                                                                        <td class="esd-block-text" esd-links-underline="none" esd-links-color="#000000">
                                                                                                                            <h3 class="p_name"><b><i>ASCII - QUALITATEM Team</i></b></h3>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td class="esd-block-text es-p5t" align="left">
                                                                                                                            <h5 style="color: #666666;"><br></h5>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                    <tr>
                                                                                                                        <td align="left" class="esd-block-social es-p10t" style="font-size:0">
                                                                                                                            <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social">
                                                                                                                                <tbody>
                                                                                                                                    <tr>
                                                                                                                                        <td align="center" valign="top" class="es-p15r"><a target="_blank" href><img title="Facebook" src="https://ymjipk.stripocdn.email/content/assets/img/social-icons/circle-colored/facebook-circle-colored.png" alt="Fb" width="24" height="24" style="font-size: 12px;"></a></td>
                                                                                                                                        <td align="center" valign="top" class="es-p15r"><a target="_blank" href><img title="Twitter" src="https://ymjipk.stripocdn.email/content/assets/img/social-icons/circle-colored/twitter-circle-colored.png" alt="Tw" width="24" height="24" style="font-size: 12px;"></a></td>
                                                                                                                                        <td align="center" valign="top"><a target="_blank" href><img title="Linkedin" src="https://ymjipk.stripocdn.email/content/assets/img/social-icons/circle-colored/linkedin-circle-colored.png" alt="In" width="24" height="24" style="font-size: 12px;"></a></td>
                                                                                                                                    </tr>
                                                                                                                                </tbody>
                                                                                                                            </table>
                                                                                                                        </td>
                                                                                                                    </tr>
                                                                                                                </tbody>
                                                                                                            </table>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </body>
    
    </html>`
    //html: '<h3>Your BLOCK++  Account Has been created. \n Email : ' +Email+ '\n Password : Your Phone Number.</h3>'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
















const recupererclient = async(req,res ,data) =>{
    CLIENT.find((err, data)=>{
        res.json(data);
        
    });
}
const recuperercliente = async(req,res ,data) =>{
  CLIENT.find((err, data)=>{
      res.json(data);
      
  }).select('RS_CLIENT');
}


const login = (req, res) => {


    console.log(
      req.body.email
    )
  
    console.log(
      req.body.password
    )
  
  
  
  
    var email = req.body.email
    var password = req.body.password
    CLIENT.findOne({ E_mail: email }, function (err, user) {
  
      if (err) {
        console.log(err);
      }
  
  
      if (user) {
        bcrypt.compare(password, user.password, function (err, result) {
          if (err) {
            res.json({
              error: err
            })
          }
  
          if (result) {
          
           
            
            return res.json({
  
                NUM_CLIENT: user.NUM_CLIENT,
           
              E_mail: user.E_mail,
          
              password: user.password,
         
          
  
  
  
  
            })
            
            
          } else {
            res.status(403).send({ message: "password does not matched !" });
  
          }
        })
  
  
      } else {
        res.status(403).send({ message: "Wrong email adress!" });
  
  
  
  
  
      }
    })

  
  }

  const deleteSCLIById = async (req, res) => {
    const id = req.params.id;
    CLIENT.findByIdAndRemove(id)
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

    const updateCLI = async (req,res, next) => {
      const {id} = req.params
       try{
      const StuUpdated = await CLIENT.findByIdAndUpdate(id,{$set:{...req.body}})
      console.log(StuUpdated)
      console.log(StuUpdated)
      return res.status(200).send({
          message: "CLIENT was updated successfully!"
        })
      }catch(error){
          return res.status(500).send({err:error})
      }
      
      }

      
   const  searchCLI = async(req,res) => {
    const id = req.params.id;
    CLIENT.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "CLIENT introuvable pour id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Erreur recuperation CLIENT avec id=" + id });
      });
  }


module.exports ={
    recupererclient,login,recuperercliente,deleteSCLIById,add,updateCLI,searchCLI
 }