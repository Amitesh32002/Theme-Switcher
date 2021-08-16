
// Readmore 

const dots = document.querySelector(".dots");
const more = document.querySelector(".more");
const readmoreBtn = document.querySelector(".readmore")

readmoreBtn.addEventListener('click',()=>
{
    if (dots.style.display === "none") {
        dots.style.display = "block";
        readmoreBtn.innerHTML = "Read more";
        more.style.display = "none";
      } else {
        dots.style.display = "none";
        readmoreBtn.innerHTML = "Read less";
        more.style.display = "inline";
      }
})

// Theme Switcher 
const input = document.querySelector(".theme_switcher input");

input.addEventListener("change", (e) => {
    if (e.target.checked)
      document.body.setAttribute('data-theme','dark')
      else document.body.setAttribute('data-theme','light');
})

//Clock

const clockEl = document.querySelector('.clock h2');


setInterval(setclock ,1000);
function setclock()
{
    format = clockEl.getAttribute('data-format');
    const date = new Date;
    let hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

  
    clockEl.innerHTML = `${hour} : ${min} : ${sec}`
}
