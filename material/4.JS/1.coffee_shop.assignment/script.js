var p1, p2, p3, p4, p5, q1, q2, q3, q4, q5;



function show(){
    q1 = parseInt(document.getElementById("q1").value);
    q2 = parseInt(document.getElementById("q2").value);
    q3 = parseInt(document.getElementById("q3").value);
    q4 = parseInt(document.getElementById("q4").value);
    q5 = parseInt(document.getElementById("q5").value); 

    p1 = 200;
    p2 = 250;
    p3 = 300;
    p4 = 350;
    p5 = 280;

    var one = p1 * q1;
    var two = p2 * q2;
    var three = p3 * q3;
    var four = p4 * q4;
    var five = p5 * q5;

    var total = one + two + three + four + five;
    console.log(q1);
    document.getElementById("show").innerHTML = "<p class=\"p-1\">Your Total is <b>"+total+"</b></p>";

}

function thanks(){
    document.getElementById("thanks").innerHTML = "<span class=\"alert alert-success\"><b>Thanks for Shopping!</b></span>";
}

function empty(){

    document.getElementById("q1").value = "";
    document.getElementById("q2").value = "";
    document.getElementById("q3").value = "";
    document.getElementById("q4").value = "";
    document.getElementById("q5").value = "";

    document.getElementById("show").innerHTML = "";
    document.getElementById("thanks").innerHTML = "";
}