function changeImage() {
    var image = document.getElementById('myImage');
    if (image.src.match("bulbon")) {
      image.src = "../pictures/pic_bulboff.gif";
    } else {
      image.src = "../pictures/pic_bulbon.gif";
    }
  }

 