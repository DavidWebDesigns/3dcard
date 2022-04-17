

//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".card_container");
//Items
const title = document.querySelector(".info_title");
const article = document.querySelector(".article img");
const mintBtn = document.querySelector(".mint_btn");
const description = document.querySelector(".info h3");
const infOptions = document.querySelector(".info_options");

//Moving Animation Event
container.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "all 0.2s ease";
    card.style.transform =  "translateZ(200px)";
//   //Popout
//   title.style.transform = "translateZ(150px)";
    article.style.transform = "perspective(1200px) translateZ(200px) rotateZ(-45deg)";
//   description.style.transform = "translateZ(125px)";
//   infOptions.style.transform = "translateZ(100px)"; //doesnt work
    mintBtn.style.transform = "perspective(1200px) translateZ(75px)";
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Popback
    title.style.transform = "translateZ(0px)";
    article.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    infOptions.style.transform = "translateZ(0px)";
    mintBtn.style.transform = "translateZ(0px)";
});