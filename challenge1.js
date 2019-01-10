//What is a palindrome?  A palindrome is a word that is spelled the same way,
//both forwards and backwards (i.e. bob, level, tacocat, racecar, etc.). 
//Notice that each of these words have the same spelling if you reversed the word.
//Using only JavaScript, create a prompt telling the user, 
//"Enter a word to see if it is a palindrome", then create a way to check if the word is in fact a palindrome.  
//If it is, have JavaScript console.log that their word is a palindrome; if it is not, have JavaScript console.log the opposite.


function check_Palindrome(str_entry){
    
       var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var ccount = 0;
    
        if(cstr==="") {
            console.log("Nothing found!");
            return false;
        }
     
        if ((cstr.length) % 2 === 0) {
            ccount = (cstr.length) / 2;
        } else {
    
            if (cstr.length === 1) {
                console.log("This world is a palindrome.");
                return true;
            } else {
   
                ccount = (cstr.length - 1) / 2;
            }
        }
   
        for (var x = 0; x < ccount; x++) {
    
            if (cstr[x] != cstr.slice(-1-x)[0]) {
                console.log("This word is not a palindrome.");
                return false;
            }
        }
        console.log("This word is a palindrome.");
        return true;
    }
    check_Palindrome('Never odd or even');