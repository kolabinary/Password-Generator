const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById ("rOne")
let passTwo = document.getElementById ("rTwo")

// console.log(strengthUp)



function generatePass() {
 passOne.textContent = " "
 passTwo.textContent = " "
 
 start ()
  
}



function start () {
    // let strengthUp = document.getElementById("strength").value
    
     for (i=0; i<15; i++){
      let randomOne = Math.floor(Math.random() * characters.length)
      let randomTwo = Math.floor(Math.random() * characters.length) 
        
        passTwo.textContent += characters[randomOne]
        passOne.textContent += characters[randomTwo]
  }
}

