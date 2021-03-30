function evenOrodd(){
    var n1 = parseInt(document.getElementById("n1").value);

    if (n1 % 2 == 0){
        document.getElementById("evenOrodd").innerHTML = "<span class=\"alert alert-success\">It's <b>Even</b></span>";
    } else{
        document.getElementById("evenOrodd").innerHTML = "<span class=\"alert alert-success\">It's <b>Odd</b></span>";
    }
}

function positiveOrnegative(){
    var n2 = parseInt(document.getElementById("n2").value);

    if (n2 > 0){
        document.getElementById("positiveOrnegative").innerHTML = "<span class=\"alert alert-success\">It's <b>+ve</b></span>";
    } else if (n2 < 0){
        document.getElementById("positiveOrnegative").innerHTML = "<span class=\"alert alert-success\">It's <b>-ve</b></span>";
    } else {
        document.getElementById("positiveOrnegative").innerHTML = "<span class=\"alert alert-success\">It's <b>0</b></span>";
    }
}

function notWorking(){
    document.getElementById("notWorking").innerHTML = "<span class=\"alert alert-warning\">Not Working!</span>";
}

function quadrants(){
    var x = parseInt(document.getElementById("n41").value);
    var y = parseInt(document.getElementById("n42").value);
    
    document.getElementById("quad1").innerHTML = "";
    document.getElementById("quad2").innerHTML = "";
    document.getElementById("quad3").innerHTML = "";
    document.getElementById("quad4").innerHTML = "";

    if (x > 0 && y > 0){
        document.getElementById("quad1").innerHTML = "<span class=\"alert alert-success\">"+"("+x+", "+y+")"+" lies in <b>1st Quadrant</b></span>";
    } else if (x < 0 && y > 0){
        document.getElementById("quad2").innerHTML = "<span class=\"alert alert-success\">"+"("+x+", "+y+")"+" lies in <b>2nd Quadrant</b></span>";
    } else if (x < 0 && y < 0){
        document.getElementById("quad3").innerHTML = "<span class=\"alert alert-success\">"+"("+x+", "+y+")"+" lies in <b>3rd Quadrant</b></span>";
    } else if (x > 0 && y < 0){
        document.getElementById("quad4").innerHTML = "<span class=\"alert alert-success\">"+"("+x+", "+y+")"+" lies in <b>4th Quadrant</b></span>";
    } else{
        console.log("Lies on quadrant");
    }
}