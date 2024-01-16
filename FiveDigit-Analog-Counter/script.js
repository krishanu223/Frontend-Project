var interval;
var next1 = document.getElementById('one')
var next2 = document.getElementById('two')
var next3 = document.getElementById('three')
var next4 = document.getElementById('four')
var next5 = document.getElementById('five')
var s1 = document.getElementById('ones');
var s2 = document.getElementById('twos');
var s3 = document.getElementById('threes');
var s4 = document.getElementById('fours');
var s5 = document.getElementById('fives');
var inp = document.getElementById('inp');
var i = 0;
var i1 = 0;
var i2 = 0;
var i3 = 0;
var i4 = 0;
var sec = 0;
var third = 0;
var four = 0;
var five = 0;
var ii = 0;
var ii1 = 0;
var ii2 = 0;
var ii3 = 0;
var ii4 = 0;
var flag = false;
var flag1 = false;
var flag2 = false;
var flag3 = false;

function startcounter() {

    interval = setInterval(animate, 1000);

}



function animate() {

    animate5();
    animate4();
    animate3();
    animate2();
    animate1();

}




function animate5() {
    if (i < parseInt(inp.value)) {
        ii = i + 1;
        next5.classList.add('animate')
        setTimeout(function() {
            if (i > 9) {
                ii = ii % 10
            }
            s5.innerHTML = ii;
            if (ii == 9) {
                next5.innerHTML = "0"
                flag = true;
                sec = sec + 1;
            } else {
                next5.innerHTML = ii + 1;
                flag = false;
            }

            next5.classList.remove('animate');
        }, 500);
        i = i + 1

    } else {
        alert("Traget Riched");
        clearInterval(interval)
        i = 0;
        i1 = 0;
        i2 = 0;
        i3 = 0;
        i4 = 0;
        sec = 0;
        third = 0;
        four = 0;
        five = 0;
        ii = 0;
        ii1 = 0;
        ii2 = 0;
        ii3 = 0;
        ii4 = 0;
        flag = false;
        flag1 = false;
        flag2 = false;
        flag3 = false;
        s5.innerHTML = "";
        next5.innerHTML = "";
        s4.innerHTML = "";
        next4.innerHTML = "";
        s3.innerHTML = "";
        next3.innerHTML = "";
        s2.innerHTML = "";
        next2.innerHTML = "";
        s1.innerHTML = "";
        next1.innerHTML = "";
        inp.value = "";

    }

}


function animate4() {
    if (i1 < sec && flag) {
        ii1 = i1 + 1;
        console.log("ii", i1)
        next4.classList.add('animate')
        setTimeout(function() {
            if (i1 > 9) {
                ii1 = ii1 % 10
            }
            s4.innerHTML = ii1;

            if (ii1 == 9) {
                flag1 = true;

                third = third + 1
            } else {
                next4.innerHTML = ii1 + 1;
                flag1 = false;
            }
            console.log("third", i2, third, flag, flag1)
            next4.classList.remove('animate');

        }, 500)
        i1 = i1 + 1;
    }
}

function animate3() {
    if (i2 < third && flag1 && flag) {
        ii2 = i2 + 1;
        console.log("ii2:", ii2)
        console.log("third", i2, third, flag, flag1)
        next3.classList.add('animate')
        setTimeout(function() {
            if (i2 > 9) {
                ii2 = ii2 % 10
            }
            s3.innerHTML = ii2;
            if (ii2 == 9) {
                flag2 = true;
                four = four + 1
            } else {
                next3.innerHTML = ii2 + 1;
                flag2 = false;
            }
            next3.classList.remove('animate');
        }, 500)
        i2 = i2 + 1;

    }
}

function animate2() {
    if (i3 < four && flag && flag1 && flag2) {
        ii3 = i3 + 1;
        next2.classList.add('animate')
        setTimeout(function() {
            if (i3 > 9) {
                ii3 = ii3 % 10
            }
            s2.innerHTML = ii3;
            if (ii3 == 9) {
                five = five + 1
                flag3 = true;
            } else {
                next2.innerHTML = ii3 + 1;
                flag3 = false;
            }
            next2.classList.remove('animate');
        }, 500)
        i3 = i3 + 1;
    }
}

function animate1() {
    if (i4 < four && flag && flag1 && flag2 && flag3) {
        ii4 = i4 + 1;
        next1.classList.add('animate')
        setTimeout(function() {
            if (i4 > 9) {
                ii4 = ii4 % 10
            }
            s1.innerHTML = ii4;
            next1.innerHTML = ii4 + 1;
            next1.classList.remove('animate');
        }, 500)
        i4 = i4 + 1;
    }
}