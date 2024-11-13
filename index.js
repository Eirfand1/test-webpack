import express from 'express'

const app = express()
const port = 3000

app.get('/',  (req, res)=>{
  res.json({msg: "Hello World"})
})

app.get('/api',(req, res)=>{
  res.json({
    success: true,
    data: [
      {
        nama: "Ego",
        kelas: "TI-2A"
      },
      {
        nama: "Yuki",
        kelas: "TI-9A"
      }
    ]
  })
})

app.listen(port,(err)=>{
  console.log(`app listen on http://localhost:${port}`)
})
