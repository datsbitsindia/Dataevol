const { CronJob } = require('cron');
const axios = require('axios');

const keepLive = async () => {
    const url = 'https://www.dataevol.net/health-check';
    try {
        await axios.get(url);
        console.log('Pinged health-check endpoint successfully');
    } catch (error) {
        console.error('Error pinging health-check endpoint:', error.message);
    }
};

function startCronJobs() {
    const job = new CronJob('*/12 * * * *', () => {
        keepLive();
    });
    job.start();
    console.log('Cron job to keep the app alive has been started.');
}

module.exports = {
    startCronJobs
};