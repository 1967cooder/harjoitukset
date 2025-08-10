//numerot_02 
  // Määrittele funktio, joka muuntaa lämpötilan Fahrenheit-asteista Celsius-asteiksi.
  // Tämä funktio käyttää kaavaa (Fahrenheit - 32) * 5/9
  // Saatu lämpötila pyöristetään yhteen desimaaliin tarkkuuden vuoksi.


  function fahrenheitToCelsius(fahrenheit) {
    
    const celsius = (fahrenheit - 32) * 5 / 9;
    return Math.round(celsius * 10) / 10;  
  }
    console.log(fahrenheitToCelsius(32)); // haluttu tulos: "-6,1"

  
  
  funktio()