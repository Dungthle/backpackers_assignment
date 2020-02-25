const link =
    "https://spreadsheets.google.com/feeds/list/1KUUS60hB30lyP2puoffj-KusIJlhi0F7me8zyiOz_Vo/od6/public/values?alt=json";
window.addEventListener("DOMContentLoaded", getData);

function getData() {
    fetch(link)
        .then(res => res.json())
        .then(handleData);
}

function handleData(data) {
    const myData = data.feed.entry;
    console.log("myData - console");
    console.log(myData);
    myData.forEach(showData);
}

function showData(singleRowData) {
    console.log('singleRowData - console');
    console.log(singleRowData.gsx$europe.$t);
    console.log(singleRowData.gsx$countryimg.$t);

    const template = document.querySelector('template').content;
    const clone = template.cloneNode(true);
    const h2 = clone.querySelector('h2');
    h2.textContent = singleRowData.gsx$europe.$t;

//    const a = clone.querySelector('a');
 //    a.textContent = singleRowData.gsx$link.$t;
 //    console.log(singleRowData.gsx$link.$t)


    clone.querySelector(".country").style.backgroundImage =
        `url("img/${singleRowData.gsx$countryimg.$t}.jpg")`;


    const p = clone.querySelector('.euro-p');
    p.textContent = singleRowData.gsx$shortdescripstion.$t;
    console.log(singleRowData.gsx$shortdescripstion.$t)


    document.querySelector('main').appendChild(clone);
}
