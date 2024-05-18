import React from "react";
import Alert from "./Alert";

const BMI = () => {

    const klik = () => {
        var berat = parseFloat(document.getElementById("Berat").value);
        var tinggi = parseFloat(document.getElementById("Tinggi").value);
    
        if (isNaN(berat) || isNaN(tinggi) || tinggi <= 0) {
          // Handle invalid input
          document.getElementById("Hasil").innerHTML =
            "Masukkan berat dan tinggi yang valid.";
          return;
        }
    
        var bmi = berat / ((tinggi / 100) * (tinggi / 100));
    
        var category;
        if (bmi < 18.5) {
          category = "Kurus";
          <Alert className="success"/>
        } else if (bmi >= 18.5 && bmi < 24.9) {
          category = "Ideal";
        } else {
          category = "Gendut";
        }
    
        document.getElementById("Hasil").innerHTML = `BMI: ${bmi.toFixed(
          2
        )} - Kategori: ${category}`;
      };

    return (
        <div>
        <h1>Body Mass Index</h1>
          <div className="container">
            <div className="Berat-Tinggi">
              <label>Berat </label>
              <input type="number" id="Berat"></input>
              <p></p>
              <label>Tinggi</label>
              <input type="number" id="Tinggi"></input>
            </div>
            <button onClick={klik}>Hitung</button>
            <h1>Hasil</h1>
            <div id="Hasil"></div>
          </div>
        </div>
    )
}

export default BMI;