function add(numbers) {
    if (numbers === '') return 0;

    let delimiter = /,|\n/;

    if (numbers.startsWith('//')) {
        const [delimiterLine, numberLine] = numbers.split('\n');

        // Check for long delimiter format: //[***]
        const longDelimiterMatch = delimiterLine.match(/^\/\/\[(.+)\]$/);
        if (longDelimiterMatch) {
            delimiter = new RegExp(escapeRegex(longDelimiterMatch[1]));
        } 
        else {
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
