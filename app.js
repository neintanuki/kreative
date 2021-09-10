// navigation
const nav = document.querySelector('nav');
const navMenuOpen = document.querySelector('.nav-menu-open');
const navMenuClose = document.querySelector('.nav-menu-close');
const navRight = document.querySelector('.nav-right');

function changeNavBG() {
    const bodyOffset = document.body.getBoundingClientRect().top;
    
    if(bodyOffset < 0) {
        nav.style.background = "#1d3557";
    } else {
        nav.style.background = 'none';
    }
}

navMenuOpen.addEventListener('click', ()=> {
    navRight.classList.add('show');
});

navMenuClose.addEventListener('click', ()=> {
    navRight.classList.remove('show');
})

// how it works list
const items = document.querySelectorAll('.how-it-works .item');
const buttons = document.querySelectorAll('.how-it-works .btn-wrapper');

items.forEach((el, index) => {
    el.addEventListener('click', ()=> {
        items.forEach(item => {
            item.classList.remove('item-active');
        });
        buttons.forEach(btn => {
            btn.style.display = 'none'
        });

        buttons[index].style.display = 'block';


        items[index].classList.add('item-active');
    })
});

// accordion

const accBtn = document.querySelectorAll('.accordion-btn');
const accText = document.querySelectorAll('.accordion-text');
const icons = document.querySelectorAll('.accordion .material-icons');

accBtn.forEach((item, index)=> {
    item.addEventListener('click', ()=> {
        const height = accText[index].scrollHeight;
        
        if(!accText[index].style.maxHeight) {
            accText[index].style.maxHeight = `${height}px`;
            icons[index].innerText = 'remove';
        } else {
            accText[index].style.maxHeight = null;
            icons[index].innerText = 'add';
        }

        accText[index].classList.toggle('active');

    })
});

// anim

const anim = document.querySelectorAll('.anim');
const sliderCard = document.querySelectorAll('.slider .slider-card');
const blogCard = document.querySelectorAll('.blog-list .card');

const cardArray = [sliderCard, blogCard];


cardArray.forEach(item => {
    item.forEach((el, index) => {
        el.style.transitionDelay = `${index * 200}ms` 
    })
})

function slideAnim(height) {
    anim.forEach(item => {
        const topDistance = (item.getBoundingClientRect().top / height) * 100;
        
        if (topDistance < 60) {
            if (item.classList.contains('slide-top')) {
                item.classList.remove('slide-top');
            }

            if (item.classList.contains('slide-right')) {
                item.classList.remove('slide-right');
            }

            if (item.classList.contains('pill-vertical')) {
                item.classList.remove('pill-vertical');
            }
        }
    })
}

// on scroll

const bodyHeight = window.innerHeight;

slideAnim(bodyHeight);
window.addEventListener('scroll', ()=> {
    changeNavBG();
    slideAnim(bodyHeight);
})