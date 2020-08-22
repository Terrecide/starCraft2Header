function addEventListeners() {
    let btnsHeader = document.getElementsByClassName("nav-link");
    let btnsSubheader = document.getElementsByClassName("nav-link-subheader");
    let allButtons = [...btnsHeader, ...btnsSubheader];
    for (let i = 0; i < allButtons.length; i++) {
      allButtons[i].addEventListener("click", function() {
        addEventListenerLogic.call(this);
      });
    }
}
addEventListeners();

function addEventListenerLogic() {
    let activeElements = document.getElementsByClassName("active");
    if (this.classList.contains('nav-link')) {
        let navBarSubHeader = document.getElementById('nav-bar-subheader');
        if (activeElements[0]) {
            activeElements[0].classList.remove('active');
        }
        if (this.getAttribute("href") === '#collections') {
            navBarSubHeader.classList.remove('hide','fade-out');
            navBarSubHeader.classList.add('fade-in')
        } else {
            navBarSubHeader.classList.add('fade-out');
            navBarSubHeader.classList.remove('fade-in');
            clearActiveOnSubheader(activeElements);
            setTimeout(()=> {
                if (navBarSubHeader.classList.contains('fade-out')) {
                    navBarSubHeader.classList.add('hide');
                }
            }, 1000)
        }
    } else if (activeElements.length) {
        clearActiveOnSubheader(activeElements);
    }
    this.classList.add('active');
}

function clearActiveOnSubheader (activeElements) {
    for (let index = 0; index < activeElements.length; index++) {
        let element = activeElements[index];
        if (element.classList.contains('nav-link-subheader')) {
            element.classList.remove('active');
        }
    }
}