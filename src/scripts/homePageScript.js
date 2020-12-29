let imgPar = [...document.querySelectorAll('.img-parall')];
// let imgBath = [...document.querySelectorAll('.mario-main__picture-bg-banner')];
let imgBathTop = [...document.querySelectorAll('.mario-main__mario-innovation')];

let parallaxImages = [...document.querySelectorAll('.img-parallax')];
let parallaxContainer = [...document.querySelectorAll('.mario-type-product-page__mario-parallax-block .container')];

function prlImg() {
    parallaxImages.forEach((img, i) => {
        let spaceBello = window.innerHeight - img.getBoundingClientRect().bottom + img.offsetHeight;

        let topDistance = img.getBoundingClientRect().top + img.offsetHeight;
        let pirce = 1;
        let imgHeight = img.offsetHeight;

        let percent = spaceBello / 100;
        console.log(topDistance + ' topdistance');
        console.log(spaceBello + ' spaceBellow');

        if (spaceBello > 200 && topDistance > -850) {
            // console.log('picture visible')
            if ((i + 1) % 2 === 0) {
                pirce = -1;
                img.style.transform = `translate(0, ${5 + pirce * percent}%)`

            } else {
                pirce = 1;
                img.style.transform = `translate(0, ${-15 + pirce * percent}%)`

            }
        }
    })
    parallaxContainer.forEach((cont) => {
        let spaceBello = window.innerHeight - cont.getBoundingClientRect().bottom + cont.offsetHeight;
        let topDistance = cont.getBoundingClientRect().top;
        if (window.innerWidth < 769) {

        } else {
            if (topDistance < -550) {
                let someNumber = -topDistance -550;
                // console.log(someNumber / 400);
                // console.log(someNumber + 'somenumber')
                let coef = someNumber / 400;
                cont.style.opacity = `${1 - coef}`;



            } else {

            }
        }


    })
}


function parallaxImg() {
    imgPar.forEach((img) => {
        let spaceBellow = window.innerHeight - img.getBoundingClientRect().bottom + img.offsetHeight;

        let topDistance = img.getBoundingClientRect().top + img.offsetHeight;

        let imgHeight = img.offsetHeight;

        let percent = spaceBellow / 35;

        if (0 < spaceBellow && topDistance > 150) {
            // console.log('picture visible')

            img.style.transform = `translate(0, ${percent}%)`
        }

    })
}

function hiddingTopBath() {
    let imgBath = [];
    if (imgBathTop[0] === undefined) {

    } else {
        imgBath = [imgBathTop[0].nextElementSibling];
    }

    imgBath.forEach((img) => {
        if (imgBathTop[0] === undefined) {
            // console.log('rabotaet-script222')

        } else {
            // console.log('rabotaet-script')
            let spaceBellow = window.innerHeight - img.getBoundingClientRect().bottom + img.offsetHeight;

            let topDistance = img.getBoundingClientRect().top + img.offsetHeight;

            let imgHeight = img.offsetHeight;

            let percent = spaceBellow / 80;
            let percentOpacity = 1 / 1000;
            // console.log(percentOpacity);
            let opacityBlock = topDistance * percentOpacity;
            // console.log(opacityBlock);
            if (window.innerWidth > 768) {
                if (0 < spaceBellow && topDistance > 1000) {
                    // console.log(spaceBellow + ' do nizu ' + topDistance + ' vverhu')
                    imgBathTop[0].style.position = 'sticky';
                    imgBathTop[0].style.opacity = `${-2 + (opacityBlock * 2)}`;
                    // console.log(window.innerWidth + 'shirina okna')

                } else if (topDistance < 600) {
                    imgBathTop[0].style.position = 'static';
                    imgBathTop[0].style.opacity = '1';

                }
            } else {
                imgBathTop[0].style.position = 'static';
                imgBathTop[0].style.opacity = '1';

            }
        }
    })
}


const videosBlock = [...document.querySelectorAll('.mario-products-type__single-type')];

// function checkWidthToBottom() {
//     allAnimFade.forEach((el, i) => {
//         let spaceBellow = window.innerHeight - el.getBoundingClientRect().bottom + el.offsetHeight;
//         let topDistance = el.getBoundingClientRect().top + el.offsetHeight;
//         if (60 < spaceBellow && topDistance > 250) {
//             el.style.animation = 'fadingOutTop 0.8s linear';
//             el.style.animationDelay = `${(25 * i)}ms`
//             let timeOut = 800 + (20 * i);
//             setTimeout(() => {
//                 el.classList.remove('anim-fading-out');
//
//             }, timeOut)
//
//         }
//     })
// }

window.addEventListener('load', () => {
    checkWidthToBottom();
    parallaxImg();
    hiddingTopBath();
    checkTempWidth();
    prlImg();
})

videosBlock.forEach(videoBlock => {
    let video = [...videoBlock.querySelectorAll('video')][0];
    videoBlock.addEventListener("mouseover", function () {
        video.play()
    })
    videoBlock.addEventListener("mouseout", function () {
        video.pause();
    })
    videoBlock.addEventListener("touchstart", function () {
        video.play()
    })
    videoBlock.addEventListener("touchend", function () {
        video.pause()
    })
})


let afterBlock = [...document.querySelectorAll('.mario-main__mario-safety')][0];
let afterBath = [...document.querySelectorAll('.mario-main__picture-bg-banner')][0];
let videoBlock = [...document.querySelectorAll('.mario-main__mario-innovation')][0];
let videoVideo = [...document.querySelectorAll('.mario-main__mario-innovation video')][0];
let safetyP = [...document.querySelectorAll('.mario-main__mario-safety p')][0];
let afterBlockBg = [...document.querySelectorAll('.mario-safety__bg-dark')][0];
let afterBlockBg2 = [...document.querySelectorAll('.mario-safety__bg-dark')][1];

let currentBgHeader = '';
let currentBgAfter = '0.0';


function isInViewport() {
    function getVideoBlock() {
        if (videoBlock === undefined) {

        } else {
            if (afterBath === undefined) {

            } else {

                let vB = videoBlock.getBoundingClientRect();

                if (578 < document.body.clientWidth && document.body.clientWidth < 768) {
                    if (vB.top < 500 && -400 < vB.top) {
                        videoVideo.play();

                    } else {
                        videoVideo.pause();

                    }
                } else if (document.body.clientWidth < 578) {
                    if (vB.top < 400 && -300 < vB.top) {
                        videoVideo.play();

                    } else {
                        videoVideo.pause();

                    }
                } else {
                    if (vB.top < 500 && -500 < vB.top) {
                        videoVideo.play();

                    } else {
                        videoVideo.pause();

                    }
                }
            }

        }
    }

    function getBgDark() {
        if (afterBath === undefined) {

        } else {
            if (afterBlockBg2 === undefined) {

            } else {
                let h = afterBlock.scrollHeight;

                let rect = afterBath.getBoundingClientRect();
                if (578 < document.body.clientWidth && document.body.clientWidth < 768) {
                    if (rect.top < 22) {
                        let opacityBg = ((-rect.top + 80) / h) * 1.4;
                        if (opacityBg > 1) {
                            afterBlockBg2.style.opacity = '1';
                        } else {
                            afterBlockBg2.style.opacity = opacityBg;
                        }
                    } else {
                        afterBlockBg2.style.opacity = '0';
                    }
                } else if (document.body.clientWidth < 578) {
                    if (rect.top < -200) {
                        let opacityBg = ((-rect.top) / h) * 1.2;
                        if (opacityBg > 1) {
                            afterBlockBg2.style.opacity = '1';
                        } else {
                            afterBlockBg2.style.opacity = opacityBg;
                        }

                    } else {
                        afterBlockBg2.style.opacity = '0';
                    }
                } else {
                    if (rect.top < -300) {
                        let opacityBg = ((-rect.top) / h) * 1.6;
                        if (opacityBg > 1) {
                            afterBlockBg2.style.opacity = '1';
                        } else {
                            afterBlockBg2.style.opacity = opacityBg;
                        }


                    } else {
                        afterBlockBg2.style.opacity = '0';
                    }
                }
            }

        }
    }

    if (afterBlock === undefined) {
        getVideoBlock();
        getBgDark();
    } else {

        let rect = afterBlock.getBoundingClientRect();
        // let vB = videoBlock.getBoundingClientRect();
        let h = afterBlock.scrollHeight;


        if (578 < document.body.clientWidth && document.body.clientWidth < 768) {
            if (rect.top < 80) {
                let opacityBg = ((-rect.top + 30) / h) * 1.6;
                if (opacityBg > 1) {
                    afterBlockBg.style.opacity = '1';
                    safetyP.style.opacity = '0';
                } else {
                    afterBlockBg.style.opacity = opacityBg;
                    safetyP.style.opacity = 1 - opacityBg;
                }
            } else {
                afterBlockBg.style.opacity = '0';
                safetyP.style.opacity = '1';
            }
            getVideoBlock();
            getBgDark();
        } else if (document.body.clientWidth < 578) {
            if (rect.top < -105) {
                let opacityBg = ((-rect.top) / h) * 1.6;
                if (opacityBg > 1) {
                    afterBlockBg.style.opacity = '1';
                    safetyP.style.opacity = '0';
                } else {
                    afterBlockBg.style.opacity = opacityBg;
                    safetyP.style.opacity = 1 - opacityBg;
                }

            } else {
                afterBlockBg.style.opacity = '0';
                safetyP.style.opacity = '1';
            }
            getVideoBlock();
            getBgDark();
        } else {
            if (rect.top < -320) {
                let opacityBg = ((-rect.top - 150) / h) * 1.6;
                if (opacityBg > 1) {
                    afterBlockBg.style.opacity = '1';
                    safetyP.style.opacity = '0';
                } else {
                    afterBlockBg.style.opacity = opacityBg;
                    safetyP.style.opacity = 1 - opacityBg;
                }


            } else {
                afterBlockBg.style.opacity = '0';
                safetyP.style.opacity = '1';
            }
            getVideoBlock();
            getBgDark();
        }
    }
}

// window.onscroll =
//     window.onload = function () {
//         let scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
//         let boxLeft = 750 - scrollTop;
//         let percentGrad = boxLeft / 10;
//
//     }

window.onscroll = function () {
    isInViewport();
    checkWidthToBottom();
    parallaxImg();
    prlImg();
    hiddingTopBath();
    checkTempWidth();
    let scrollTop = window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    let boxLeft = 750 - scrollTop;
    let percentGrad = boxLeft / 10;

}
let wordToChange = [...document.querySelectorAll('.mario-main__mario-innovation h2 strong')][0];

function changeWord() {
    if (wordToChange === undefined) {

    } else {
        let currentArrayNumber = 0;
        let wordsArray = ['час', 'температуру'];
        setInterval(() => {
            if (currentArrayNumber === 0) {
                currentArrayNumber = 1;

                wordToChange.innerHTML = wordsArray[currentArrayNumber];
                // wordToChange.style.animation = 'fadingOpacityOut 4s linear infinite';

                return currentArrayNumber;
            } else if (currentArrayNumber === 1) {
                currentArrayNumber = 0;
                wordToChange.innerHTML = wordsArray[currentArrayNumber];
                return currentArrayNumber;

            }
        }, 4000)
    }

}

changeWord();