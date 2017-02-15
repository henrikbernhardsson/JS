//LAB 2.1

function LoopArrayContents() {

    var error_msg_elem = document.getElementById("error-messages");

    var main_content = document.getElementById("main-content");
    

    var strings = ["Erik", "Emma", "48", "Alex", "55", 256, "Leo", "Lotta", "Marcus"];

    for (var i = 0; i < strings.length; i++) {

        if (!isNaN(strings[i])){// if it is a number, do this:
            error_msg_elem.style.color = "Yellow";
            error_msg_elem.innerHTML = "Siffor hittades i Arrayn. Dessa har ej skrivits ut <br>";
        }
        else
        {
            main_content.innerHTML += strings[i] + "</br>";
        }
    }
}