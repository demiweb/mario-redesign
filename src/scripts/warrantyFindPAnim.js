
function warrantyAnim () {
    let allP = [...document.querySelectorAll('main.main-payment-page p')];
    let allLi = [...document.querySelectorAll('main.main-payment-page li')];
    let allH = [...document.querySelectorAll('main.main-payment-page h3')];
    let allH2 = [...document.querySelectorAll('main.main-payment-page h2')];
    let allAnimFadeWarranty = [...document.querySelectorAll('.anim-fading-out')]
    // allAnimFadeWarranty.forEach((p) => {
    //     p.classList.add('anim-fading-out');
    //     allAnimFade.push(p);
    // })
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
    });
    checkWidthToBottom();

}