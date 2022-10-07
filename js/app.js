document.addEventListener('DOMContentLoaded', () => {
//    console.log('DOM has been fully loaded')
    const selectNav = document.querySelector("#navbar__list");
    //console.log("selectNav", selectNav);
    const createList = document.createElement("li");
    //console.log("createList", createList);
    createList.setAttribute("class", "menu__link");
    //console.log("createList", createList);
/* <----------- Creating an Li on the NavBar -----------------> */   

    const createNavAnchor = document.createElement("a");
    //console.log("createNavAnchor", createNavAnchor);
    createNavAnchor.setAttribute("href", "#section4");
    //console.log("createNavAnchor", createNavAnchor);
    const selectNavText = document.querySelector("h2");
    //console.log("selectNavText", selectNavText);
    createList.textContent = selectNavText.textContent;
    createNavAnchor.innerHTML = selectNavText.textContent;
    //console.log("createNavAnchor", createNavAnchor);
/* <----------- Creating an <a> with the HTML text from H2 title section --------------> */

    createList.innerHTML = createNavAnchor.outerHTML;
    //console.log("createList", createList);
/* <------------- Setting Li Content = <a> with HTML text from h2 title section ---------> */

    selectNav.appendChild(createList);
/* <------------- Appending <li> to the <nav> NavBar ---------------> */

})