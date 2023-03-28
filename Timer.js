const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

function showtime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    const session = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;

    time.innerHTML = `${addzero(hour)}:${addzero(min)}:${addzero(sec)} ${session}`;

    function addzero(n) {
        return n < 10 ? "0" + n : n;
    }

    setInterval(showtime, 1000);
}

showtime();

function setbg() {
    let today = new Date(),
        hour = today.getHours();



    if (hour < 12) {
        document.body.style.backgroundImage = "URL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyjQ0QP_XoKxw4iHS6lIf5FrPJm3r1aFn2GMhoKtb-0uPEEDtcQvWKBRWdNJnoex1RVeM&usqp=CAU')";
        greeting.innerHTML = "Good Morning, ";
    }
    else if (hour < 18) {
        document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2017/11/21/17/47/afternoon-2968756__340.jpg')"
        greeting.innerHTML = "Good Afternoon, ";
    }
    else {
        document.body.style.backgroundImage = "url('https://media.istockphoto.com/id/532378051/photo/night-sky-with-stars-and-clouds.jpg?s=612x612&w=0&k=20&c=M6HA8A8tq5cbJsAU0y39Qx6dTyoIti-CaYMi9WWbB_U=')";
        greeting.innerHTML = "Good Night, "
        document.body.style.color = "white";
    }

}

setbg();

function setname(n) {
    if (n.type === "keypress") {
        if (n.keycode === 13) {
            localStorage.setItem("name", n.target.innerHTML);
            name.blur();
        };
    }
    else {
        localStorage.setItem("name", n.target.innerHTML);
    };
};

function setfocus(n){
    if (n.type === "keypress") {
        if (n.keycode === 13) {
            localStorage.setItem("Focus", n.target.innerHTML);
            focus.blur();
        };
    }
    else {
        localStorage.setItem("Focus", n.target.innerHTML);
    };
}

name.addEventListener("keypress", setname);
name.addEventListener("blur", setname);
focus.addEventListener("keypress", setfocus);
focus.addEventListener("blur", setfocus);

function getname(){
    if(localStorage.getItem("name") === null){
        name.innerHTML = "[Enter Your Name]";
    }else{
        name.innerHTML= localStorage.getItem("name");
    }
}

function getfocus(){
    if(localStorage.getItem('Focus') === null){
        focus.innerHTML = "[Enter Today Focus Here]";
    }else{
        focus.innerHTML = localStorage.getItem('Focus');
    }
}
getname();
getfocus();