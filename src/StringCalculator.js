
function add(numbers){

    //Checking if the string of numbers in empty
    if(numbers===""){
        return 0;
    }

    return numbers.split(',').map(Number).reduce((sum, number) => sum + number, 0);

}

module.exports=add;