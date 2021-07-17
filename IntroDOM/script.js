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
    });
}


// //action minus
let minusBtn = document.getElementsByClassName("minus")

for (let i = 0; i < plusBtn.length; i++) {
    minusBtn[i].addEventListener("click", function() {
        if (qte[i].innerHTML > 0)
            qte[i].innerHTML--;
    });
}
//delete
deleteBtn[i].addEventListener("click", function() {
    deleteBtn[i].parentElement.parentElement.remove();
})
