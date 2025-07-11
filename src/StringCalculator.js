let callCount = 0; // Track number of times add() is called

function add(numbers) {
    callCount++; // Increment count on every call

    if (numbers === '') return 0;

    let delimiter = /,|\n/;

    if (numbers.startsWith('//')) {
        const [delimiterLine, numberLine] = numbers.split('\n');

        // Check for multiple delimiters: //[delim1][delim2]
        const multiDelimiterMatch = delimiterLine.match(/\/\/(\[.*\])+/);

        if (multiDelimiterMatch) {
            const delimiterParts = [...delimiterLine.matchAll(/\[([^\]]+)\]/g)]
                .map(match => escapeRegex(match[1]));
            delimiter = new RegExp(delimiterParts.join('|'));
        } else {
            const custom = delimiterLine.slice(2);
            delimiter = new RegExp(escapeRegex(custom));
        }

        numbers = numberLine;
    }

    const parsedNumbers = numbers
        .split(delimiter)
        .map(num => parseInt(num, 10));

    const negatives = parsedNumbers.filter(n => n < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }

    // ✅ Ignore numbers > 1000
    return parsedNumbers
        .filter(n => n <= 1000)
        .reduce((sum, num) => sum + num, 0);
}

function getCalledCount() {
    return callCount;
}

function resetCalledCount() {
    callCount = 0;
}

function escapeRegex(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}

module.exports = { add, getCalledCount, resetCalledCount };
