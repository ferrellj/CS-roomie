

let caseStudiesLink = document.querySelector("#csLink");
let caseStudiesSection = document.querySelector("#casestudies");

caseStudiesLink.addEventListener("click",navigatecs,false);
function navigatecs(e){
  caseStudiesSection.scrollIntoView({
    behavior:"smooth"});
}
let contactLink = document.querySelector("#contactLink");
let contactSection = document.querySelector("#contact");

contactLink.addEventListener("click",navigateContactInfo,false);
function navigateContactInfo(e){
  contactSection.scrollIntoView({
    behavior:"smooth"
  });
}



const togglebutton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navLinks')[0]

togglebutton.addEventListener('click',()=> {
  navbarLinks.classList.toggle('active')
});

let backgroundLink = document.querySelector("#backgroundLink");
let background = document.querySelector("#background");

backgroundLink.addEventListener("click", navigatebackground, false);
function navigatebackground(e){
  background.scrollIntoView({
    behavior:"smooth"
  });
}
let researchLink = document.querySelector("#researchLink");
let research = document.querySelector("#research");

researchLink.addEventListener("click", navigateresearch, false);
function navigateresearch(e){
 research.scrollIntoView({
    behavior:"smooth"
  });
}
let problemLink = document.querySelector("#problemLink");
let problem = document.querySelector("#problem");

problemLink.addEventListener("click", navigateproblem, false);
function navigateproblem(e){
  problem.scrollIntoView({
    behavior:"smooth"
  });
}
let testingLink = document.querySelector("#testingLink");
let testing = document.querySelector("#testing");

testingLink.addEventListener("click", navigatetesting, false);
function navigatetesting(e){
  testing.scrollIntoView({
    behavior:"smooth"
  });
}
let prototypeLink = document.querySelector("#prototypeLink");
let prototype = document.querySelector("#prototype");

prototypeLink.addEventListener("click", navigateprototype, false);
function navigateprototype(e){
  prototype.scrollIntoView({
    behavior:"smooth"
  });
}