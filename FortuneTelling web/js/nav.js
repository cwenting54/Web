document.getElementsByTagName("nav")[0].addEventListener("click", function(){
    let phoneMenu = document.getElementById("phoneMenu");
    phoneMenu.style.transition = "all 500ms ease";
    phoneMenu.style.transform = "translateX(0)";
    document.getElementById("phoneNav").addEventListener("click", function(){
        phoneMenu.style.transform = "translateX(100%)";
    })
})