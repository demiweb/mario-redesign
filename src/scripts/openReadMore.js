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
};

//map mag
let allMapsDots = [...document.querySelectorAll('.single-mag')];
let addressCoord = [];
function goToDotMap() {
    allMapsDots.forEach((ot) => {
        let aLinkMap = ot.querySelector('.mag-on-map');
        aLinkMap.addEventListener('click', (e) => {
            e.preventDefault();
            let xCoord1 = Number(ot.dataset.locationX);
            let yCoord1 = Number(ot.dataset.locationY);
            map.panTo(new L.LatLng(xCoord1, yCoord1));
        })
    })
}

function ifHaveDots() {
    if (!allMapsDots.length) {

    } else {
        addressCoord = [];

        allMapsDots.forEach((dot) => {
            let arrInfoMag = [];
            let xCoord = Number(dot.dataset.locationX);
            let yCoord = Number(dot.dataset.locationY);

            let nameOfMag = dot.querySelector('.about-mag p strong').innerHTML;
            let linkOfMag = dot.querySelector('.about-mag a');
            let magPhone = dot.querySelector('.mag-contacts a').innerHTML;
            let detLoc = [...dot.querySelectorAll('.mag-contacts p')];
            let textPopup = `<strong>${nameOfMag}</strong><br>${magPhone}`;
            let br = '';
            detLoc.forEach((loc) => {
                br += `<br>${loc.innerHTML}`;
            })
            textPopup += br;
            textPopup += `$<br><a href=${linkOfMag.href}>${linkOfMag.innerHTML}</a>`;
            arrInfoMag.push(xCoord);
            arrInfoMag.push(yCoord);
            arrInfoMag.push(textPopup);
            // console.log(arrInfoMag);
            addressCoord.push(arrInfoMag);
        });
        createMapBuy();
    }
}
ifHaveDots();

function createMapBuy() {
    function createNewMap() {
        let divMap = document.createElement('div');
        divMap.id = 'mapid';
        document.querySelector('.map-container').appendChild(divMap);
    }
    // console.log(addressCoord);
    let mapDiv = document.querySelector('#mapid');

    if (!mapDiv) {
        createNewMap();
    } else {
        mapDiv.remove();
        createNewMap();
    }

    var tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Points &copy 2012 LINZ'
        }),
        latlng = L.latLng(-37.82, 175.24);

    var map = L.map('mapid', {center: latlng, zoom: 12, layers: [tiles]});

    var markers = L.markerClusterGroup();
    let markersPos = [];

    for (var i = 0; i < addressCoord.length; i++) {
        var a = addressCoord[i];
        var title = a[2];
        var marker = L.marker(new L.LatLng(a[0], a[1]), { title: title });
        marker.bindPopup(title);
        markers.addLayer(marker);
        markersPos.push(marker);
    }

    map.addLayer(markers);
    allMapsDots.forEach((ot, i) => {
        let aLinkMap = ot.querySelector('.mag-on-map');
        aLinkMap.addEventListener('click', (e) => {
            e.preventDefault();
            let xCoord1 = Number(ot.dataset.locationX);
            let yCoord1 = Number(ot.dataset.locationY);
            map.setView([xCoord1, yCoord1], 18);
            map.panTo(new L.LatLng(xCoord1, yCoord1));
            markersPos[i].openPopup();
        })
    })
}
//map mag