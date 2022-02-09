//Grabbing the elements
const select = document.getElementById('select');
const input = document.getElementById('input_');
const container1 = document.getElementById('container_1');
const container2 = document.getElementById('container_2');
const container3 = document.getElementById('container_3');


//When the user inputs values the output will automatically update...
input.addEventListener("keyup", (e)=>{
    //forward to the poundsToOther (measurements) funtion
    if(select.value == "Pounds"){
        poundsToOthers();
    }
    //forward to the GramsToOther (measurements) funtion
    if(select.value == "Grams"){
        GramsToOthers();
    }
    //forward to the OuncessToOther (measurements) funtion
    if(select.value == "Ounces"){
        OuncesToOthers();
    }
    //forward to the KilosToOther (measurements) funtion
    if(select.value == "Kilograms"){
        KiloToOthers();
    }
});

function poundsToOthers(){
    let pounds = input.value;
    
    //conversions (Pounds to Kilo)
    let poundsToKilo = (pounds * 0.45359237);
    container1.innerText = ("Kilograms: "+ poundsToKilo.toFixed(4));
    

    //conversation (Pounds to Grams)
    let poundsToGrams = (pounds * 453.592);
    container2.innerText = "Grams: "+ poundsToGrams.toFixed(4);

    //conversation (Pounds to ounces)
    let poundsToOunces = (pounds * 16);
    container3.innerText = "Ounces: "+ poundsToOunces.toFixed(4);
}

function GramsToOthers(){
    let grams = input.value;
    
    //conversions (Grams to kilo)
    let gramsToKilo = (grams * 0.001);
    container1.innerText = ("Kilograms: "+ gramsToKilo.toFixed(4));
    

    //conversation (Grams to pounds)
    let gramsToPound = (grams * 0.00220462);
    container2.innerText = "Pounds: "+ gramsToPound.toFixed(4);

    //conversation (Grams to ounces)
    let gramsToOunces = (grams * 0.035274);
    container3.innerText = "Ounces: "+ gramsToOunces.toFixed(4);
}

function OuncesToOthers(){
    let ounces = input.value;
    
    //conversions (Ounces to kilo)
    let ouncesToKilo = (ounces * 0.0283495);
    container1.innerText = ("Kilograms: "+ ouncesToKilo.toFixed(4));
    

    //conversation (Ounces to Grams)
    let ouncesToGrams = (ounces * 28.3495);
    container2.innerText = "grams: "+ ouncesToGrams.toFixed(4);

    //conversation (Ounces to Pounds)
    let ouncesToPounds = (ounces * 0.0625);
    container3.innerText = "pounds: "+ ouncesToPounds.toFixed(4);
}

function KiloToOthers(){
    let kilos = input.value;
    
    //conversions (Kilo to pounds)
    let KiloToPounds = (kilos * 2.20462);
    container1.innerText = ("Pounds: "+ KiloToPounds.toFixed(4));
    

    //conversation (Kilo to Grams)
    let KiloToGrams = (kilos * 1000);
    container2.innerText = "Grams: "+ KiloToGrams.toFixed(4);

    //conversation (Kilo to Ounces)
    let KiloToOunces = (kilos * 35.274);
    container3.innerText = "Ounces: "+ KiloToOunces.toFixed(4);
}