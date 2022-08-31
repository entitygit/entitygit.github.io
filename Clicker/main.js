let num = 0;

let h1 = document.getElementById('inbank');
let cookie = document.getElementById('cookie');

cookie.onclick = function() {
    num++;
    h1.innerText = Math.floor(num);
}

// Buildings

let cursor = document.getElementById('cursor');
let grandma = document.getElementById('grandma');
let farm = document.getElementById('farm');
let mine = document.getElementById('mine');

let cursorcount = 0;
let grandmacount = 0;
let farmcount = 0;
let minecount = 0;

let cursorprice = 15;
let grandmaprice = 100;
let farmprice = 1100;
let mineprice = 12000;

cursor.setAttribute("count", cursorcount);
grandma.setAttribute("count", grandmacount);
farm.setAttribute("count", farmcount);
mine.setAttribute("count", minecount);

cursor.setAttribute("price", cursorprice);
grandma.setAttribute("price", grandmaprice);
farm.setAttribute("price", farmprice);
mine.setAttribute("price", mineprice);

cursor.onclick = function() {
    if(num >= cursorprice) {
        cursorcount++;
        num -= cursorprice;
        cursorprice = 15 * (1.15 ** cursorcount);
    }
    cursor.setAttribute("count", cursorcount);
    cursor.setAttribute("price", Math.ceil(cursorprice));
}
grandma.onclick = function() {
    if(num >= grandmaprice) {
        grandmacount++;
        num -= grandmaprice;
        grandmaprice = 100 * (1.15 ** grandmacount);
    }
    grandma.setAttribute("count", grandmacount);
    grandma.setAttribute("price", Math.ceil(grandmaprice));
}
farm.onclick = function() {
    if(num >= farmprice) {
        farmcount++;
        num -= farmprice;
        farmprice = 1100 * (1.15 ** farmcount);
    }
    farm.setAttribute("count", farmcount);
    farm.setAttribute("price", Math.ceil(farmprice));
}
mine.onclick = function() {
    if(num >= mineprice) {
        minecount++;
        num -= mineprice;
        mineprice = 1200 * (1.15 ** minecount);
    }
    mine.setAttribute("count", minecount);
    mine.setAttribute("price", Math.ceil(mineprice));
}

// CPS

setInterval(function () {
    num += (cursorcount * .1) + (grandmacount) + (farmcount * 8) + (minecount * 47);
    h1.innerText = Math.floor(num);
}, 1000);
