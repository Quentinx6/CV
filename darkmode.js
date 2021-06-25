document.addEventListener("DOMContentLoaded", function(){

    let button = document.getElementById("bouton");
    let body = document.body;
        button.addEventListener("click", function() {
            body.classList.toggle("darkmode");
            if (body.classList.contains("darkmode")){
                let msg = "Mode clair";
                button.innerHTML = msg;
            }
            else{
                let msg = "Mode sombre";
                button.innerHTML = msg;
            }
        });


})