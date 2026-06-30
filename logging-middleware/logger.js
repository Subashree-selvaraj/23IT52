require("dotenv").config();

const axios = require("axios");

async function Log(stack, level, packageName, message) {
    try {
        const response = await axios.post(
            process.env.LOGGER_URL,
            {
                stack,
                level,
                package: packageName,
                message
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.LOGGER_TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        );

        console.log(response.data);
        return response.data;

    } catch (err) {
        console.log(err.response?.status);
        console.log(err.response?.data);
    }
}

module.exports = Log;