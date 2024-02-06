function getCurrentDate() {
    const data = new Date();
    return data.getUTCDay();
};

module.exports = { getCurrentDate };