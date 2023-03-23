// Mengambil element dengan id
var berat = document.getElementById("berat");
var usia = document.getElementById("usia");
var tinggi = document.getElementById("tinggi");
var pria = document.getElementById("pria");
var wanita = document.getElementById("wanita");
var form = document.getElementById("form");

//fungsi validasi pada form
function validateForm() {
  if (
    usia.value == "" ||
    tinggi.value == "" ||
    berat.value == "" ||
    (pria.checked == false && wanita.checked == false)
  ) {
    alert("Semua Field Harus di isi!");
    document.getElementById("submit").removeEventListener("click", countBmi);
  } else {
    countBmi();
  }
}

//mengambil event onclick dari tombol sumbit dan menjalankan fungsi validateform()
document.getElementById("submit").addEventListener("click", validateForm);

//fungsi dan rumus menghitung BMI
function countBmi() {
  var p = [usia.value, tinggi.value, berat.value];
  if (pria.checked) {
    p.push("pria");
  } else if (wanita.checked) {
    p.push("wanita");
  }
  form.reset();
  var bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);

  //variabel untuk menampung hasil
  var result = "";
  if (bmi < 18.5) {
    result = "Berat Badan Kurang";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result = "Berat Badan Sehat";
  } else if (25 <= bmi && bmi <= 29.9) {
    result = "Berat Badan Lebih";
  } else if (30 <= bmi && bmi <= 34.9) {
    result = "Berat Badan Obesitas";
  } else if (35 <= bmi) {
    result = "Berat Badan Obesitas Ekstrem";
  }

  var result1 = "";
  if (bmi < 18.5) {
    result1 = "Anda memiliki kekurangan berat badan";
  } else if (18.5 <= bmi && bmi <= 24.9) {
    result1 = "Anda memiliki berat badan sehat";
  } else if (25 <= bmi && bmi <= 29.9) {
    result1 = "Anda memiliki kelebihan berat badan";
  } else if (30 <= bmi && bmi <= 34.9) {
    result1 = "Anda memiliki berat badan obesitas";
  } else if (35 <= bmi) {
    result1 = "Anda memiliki berat badan obesitas yang ekstrem";
  }

  //mengubah style sehingga memuculkan div pada hasil
  var box = document.getElementsByClassName("hasilbmi")[0];
  box.style.color = "#000000";
  box.style.textShadow = "0 2px 2px #7dcfb6";
  box.style.padding = "1em";
  box.style.backgroundColor = "#ffffff";
  box.style.borderRadius = "10px";
  box.style.lineWeight = "200%";
  box.style.fontWeight = "10px";
  box.style.marginBottom = "10px";

  //memunculkan hasil bmi
  var div = document.getElementById("hasilBmi");
  div.innerHTML =
    "<h3>" +
    result +
    "</h3>" +
    "<h2>BMI : " +
    parseFloat(bmi).toFixed(2) +
    "</h2>" +
    "<h3>" +
    result1 +
    "</h3>";

  document.getElementById("submit").removeEventListener("click", countBmi);
  document.getElementById("submit").removeEventListener("click", validateForm);
}

document.getElementById("submit").addEventListener("click", countBmi);
