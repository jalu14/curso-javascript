function sum (x, y) {
    if (isNaN(x) || isNaN(y)) throw new Error('Solo se pueden usar números.');
    return x + y;
}

module.exports = sum;