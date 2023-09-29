var tl = gsap.timeline()

function time() {
    var a = 0
    setInterval(function () {
        if (a < 100) {
            a = a + Math.floor(Math.random() * 10)
            document.querySelector("#loader h1").innerHTML = a + "%"

        } else {
            a = 100
            document.querySelector("#loader h1").innerHTML = a + "%"
        }
        console.log(a)
    }, 70);
}

tl.to("#loader", {
    top: "-100vh",
    delay: 1.7,
    duration: 1,
    onStart: time()
})

var cursor = document.querySelector(".cursor");
var main = document.querySelector('body');

main.addEventListener('mousemove', function (e) {

    var posX = e.clientX + window.scrollX;
    var posY = e.clientY + window.scrollY;

    cursor.style.left = posX + 'px';
    cursor.style.top = posY + 'px';
});


var nav = document.querySelector('header');
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', function () {
    let curScrollPos = this.window.scrollY;

    if (curScrollPos > prevScrollPos) {
        nav.style.transform = `translateY(-105%)`
    } else {
        nav.style.transform = `translateY(0%)`
    }
    prevScrollPos = curScrollPos;
})

var bars = document.querySelector('#bars');
var cross = document.querySelector('#cross');
var menuItems = document.querySelector('.menuitems');
var x = 0;

bars.addEventListener('click', () => {
    bars.style.display = 'none';
    cross.style.display = 'block';
    menuItems.style.bottom = 0;
})
cross.addEventListener('click', () => {
    cross.style.display = 'none';
    bars.style.display = 'block';
    menuItems.style.bottom = '-100vh';
})



const servicesLink = document.querySelector('.ser');
const servicesDiv = document.querySelector('.services');

servicesLink.addEventListener('mouseover', () => {
    servicesDiv.style.visibility = 'visible';
    servicesDiv.style.opacity = 1;
});
servicesDiv.addEventListener('mouseover', () => {
    servicesDiv.style.visibility = 'visible';
    servicesDiv.style.opacity = 1;
});

servicesLink.addEventListener('mouseout', () => {
    servicesDiv.style.visibility = 'hidden';
    servicesDiv.style.opacity = 0;
});
servicesDiv.addEventListener('mouseout', () => {
    servicesDiv.style.visibility = 'hidden';
    servicesDiv.style.opacity = 0;
});

const images = document.querySelectorAll('.image');

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        gsap.to(image, {
            y: -10,
        });
    });

    image.addEventListener('mouseout', () => {
        gsap.to(image, {
            y: 0,
        });
    });
});

gsap.from(".hero-1", {
    opacity: 0,
    y: 100,
    duration: 1,
    delay: 2
});
gsap.from(".hero-2", {
    opacity: 0,
    x: 100,
    duration: 1,
    delay: 2
});
gsap.from(".hero-3", {
    opacity: 0,
    y: -100,
    duration: 1,
    delay: 2
});
gsap.from(".txt-section", {
    opacity: 0,
    duration: 0.8,
    delay: 2
});

document.querySelector(".logo img").addEventListener('mouseover', () => {
    gsap.to(".logo img", {
        scale: 0.9,
        opacity: 0.5,
    })
})
document.querySelector(".logo img").addEventListener('mouseout', () => {
    gsap.to(".logo img", {
        scale: 1,
        opacity: 1,
    })
})

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// var tl = gsap.timeline()
gsap.from('.line-1', {
    opacity: 0,
    y: 40,
    duration: 0.2,
    scrub: 2,
    scrollTrigger: {
        trigger: ".page-2",
        scroller: "body",
        start: "top 90%",
        end: "top 60%",
        scrub: 4
    }
})
gsap.from('.line-2', {
    opacity: 0,
    y: 40,
    duration: 0.2,
    scrub: 2,
    scrollTrigger: {
        trigger: ".page-2",
        scroller: "body",
        start: "top 60%",
        end: "top 40%",
        scrub: 4
    }
})
gsap.from('.about', {
    opacity: 0,
    y: 40,
    duration: 0.2,
    scrub: 2,
    scrollTrigger: {
        trigger: ".page-2",
        scroller: "body",
        start: "top 40%",
        end: "top 20%",
        scrub: 4
    }
})

gsap.from('.left', {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".page-3",
        scroller: "body",
        start: "top 60%",
        end: "top 40%",
        scrub: 4
    }
})
gsap.from('.txtcontent', {
    opacity: 0,
    y: 50,
    scrollTrigger: {
        trigger: ".right",
        scroller: "body",
        start: "top 50%",
        end: "top 30%",
        scrub: 4
    }
})
gsap.from('.des', {
    opacity: 0,
    y: 50,
    scrollTrigger: {
        trigger: ".right",
        scroller: "body",
        start: "top 30%",
        end: "top 0%",
        scrub: 4
    }
})
gsap.from('#service', {
    opacity: 0,
    y: 50,
    scrollTrigger: {
        trigger: ".right",
        scroller: "body",
        start: "top 5%%",
        end: "top 0%",
        scrub: 4
    }
})

gsap.from('#p4head', {
    opacity: 0,
    y: 50,
    scrollTrigger: {
        trigger: ".page-4",
        scroller: "body",
        start: "top 80%",
        end: "top 60%",
        scrub: 4
    }
})

gsap.from('.brands', {
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
        trigger: ".page-4",
        scroller: "body",
        start: "top 40%",
        end: "top 20%",
        scrub: 4
    }
})

gsap.from('.post', {
    opacity: 0,
    y: 50,
    scrollTrigger: {
        trigger: ".page-5",
        scroller: "body",
        start: "top 70%",
        end: "top 50%",
        scrub: 4
    }
})

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

gsap.from('.newsletter', {
    width: "30vmax",
    scrollTrigger: {
        trigger: ".page-7",
        scroller: "body",
        start: "top 80%",
        end: "top 20%",
        scrub: 4
    }
})