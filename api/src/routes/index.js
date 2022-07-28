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

router.get('/iecho', async (req, res) => {
  const { text } = req.query
  res.send(invertedText(text))
})

module.exports = router
