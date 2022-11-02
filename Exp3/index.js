function multiplyBy()
{
    let num1 = document.getElementById("firstNumber").value;
     let num2 = document.getElementById("secondNumber").value;
     document.getElementById("operation").innerHTML = "Multiplication";
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
    var  num1 = document.getElementById("firstNumber").value;
     var   num2 = document.getElementById("secondNumber").value;
     document.getElementById("operation").innerHTML = "Division";
document.getElementById("result").innerHTML = num1 / num2;
}

function addBy() 
{ 
     const   num1 = document.getElementById("firstNumber").value;
     const   num2 = document.getElementById("secondNumber").value;
     document.getElementById("operation").innerHTML = "Addition";
document.getElementById("result").innerHTML = +num1 + +num2;
}

function subBy() 
{ 
     let   num1 = document.getElementById("firstNumber").value;
     let   num2 = document.getElementById("secondNumber").value;
     document.getElementById("operation").innerHTML = "Substraction";
document.getElementById("result").innerHTML = num1 - num2;
}
