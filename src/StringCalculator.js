function add(numbers) {
    if (numbers === '') return 0;

    let delimiter = /,|\n/;

    if (numbers.startsWith('//')) {
        const [delimiterLine, numberLine] = numbers.split('\n');

        // Check for multiple delimiters: //[delim1][delim2]
        const multiDelimiterMatch = delimiterLine.match(/\/\/(\[.*\])+/);

        if (multiDelimiterMatch) {
            // Extract all delimiters inside []
            const delimiterParts = [...delimiterLine.matchAll(/\[([^\]]+)\]/g)]
                .map(match => escapeRegex(match[1]));
            delimiter = new RegExp(delimiterParts.join('|'));
        } else {
            // length of delimiter=1
            const custom = delimiterLine.slice(2);
            delimiter = new RegExp(escapeRegex(custom));
        }

        numbers = numberLine;
    }

    const parsedNumbers = numbers
        .split(delimiter)
        .map(num => parseInt(num, 10));

    return parsedNumbers.reduce((sum, num) => sum + num, 0);
}

function escapeRegex(str) {
    return str.replace(/[-[\]/{}()*+?.\\^$|]/g, '\\$&');
}

module.exports = add;
