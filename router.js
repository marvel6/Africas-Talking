const express = require('express')
const router = express.Router()


const {sendMessages} = require('./sending')


router.route('/').post(sendMessages)


module.exports = router