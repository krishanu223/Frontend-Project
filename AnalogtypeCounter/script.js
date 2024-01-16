var interval;
var next = document.querySelector('.next');
var h = document.getElementById('gh');
var inp = document.getElementById('inp');
var j = 1;
var i = 1;

function startcounter() {
    interval = setInterval(animate, 1000); //run animate function after 1s
}

function animate() {
    if (i <= parseInt(inp.value) + 1) {
        next.classList.add('animate')
        setTimeout(function() {
            h.innerHTML = i - 1
            next.classList.remove('animate');
            j = i++;
            next.innerHTML = j;;
        }, 500)
    } else {
        h.innerHTML = "OVER";
        i = 1;
        j = 1;
        inp.value = "";
        clearInterval(interval);
        next.innerHTML = "";
    }
}