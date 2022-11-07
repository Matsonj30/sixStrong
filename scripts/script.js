function burgerMenu(){
    var checkbox = document.getElementById("burgerCheckbox");
    var menu = document.getElementById("menu");
    console.log(checkbox.checked);
    if(checkbox.checked == true){
        menu.style.transform = "none";
    }
    else{
        console.log("HERE")
        menu.style.transform = "translate(200px)";
    }
}