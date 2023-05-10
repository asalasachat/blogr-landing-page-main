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
        var timeline1 = new TimelineMax();
        
        if(!submenu.classList.contains("active")){
            submenu.classList.remove("undisplayMob");
            submenu.classList.add("active");
            console.log(submenu.offsetHeight);
            timeline1.fromTo(submenu, .4, {opacity: 0, height:0}, {opacity:1, height:submenu.offsetHeight});
        }
        else{
            submenu.classList.remove("active");
            submenu.classList.add("undisplayMob");
        }

        if(activesub!=null){
            activesub.classList.remove("active");
            activesub.classList.add("undisplayMob");
        }
        
      })
});

const iconmenu=document.querySelector(".menu-icon");
iconmenu.addEventListener("click", function(event){
    event.preventDefault();
    const menumob= document.querySelector(".menu-mobile")
    if(menumob.classList.contains("active")){
        menumob.style.display="none";
        menumob.classList.remove("active");
    }
    else{
        menumob.classList.add("active");
        menumob.style.display="block";
        var timeline1 = new TimelineMax();
        timeline1.fromTo(menumob, .2, {opacity: 0}, {opacity:1});
        
    }
});
