const router = require('express').Router()
const Sandbox = require('sandbox');

module.exports = router

router.post('/test', (req, res, next) => {
  const s = new Sandbox();
  console.log(req.body)
  s.run(req.body.code, function(output){
    console.log('OUTPUT', output)
    res.send(output)
  })
})
