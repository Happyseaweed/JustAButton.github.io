window.onload = function (){
    var a = document.getElementById("clickme");
      //Set code to run when the link is clicked
      // by assigning a function to "onclick"
      a.onclick = function() {
          console.log("Clicked!")
          var temp = document.getElementById("click-text").innerHTML;
          console.log(temp);
          var col = "#417D7A";
          var txt = "Boop!";
          if (temp == "Boop!"){
            col = "#EDE6DB"
            txt = "Click Me!"
          }
          document.getElementById("click-text").innerHTML = txt;
          document.getElementById("topsec").style.backgroundColor = col;
          document.getElementById("lefsec").style.backgroundColor = col;
          document.getElementById("censec").style.backgroundColor = col;
          document.getElementById("rigsec").style.backgroundColor = col;
          document.getElementById("botsec").style.backgroundColor = col;
          
      return false;
      }
}