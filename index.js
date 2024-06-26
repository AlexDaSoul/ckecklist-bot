// curl https://api.telegram.org/bot6780744163:AAGVyCGpb1TTRAdYqsgjBrTW_mMnjM-Cqy8/setWebhook -- "url=https://ckecklist-bot-telegramapitoken.up.railway.app/new-message"

// $Env:RAILWAY_TOKEN="e2023028-61f9-4bad-93e6-275d361f472f"; railway run
// RAILWAY_TOKEN=796d586f-f02d-4ecd-8bae-e782f4d9cda4 railway run

// [Environment]::SetEnvironmentVariable('RAILWAY_TOKEN','796d586f-f02d-4ecd-8bae-e782f4d9cda4')
// [Environment]::GetEnvironmentVariable('RAILWAY_TOKEN')

import { config } from 'dotenv';
import express from 'express';
import axios from 'axios';
// import Controller from './controller.js';

config();

// import Servise from './servise.js';
// import { API } from './const.js';

// const servise = new Servise();

const PORT = process.env.PORT || 3000;
const app = express();

const TELEGRAM_URI = `https://api.telegram.org/bot${process.env.TELEGRAM_API_TOKEN}/sendMessage`;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.post('/new-message', async (req, res) => {
    console.log('Init Servise');
    const { message } = req.body;
    const messageText = message?.text?.toLowerCase()?.trim();
    const chatId = message?.chat?.id;

    if (!messageText || !chatId) {
        return res.sendStatus(400);
    }

    let responseText = 'I have nothing to say.'

/*     console.log('REQ', message);
    console.log('----------------------------------------')
    console.log('RES', res.body); */

    // send response
    try {
        
        await axios.post(TELEGRAM_URI, {
            chat_id: chatId,
            text: responseText,
        });

        res.send('Done');
    } catch (e) {
        console.log(e);
        res.send(e);
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
