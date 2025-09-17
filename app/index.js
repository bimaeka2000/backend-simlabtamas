const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// ROUTER USER
app.get('/user', (req, res) => {
  res.send('ini route user')
})

app.put('/user/edit/id', (req, res) => {
  res.send('route edit user')
})

app.post('/user/add/user', (req, res) => {
  res.send('route add user')
})

app.delete('/user/delete', (req, res) => {
  res.send('route delete user')
})
// ROUTER USER END





// ROUTER LOGIN
app.get('/authentication', (req, res) => {
  res.send("route get authentication")
})
// ROUTER LOGIN END




// ROUTER PENELITIAN
app.get('/penelitian/all', (req, res) => {
  res.send('ini route user')
})

app.get('/penelitian/:id_penelitian', (req, res) => {
  res.send('ini route user')
})

app.put('/penelitian/edit/:id_penelitian', (req, res) => {
  res.send('route edit penelitian')
})

app.post('/penelitian/add', (req, res) => {
  res.send('route add penelitian')
})

app.delete('/penelitian/delete/id_penelitian', (req, res) => {
  res.send('route delete penelitian')
})
// ROUTER PENELITIAN END






// ROUTER PENGABDIAN
app.get('/pengabdian/all', (req, res) => {
  res.send('ini route pengabdian')
})

app.get('/pengabdian/:id_pengabdian', (req, res) => {
  res.send('ini route pengabdian')
})

app.put('/pengabdian/edit/:id_pengabdian', (req, res) => {
  res.send('route edit pengabdian')
})

app.post('/pengabdian/add', (req, res) => {
  res.send('route add pengabdian')
})

app.delete('/pengabdian/delete/:id_pengabdian', (req, res) => {
  res.send('route delete pengabdian')
})
// ROUTER PENGABDIAN END








app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
