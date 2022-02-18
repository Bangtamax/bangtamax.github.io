let nilaiUjian = prompt("masukkan nilai anda");

if (nilaiUjian > 80) {
  alert("Anda pintar dan mendapat nilai A");
} else if (nilaiUjian >= 60 && nilaiUjian <= 80) {
  alert("Anda dapat nilai B artinya anda biasa aja");
} else if (nilaiUjian > 0 && nilaiUjian < 60) {
  alert("Anda dapat nilai C artinya anda kurang pinter");
} else {
  alert("gak mau ngecek yaudah");
}
