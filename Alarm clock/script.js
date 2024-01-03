//project Alarm clock with history list
// decleare variable
let hours;
let sound = new Audio("sirenwail.wav")
let hourinput = document.getElementById('hour');
let mininput = document.getElementById('min');
let closealarm = document.getElementById('close')
let setalarm = document.getElementById('set')
let clockdisplay = document.querySelector('.clock');
let tasklist = document.getElementById('list');
const ampm = document.querySelectorAll(`input[name="am"]`)
let hour;
let hour1;
let min;
let min1;
let sec;
let am;
var flage = false;
let hourinput1;
let mininput1;
var tasks = [];
let firstdigit = 0;
let type;
let typ = "AM";
//add aevent to button 
closealarm.addEventListener('click', closeal)
setalarm.addEventListener('click', setalar)
document.addEventListener('click', clickhandel)
document.getElementById('am').checked = true;
// obj input in array
function addTask(task) {
    if (task) {
        tasks.push(task);
        return;
    }

}
closeal(); //closing alarm  ring
setalar(); //set alarm function
// interval for running time and date update every second
var time = setInterval(() => {
    hours = new Date();
    hour1 = hours.getHours()
    min = hours.getMinutes()
        //AM PM converter logic
    if (hours.getHours() >= 13) {
        hour = hours.getHours();
        am = "PM";
    }
    if (hours.getHours() > 11) {
        hour = hours.getHours();
        am = "PM";
    } else {
        hour = hours.getHours();
        am = "AM";
    }
    // creating double Digit in minute section it just like a professional clock
    // it works 01  to 10
    if (hours.getMinutes() >= 10) {
        firstdigit = Math.floor(hours.getMinutes() / 10);
        min1 = Math.floor(hours.getMinutes() % 10)
    } else {
        firstdigit = 0;
        min1 = hours.getMinutes();
    }
    sec = hours.getSeconds();
    //calling the checking function for set alarm
    checking();
    //play music function
    playmusic();
    //clock function 
    clockdisplay.innerHTML = `${hour} :${firstdigit}${ min1} ${am}`;
    //get input from radio button
    for (const radiobutton of ampm) {
        if (radiobutton.checked) {
            type = typ;
            break;
        }
    }
}, 1000);
//play audio
function playau() {
    sound.play();
}

function clickhandel(e) {
    const trget = e.target;
    if (trget.className == 'delete') {
        const id = trget.dataset.id;
        deleteTask(id)
        renderlist()
        return;
    }
    if (e.target.className == 'a') {
        for (const radiobutton of ampm) {
            if (radiobutton.checked) {

                typ = radiobutton.value;
                break;
            }
        }
        console.log(type)
        return;
    }
}
//checking alarm to clock
function checking() {
    if (hour == hourinput1 && mininput1 == min && sec == 0 && (hour1 > 12 && type == "PM" || hour1 <= 12 && type == "AM")) {
        flage = true
    }
    return;
}
//runing music constantly oherwise music run ontime when condition is true then stop
function playmusic() {
    if (flage) {
        playau();
    }
    return;
}
// close button logic
function closeal() {
    flage = false;
}
// set alarm button function 
function setalar() {
    // logic for valid input 
    if (parseInt(hourinput.value) <= 12 && parseInt(mininput.value) <= 60) {
        hourinput1 = hourinput.value;
        mininput1 = mininput.value;
        hourinput.value = "00";
        mininput.value = "00";
        const hours1 = hourinput1;
        const mins = mininput1;

        const task = {
            hours1,
            mins,
            typ,
            id: Date.now(),
            completed: false
        }
        addTask(task);
        renderlist();
    }
    //alert message for invalid input
    if (parseInt(hourinput.value) > 12 || parseInt(mininput.value) > 60) {
        alert("Invalid input")
        renderlist();
    }



}






function htmldom(task) {
    const li = document.createElement('li');
    li.innerHTML = `<li>${task.hours1}:${task.mins}${task.typ}</li>
    <img src="remove.png" class="delete" data-id="${task.id}" />`;
    tasklist.append(li);
}

function renderlist() {
    tasklist.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        htmldom(tasks[i])
    }
}

function deleteTask(taskId) {
    const newtask = tasks.filter((task) => {
        return task.id !== Number(taskId);
    })
    tasks = newtask;
}



//welcome//