document.addEventListener("DOMContentLoaded", function(){

    let button = document.getElementById("bouton");
    let body = document.body;
    if (returnProut()){
        body.classList.add("darkmode")
    }
    else{
        body.classList.remove("darkmode");
    }
    function returnProut(){

        let proute;
        console.log(proute)

        button.addEventListener("click", function() {
            proute = true;
            body.classList.toggle("darkmode");
            console.log(proute)
        });
        return proute;
    }
})
