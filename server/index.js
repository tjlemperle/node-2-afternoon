const express = require('express') 
const ctrl = require('./controllers/messages_controller')

const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

app.get('/api/messages', ctrl.read)
app.post('/api/messages', ctrl.create)
app.put('/api/messages/:id', ctrl.update)
app.delete('/api/messages/:id', ctrl.delete)

const port = 3001;
app.listen(port, () => console.log(`Server running on ${port}`))