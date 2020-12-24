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

let animTemp = [...document.querySelectorAll('.safety-mario__container span')][0];
let startTemp = 15;
let endTemp = 55;
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
