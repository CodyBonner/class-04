'use strict'

function greeting(){
    
    let userName = prompt("Hello what is your name?");
    let user1 = userName;
    
   // confirm("Is your name: " + user1 +"?")

    if(confirm("Is your name: " + user1 +"?") == true){
      alert("Welcome " + user1);
    }

    else{
      alert("Please enter a valid name!");
      greeting();
    }

}


function sleepinessLevel(){
    let sLevel = prompt("What is your sleepiness level?");
    let stLevel = parseInt(sLevel);
    
    for(let i = 0; i<stLevel; i=i+1){
        document.write("😴")
    }

}    


 function userBenefit(userResponse, userResponse2) {

    userResponse = prompt("What benefit do you receive from streaming?");
    userResponse2 = prompt("Is this a good or a bad benefit?");
    let finalResponse =  userResponse + " Benefit Type: " +userResponse2;
    return finalResponse
    

}

//Future function for image incorporation
//function rating(){
   // let userInput = prompt("Enter a number between 1 and 10");
    //let userI = parseInt(userInput);
    //if(userI<= 10){
      //      alert("Valid Result!")
        //    for(let i =0; userI<=10; i=i+1){

          //      document.write
           // }
   // }
     //   else{
       //     alert("Invalid Result")

        //}
        
    //}     







// else{
   // alert("Please confirm your name!");
 //   username = prompt("Please write your name");
//}
//document.write("Hi, " + username);

