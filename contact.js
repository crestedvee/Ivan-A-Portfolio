let mobileMenu = document.getElementsByClassName("dropdown")[0];
let headerView = document.getElementsByClassName("menu-child")[0];
let headerAbout = document.getElementById("header-about");
let contactBody = document.getElementById("main-body");
let footer = document.getElementById("footer");
let selectElement = document.querySelector("#toggle-button2");
let htmlBody = document.getElementById("body");

(function() {
  let i = 0;
  let pics = ["img12.jpeg", "img26.jpeg", "img28.jpeg", "img29.jpeg"];
  let el = document.getElementById('header-bg'); 
  function toggle() {
    el.src = pics[i]; 
    i = (i + 1) % pics.length; 
  }
  setInterval(toggle, 9000);
})();;



selectElement.addEventListener("change", (e) => {
  const value = e.target.value;

  if (value === "light") {
    htmlBody.style.backgroundColor = "brown";
  } else {
    htmlBody.style.backgroundColor = "#000000";
  }
});

function changeVieMobileView() {
  headerView.classList.add('classHeader-nav');
}

const changeView = () => {
  if(headerView.classList.toggle('active')){
    headerAbout.style.top = "9rem";
    contactBody.style.top = "33.7rem";
    footer.style.display = "none";
   // footerSection.style.top = "192rem";
  } else {
      headerAbout.style.top = "2.3rem";
      contactBody.style.top = "27rem";
      footer.style.display = "block";
  //  footerSection.style.top = "182rem";
  }
}


mobileMenu.addEventListener("click", changeView);