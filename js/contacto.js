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


//  function loader() {
//      document.querySelector('.loader').style.display = 'none';

//      mainForm.innerHTML = ''
//      mainForm.style.display = 'none'
//      formFaqs.innerHTML = ''
//      formFaqs.style.display = 'none'
//      document.querySelector('.loader').style.display = 'block'

//      setTimeout(() => {
//          document.querySelector('.loader').style.display = 'none';
//          mensajeForm.style.display = 'flex'
//      }, 1000);

//  }






// ? FORM
const enviarForm = document.querySelector('#form');
const mainForm = document.querySelector('#main-contacto')
const mensajeForm = document.querySelector('#mensajeForm')
const formFaqs = document.querySelector('#form-faqs')


const emailContact = document.querySelector('#email').value;
document.querySelector('.loader').style.display = 'none';


enviarForm.addEventListener('submit', (e) => {
    e.preventDefault();


    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    // const body = JSON.stringify(data, null, 2);

    console.log(data)
    Email.send({

        SecureToken: '38cad0e9-fafb-4bc5-acdc-631a58f4ac76',
        //   Host : "smtp.elasticemail.com",
        //   Username : "username",
        //   Password : "password",
        To: 'viejomastering@gmail.com',
        From: 'viejomastering@gmail.com',
        Subject: `Mail de artista: ${data.proyect}`,
        Body:
            `
            <strong>Información de contacto</strong>
            <br>
            Nombre: ${data.name} 
            <br>
            Email: ${data.email}
            <br>
            País: ${data.country}
            <br>
            <strong>Información de proyecto</strong>
            <br>
            <br>
            Nombre de artista: ${data.proyect}
            <br>
            Tipo de proyecto: ${data.type}
            <br>
            Cantidad de temas: ${data.numberTracks}
            <br>
            Duración del proyect: ${data.duration}
            <br>
            Fecha de envío de mezclas: ${data.dateMix}
            <br>
            Fecha de envío de master: ${data.dateMaster}
            <br>
            Comentarios: ${data.comment}            
            `
    }).then((message) => {
        console.log(message);
        if (message === "OK") {
            mostrarMensajeExito();
        }
    });

});

function mostrarMensajeExito() {

    // const mensajeExito = document.getElementById("mensajeExito");
    // mensajeExito.style.display = "block";



    mainForm.innerHTML = ''
    mainForm.style.display = 'none'
    formFaqs.innerHTML = ''
    formFaqs.style.display = 'none'
    document.querySelector('.loader').style.display = 'block'

    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
        mensajeForm.style.display = 'flex'
    }, 500);




}



//   document.querySelector('.loader').style.display = 'none';


//   enviarForm.addEventListener('submit', (e) => {
//       e.preventDefault();


//       const formData = new FormData(e.target);
//       const data = Object.fromEntries(formData.entries());

//       console.log(data)
//       mainForm.innerHTML = '';
//       mainForm.style.display = 'none'
//       formFaqs.innerHTML = '';
//       formFaqs.style.display = 'none';
//       document.querySelector('.loader').style.display = 'block';

//       setTimeout(() => {
//          document.querySelector('.loader').style.display = 'none';
//          mensajeForm.style.display = 'flex'
//       }, 1000);



//   });




// ? Reiniciar Form
