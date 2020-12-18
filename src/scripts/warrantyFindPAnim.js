let allP = [...document.querySelectorAll('.mario-warranty-content p')];
let allLi = [...document.querySelectorAll('.mario-warranty-content li')];
let allH = [...document.querySelectorAll('.mario-warranty-content h3')];
let allH2 = [...document.querySelectorAll('.mario-warranty-content h2')];
allP.forEach((p) => {
    p.classList.add('anim-fading-out');
    allAnimFade.push(p);
});
allH.forEach((p) => {
    p.classList.add('anim-fading-out');
    allAnimFade.push(p);
});
allH2.forEach((p) => {
    p.classList.add('anim-fading-out');
    allAnimFade.push(p);
});
allLi.forEach((p) => {
    p.classList.add('anim-fading-out');
    allAnimFade.push(p);
})