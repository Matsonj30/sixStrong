function burgerMenu(){
    var checkbox = document.getElementById("burgerCheckbox");
    var menu = document.getElementById("menu");
    
    if(checkbox.checked == true){
        menu.style.transform = "none";
    }
    else{
        menu.style.transform = "translate(200px)";
    }
}

function scrollToDiv(location){
    document.getElementById(location).scrollIntoView({behaviour: "smooth"});

}