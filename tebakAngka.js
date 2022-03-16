let tanya = true;
let ronde = 1;
while ((tanya = true && ronde <= 3)) {
  alert("Selamat datang di di Game TEBAK ANGKA \nAyo kita masuk ke Ronde " + ronde);
  // menentukan pilihan player 1
  let player1 = prompt("Player 1 \nMasukin angka pilihan anda dari 1-3");
  // menentukan pilihan player 2
  let player2 = prompt("Player 2 \nMasukin angka pilihan anda dari 1-3");

  // membangkitkan bilangan random dari 1-3
  let jawaban = Math.floor(Math.random() * 4);

  let hasil = "";

  // rules

  if (player1 < 1 || player2 > 3) {
    hasil = "Input yang anda masukkan salah \nAngka yang dimasukkan harus 1 sd 3";
  } else if (player1 == null && player2 == null) {
    hasil = "SAYA TANYA. KALIAN NIAT MAEN GAK SIH???";
  } else if ((player1 = null || player2 == null)) {
    hasil = "ERROR! karena salah satu ada yang masukin angka";
  } else if (player1 == player2) {
    hasil = "DRAW";
  } else if (player1 === jawaban) {
    hasil = "Player 1 MENANG";
  } else if (player2 === jawaban) {
    hasil = "Player 2 MENANG";
  } else {
    hasil = "gak ada yang bener karena jawabannya " + jawaban;
  }
  // tampilkan hasilnya
  alert("Player1 menebak " + player1 + " dan Player2 menebak " + player2 + "\nmaka " + hasil);
  ronde++;

  tanya = confirm("Lanjutkan ke RONDE " + ronde + "?");
}

alert("Terimakasih telah bermain");
