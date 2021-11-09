const nameSlide = document.querySelector('.slide_img');
const arrow = document.querySelector('.slide_nav');
const info = document.querySelector('.slide_info')

function moveSlide(num) {
    nameSlide.querySelector(".active").classList.remove("active");
    nameSlide.querySelector(".name" + num).classList.add("active");
    nameSlide.querySelector(".activeImg" ).classList.remove("activeImg");
    nameSlide.querySelector(".img" + num).classList.add("activeImg");
    arrow.querySelector(".activedot").classList.remove("activedot");
    arrow.querySelector(".dot" + num).classList.add("activedot");
    initInfo(num)    
}
initSlide()

function initSlide() {
arrow.querySelectorAll(".arrows").forEach(arrows => {
    arrows.addEventListener("click", () => {
    let curNum = nameSlide.querySelector(".active").classList[1];
    let curNum1 = parseInt(curNum.match(/\d+/));
    let nextNum;
    if (arrows.classList.contains("arrow_left")) {
        nextNum = curNum1 === 1? 3 : curNum1 - 1  
    }else{
        nextNum = curNum1 === 3? 1 : curNum1 + 1 
    }
    moveSlide(nextNum)})
})}
arrow.querySelectorAll(".dot").forEach(dot => {
    dot.addEventListener("click", () => {
        let curNum = dot.classList[1];
        curNum1 = parseInt(curNum.match(/\d+/));
        moveSlide (curNum1)
    })
})
nameSlide.querySelectorAll(".name").forEach(dot => {
    dot.addEventListener("click", () => {
        let curNum = dot.classList[1];
        curNum1 = parseInt(curNum.match(/\d+/));
        moveSlide (curNum1)
    })
})

function initInfo(num) {
    if (num === 1) {info.innerHTML = `<div class="city">CITY: 
    <p>Rostov-on-Don<br>LCD admiral</p>
</div>
<div class="apartment">APARTMENT AREA:
    <p>81 m2</p>
</div>
<div class="repair_time">REPAIR TIME:
    <p>3.5 months</p>
</div>
<div class="repair_cost">REPAIR COST:
    <p>Upon request</p>
</div>`}
    if (num === 2) {info.innerHTML = `<div class="city">CITY: 
    <p>Sochi<br>Thieves</p>
</div>
<div class="apartment">APARTMENT AREA:
    <p>105 m2</p>
</div>
<div class="repair_time">REPAIR TIME:
    <p>4 months</p>
</div>
<div class="repair_cost">REPAIR COST:
    <p>Upon request</p>
</div>`}
    if (num === 3) {info.innerHTML = `<div class="city">CITY: 
<p>Rostov-on-Don<br>Patriotic</p>
</div>
<div class="apartment">APARTMENT AREA:
<p>93 m2</p>
</div>
<div class="repair_time">REPAIR TIME:
<p>3 months</p>
</div>
<div class="repair_cost">REPAIR COST:
<p>Upon request</p>
</div>`}
}