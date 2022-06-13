function check (){
    var score = 0
    var right_answer_1 = document.getElementById('q1-a1');
    var q1_answer_2 =  document.getElementById("q1-a2");
    var q1_answer_3 =  document.getElementById("q1-a3");
    var q1_answer_4 =  document.getElementById("q1-a4");
    if (right_answer_1 .checked == true){
        score++
        alert('Question 1 answer right')
    }
    else{
        alert('Question 1 answer wrong')
    }


    var right_answer_2 = document.getElementById("q2-a1");
    var q1_answer_2  = document.getElementById("q2-a1");
    var q2_answer_2  = document.getElementById("q2-a1");
    var q3_answer_2   = document.getElementById("q2-a1");
    if(right_answer_2 .checked ==true) {
        score++
        alert("Q2 answer right")
    }
    else{
        alert("Q2 answer wrong")
    }


    var right_answer_3 = document.getElementById('q3-a2');
    var q3_answer_1 = document.getElementById('q3-a1');
    var q4_answer_4 = document.getElementById('q3-a1');
    var q4_answer_2 = document.getElementById('q3-a1');
    if(right_answer_3 .checked == true){
        score++
        alert("Q3 answer right")
    }
    else{
        alert("Q3 answer right")
    }
    var right_answer_4 = document.getElementById('q4-a1');
    var q4_answer_1 = document.getElementById('q4-a1');
    var q4_answer_2 = document.getElementById('q4-a1');
    var q4_answer_3= document.getElementById('q4-a1');
    if(right_answer_3 .checked == true){
        score++
        alert("Q4 answer right")
    }
    else{
        alert("Q4 answer right")
    }
    var right_answer_5 = document.getElementById('q5-a3');
    var q5_answer_1 = document.getElementById('q5-a1');
    var q5_answer_2 = document.getElementById('q5-a1');
    var q5_answer_3= document.getElementById('q5-a1');
    if(right_answer_3 .checked == true){
        score++
        alert("Q5 answer right")
    }
    else{
        alert("Q5 answer right")
    }
    alert("Your score is "+ score++)










    
}