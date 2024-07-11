document.addEventListener('DOMContentLoaded', function() {
    var changeButton = document.getElementById('changeButton');
    var lassan_click = document.getElementById('lassan_click');
    var originalSrc = lassan_click.src;
    var currentImageIndex = 0;
    var LassanDayWish = document.querySelector('.Lassan_Day_Wish')
  
    changeButton.addEventListener('click', function() {
      lassan_click.src = 'Images (Lassan)/Dance-Lassan.png';
      currentImageIndex = (currentImageIndex + 1) % 2;
      lassan_click.src = (currentImageIndex === 0) ? originalSrc : 'Images (Lassan)/Dance-Lassan.png';
      lassan_click.alt = altTexts[currentImageIndex];
    });
  });  