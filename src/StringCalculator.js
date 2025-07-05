function add(numbers) {
    if (numbers === '') return 0;

    let delimiter = /,|\n/;

    if (numbers.startsWith('//')) {
        const [delimiterLine, numberLine] = numbers.split('\n');
        const custom = delimiterLine.slice(2); // extract the delimiter
        delimiter = new RegExp(escapeRegex(custom));
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

module.exports = add ;
