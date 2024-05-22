import axios from 'axios';
import { TELEGRAM } from './const.js';

export default class Servise {
    async sendMessage(req, res) {
        console.log('Init sendMessage');

        const { message } = req.body;
        const messageText = message?.text?.toLowerCase()?.trim();
        const chatId = message?.chat?.id;

        if (!messageText || !chatId) {
            return res.sendStatus(400);
        }
    
        let responseText = 'I have nothing to say.'
    
        console.log('REQ', message);
        console.log('----------------------------------------')
        console.log('RES', res.body);
    
        // send response
        try {
            console.log('Init Servise');
            await axios.post(TELEGRAM.SEND_MESSAGE, {
                chat_id: chatId,
                text: responseText,
            });

            res.send('Done');
        } catch (e) {
            console.log(e);
            res.send(e);
        }
    }
}
