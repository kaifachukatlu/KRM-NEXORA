require('dotenv').config({ path: '.env' });
const { sendEmail } = require('./src/lib/email.ts'); // Wait, require can't load TS directly without ts-node

console.log("Testing email directly...");
