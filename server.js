const express = require('express')
const app = express()
const port = 3000

var cors = require("cors");
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.options('*', cors())
// app.use(cors)

app.get('/', (req, res)=>{
  res.header('Access-Control-Allow-Origin', req.headers.origin || "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
  res.json({data:"hello"})
})

app.post('/triangle', (req, res) => {
  if (req.body.num == '' ) {
    res.json({msg:'Angka Tidak Boleh kosong'})
  } else {
    let val = req.body.num
    let result = ''
    for (let i=1; i <= val.length; i++) {
      let row = val[i-1]
      for (let x=0; x < i; x++) {
          row+='0'
      }
      row+='<br>'
      result += row
    }

    res.header('Access-Control-Allow-Origin', req.headers.origin || "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
    res.json({data:result})
  }
})

app.post('/odd', (req, res) => {
  if (req.body.num == '' ) {
    res.json({msg:'Angka Tidak Boleh kosong'})
  } else {
    let val = req.body.num
    let odd = ''
    for (let i=1; i <= val; i++) {
        if (i%2!=0) {
            odd += i + ', '
        }
    }

    res.header('Access-Control-Allow-Origin', req.headers.origin || "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');
    res.json({data:odd})
  }
})

app.post('/prime', (req, res) => {
  if (req.body.num == '' ) {
    res.json({msg:'Angka Tidak Boleh kosong'})
  } else {
    let val = req.body.num
    let prime = ''
    for (let i=1; i < val; i++) {
        for(let x = 2, s = Math.sqrt(i); x < s; x++) {
          if(i % x !== 0) {
            prime += i + ', '
          };
        }
    }

    res.header('Access-Control-Allow-Origin', req.headers.origin || "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'content-Type,x-requested-with');    
    res.json({data:prime})
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})