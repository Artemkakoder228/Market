document.addEventListener("DOMContentLoaded", function () {
    console.log("Перевірка підключення файлів JavaScript");

    let DIVitems = document.getElementById("item");
    console.log(DIVitems);
    // for(let i = 0; i<101; i++){

    // }
    if (DIVitems) {
        console.log(DIVitems);

        DIVitems.innerHTML += '<div class = "items"></div>';
        DIVitems.innerHTML += '<div class = "items"></div>';
        DIVitems.innerHTML += '<div class = "items"></div>';
        DIVitems.innerHTML += '<div class = "items"></div>';

    } else {
        console.log("DIVitems не існує");
    }
});
f

