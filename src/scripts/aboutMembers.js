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

}, 40)

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
