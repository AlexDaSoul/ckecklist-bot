import axios from 'axios';
import { config } from 'dotenv';
import express from 'express';

config()
const app = express()

const TELEGRAM_URI = `https://api.telegram.org/bot${process.env.TELEGRAM_API_TOKEN}/sendMessage`;

app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
);

// curl https://api.telegram.org/bot6780744163:AAGVyCGpb1TTRAdYqsgjBrTW_mMnjM-Cqy8/setWebhook -- "url=https://ckecklist-bot-telegramapitoken.up.railway.app/new-message"

app.post('/new-message', async (req, res) => {
    const { message } = req.body

    const messageText = message?.text?.toLowerCase()?.trim()
    const chatId = message?.chat?.id
    if (!messageText || !chatId) {
        return res.sendStatus(400)
    }

    // local json
    // const dataFromJson = fs.readJSONSync(join(process.cwd(), 'todos.json'))

    let responseText = 'I have nothing to say.'

    console.log('REQ', req)
    console.log('----------------------------------------')
    console.log('RES', res)

    // send response
    try {
        await axios.post(TELEGRAM_URI, {
            chat_id: chatId,
            text: responseText
        })
        res.send('Done')
    } catch (e) {
        console.log(e)
        res.send(e)
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})


