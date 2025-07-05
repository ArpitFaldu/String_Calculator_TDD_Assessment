
function add(numbers){

    //Checking if the string of numbers in empty
    if(numbers===""){
        return 0;
    }

    //returning the number itself for single number as input
    return parseInt(numbers);

}

module.exports=add;