const menuItem=document.querySelectorAll(".dropdown-item");
let hoverVar=false;

const submenuInHandeler=function (event) {  
    event.preventDefault();
    listeElement=this.querySelector("ul");
    listeElement.classList.remove("undisplay");
}

const submenuOutHandeler=function (event) {  
    event.preventDefault();
    listeElement.classList.add("undisplay");
    hoverVar=false;
}

menuItem.forEach(element => {
    element.addEventListener("click", submenuInHandeler);
    element.addEventListener("mouseover", submenuInHandeler);
    element.addEventListener("mouseleave", function(){
        setTimeout(() => {
            if(!hoverVar){
                console.log("Hello");
                element.querySelector("ul").classList.add("undisplay");
            }
        }, 500);
    });
    element.querySelector("ul").addEventListener("mouseover",()=>hoverVar=true);
    element.querySelector("ul").addEventListener("mouseleave", submenuOutHandeler);
});

const menuItemMobile=document.querySelectorAll(".submenu-item");
menuItemMobile.forEach(elem=>{
    elem.addEventListener("click", function (event) {
        event.stopPropagation();
        event.preventDefault();
        const activesub=document.querySelector(".menu-mobile ul.active");

        const submenu=this.parentNode.querySelector("ul.submenu");
        if(!submenu.classList.contains("active")){
            console.log('sssssss')
            submenu.classList.remove("undisplayMob");
            submenu.classList.add("active");
        }
        else{
            console.log("helll")
            submenu.classList.remove("active");
            submenu.classList.add("undisplayMob");
        }
        
        if(activesub!=null){
            activesub.classList.remove("active");
            activesub.classList.add("undisplayMob");
        }
        
      })
});
