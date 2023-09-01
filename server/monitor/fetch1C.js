const { default: fetch } = require("node-fetch");
require('dotenv').config();

module.exports = async function getDataFrom1C() {
    const login = process.env.UPP_PLAN_LOGIN;
    const psw = process.env.UPP_PLAN_PASS;
    const url = process.env.UPP_PLAN_URL;
    const credentials = btoa(`${login}:${psw}`);
    const auth = { "Authorization": `Basic ${credentials}` };
    const data = await fetch(url, { headers: auth });
    const res = await data.json();
    return res
}