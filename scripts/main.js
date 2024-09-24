//Toggle & Responsive
function navSlide(){
    const burger = document.querySelector(".burger")
    const navLists = document.querySelector("nav")
    console.log("Test")
    
    burger.addEventListener("click", () =>{
        navLists.classList.toggle("nav-active");
        burger.classList.toggle("toggle-burger");
    });

};

navSlide();

// Cleare form before unload
window.onbeforeunload = () => { 
    for(const form of document.getElementsByTagName("form")){
        form.reset();
    }
};