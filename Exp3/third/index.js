

 function gradeBy()
{
    
    let score = document.getElementById("marks").value;
    switch (true)
    {
       case (score <= 100 && score >= 90): 
     
           document.getElementById("result").innerHTML = "Your Grade Is A";
     
       break;   
       case (score <= 89 && score >= 80): document.getElementById("result").innerHTML = "Your Grade Is B";
       break;   
       case (score <= 79 && score >= 70): document.getElementById("result").innerHTML = "Your Grade Is C";
       break;   
       case (score <= 69 && score >= 60): document.getElementById("result").innerHTML = "Your Grade Is D";
       break;   
       case (score <= 59 && score >= 50): document.getElementById("result").innerHTML = "Your Grade Is E";
      break;
      case (score <= 49 && score >= 35): document.getElementById("result").innerHTML = "Just Pass ";
      break;
      case (score <= 34 && score >= 0): document.getElementById("result").innerHTML = "You are Failed ";
      break;
      case (score > 100 && score < 0 ): document.getElementById("result").innerHTML = "Invalid Score";
      break ;
      default:
        return document.getElementById("result").innerHTML = "Invalid Score";
    }

}

function isEmpty()
{
    if(document.getElementById("marks").value.length == 0)
    {
        alert("Please Enter Marks First !!");

        document.getElementById("result").innerHTML = "Invalid Score";
    }
}
