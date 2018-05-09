const express = require('express'),
        app = express(),
        bodyParser = require('body-parser'),
        port = process.env.port || 3000,
        messages = require('./controllers/messages_controller')


app.use(bodyParser.json());
app.use(express.static('./public/build'))

app.post('/api/messages', messages.create);
app.get('/api/messages', messages.read);
app.put('/api/messages/:id', messages.update);
app.delete('/api/messages/:id', messages.delete);













app.listen(port, () => console.log(`listening on port ${port}`));