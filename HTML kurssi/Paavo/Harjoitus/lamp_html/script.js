function changeImage() {
    var image = document.getElementById('OnOffLamp');
    if (image.src.match("bulbon")) {
      image.src = "images/pic_bulboff.gif";
    } else {
      image.src = "images/pic_bulbon.gif";
    }
  }

 