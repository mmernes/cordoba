document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("miFormulario");
  
    form.addEventListener("submit", function(event) {
      var nombreI = document.getElementById("nombre");
      var nombre = nombreI.value.trim();
  
       if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        event.preventDefault(); // no enviar
        } 

        var emailI = document.getElementById("email");
        var email = emailI.value.trim();

        if (!checkEmail(email)) {
          alert("Por favor, ingresa tu email correctamente.");
          event.preventDefault(); // no enviar
        }
      
        document.getElementById('result').innerHTML = "<p>Your name is: " + name + "</p>";

        function checkEmail(email) {
            // Expresión regular para validar el formato del email
            var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        }
      
      

    };
  
  



