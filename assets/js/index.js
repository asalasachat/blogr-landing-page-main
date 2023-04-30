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