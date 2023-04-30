const menuItem=document.querySelectorAll(".dropdown-item");

menuItem.forEach(element => {
    element.addEventListener("click", function (event) {  
        event.preventDefault();
        listeElement=this.querySelector("ul");
        listeElement.classList.remove("undisplay");
    });
});