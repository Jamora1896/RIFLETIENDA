/* ------------------Form------------------ */
document.getElementById("mostrar-inicio").addEventListener("click", function () {
    document.getElementById("iniciar-sesion").classList.add("activo");
    document.getElementById("registrarse").classList.add("oculto");
    document.getElementById("registrarse").classList.remove("activo");
    document.getElementById("iniciar-sesion").classList.remove("oculto");
  });

document.getElementById("mostrar-registrar").addEventListener("click", function () {
    document.getElementById("iniciar-sesion").classList.add("oculto");
    document.getElementById("registrarse").classList.add("activo");
    document.getElementById("iniciar-sesion").classList.remove("activo");
    document.getElementById("registrarse").classList.remove("oculto");
  });