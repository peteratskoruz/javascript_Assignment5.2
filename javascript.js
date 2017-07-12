/**
 * Created by peter on 7/4/2017.
 */

/*******comparing string***********/

function isVowel(x){

var result;

    result = x == 'A' || x == 'a' || x == 'E' || x == 'e' || x == 'I' || x == 'i' || x == 'O' || x == 'o' || x == 'U' || x == 'u';

    return result;

}

/*********storing result ************/


var inputVal;

inputVal = prompt("Enter the character to check vowel");

/**********checking condition*************/

if(isVowel(inputVal)){
    document.getElementById('assign').innerHTML="The character you entered is vowel";
}

else{
    document.getElementById('assign').innerHTML="The character you entered is not a vowel";
}


