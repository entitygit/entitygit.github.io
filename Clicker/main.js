let counts;
if (localStorage.getItem("counts"))
    counts = JSON.parse(localStorage.getItem("counts"));
else
    counts = {
        cookies: 0,
        cursors: 0,
        grandmas: 0,
        farms: 0,
        mines: 0
    };

let h1 = document.getElementById('inbank');
let cookie = document.getElementById('cookie');

cookie.onclick = function() {
    counts.cookies++;
    h1.innerText = Math.floor(counts.cookies);
}

// Buildings

let cursor = document.getElementById('cursor');
let grandma = document.getElementById('grandma');
let farm = document.getElementById('farm');
let mine = document.getElementById('mine');

let cursorprice = 15 * (1.15 ** counts.cursors);
let grandmaprice = 100 * (1.15 ** counts.grandmas);
let farmprice = 1100 * (1.15 ** counts.farms);
let mineprice = 12000 * (1.15 ** counts.mines);

cursor.setAttribute("count", counts.cursors);
grandma.setAttribute("count", counts.grandmas);
farm.setAttribute("count", counts.farms);
mine.setAttribute("count", counts.mines);

cursor.setAttribute("price", cursorprice);
grandma.setAttribute("price", grandmaprice);
farm.setAttribute("price", farmprice);
mine.setAttribute("price", mineprice);

cursor.onclick = function() {
    if(counts.cookies >= cursorprice) {
        counts.cursors++;
        counts.cookies -= cursorprice;
        cursorprice = 15 * (1.15 ** counts.cursors);
    }
    cursor.setAttribute("count", counts.cursors);
    cursor.setAttribute("price", Math.ceil(cursorprice));
}
grandma.onclick = function() {
    if(counts.cookies >= grandmaprice) {
        counts.grandmas++;
        counts.cookies -= grandmaprice;
        grandmaprice = 100 * (1.15 ** counts.grandmas);
    }
    grandma.setAttribute("count", counts.grandmas);
    grandma.setAttribute("price", Math.ceil(grandmaprice));
}
farm.onclick = function() {
    if(counts.cookies >= farmprice) {
        counts.farms++;
        counts.cookies -= farmprice;
        farmprice = 1100 * (1.15 ** counts.farms);
    }
    farm.setAttribute("count", counts.farms);
    farm.setAttribute("price", Math.ceil(farmprice));
}
mine.onclick = function() {
    if(counts.cookies >= mineprice) {
        counts.mines++;
        counts.cookies -= mineprice;
        mineprice = 12000 * (1.15 ** counts.mines);
    }
    mine.setAttribute("count", counts.mines);
    mine.setAttribute("price", Math.ceil(mineprice));
}

// CPS

setInterval(function () {
    let cps = (counts.cursors * .1) + (counts.grandmas) + (counts.farms * 8) + (counts.mines * 47);
    counts.cookies += cps;
    h1.innerText = Math.floor(counts.cookies);
    document.getElementById('cpscounter').innerText = 'cps: ' + cps;
}, 1000);

setInterval(function () {
    localStorage.setItem("counts", JSON.stringify(counts));
}, 10000);

