window.addEventListener('load', function() {
        console.log('Diseñado por Cronna');

        // Obtener campos del formulario
        const formulario = document.querySelector('.form-reservas')
        const nombreInput = document.getElementById('nombreForm')
        const telefonoInput = document.getElementById('telefonoForm')
        const personasSelect = document.getElementById('personasForm')
        const fechaInput = document.getElementById('fechaForm')
        const enviarBtn = document.getElementById('btnReservar')

        // Fecha mínima
        const fechaMinima = new Date()
        fechaMinima.setDate(fechaMinima.getDate() + 1) // Fecha mínima es mañana

        // Función para válidar datos
        function validarCampos() {
                let isValid = true;
                if (nombreInput.value.trim() === '') {
                        alert("El nombre de quien reserva es requerido.")
                        isValid = false;
                }
                if (telefonoInput.value.trim() === '') {
                        alert("El telefono es requerido")
                        isValid = false
                }
                if (fechaInput.value.trim() === '' || new Date(fechaInput.value) < fechaMinima) {
                        alert("Fecha inválida. Debe ser mayor a " + fechaMinima.toLocalDateString())
                        isValid = false
                }
                return isValid
        }

        // Función para enviar reservación (simulada)
        function enviarFormulario() {
                if (validarCampos()) {
                        enviarBtn.textContent = "Reservando...";
                        enviarBtn.disabled = true;

                        setTimeout(() => {
                                alert("Reserva realizada con éxito");
                                formulario.reset()
                                enviarBtn.textContent = "Reservar"
                                enviarBtn.disabled = false;
                        }, 2000)
                }
        }

        // Agregar evento de envío al formulario 
        formulario.addEventListener('submit', function (e) {
                e.preventDefault();
                enviarFormulario()       
        });
});