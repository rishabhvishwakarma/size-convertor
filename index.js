/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let input = document.querySelector(".input-num")
let btn = document.querySelector("#convert-btn")
let lengthPara = document.querySelector("#length")
let volumePara = document.querySelector("#volume")
let massPara = document.querySelector("#mass")



btn.addEventListener("click", function(){
  let currValue = input.value;
    function meter(){
        lengthPara.textContent = ""
        feet = (currValue * 3.281).toFixed(3)
        meter = (currValue   * 0.3048).toFixed(3)
        lengthPara.textContent = `${currValue} meters = ${feet} feet | ${currValue} feet = ${meter} meter`
    }
    meter()
    
    function volume(){
        volumePara.textContent = ""
        liters = (currValue * 3.78541).toFixed(3)
        gallon = (currValue * 0.264172).toFixed(3)
        volumePara.textContent = `${currValue} liters = ${gallon} gallons | ${currValue} gallons = ${liters} liters`
    }  
    volume()
    
    function mass(){
        massPara.textContent = ""
        pound = (currValue * 2.204).toFixed(3)
        kilogram = (currValue * 0.4536).toFixed(3)
        massPara.textContent = `${currValue} Kilograms = ${pound} pounds | ${currValue} Pounds = ${kilogram} Kilograms`
    }
    mass()
})