
function add(numbers){

    //Checking if the string of numbers in empty
    if(numbers===""){
        return 0;
    }

    // Split on comma or newline
    const parts = numbers.split(/,|\n/);
    const parsedNumbers = parts.map(num => parseInt(num));
    return parsedNumbers.reduce((sum, number) => sum + number, 0);

}

module.exports=add;