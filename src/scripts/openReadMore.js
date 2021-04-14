let allOpenMoreButtons = [...document.querySelectorAll('.mario-vacancies__single-vacancy > div button')];

allOpenMoreButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.closest('.mario-vacancies__single-vacancy').classList.toggle('vacancy-more');
        if (btn.closest('.mario-vacancies__single-vacancy').classList.contains('vacancy-more')) {
            btn.innerHTML = 'Приховати';
            btn.classList.add('opened')
        } else {
            btn.innerHTML = 'Детальніше'
            btn.classList.remove('opened')

        }
    })
});

let allSelectors = [...document.querySelectorAll('.select-type > select')];
let allChecked = [...document.querySelectorAll('.select-type > span')];
function ifSelectTypeOnPage() {
    if (!allChecked.length) {

    } else {
        allSelectors.forEach((sel) => {
            let selOpt = [...sel.querySelectorAll('option')];
            selOpt.forEach((opt) => {
                let optValue = opt.value;
                let optInnerText = opt.innerText;
                let newSpan = document.createElement('span');
                newSpan.setAttribute('data-value', `${optValue}`);
                newSpan.innerHTML = optInnerText;
                opt.closest('.select-type').querySelector('.custom-selector').appendChild(newSpan);
                newSpan.addEventListener('click', () => {
                    ifHaveDots();
                    let spanInner = newSpan.innerHTML;
                    let spanValue = newSpan.dataset.value;
                    newSpan.closest('.select-type').querySelector('span').innerHTML = spanInner;
                    let event = new Event('change');
                    let suggestOpt = document.querySelector(`option[value='${spanValue}']`);
                    suggestOpt.selected = 'selected';
                    suggestOpt.setAttribute('selected', 'selected');
                    suggestOpt.click();
                    newSpan.closest('.select-type').querySelector('select').dispatchEvent(event);
                    // console.log(newSpan.closest('.select-type'));
                    if (!newSpan.closest('.select-type').querySelector('span.active')) {

                    } else {
                        newSpan.closest('.select-type').querySelector('span.active').classList.remove('active');

                    }
                    document.querySelector(`span[data-value='${spanValue}']`).classList.add('active');
                    newSpan.closest('.select-type').classList.remove('open');
                })
            })
        })

        allChecked.forEach((opener) => {
            opener.addEventListener('click', () => {
                opener.closest('.select-type').classList.toggle('open')
            })
        })
    }
}