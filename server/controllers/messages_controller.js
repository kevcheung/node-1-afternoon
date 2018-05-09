let messages = [];
let id = 0;

module.exports = {
    create(req, res) {
        const {text, time} = req.body;
        messages.push({ id, text, time });
        id++;
        res.status(200).send(messages);
    },
    read(req, res) {
        res.status(200).send(messages);
    },
    update(req, res) {
        messages.forEach((message) => message.id == req.params.id ? Object.assign(message, req.body) : null)
        return res.status(200).json(messages);
    },
    delete(req, res) {
        messageIndex = messages.findIndex( message => message.id == req.params.id);
        messages.splice(messageIndex, 1);
        res.status(200).send( messages );
    }
};
