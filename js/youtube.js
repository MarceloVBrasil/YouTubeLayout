window.onload = e =>
{
    /************************************************************************************************************************** */
    const sideMenu = document.querySelector(".side");
    const sideMenuItems = document.querySelectorAll(".side-item-field");
    
    let itema;
    
    sideMenu.addEventListener("click", function(e){
       const target = e.target;
       sideMenuItems.forEach((item) => 
        {
            if(item.classList.contains("active-side-item-field"))
            {
               itema = item;
            }
        })
        if(target.classList.contains("side-item-field"))
        {
            target.classList.toggle("active-side-item-field");
            itema.classList.toggle("active-side-item-field");
        }

    })

    /**************************************************************************************************************************** */
    const centerMenu = document.querySelector(".theme-content-buttons-container"); 
    const centerMenuItems = document.querySelectorAll(".theme-content-button"); 
    let itemb;

    centerMenu.addEventListener("click", function(e){
       const target = e.target;
       centerMenuItems.forEach((item) => 
        {
            if(item.classList.contains("active"))
            {
               itemb = item;
            }
        })
       target.classList.toggle("active");
       itemb.classList.toggle("active");
    })

    /************************************************************************************************************************** */
   

}