document.addEventListener("DOMContentLoaded", function(){

    let button = document.getElementById("bouton");
    let body = document.body;
    let btn = document.getElementById("btn-img");
    let html = document.getElementById("html");
    let css = document.getElementById("css");
        button.addEventListener("click", function() {
            body.classList.toggle("darkmode");
            if (body.classList.contains("darkmode")){
                let msg = "Mode clair";
                button.innerHTML = msg;
                let f = "image/fleche.png";
                btn.setAttribute("src", f);
                let h = "image/htmlblanc.png"
                let c = "image/cssblanc.png"
                html.setAttribute("src", h);
                css.setAttribute("src", c);
            }
            else{
                let msg = "Mode sombre";
                button.innerHTML = msg;
                let n = "image/fleche-top.svg";
                btn.setAttribute("src", n);
                let t = "image/htmlnoir.png"
                let s = "image/css.png"
                html.setAttribute("src", t);
                css.setAttribute("src", s);
            }
        });
})