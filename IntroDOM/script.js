// import the button
let btn = document.getElementById("btn");
let titre = document.querySelector("h1");
// ----------------------------------------------


//action plus
let plusBtn = document.getElementsByClassName("plus")
let qte = document.getElementsByClassName("qte")
for (let i = 0; i < plusBtn.length; i++) {
    plusBtn[i].addEventListener("click", function() {
        //   qte.innerHTML = +qte.innerHTML + 1;
        qte[i].innerHTML++;
        Total()

    });
}


// //action minus
let minusBtn = document.getElementsByClassName("minus")

for (let i = 0; i < plusBtn.length; i++) {
    minusBtn[i].addEventListener("click", function() {
        if (qte[i].innerHTML > 0)
            qte[i].innerHTML--;
        Total()

    });
}
//delete
let btnDelete = document.querySelectorAll(".btnDelete");
for (let i = 0; i < plusBtn.length; i++) {
    btnDelete[i].addEventListener("click", function() {
        btnDelete[i].parentElement.parentElement.parentElement.remove();
        Total()

    });
}
//Total
function Total() {
    let prx = document.querySelectorAll(".prx");
    let qte = document.querySelectorAll(".qte");
    let TOTAL = document.querySelector(".TOTAL");
    let somme = 0;
    for (let i = 0; i < qte.length; i++) {
        somme = somme + prx[i].innerHTML * qte[i].innerHTML;
    }
    TOTAL.innerHTML = somme;
}
//LIKE
$(function() {
    $("i.f1").click(function() {
        $("i.f1,.like").toggleClass("press", 1000);
    });
});
$(function() {
    $("i.f2").click(function() {
        $("i.f2,.like").toggleClass("press", 1000);
    });
});
$(function() {
    $("i.f3").click(function() {
        $("i.f3,.like").toggleClass("press", 1000);
    });
});
