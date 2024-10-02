

function getFruit() {
    var img = document.getElementById("image");
    var colors = document.getElementById("color").value;

    if (colors === "red") {
        document.getElementById("colorText").innerHTML = "Apple";
        img.src = "apple.jpg";
    } else if (colors === "green") {
        document.getElementById("colorText").innerHTML = "Cucumber";
        img.src = "cucumber.jpg";
    } else if (colors === "blue") {
        document.getElementById("colorText").innerHTML = "Blueberry";
        img.src = "blueberry.jpg";
    } else if (colors === "purple") {
        document.getElementById("colorText").innerHTML = "Grape";
        img.src = "grape.jpg";
    } else if (colors === "orange") {
        document.getElementById("colorText").innerHTML ="Orange";
        img.src = "orange.jpg";
    } else {
        document.write("Didn't list the color");
    }
}

