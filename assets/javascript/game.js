
    
     var computerPic = ["s", "g", "k"];
     var wins = 0;
     var losses = 0;
     var leftGuessings = 9;
     var computerGuess = computerPic;
    
     var computerGuess = computerPic[Math.floor(Math.random() * computerPic.length)];
     console.log(computerGuess);
 
    
     document.onkeyup = function(event) {
         var userGuess = event.key.toLowerCase();
         document.getElementById("guessSoFar").innerText += " "+event.key;
        

         if (leftGuessings > 0) {
             if (userGuess === computerGuess){
                 wins++;
                document.getElementById("goodGuess").innerText = wins;
                computerGuess = computerPic[Math.floor(Math.random() * computerPic.length)];
                document.getElementById("guessSoFar").innerText = " ";
               // docCurrentGuess.innerText = wins;
               console.log(computerGuess);
                // console.log(wins);
             }else{
                 leftGuessings--;
                 document.getElementById("guessesLeft").innerText = leftGuessings;
                //console.log(leftGuessings);
                console.log(computerGuess);

             }
             if (leftGuessings === 0){
                 computerGuess = computerPic[Math.floor(Math.random() * computerPic.length)];
                 leftGuessings =9;
                 document.getElementById("guessesLeft").innerText = leftGuessings;
                 losses++;
                 document.getElementById("badGuess").innerText = losses;
                 document.getElementById("guessSoFar").innerText = " ";
                 console.log(computerGuess);
             }
             
         }
             

     }
