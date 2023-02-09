// Función para mostrar el modal
function showModal(imgSrc) {
    const modal = document.querySelector('#modal');
    const modalImg = document.querySelector('.modal-img');
    modalImg.src = imgSrc;
    modal.style.display = 'block';
  }
  
  // Función para cerrar el modal
  function closeModal() {
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
  }
  
  // Escuchar eventos click en las imágenes de la galería
  const galleryImgs = document.querySelectorAll('.photo img');
  
  for (let i = 0; i < galleryImgs.length; i++) {
    galleryImgs[i].addEventListener('click', function() {
      showModal(this.src);
    });
  }
  
  // Cerrar el modal al hacer clic en el botón "Cerrar"
  const closeBtn = document.querySelector('.modal-close');
  closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keyup', function(event){ 
    if(event.key === 'Escape') {
      modal.style.display = 'none';
    }
  })

  modal.addEventListener("click", function() {
    modal.style.display = "none";
  });