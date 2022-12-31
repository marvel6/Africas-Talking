

const credentials = {
    apiKey: process.env.API_KEY,
    username: process.env.USER_NAME,
}





const AfricasTalking = require('africastalking')(credentials);


const sms = AfricasTalking.SMS;

function sendMessage({send,from,amount,shortcode}) {
    
    const msg = 'welcome to wireme please dial short 12345666'
    

    const options = {
        // Set the numbers you want to send to in international format
        to:send.toString(),
        // Set your message
        message:msg.toString(),
        // Set your shortCode or senderId
        //from: 'XXYYZZ'
    }

    // That’s it, hit send and we’ll take care of the rest
    sms.send(options)
        .then(options => console.log(options))
        .catch((err)=>console.log(err));
}






const sendMessages = async(req,res) => {

    const {send,from,amount,shortcode} = req.body

   try {
    if(!send){
        throw new Error('Please provide valid credentials')
    }

       sendMessage({send,from,amount,shortcode});

    res.json('Message sent')
    
   } catch (error) {
    console.log(error)
   }
}


module.exports = {
    sendMessages
}