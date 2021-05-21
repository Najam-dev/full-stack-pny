$(document).ready(function(){

    //Hiding signup messages
    $("#signupUsernameMessage").hide();
    $("#signupEmailMessage").hide();
    $("#signupPasswordMessage").hide();
    $("#signupPasswordConfrimMessage").hide();

    //Hiding login messages
    $("#loginEmailMessage").hide();
    $("#loginPasswordMessage").hide();
          
    //Validations
    $("#signup-username").focusout(function(){
        usernameCheck();
    })

    $("#signup-email").focusout(function(){
        emailCheck();
    })

    $("#signup-password").focusout(function(){
        passwordCheck();
        passwordConfirmCheck();
    })

    $("#signup-passwordconfirm").focusout(function(){
        passwordConfirmCheck();
    })




    //validating on submitting the form
    $("#submit").on("click", function(event){
        event.preventDefault();

        usernameCheck();
        emailCheck();
        passwordCheck();
        passwordConfirmCheck();
    })

    //First name validations
    function usernameCheck(){
        let expression = /^[A-Za-z0-9]+$/;
        let username = $("#signup-username").val();

        if(username.match(expression) && username !== ""){
            $("#signup-username").css("border-bottom", "2px solid green");
            $("#signupUsernameMessage").hide();
        } else{
            //$("#fname_error_message").html("Please enter characters only");
            $("#signupUsernameMessage").show();
            $("#signup-username").css("border-bottom", "2px solid red");
        }
    }

    function emailCheck(){
        let expression = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let email = $("#signup-email").val();

        if(email.match(expression) && email !== ""){
            $("#signup-email").css("border-bottom", "2px solid green");
            $("#signupEmailMessage").hide();
        } else{
            //$("#signupEmailMessage").html("Please enter correct email");
            $("#signupEmailMessage").show()
            $("#signup-email").css("border-bottom", "2px solid red");
        }
    }

    function passwordCheck(){
        let error = [];
        let password = $("#signup-password").val();
        let retypepassword = $("#signup-passwordconfirm").val();
        console.log(password)
        console.log(retypepassword)

        if(password.length >= 8 && password !== ""){
            $("#signup-password").css("border-bottom", "2px solid green");
            $("#signupPasswordMessage").hide();
        } else{
            $("#signupPasswordMessage").show();
            $("#signup-password").css("border-bottom", "2px solid red");
        }
        
    }

    function passwordConfirmCheck(){
        let password = $("#signup-password").val();
        let retypePassword = $("#signup-passwordconfirm").val();
        console.log(retypePassword);
        console.log(password == retypePassword);

        if(retypePassword == password && retypePassword !== ""){
            $("#signup-passwordconfirm").css("border-bottom", "2px solid green");
            $("#signupPasswordConfrimMessage").hide();
        } else{
            $("#signupPasswordConfrimMessage").show()
            $("#signup-passwordconfirm").css("border-bottom", "2px solid red");
        }

    }


    $("#searchButton").on("click", function (){
        console.log("working")
        var search = $("#searchInput").val();
        var items  = $("#userFriends").html();
        var card = $("#main-card")
    
        var filter = search.toUpperCase();
        console.log(items.length)
        
    
        for (var i=0; i <= items.length; i++){
            console.log(items)
            var a = items[i];
            if(a.toUpperCase().indexOf(filter) > -1){
                //tr[i].style.display = ""
                card.eq[i].css({
                    "display" : ""
                });
            } else{
                //tr[i].style.display = "none";
                card.eq[i].css({
                    "display" : "none"
                });
            }
        }
    
        
    
        
    })

})