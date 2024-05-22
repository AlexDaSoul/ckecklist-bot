// curl https://api.telegram.org/bot6780744163:AAGVyCGpb1TTRAdYqsgjBrTW_mMnjM-Cqy8/setWebhook -- "url=https://ckecklist-bot-telegramapitoken.up.railway.app/new-message"

import { config } from 'dotenv';
import express from 'express';
import Controller from './controller.js';

config();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);

new Controller(app);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
