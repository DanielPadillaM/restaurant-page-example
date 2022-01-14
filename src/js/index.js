const nav = document.querySelector(".nav");
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".main-menu");
const pages = document.querySelectorAll(".page-section");
const links = document.querySelectorAll(".main-menu__link");
const sliders = document.querySelectorAll(".slide-in");
const faders = document.querySelectorAll(".fade-in");



//nav-bar
window.addEventListener('scroll',()=>{
    nav.classList.toggle("nav--sticky",window.scrollY > 0);
});

toggle.addEventListener('click',()=>{
    toggle.classList.toggle('active');
    menu.classList.toggle("active");
}); 

document.addEventListener("click",(e)=>{
    if(e.target !== toggle && e.target !== menu){
        toggle.classList.remove('active');
        menu.classList.remove("active");
    }
})

//intersection observer



//nav
const navOnScroll = (entries)=>{
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            return
        }
        else{
            links.forEach(link=>{
                link.textContent !== entry.target.id ? link.classList.remove('active') : link.classList.add('active');
            });
        }     
    });
}
const onScrollOptions= {
    threshold:0.15
};

const navObserver= new IntersectionObserver(navOnScroll,onScrollOptions);
pages.forEach(page=>{
    navObserver.observe(page);
});




//appear


const appearOptions={
    rootMargin:'0px 0px -100px 0px'
};
const appearOnScroll = new IntersectionObserver(function(entries,appearOnScroll){
    entries.forEach(entry=>{
        if(!entry.isIntersecting){
            return;
        }
        else{
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target)
        }
    })
},appearOptions);

sliders.forEach(slider=>{
    appearOnScroll.observe(slider);
})

faders.forEach(fader=>{
    appearOnScroll.observe(fader)
})

