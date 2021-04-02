
const app = require('./app')

app.get('/',(req,res) => {
  res.json('tudo funcionando')
})

app.listen(3000, ()=>{
  console.log('Backend running...')
})