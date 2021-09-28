let first = document.getElementById("first");
    second = document.getElementById("second");
    three = document.getElementById("three");
    four = document.getElementById("four");
    five = document.getElementById("five");
    six = document.getElementById("six");
    seven = document.getElementById("seven");
    eight = document.getElementById("eight");
    nine = document.getElementById("nine");

function myFunction() {
    first.classList.add("close");
    second.classList.remove("close");
}

function mySeconFunction(){
    second.classList.add("close");
    three.classList.remove("close");
}

function myThirdFunction(){
    three.classList.add("close");
    four.classList.remove("close");
}

function myFourFunction(){
    four.classList.add("close");
    five.classList.remove("close");
}

function myFiveFunction(){
    five.classList.add("close");
    six.classList.remove("close");
}

function mySixFunction(){
    six.classList.add("close");
    seven.classList.remove("close");
    
}

function mySevenFunction(){
    seven.classList.add("close");
    eight.classList.remove("close");
}

function myEightFunction(){
    eight.classList.add("close");
    nine.classList.remove("close");
}
