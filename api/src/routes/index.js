const { Router } = require('express')

const router = Router()

const invertedText = (text) => {
  const originalText = text
  text = text.split('').reverse().join('')
  return {
    text,
    palindrome: (originalText === text)
  }
}

router.get('/', async (req, res, next) => {
  //CORS
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
  next();
  //

  const { text } = req.query
  res.send(invertedText(text))
})

module.exports = router
