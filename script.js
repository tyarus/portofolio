function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
  
    if (!name || !email || !message) {
      alert('Harap isi semua kolom yang wajib diisi');
      return;
    }
  
    alert('Pesan Anda telah terkirim! Terima kasih, ' + name + '.');
  
    this.reset();
  }); 