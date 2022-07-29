const { Router } = require('express')

const router = Router()

// funcion que invierte el texto
const invertedText = (text) => {
  const originalText = text
  text = text.split('').reverse().join('')
  return {
    text,
    palindrome: (originalText === text)// aqui verificamos que efectimente es palindroma la plabra ingresada
  }
}

// verificamos que unicamente posea letras
const onlyLetters = (text) => {
  const letters = 'abcdefghijklmnñopqrstuvwxyz'

  text = text.toLowerCase()
  for (let i = 0; i < text.length; i++) {
    if (letters.indexOf(text.charAt(i), 0) === -1) {
      return false
    }
  }
  return true
}

router.get('/', async (req, res, next) => {
  // CORS
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization')
  next()
  //

  const { text } = req.query
  try {
    if (onlyLetters(text)) {
      res.send(invertedText(text))
    } else {
      res.status(400).send({
        text: 'no text'
      })
    }
  } catch (error) {

  }
})

module.exports = router
