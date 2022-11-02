
function ageBy()
{
    let age = document.getElementById("age").value;
    if (age >=21) {
        document.getElementById("result").innerHTML = "You Can Vote In the Election";
    }
    else if (age >=15){
        document.getElementById("result").innerHTML = "You are a teenager and cannot vote";
    }
    else if (age >=10){
        document.getElementById("result").innerHTML = "You are too young to vote";
    }
    else {
        document.getElementById("result").innerHTML = "You are still a baby";
    }
}