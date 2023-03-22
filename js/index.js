function validateForm() {
    const nameInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const mensajeInput = document.getElementById("mensaje");
    
    // Verificar que el campo de nombre no esté vacío
    if (nameInput.value === "") {
      alert("Por favor ingrese su nombre.");
      nameInput.focus();
      return false;
    }
  
    // Verificar que el campo de correo electrónico esté en un formato válido
    if (!isValidEmail(emailInput.value)) {
      alert("Por favor ingrese un correo electrónico válido.");
      emailInput.focus();
      return false;
    }

    if(!mensajeInput.value ===""){
        alert("Por favor ingresa un mensaje.");
        mensajeInput.focus();
        return false;
    }
  
    return true;
  }
  
  function isValidEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }
  