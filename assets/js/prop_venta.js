import { propiedades_ventas } from "./data.js";

function renderizarPropiedades (propiedades, contenedorId, limite){
    const contenedor = document.getElementById(contenedorId)

    let contenidoHTML = "";

    for (let index = 0; index < propiedades.length && index < limite; index++) {
        const propiedad = propiedades[index];
        
        console.log ("entre")
        let propiedadHTML= `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="Imagen del departamento"
                />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                  <i class="fas fa-bath"></i> ${propiedad.baños}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                ${propiedad.smoke === true ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar </p>' : '<p class="text-danger"> <i class="fas fa-smoking-ban"></i> No se permite fumar </p>'}
                ${propiedad.pets === true ? '<p class="text-success"> <i class="fas fa-paw"></i> Mascotas permitidas </p>' : '<p class="text-danger"> <i class="fa-solid fa-ban"></i> No se permiten mascotas </p>'}
              </div>
            </div>
          </div>
        `;
        contenidoHTML += propiedadHTML;
    }
    contenedor.innerHTML = contenidoHTML
}
window.onload = () =>{
    renderizarPropiedades(propiedades_ventas,"propiedades-ventas-container", 3)

    document.getElementById("btn-venta-header").addEventListener("click", () =>{
        window.location.href  = "propiedades_venta.html";
    });
    document.getElementById("btn-alquiler-header").addEventListener("click", () =>{
        window.location.href  = "propiedades_alquiler.html";
    });
}