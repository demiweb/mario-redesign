let animNumber = [...document.querySelectorAll('.try-to-up')][0];
let marioMembers = [...document.querySelectorAll('.team-members__mario-member')];
let fisrtNumb = 1180;

setInterval(() => {
    if (!animNumber) {

    } else {
        if (fisrtNumb !== 1254) {
            fisrtNumb++;
            animNumber.innerHTML = `${fisrtNumb}+`;
        } else {
            fisrtNumb = 1254;
        }
        return fisrtNumb
    }

}, 40);

let animTemp = [...document.querySelectorAll('.safety-mario__container span strong')][0];
let startTemp = 15;
let endTemp = 44;
let timer;
function checkTempWidth() {
    if (!animTemp) {

    } else {

        let el = animTemp;
        function interval() {
            if (startTemp !== endTemp) {
                startTemp++;
                animTemp.innerHTML = `${startTemp}`;
            } else if (startTemp === endTemp){
                console.log('hi')
                timer = clearInterval(timer);
                // animTemp.style.color = '#fa8100';
                animTemp.style.textShadow = '0 0 6px #fa8100';
            }
        }
        let spaceBellow = window.innerHeight - el.getBoundingClientRect().bottom + el.offsetHeight;
        let topDistance = el.getBoundingClientRect().top + el.offsetHeight;
        // console.log(topDistance + 'topDistacne');
        if (60 < spaceBellow && topDistance > 0) {

            if (!timer)
                timer = setInterval(interval, 55);

        } else {

        }

    }
}



function marioMembersBlur() {
    if (!marioMembers) {

    } else {
        marioMembers.forEach((mm) => {
            mm.classList.add('blur-js');
            allBLurFade = [...document.querySelectorAll('.blur-js')]
        });
    }

}

marioMembersBlur();

let imgComparation = [...document.querySelectorAll('.find-color__change-bath-color ul li')]

imgComparation.forEach((img, i) => {
    img.addEventListener('mouseover', () => {
        if (document.body.clientWidth < 578) {

        } else {
            imgComparation.forEach((img2, k) => {
                if (i === k) {
                    imgComparation[i].style.zIndex = '4';
                    imgComparation[i].style.width = 'calc((100% / 3) * 2)';
                } else {
                    img2.style.zIndex = '2';
                    img2.style.width = 'calc((100% / 3) / 2)';
                    img2.querySelector('p').style.opacity = '0';
                }
            })
        }





    });
    img.addEventListener('mouseout', () => {
        if (document.body.clientWidth < 578) {

        } else {
            imgComparation.forEach((img2, k) => {
                img2.style.width = 'calc(100% / 3)';
                img2.querySelector('p').style.opacity = '1';
            })
            img.style.zIndex = '3';
            setTimeout(() => {
                img.style.zIndex = '2'
            }, 1000)
        }

    })
});
let videoHoverCont;
let videoHover = [...document.querySelectorAll('.for-video-class')][0];
if (!videoHover) {

} else {
    videoHoverCont = videoHover.closest('.team-members__mario-member');
    videoHoverCont.addEventListener('mouseover', () => {
        videoHoverCont.querySelector('video').play();

    })
    videoHoverCont.addEventListener('mouseout', () => {
        videoHoverCont.querySelector('video').pause();
        videoHoverCont.querySelector('video').currentTime = 0;

    });
}

