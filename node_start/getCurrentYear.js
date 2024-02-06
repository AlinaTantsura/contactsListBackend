function getCurrentYear() {
    const data = new Date();
    return data.getFullYear();
};

module.exports = {getCurrentYear};