'use strict'

let username = prompt("Hi whats your name?");


let user1 = confirm("Is your name? " + username);

if(username == null){
    username = prompt("Please write your name");

}
else if (user1 == true){
    alert("Welcome " + username);
}

 function userBenefit(userResponse, userResponse2) {

    userResponse = prompt("What benefit do you receive from streaming?");
    userResponse2 = prompt("Is this a good or a bad benefit?");
    let finalResponse =  userResponse + " Benefit Type " +userResponse2;
    return finalResponse
    

}



// else{
   // alert("Please confirm your name!");
 //   username = prompt("Please write your name");
//}
document.write("Hi, " + username);

