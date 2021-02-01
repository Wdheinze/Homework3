function update(choices) {

    var button1 = document.getElementById("1").innerHTML;
    var button2 = document.getElementById("2").innerHTML;

    console.log(button1);
    if (choices == 1 && button1 == "<h2>Go Outside</h2>") {
        document.getElementById("start").innerHTML = "<h1>You go outside what shall you do now?</h1>"
        document.getElementById("1").innerHTML = "<h2>Go Fishing</h2>"
        document.getElementById("2").innerHTML = "<h2>Go jogging</h2>"
    }
    if (choices == 2 && button2 == "<h2>Stay Indoors</h2>") {
        document.getElementById("start").innerHTML = "<h1>What to do now?</h1>"
        document.getElementById("1").innerHTML = "<h2>Play Video Games</h2>"
        document.getElementById("2").innerHTML = "<h2>Cook something to eat</h2>"
    }
}

