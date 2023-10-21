function getCurrentEnv() {
    return process.env.NODE_ENV || 'development';
}

function getCurrentPort() {
    return process.env.PORT || 5000;
}

function getCurrentLogLevel() {
    return process.env.LOG_LEVEL || 'debug';
}

function getCurrentLeetcodeSessionId(){
    return process.env.LEETCODE_SESSION || '';
}

module.exports = { getCurrentEnv, getCurrentPort, getCurrentLogLevel, getCurrentLeetcodeSessionId };