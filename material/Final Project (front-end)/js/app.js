$(document).ready(function(){
  
    $("#submit").on("click", function(){
        $("#message").focus();
        let message = $("#message").val();
        $("#showMessage").append(`<div class="alert alert-success">Me: ${message}</div>`);
        
        $("#message").val("");
        $("#message").focus();
    })

})