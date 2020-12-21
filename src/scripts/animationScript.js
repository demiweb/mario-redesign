let allAnimFade = [...document.querySelectorAll(".anim-fading-out")];
let allBLurFade = [...document.querySelectorAll(".blur-js")];

function checkWidthToBottom() {
    console.log('ejlloepta');
    allAnimFade.forEach((el, i) => {
        let spaceBellow = window.innerHeight - el.getBoundingClientRect().bottom + el.offsetHeight;
        let topDistance = el.getBoundingClientRect().top + el.offsetHeight;
        console.log(topDistance + 'topDistacne');
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
        console.log(topDistance);
        if (topDistance < 350 && topDistance > 0) {
            let partPercent = 53;
            let opacityPercent = 1;
            let percent = (topDistance / partPercent) / 10;

            blur.style.filter = `blur(3px)`;
            blur.style.opacity = `${percent}`;

        } else {
            blur.style.filter = `blur(0px)`;
            blur.style.opacity = `1`;


        }
    })

}

window.addEventListener('load', () => {
    console.log('che-za-prikol');
    warrantyAnim();
    checkWidthToBottom();
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