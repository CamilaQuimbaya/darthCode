// Please comment on the functionlity of code

const marker = document.querySelector("#marker")
const item = document.querySelectorAll("ul li a");

function indicator(e){
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
  
}

item.forEach(link =>{
  link.addEventListener("mousemove", (e) =>{
    indicator(e.target);
  })
})