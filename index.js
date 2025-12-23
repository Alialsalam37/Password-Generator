const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOneEl = document.getElementById("password-one")
let passTwoEl = document.getElementById("password-two")

function getRandomChar() {
    let randomIndex = Math.floor(Math.random() * characters.length)
    return characters[randomIndex]
}

function genPass(){
    
    passOneEl.textContent = ""
    passTwoEl.textContent = ""
    
for(let i = 0 ; i < 15 ; i++){
        passOneEl.textContent += getRandomChar()
        passTwoEl.textContent += getRandomChar()
}}

function generate(){
    genPass()
}




