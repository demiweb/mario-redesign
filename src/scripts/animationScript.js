let allAnimFade = [...document.querySelectorAll(".anim-fading-out")];
let allBLurFade = [...document.querySelectorAll(".blur-js")];
let allWaterFade = [...document.querySelectorAll('.production-advantage__container li')];
let allOtherFades
if (allWaterFade.length > 0) {
    allWaterFade.forEach((wf) => {
        wf.classList.add('anim-fading-out')
        allAnimFade.push(wf);
    })
}
let btnGoUp = [...document.querySelectorAll('.scroll-up')];
btnGoUp.forEach((btn) => {
    btn.addEventListener('click', () => {
        window.scrollTo(0, 0);
        btn.classList.remove('visible')
    })
})
let triggerButtonScroll = [...document.querySelectorAll('.mario-product-page__mario-same-products')];
function checkButtonScrollTop() {
    if(!btnGoUp[0]) {

    } else {
        triggerButtonScroll.forEach((trig, i) => {

            if (i === 0) {
                let distance = self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
                if (distance > 1000) {
                    btnGoUp[0].classList.add('visible');
                } else {
                    btnGoUp[0].classList.remove('visible');
                }
            }
        })
    }

}
document.onscroll = () => {
    checkButtonScrollTop();
}




function checkWidthToBottom() {
    allAnimFade.forEach((el, i) => {
        let spaceBellow = window.innerHeight - el.getBoundingClientRect().bottom + el.offsetHeight;
        let topDistance = el.getBoundingClientRect().top + el.offsetHeight;
        // console.log(topDistance + 'topDistacne');
        if (60 < spaceBellow && topDistance > 0) {
            el.style.animation = 'fadingOutTop 0.8s linear';
            el.style.animationDelay = `${(25 * i)}ms`
            let timeOut = 800 + (15 * i);
            setTimeout(() => {
                el.classList.remove('anim-fading-out');

            }, timeOut)

        }
    })

    allBLurFade.forEach((blur, k) => {
        let spaceBellow = window.innerHeight - blur.getBoundingClientRect().bottom + blur.offsetHeight;
        let topDistance = blur.getBoundingClientRect().top + blur.offsetHeight;
        // console.log(topDistance);
        if (topDistance < 250 && topDistance > 0) {
            let partPercent = 25;
            let opacityPercent = 1;
            let percent = (topDistance / partPercent) / 10;

            blur.style.filter = `blur(2px)`;
            blur.style.opacity = `${percent}`;

        } else {
            blur.style.filter = `blur(0px)`;
            blur.style.opacity = `1`;


        }
    })

}

window.addEventListener('load', () => {
    warrantyAnim();
    checkWidthToBottom();
    checkButtonScrollTop();
})

//
// window.onscroll =
//     window.onload = function () {
//         let scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
//         let boxLeft = 750 - scrollTop;
//         let percentGrad = boxLeft / 10;
//
//     }
//
// window.onscroll = function () {
//     checkWidthToBottom();
//     let scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
//     let boxLeft = 750 - scrollTop;
//     let percentGrad = boxLeft / 10;
//
// }