


//NAVBAR TIKLANINCA AÇILMASI
const menuItems = document.querySelectorAll('.nav-item');

menuItems.forEach(item => {
  item.addEventListener('click', function() {
    console.log('tıklandı')
    // tıklanan öğeyi etkin hale getir
    item.classList.add('active');
    
    // diğer öğeleri etkinlikten kaldır
    menuItems.forEach(otherItem => {
      if (otherItem !== item) {
        otherItem.classList.remove('active');
      }
    });
  });
});
