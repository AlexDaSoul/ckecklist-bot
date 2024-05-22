import Servise from './servise.js';
import { API } from './const.js';

const servise = new Servise();

export default class Controller {
    constructor (app) {
        this.sendMessage(app);
    }

    sendMessage(app) {
        console.log('Init sendMessage Controller');
        app.post(API.SEND_MESSAGE, async (req, res) => {
            await servise.sendMessage(req, res);
        });
    }
}