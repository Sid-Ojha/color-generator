function getColor(){
    const randomNumber = Math.floor(Math.random()* 16777215); //we get a value which is in range of a hexadecimal value
    const randomCode = "#" + randomNumber.toString(16)        //toString(16) converts the number into hexadecimal
    document.body.style.backgroundColor= randomCode
    document.getElementById("code").innerText = randomCode
}

document.getElementById('btn').addEventListener('click',getColor
)
getColor()