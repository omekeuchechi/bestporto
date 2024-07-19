let display= document.getElementById("list2");
document.getElementById("form").style.display = "none";
let icon = document.querySelector(".fa-times-circle");

display.addEventListener("click", ()=>{
    document.getElementById("form").style.visibility = "visible";
    document.getElementById("form").style.display = "block";
    // setInterval(() => {
    //     document.getElementById("form").style.display = "none";
    // }, 20000);
})

display.addEventListener("focus", ()=>{
    document.getElementById("form").style.visibility = "visible";
    document.getElementById("form").style.display = "block";
    // setInterval(() => {
    //     document.getElementById("form").style.display = "none";
    // }, 20000);
    // setTimeout(() => {
    //     document.getElementById("form").style.display = "none";
    // }, 20000);
})

// function slide() {
//     document.getElementById("list2").classList.toggle("show")
// }

// window.onclick = function(e) {
//     if (!e.target.matches('.dropbtn')) {
//         let myDropDown = display;
//         if (myDropDown.classList.contains('show')) {
//             myDropDown.classList.remove('show');
//         }
//     }
// }