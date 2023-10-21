const https = require('https');
const logger = require("../configs/winston.config");
const { getCurrentLeetcodeSessionId } = require("../utils/env-info");

const streakService = async () => {
    logger.debug("user.service: Invoking user service.");

    const sesionId = process.env.LEETCODE_SESSION || getCurrentLeetcodeSessionId();

    const graphqlQuery = `
    query getStreakCounter {
        streakCounter {
          streakCount
          daysSkipped
          currentDayCompleted
        }
      }      
    `;

    return new Promise((resolve, reject) => {
        logger.debug("user.service: Invoking user service");

        const options = {
            hostname: 'leetcode.com',
            port: 443,
            path: '/graphql',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': `LEETCODE_SESSION=${sesionId}`
            },
        };

        const req = https.request(options, (resp) => {
            let data = '';

            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                try {
                    const jsonData = JSON.parse(data);
                    logger.debug("user.service: User data fetched successfully.");

                    resolve(jsonData);
                } catch (err) {
                    logger.error("user.service: Error fetching user data.");

                    reject(err);
                }
            });
        });

        req.on("error", (err) => {
            logger.error("user.service: Error fetching user data.");

            reject(err);
        });

        req.write(JSON.stringify({
            query: graphqlQuery
        }));
        req.end();
    });
}

module.exports = {
    streakService
}