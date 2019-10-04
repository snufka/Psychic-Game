var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
      var computer = alphabet[Math.floor(Math.random() * alphabet.length)]
      console.log(computer +" computer");
      var wins = 0;
      var losses = 0;
      var leftGuesse = 9;


      document.onkeypress = function (event) {
       var user=event.key.toLowerCase();
        console.log(user)
        document.getElementById("user").innerHTML = user;

        
        document.getElementById("wins").innerHTML = wins; 
        document.getElementById("leftGuesse").innerHTML = leftGuesse;
        document.getElementById("losses").innerHTML = losses;

        if (user == computer) {
          wins++;
          
        } else if (leftGuesse==0) {
          losses++;
          leftGuesse= 9;
                 
        } else if (user !== computer) {
        leftGuesse--
        }
     
      
          
               
      }