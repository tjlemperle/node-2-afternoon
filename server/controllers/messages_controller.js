let messages = []
let id =0;

module.exports = {
    create: (req, res) => {
        let {text, time} = req.body
        messages.push({
            id, 
            text, 
            time
        })
        id++
        res.status(200).send(messages)
    },
    read: (req, res) => {
        res.status(200).send(messages)
    },

    //kinda confused on update. work on this
    update: (req, res) => {
    const { text } = req.body;
    const updateID = req.params.id;
    const messageIndex = messages.findIndex(message => message.id == updateID);
    let message = messages[messageIndex];

    messages[messageIndex] = {
      id: message.id,
      text: text || message.text,
      time: message.time
    };

    res.status(200).send(messages);
    },
    delete: (req, res) => {
        let {id} = req.body
        index = messages.findIndex(element => id === element.id)
        messages.splice(index, 1)
        res.status(200).send(messages)
    }

}
