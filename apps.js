const sideBar = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');
    const navLink = document.querySelectorAll('.nav-links li');

    menu.addEventListener('click', () => { 
        
        // toggle nav
        nav.classList.toggle('nav-active'); 
    
        // animate links
        navLink.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `sideBarFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // menu animation
        menu.classList.toggle('toggle');
    }); 
}

sideBar();  