
var typed = new Typed(".typing",{
    strings: ["Web Designer", "Web Developer", "Youtuber", "Blogger"],
    typeSpeed: 80,
    backSpeed: 80,
});

var typed = new Typed(".typing-2",{
    strings: ["Web Developer", "Web Designer", "Youtuber", "Blogger"],
    typeSpeed: 100,
    backSpeed: 60,
});


// faq section js start here 






var answer = document.querySelectorAll(".faq-qusetion");
answer.forEach(ans =>{
    ans.addEventListener('click', () =>{
        console.log("ok")
        ans.classList.toggle('open')

        const icon = document.querySelector(".faq-icon i");
        if (icon.className ==='fa-solid fa-plus') {
            icon.className = 'fa-solid fa-minus';
            
        } else {
            icon.className = 'fa-solid fa-plus';
        }

    })
})


// faq section js End here 


// header menu section part start 

const openMenubtn = document.querySelector(".open-menu-icon i");
const fullMenu = document.querySelector(".header-menu ul");
const closeMenubtn = document.querySelector(".close-menu-icon");

openMenubtn.addEventListener('click', () =>{

    console.log("ok")
    fullMenu.style.display = "flex";
    closeMenubtn.style.display= "block";
    openMenubtn.style.display="none";



});

closeMenubtn.addEventListener('click', () =>{
    fullMenu.style.display = "none";
    closeMenubtn.style.display = "none";
    openMenubtn.style.display ="block"

})

// header menu section part end 