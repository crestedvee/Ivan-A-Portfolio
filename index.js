let mobileMenu = document.getElementsByClassName("dropdown")[0];
let headerView = document.getElementsByClassName("menu-child")[0];
let headerAbout = document.getElementById("header-about");
let mainBody = document.getElementById("mainBody");
let footer= document.getElementById("footer");

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



function changeVieMobileView() {
  headerView.classList.add('classHeader-nav');
}

const changeView = () => {
  if(headerView.classList.toggle('active')){
    headerAbout.style.top = "11rem";
    mainBody.style.top = "35.7rem";
    footer.style.display = "none";
  } else {
      headerAbout.style.top = "2.3rem";
      mainBody.style.top = "27rem";
      footer.style.display = "block";
  }
}


mobileMenu.addEventListener("click", changeView);

