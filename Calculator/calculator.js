let string = "";
let flag = 0;
let buttons = document.querySelectorAll("button");
let mar = document.getElementById("gg");
let red = document.getElementById('ready')
let res = document.getElementById("ans")
let op = document.getElementById("operator")
let on = document.getElementById("outer")
on.addEventListener('click', () => {
    document.getElementById("inner").style = "margin-left:40px; box-shadow: 0 0 10px 5px rgb(0, 255, 60);"
    flag = 1;
    string = "";
    document.getElementById("digit").innerHTML = "";
    mar.innerHTML = ""
    red.innerHTML = "Ready"

})
Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "=" & flag == 1) {
            string = eval(string);
            res.innerHTML = "Ans:" + string;
            document.getElementById("digit").innerHTML = string;

        } else {
            if (flag == 1) {
                string = string + e.target.innerHTML;
                document.getElementById("digit").innerHTML = string;
                if (e.target.innerHTML == "+") {
                    op.innerHTML = "+"
                }
                if (e.target.innerHTML == "-") {
                    op.innerHTML = "-"
                }
                if (e.target.innerHTML == "*") {
                    op.innerHTML = "x"
                }
                if (e.target.innerHTML == "/") {
                    op.innerHTML = "/"
                }
            }
        }
        if (e.target.innerHTML == "C") {
            string = "";
            res.innerHTML = "Ans:";
            document.getElementById("digit").innerHTML = "";
            op.innerHTML = ""

        }

        if (e.target.innerHTML == "ON") {


        }

        if (e.target.innerHTML == "DE") {
            string = string.substring(0, string.length - 3);
            console.log(string)
            document.getElementById("digit").innerHTML = string
        }


    })
})