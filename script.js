// -------------------SCROLL DISAPPEAR ANIMATION-------------------
const observer = new IntersectionObserver(function(entries)
{
    entries.forEach(function(entry)
    {
        console.log(entry.target, entry.isIntersecting);
        if(entry.isIntersecting)
        {
            entry.target.classList.add('visible');
        }

        else
        {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.4, rootMargin: '-60px 0px 0px 0px' });

const revealElements = document.querySelectorAll('.reveal');
revealElements.forEach(function(el)
{
    observer.observe(el);
});

// -------------------TYPING HOME SECTION ANIMATION-------------------
const typingEl = document.getElementById('typing-animation');
if(typingEl)
{
    const lines = 
    [
        'IT Major & Computer Science Minor',
        'Frontend Developer & UX Designer',
        'Hardware & Systems Enthusiast',
        'Driven by Curiosity, Code, & Something New'
    ];

    let lineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    setTimeout(type, 100);

    function type()
    {
        const currentLine = lines[lineIndex];

        if(!isDeleting)
        {
            charIndex++;
        }
        else
        {
            charIndex--;
        }

        typingEl.textContent = currentLine.slice(0, charIndex);

        if(!isDeleting && charIndex === currentLine.length)
        {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }

        if(isDeleting && charIndex === 0)
        {
            lineIndex++;
            isDeleting = false;
            if(lineIndex == lines.length)
            {
                lineIndex = 0;
            }
            setTimeout(type, 300);
            return;
        }

        setTimeout(type, isDeleting ? 50 : 75);
    }
}

// -------------------SLOT MACHINE ANIMATION-------------------
const slotEl = document.getElementById('slot-text-animation');
if(slotEl)
{
    const slotMachineItems = 
    [
        'Oppertunities',
        'Careers',
        'Internships',
        'Projects'
    ];

    let currentItem = 0;
    slotEl.textContent = slotMachineItems[0];

    function cycleSlot()
    {
        slotEl.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(function()
        {
            slotEl.style.animation = 'none';
            slotEl.offsetHeight;
            currentItem++;
            if(currentItem == slotMachineItems.length)
            {
                currentItem = 0;
            }
            slotEl.textContent = slotMachineItems[currentItem];
            slotEl.style.animation = 'slideIn 0.3s ease forwards';
        }, 300);
    }
    setInterval(cycleSlot, 3000);
}

// -------------------COPY EMAIL FUNCTION-------------------
const copyEmail = document.getElementById('copy-email');
if(copyEmail)
{
    copyEmail.addEventListener('click', function() 
    {
        navigator.clipboard.writeText('jeremyalston7@gmail.com');
        document.getElementById('copy-confirm').style.opacity = '1';
        setTimeout(function()
        {
            document.getElementById('copy-confirm').style.opacity = '0';
        }, 2000);
    });
}

// -------------------MOUSE TRACKING GRADIENT-------------------
const cards = document.querySelectorAll('.skill-card, .projects-card, .gradient-feature-border, #gradient-demo-box');
if(cards.length > 0)
{
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

    function updateMobileGradients()
    {
        const viewportCenterX = window.innerWidth / 2;
        const viewportCenterY = window.innerHeight / 2;

        cards.forEach(function(card)
        {
            const rect = card.getBoundingClientRect();
            const x = viewportCenterX - rect.left;
            const y = viewportCenterY - rect.top;
            card.style.background = `radial-gradient(circle at ${x}px ${y}px, #00f0ff, #bf5fff 40%, transparent 1200px)`;
        });
    }

    if(isTouchDevice)
    {
        updateMobileGradients();
        window.addEventListener('scroll', updateMobileGradients);
    }
    else
    {
        cards.forEach(function(card)
        {
            card.addEventListener('mousemove', function(e)
            {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.background = `radial-gradient(circle at ${x}px ${y}px, #00f0ff, #bf5fff 40%, transparent 1200px)`;
            });

            card.addEventListener('mouseleave', function()
            {
                card.style.background = 'rgba(0, 51, 255, 0.3)';
            });
        });
    }
}

// -------------------WAVE TEXT ANIMATION-------------------
const waveText = document.getElementById('wave-text');
if(waveText) 
{
    const letters = waveText.textContent.split('');
    waveText.textContent = '';
    letters.forEach(function(letter, index) 
    {
        const span = document.createElement('span');
        span.textContent = letter === ' ' ? '\u00A0' : letter;
        span.classList.add('wave-letter');
        span.style.animationDelay = (index * 0.05) + 's';
        waveText.appendChild(span);
    });
}

// -------------------SCROLL NAVIGATION ARROWS-------------------
const indexSections = 
[
    '#home', '#skills', '#prof-bar-section', 
    '#projects', '#about', '#contact'
];

const featureSections = 
[
    '#feature-home', '#feature-section', '#gradient-demo', '#typing-demo', '#slot-demo',
    '#wave-demo', '#orb-scroll-demo', '#prof-bar-demo'
];

const sections = document.querySelector('#home') 
    ? indexSections 
    : featureSections;

let currentSection = 0;

const scrollUp = document.getElementById('scroll-up');
const scrollDown = document.getElementById('scroll-down');

if(scrollUp && scrollDown) 
{
    scrollUp.addEventListener('click', function() 
    {
        if(currentSection > 0) 
        {
            currentSection--;
        }
        document.querySelector(sections[currentSection]).scrollIntoView({ behavior: 'smooth' });
    });

    scrollDown.addEventListener('click', function() 
    {
        if(currentSection < sections.length - 1) 
        {
            currentSection++;
        }
        document.querySelector(sections[currentSection]).scrollIntoView({ behavior: 'smooth' });
    });
}

// -------------------PROFICIENCY BARS ANIMATION-------------------
const bars = document.querySelectorAll('.track-border div');

if(bars.length > 0) 
{
    const barObserver = new IntersectionObserver(function(entries) 
    {
        entries.forEach(function(entry) 
        {
            if(entry.isIntersecting) 
            {
                entry.target.style.width = entry.target.dataset.width;
            } 
            
            else 
            {
                entry.target.style.width = '0';
            }
        });
    }, { threshold: 0.3 });

    bars.forEach(function(bar) 
    {
        barObserver.observe(bar);
    });
}

// -------------------HAMBURGER MENU-------------------
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileOverlay = document.getElementById('mobile-menu-overlay');

if(hamburger && mobileMenu && mobileOverlay)
{
    function openMenu()
    {
        hamburger.classList.add('open');
        mobileMenu.classList.add('open');
        mobileOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu()
    {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        mobileOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    hamburger.addEventListener('click', function()
    {
        if(mobileMenu.classList.contains('open'))
        {
            closeMenu();
        }
        else
        {
            openMenu();
        }
    });

    // Close menu when overlay is clicked
    mobileOverlay.addEventListener('click', closeMenu);

    // Close menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function(link)
    {
        link.addEventListener('click', closeMenu);
    });
}

// -------------------FEATURES PAGE TYPING DEMO-------------------
const typingDemo = document.getElementById('typing-animation-demo');
if(typingDemo) 
{
    const demoLines = 
    [
        'This is sentence number 1',
        'Now it is sentence number 2',
        'And finally sentence number 3'
    ];

    let demoLineIndex = 0;
    let demoCharIndex = 0;
    let demoDeleting = false;

    function typeDemo() 
    {
        const currentLine = demoLines[demoLineIndex];

        if(!demoDeleting) 
        {
            demoCharIndex++;
        } 
        
        else 
        {
            demoCharIndex--;
        }

        typingDemo.textContent = currentLine.slice(0, demoCharIndex);

        if(!demoDeleting && demoCharIndex === currentLine.length) 
        {
            demoDeleting = true;
            setTimeout(typeDemo, 1000);
            return;
        }

        if(demoDeleting && demoCharIndex === 0) 
        {
            demoLineIndex++;
            demoDeleting = false;
            if(demoLineIndex == demoLines.length) 
            {
                demoLineIndex = 0;
            }
            setTimeout(typeDemo, 300);
            return;
        }

        setTimeout(typeDemo, demoDeleting ? 50 : 75);
    }

    setTimeout(typeDemo, 100);
}

// -------------------SLOT MACHINE ANIMATION DEMO-------------------
const slotDemo = document.getElementById('slot-text-animation-demo');
if(slotDemo)
{
    const slotMachineItemsDemo = 
    [
        'String 1',
        'String 2',
        'String 3',
        'String 4'
    ];

    let currentItemDemo = 0;
    slotDemo.textContent = slotMachineItemsDemo[0];

    function cycleSlotDemo()
    {
        slotDemo.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(function()
        {
            slotDemo.style.animation = 'none';
            slotDemo.offsetHeight;
            currentItemDemo++;
            if(currentItemDemo == slotMachineItemsDemo.length)
            {
                currentItemDemo = 0;
            }
            slotDemo.textContent = slotMachineItemsDemo[currentItemDemo];
            slotDemo.style.animation = 'slideIn 0.3s ease forwards';
        }, 300);
    }
    setInterval(cycleSlotDemo, 3000);
}

// -------------------WAVE TEXT ANIMATION DEMO-------------------
const waveTextDemoHighIntense = document.getElementById('wave-demo-high-intense');
if(waveTextDemoHighIntense) 
{
    const letters = waveTextDemoHighIntense.textContent.split('');
    waveTextDemoHighIntense.textContent = '';
    letters.forEach(function(letter, index) 
    {
        const span = document.createElement('span');
        span.textContent = letter === ' ' ? '\u00A0' : letter;
        span.classList.add('wave-letter-demo-high-intense');
        span.style.animationDelay = (index * 0.05) + 's';
        waveTextDemoHighIntense.appendChild(span);
    });
}

// -------------------PROFICIENCY BAR DEMO-------------------
const profBarDemoFills = document.querySelectorAll('.prof-bar-demo-fill');
if(profBarDemoFills.length > 0)
{
    const barSteps =
    [
        ['20%', '75%', '40%', '90%', '15%', '60%'],
        ['65%', '30%', '85%', '10%', '55%', '80%'],
        ['45%', '95%', '25%', '70%', '35%', '50%'],
        ['80%', '15%', '60%', '40%', '95%', '25%'],
        ['10%', '55%', '85%', '30%', '70%', '45%']
    ];

    profBarDemoFills.forEach(function(fill, i)
    {
        const steps = barSteps[i];
        let stepIndex = 0;

        function animateBar()
        {
            stepIndex = (stepIndex + 1) % steps.length;
            fill.style.width = steps[stepIndex];
            fill.parentElement.previousElementSibling.textContent = steps[stepIndex];
            setTimeout(animateBar, 1500);
        }

        setTimeout(animateBar, i * 400);
    });
}