const router = require('express').Router();


router.route('/send').post((req,res)=>{



    const accountSid='ACb4e624ea6813f399f92701a369d04439';
    
    
    const authToken='c732ab5e4d6375bafd1d7925619578d0';
    console.log(accountSid)
    
    const client = require('twilio')(accountSid, authToken);
    
    const {to,body} = req.body
    
    client.messages.create({
        body:body,
        from:'+19524795030',
        to:to,
    })
    
    
    .then((message)=> console.log('the message has send with id:'+message))
    .catch((err)=>console.log(err));
    console.log(to)
    })
    module.exports = router;