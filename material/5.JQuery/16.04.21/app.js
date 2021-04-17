$(document).ready(function(){
    $("#listItems").append(localStorage.getItem('tasks'));
    $("#addTask").click(function(event){
        //event.preventDefault() // to stop it from reloading

        var task = $("#todoInput").val();
        if(task){   //check if task is entered
            //create li and add it in ul
            $("#listItems").append(`<li class="list-group-item"><input type="checkbox" class="mr-3" id="checkbox">${task}<a class="btn btn-outline-danger btn-sm float-right" id="delete">X</a></li>`);

            //enter data into LocalStorage
            localStorage.setItem('tasks', $("#listItems").html());

            //clear tak input bar
            $("#todoInput").val("");
        } else{
            //change class to show error message
            $("#error").toggleClass("hide");
            setTimeout(function(){  //timeout function to finish displaying it after some seconds 
                $("#error").toggleClass("hide");
            }, 3000)    //after how many seconds function should run
        }
        
    })

    $("#listItems").on("change", function(){
        if($(this).click()){
            alert("hehe");
        }
    })

    $("#delete").click(function(){
        $(this).parent().remove();
        //console.log(localStorage.key())
        //localStorage.removeItem('tasks');
    })



})