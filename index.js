let mobileMenu = document.getElementsByClassName("dropdown")[0];
let headerView = document.getElementsByClassName("menu-child")[0];
let headerAbout = document.getElementById("header-about");
let mainBody = document.getElementById("mainBody");
let footer= document.getElementById("footer");
let selectElement = document.querySelector("#toggle-button2");
let htmlBody = document.getElementById("body");
let aboutMe = document.getElementById("about-me");
let myProject = document.getElementById("my-projects");
let mySKill = document.getElementById("my-skills");
let myMainSkills = document.getElementsByClassName("m1");
let aboutMeText1 = document.getElementById("aboutMeTxt1");
let aboutMeText2 = document.getElementById("aboutMeTxt2");
let aboutMeText3 = document.getElementById("aboutMeTxt3");
let subHeader1 = document.getElementById("sub-header");
let subHeader2 = document.getElementById("sub-header2");
let subHeader3 = document.getElementById("sub-header3");
let pdetail1 = document.getElementById("project-detail1");
let pdetail2 = document.getElementById("project-detail2");
let pdetail3 = document.getElementById("project-detail3");
let pdetail4 = document.getElementById("project-detail4");


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
    htmlBody.style.opacity = "1";
    aboutMe.style.backgroundColor = "#ffffff";
    myProject.style.backgroundColor = "#ffffff";
    mySKill.style.backgroundColor = "#ffffff";
    aboutMeText1.style.color = "#282C35";
    aboutMeText2.style.color = "#282C35";
    aboutMeText3.style.color = "#282C35";
    subHeader1.style.color = "#282C35";
    subHeader2.style.color = "#282C35";
    subHeader3.style.color = "#282C35";
    pdetail1.style.backgroundColor = "transparent";
    pdetail2.style.backgroundColor = "transparent";
    pdetail3.style.backgroundColor = "transparent";
    pdetail4.style.backgroundColor = "transparent";
    for (let x=0; x < myMainSkills.length; x++){
      myMainSkills[x].style.color = "brown";
    }

  } else {
    htmlBody.style.backgroundColor = "#000000";
    htmlBody.style.opacity = "0.6";
    aboutMe.style.backgroundColor = "#282C35";
    myProject.style.backgroundColor = "#282C35";
    mySKill.style.backgroundColor = "#282C35";
    aboutMeText1.style.color = "#FFFFFF";
    aboutMeText2.style.color = "#FFFFFF";
    aboutMeText3.style.color = "#FFFFFF";
    subHeader1.style.color = "#FFFFFF";
    subHeader2.style.color = "#FFFFFF";
    subHeader3.style.color = "#FFFFFF";
    pdetail1.style.backgroundColor = "#FFFFFF";
    pdetail2.style.backgroundColor = "#FFFFFF";
    pdetail3.style.backgroundColor = "#FFFFFF";
    pdetail4.style.backgroundColor = "#FFFFFF";
    for (let x=0; x < myMainSkills.length; x++){
      myMainSkills[x].style.color = "#FFFFFF";
    }
  }
});


function changeVieMobileView() {
  headerView.classList.add('classHeader-nav');
}

const changeView = () => {
  if(headerView.classList.toggle('active')){
    headerAbout.style.top = "13rem";
    mainBody.style.top = "35.7rem";
    footer.style.display = "none";
  } else {
      headerAbout.style.top = "2.3rem";
      mainBody.style.top = "27rem";
      footer.style.display = "block";
  }
}


mobileMenu.addEventListener("click", changeView);

