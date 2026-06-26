/* ===========================================
   INITIALIZE AOS
=========================================== */

AOS.init({
    duration: 1000,
    once: false,
    easing: "ease-in-out"
});

/* ===========================================
   TYPING EFFECT
=========================================== */

const roles = [
    "Senior Consultant",
    "Data Engineer",
    "ETL Developer",
    "Informatica Expert",
    "SQL Developer",
    "Data Analytics Professional"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect() {

    const current = roles[roleIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex >= roles.length)
                roleIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

/* ===========================================
   COUNTER ANIMATION
=========================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const counter = entry.target;

            const target = +counter.dataset.target;

            let current = 0;

            const increment = target / 80;

            const update = () => {

                current += increment;

                if (current < target) {

                    counter.innerText = Math.floor(current);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target + "+";

                }

            }

            update();

            counterObserver.unobserve(counter);

        }

    });

});

counters.forEach(counter => counterObserver.observe(counter));

/* ===========================================
   SCROLL PROGRESS BAR
=========================================== */

const progressBar = document.getElementById("progress-bar");

window.addEventListener("scroll", () => {

    const scroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    progressBar.style.width =
        (scroll / height) * 100 + "%";

});

/* ===========================================
   BACK TO TOP BUTTON
=========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

/* ===========================================
   ACTIVE NAVIGATION
=========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ===========================================
   NAVBAR SHADOW
=========================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(5,8,22,.90)";

        navbar.style.boxShadow = "0 5px 30px rgba(0,0,0,.35)";

    } else {

        navbar.style.background = "rgba(255,255,255,.05)";

        navbar.style.boxShadow = "none";

    }

});

/* ===========================================
   SMOOTH LINKS
=========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({

                behavior: "smooth"

            });

    });

});

/* ===========================================
   PROJECT CARD TILT
=========================================== */

const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - .5) * 15;

        const rotateX = (rect.height / 2 - y) / 12;

        card.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(800px) rotateX(0) rotateY(0)";

    });

});

/* ===========================================
   FLOATING PARTICLES
=========================================== */

for (let i = 0; i < 35; i++) {

    const particle = document.createElement("span");

    particle.classList.add("particle");

    particle.style.left = Math.random() * 100 + "%";

    particle.style.animationDuration =
        8 + Math.random() * 8 + "s";

    particle.style.animationDelay =
        Math.random() * 6 + "s";

    particle.style.opacity = Math.random();

    particle.style.width =
        particle.style.height =
        Math.random() * 6 + 3 + "px";

    document.body.appendChild(particle);

}

/* ===========================================
   CURSOR GLOW
=========================================== */

const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

window.addEventListener("mousemove", e => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

/* ===========================================
   FADE HERO CONTENT
=========================================== */

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero-content");

    hero.style.opacity = 1 - window.scrollY / 700;

    hero.style.transform =
        `translateY(${window.scrollY * .25}px)`;

});

/* ===========================================
   RANDOM SKILL GLOW
=========================================== */

const skillCards = document.querySelectorAll(".skill-card");

setInterval(() => {

    skillCards.forEach(card =>

        card.style.boxShadow = "none"

    );

    const random =
        Math.floor(Math.random() * skillCards.length);

    skillCards[random].style.boxShadow =
        "0 0 35px rgba(56,189,248,.45)";

}, 1800);

/* ===========================================
   END
=========================================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

setTimeout(()=>{

document.getElementById("loader").style.display="none";

},800);

},1200);

});