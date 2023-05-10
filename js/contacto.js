// ? API PAISES
const APIPAISES = 'https://restcountries.com/v2/all';

function llamadaPaises() {
    const seleccionPaises = document.querySelector('#country');
    fetch(APIPAISES)

        .then(res => {
            return res.json();
        })
        .then(data => {
            let output = '';
            output = `<option disabled selected> Seleccione su país</option> `
            data.forEach(pais => {
                output += `<option value="${pais.name}"> ${pais.name} </option>`;
            });
            seleccionPaises.innerHTML = output;
        })
        .catch(err => {
            console.log(err);
        })
}

llamadaPaises();


//? Fecha actual


// Obtener el elemento de entrada de fecha de inicio y final
const fechaInicio = document.querySelector("#dateMix");
const fechaFin = document.querySelector("#dateMaster");

// Establecer la fecha mínima en el campo de entrada de fecha de inicio
const fechaActual = new Date();
const fechaActualISO = fechaActual.toISOString().split("T")[0];
fechaInicio.setAttribute("min", fechaActualISO);

// Agregar un controlador de eventos change al campo de entrada de fecha de inicio
fechaInicio.addEventListener("change", function () {
    // Obtener la fecha seleccionada en el campo de entrada de fecha de inicio
    const fechaInicioSeleccionada = new Date(this.value);

    // Establecer la fecha mínima en el campo de entrada de fecha de final
    const fechaInicioISO = fechaInicioSeleccionada.toISOString().split("T")[0];
    fechaFin.setAttribute("min", fechaInicioISO);

    if (fechaInicio.value === '') {
        fechaFin.disabled = true;
    } else {
        fechaFin.disabled = false;
    }

});



// ? FORM
 const enviarForm = document.querySelector('#form');
 const mainForm = document.querySelector('#main-contacto')
 const mensajeForm = document.querySelector('#mensajeForm')
 const formFaqs = document.querySelector('#form-faqs')

 document.querySelector('.loader').style.display = 'none';


 enviarForm.addEventListener('submit', (e) => {
     e.preventDefault();


     const formData = new FormData(e.target);
     const data = Object.fromEntries(formData.entries());

     console.log(data)
     mainForm.innerHTML = '';
     mainForm.style.display = 'none'
     formFaqs.innerHTML = '';
     formFaqs.style.display = 'none';
     document.querySelector('.loader').style.display = 'block';

     setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
        mensajeForm.style.display = 'flex'
     }, 1000);



 })

// const enviarForm = document.querySelector('#form');
// const mensajeForm = document.querySelector('#mensajeForm');

// enviarForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const formData = new FormData(e.target);
//   const data = Object.fromEntries(formData.entries());

//   fetch('/envio-form.php', {
//     method: 'POST',
//     body: formData
//   })
//   .then(response => {
//     if (response.ok) {
//       // Se envió el formulario correctamente
//       enviarForm.reset(); // Limpia los campos del formulario
//       mensajeForm.textContent = 'Formulario enviado correctamente';
//       mensajeForm.classList.remove('error');
//       mensajeForm.classList.add('exito');
//     } else {
//       // Hubo un error al enviar el formulario
//       mensajeForm.textContent = 'No se pudo enviar el formulario';
//       mensajeForm.classList.remove('exito');
//       mensajeForm.classList.add('error');
//     }
//   })
//   .catch(error => {
//     // Hubo un error al enviar el formulario
//     mensajeForm.textContent = 'Error al enviar el formulario';
//     mensajeForm.classList.remove('exito');
//     mensajeForm.classList.add('error');
//   });
// });




// ? Reiniciar Form
