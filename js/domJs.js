document.querySelector(".article__header").textContent = "Welcome to the Dominic blog";

var thisStuff = document.querySelectorAll(".article__header");

for(let i = 0; i < thisStuff.length; i++){
    thisStuff[i].classList = "article__header important";
}
console.log(thisStuff);

document.querySelector(".dashed").classList.remove("dashed");

document.querySelector(".article__footer").classList.add("goldenrod");