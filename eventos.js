document.addEventListener('DOMContentLoaded', function() {
    const div = document.getElementById('boton');
    const button = document.querySelector('button'); 
  
    div.addEventListener('click', function() {
      alert('Hola! Soy el div');
    });

    button.addEventListener('click', function(event) {
      event.stopPropagation(); 
      alert('Hola!');
    });
  });
  