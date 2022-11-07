function burgerMenu(){
    var checkbox = document.getElementById("burgerCheckbox");
    var menu = document.getElementById("menu");
    console.log(checkbox.checked)
    if(checkbox.checked == true){
       //menu.style.width = "150px";
  
        menu.style.transform = "none";
    
    
    }
    else{
       // menu.style.width = "0px"
     
        menu.style.transform = "translate(200px)";
    
    }
}