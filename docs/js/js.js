var mas_informacion = document.querySelector(".mas_informacion");
var btn_cerar_modal = document.querySelector(".btn_cerar_modal");
// var tiempo = 20000;
btn_cerar_modal.addEventListener("click", function(event) {
    event.preventDefault();
    mas_informacion.style.display = "none";

});

var a = document.querySelectorAll("a");
console.log(a);
for (var i = 0; i < a.length; i++) {

    a[i].addEventListener("click", function(event) {
        event.preventDefault();
        if (this == btn_cerar_modal) {
            mas_informacion.style.display = "none";
        } else {
            mas_informacion.style.display = "block";
        }

    });
}

window.onload = (event) => {
    // <img src="https://i.ibb.co/F7Jr6JB/perfil.jpg" alt="perfil" border="0">
    let todaslasimagenes = document.querySelectorAll("img");
    for (var i = 0; i < todaslasimagenes.length; i++) {
        // todaslasimagenes[i].setAttribute("src", "https://i.ibb.co/F7Jr6JB/perfil.jpg");
    }
    Swal.fire({
        title: "¿Te gusta?",
        text: "Escríbeme en el chat",
        icon: "question"
    });
};

// setInterval(function() {
// 	console.log('ok');
// 	console.log(tiempo);
// 	mas_informacion.style.display = "block";
// }, tiempo);

// console.log('ok');