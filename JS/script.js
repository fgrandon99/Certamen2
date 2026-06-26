document.addEventListener('DOMContentLoaded', function() {

    //elementos del html requeridos
    const formulario = document.getElementById('formulario-solicitud');
    const cuerpoTabla = document.getElementById('cuerpo-tabla');

    // formulario
    formulario.addEventListener('submit', function(evento) {

    // Evitamos que la página se recargue al enviar el formulario
        evento.preventDefault();

        //valores ingresados por el usuario
        const nombre = document.getElementById('nombre').value;
        const correo = document.getElementById('correo').value;
        const telefono = document.getElementById('telefono').value;
        const producto = document.getElementById('producto').value;
        const comentario = document.getElementById('comentario').value;

        // obtener fecha
        const fechaHoy = new Date();
        const fecha = fechaHoy.toLocaleDateString('es-CL');

        // crear fila para la tabla
        const nuevaFila = document.createElement('tr');

        //Agregar las celdas con la información del usuario
        nuevaFila.innerHTML = `
            <td>${nombre}</td>
            <td>${producto}</td>
            <td>${correo}</td>
            <td>${fecha}</td>
        `;

        // Insertar la fila en el cuerpo de la tabla
        cuerpoTabla.appendChild(nuevaFila);

        // Limpiar el formulario para un nuevo ingreso
        formulario.reset();

        // Mostrar un mensaje de confirmación al usuario
        alert(`Solicitud de ${nombre} registrada correctamente.`);
    });

});