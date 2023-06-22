const navSlide=()=>{
    let temp=0;
    const navMobile=document.querySelector(".mobile-nav div");
    const rightnav=document.querySelector(".right-menu");

    navMobile.addEventListener("click",() =>{
    rightnav.style.transform="none";
    if(temp==0)
    {
        rightnav.style.transform="none";
        temp++;
    }
    else{
        rightnav.style.transform="translateX(100%)";
        temp--;
    }
   
    });
}
navSlide();