const TELEGRAM_URI = `https://api.telegram.org/bot${process.env.TELEGRAM_API_TOKEN}`;

export const TELEGRAM = {
    SEND_MESSAGE: `${TELEGRAM_URI}/sendMessage`,
};

export const API = {
    NEW_MESSAGE: '/new-message',
};
