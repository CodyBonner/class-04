'use strict'

let username = prompt("Hi whats your name?");


let user1 = confirm("Is your name? " + username);

if(username == null){
    username = prompt("Please write your name");

}
else if (user1 == true){
    alert("Welcome " + username);
}


// else{
   // alert("Please confirm your name!");
 //   username = prompt("Please write your name");
//}
document.write("Hi, " + username);

