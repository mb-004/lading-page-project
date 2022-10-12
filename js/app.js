document.addEventListener('DOMContentLoaded', () => {
/* <----------- Creating an Li on the NavBar & Appending it -----------------> */     
    const createNavBar = () => {
    const selectNav = document.querySelector("#navbar__list");
    const createList = document.createElement("li");
    createList.setAttribute("class", "menu__link");
    
    selectNav.appendChild(createList);
    return createList;
    }

/* <-------------- Extracting HTML H2 text to Create an Array ----------------> */
    const selectingTitles = document.querySelectorAll("h2");
    const createTitleArray = Array.from(selectingTitles, (element) => element.textContent);

/* ----------> select #section, create an array with it & looping to add # for scroll -----> */
    const selectIds = document.querySelectorAll("section");
    const createIdArray = Array.from(selectIds, (id) => id.id);
    for (let i = 0; i < createIdArray.length; i++) {
        createIdArray[i] = "#" + createIdArray[i];    
    }

/* <---- Creating an <a> with the HTML text from H2 title section & Adding it to NavBar ------> */
    createTitleArray.forEach( (title, index) => {
        const id = createIdArray[index];

        const createList = createNavBar ();
        
        const createNavAnchor = document.createElement("a");
        createNavAnchor.href = id;
        createNavAnchor.innerHTML = title;
        createList.append(createNavAnchor);
    })

    
/* <-------------- add Event Listener for Sucessful form Submission Message ----------------> */    
    const selectForm = document.querySelector("form");

    selectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("You're submission has been received!");        
    })

/* <------------ Setting Active Class on Scrolling though the sections ---------------> */
    window.addEventListener("scroll", () => {
        selectIds.forEach( section => {
        const distanceViewport = section.getBoundingClientRect().top;
        if (distanceViewport > 0 && distanceViewport < 100) {
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
        });
    });

/*---------------- functions to activate smooth scroll from Nav to Section ----------------> */

    const menuLinks = document.querySelectorAll(".navbar__menu a");
    
    function distanceTopViewport (element) {
        const url = element.getAttribute("href");
        return document.querySelector(url).offsetTop;
    }

    function scrollingBehaviour (distanceFromTop) {
        window.scroll({
            top: distanceFromTop,
            behavior: "smooth",
        })
    }

    function scrollToSection(event) {
        event.preventDefault();
        const distanceFromTheTop = distanceTopViewport(event.target);
        scrollingBehaviour(distanceFromTheTop);
    }

    menuLinks.forEach((link) => {
        link.addEventListener("click", scrollToSection)
    })


})
