function update(choices) {

    var button1 = document.getElementById("1").innerHTML;
    var button2 = document.getElementById("2").innerHTML;


    if (choices == 1 && button1 == "<h2>Go Outside</h2>") {
        document.getElementById("start").innerHTML = "<h1>You go outside what shall you do now?</h1>"
        document.getElementById("1").innerHTML = "<h2>Go Fishing</h2>"
        document.getElementById("2").innerHTML = "<h2>Go running</h2>"
    }
    if (choices == 2 && button2 == "<h2>Stay Indoors</h2>") {
        document.getElementById("start").innerHTML = "<h1>What to do now?</h1>"
        document.getElementById("1").innerHTML = "<h2>Play Video Games</h2>"
        document.getElementById("2").innerHTML = "<h2>Cook something to eat</h2>"
    }
    if (choices == 1 && button1 == "<h2>Go Fishing</h2>") {
        document.getElementById("start").innerHTML = "<h1>You Catch a big fish. Great job!</h1>"
        document.getElementById("1").innerHTML = "<h2>The</h2>"
        document.getElementById("2").innerHTML = "<h2>End</h2>"
    }
    if (choices == 2 && button2 == "<h2>Go running</h2>") {
        document.getElementById("start").innerHTML = "<h1>You run for an hour.</h1>"
        document.getElementById("1").innerHTML = "<h2>The</h2>"
        document.getElementById("2").innerHTML = "<h2>End</h2>"

    }
    if (choices == 1 && button1 == "<h2>Play Video Games</h2>") {
        document.getElementById("start").innerHTML = "<h1>Which Video game?</h1>"
        document.getElementById("1").innerHTML = "<h2>Spiderman</h2>"
        document.getElementById("2").innerHTML = "<h2>Cyberpunk2077</h2>"
    }
    if (choices == 2 && button2 == "<h2>Cook something to eat</h2>") {
        document.getElementById("start").innerHTML = "<h1>You cook ramen. Yum</h1>"
        document.getElementById("1").innerHTML = "<h2>The</h2>"
        document.getElementById("2").innerHTML = "<h2>End</h2>"
    }
    if (choices == 1 && button1 == "<h2>Spiderman</h2>") {
        document.getElementById("start").innerHTML = "<h1>You Have a great time swinging around the city</h1>"
        document.getElementById("1").innerHTML = "<h2>The</h2>"
        document.getElementById("2").innerHTML = "<h2>End</h2>"
    }
    if (choices == 2 && button2 == "<h2>Cyberpunk2077</h2>") {
        document.getElementById("start").innerHTML = "<h1>You spend an hour creating your perfect character.They do look fly though</h1>"
        document.getElementById("1").innerHTML = "<h2>The</h2>"
        document.getElementById("2").innerHTML = "<h2>End</h2>"
    }


}

