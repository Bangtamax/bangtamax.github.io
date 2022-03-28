// buat game tebak angka. cukup bangkitkan bilangan random dari 1 - 3 saja. (biar kemungkinan tertebaknya tidak terlalu sulit)
// terdiri dari 2 player
// gunakan fungsi bawaan javscript untuk menampikan interface seperti alert, prompt dan confirm
// buat beberapa validasi sebagai aturan main
// buat sistem scoring (tidak wajib)
// jika kurang jelas hasil akhirnya seperti apa bisa dilihat di video materi bagian akhir
// selamat mengerjakan jangan sungkan tanya atau diskusi dengan mentor jika mengalami kesulitan

// akan ada input untuk menebak angkanya validasi inputnya, input hanya boleh 1 -
// 3 kalau true, lanjut ke palyer 2 kalau false, dia input ulang akan ada input
// untuk menebak angka dari player 2 validasi inputnya, input hanya boleh 1 - 3
// dan input player 1 dan player 2 tidak boleh sama kondisi kalau tebakan player
// 1 dan 2 sama, maka tebakan diulang kondisi kalau berbeda, nanti di cek siapa
// yg tebakannya benar skor yg benar akan dinaikkan contoh: ronde 5 angka
// tebakan: 3 score player 1: 0 score palyer 2: 1 2 3 score player 2++ score
// player 1: 0 score palyer 2: 2 ronde naik++ kalau ronde sudah 5, permainan
// selesai, lihat score akhir

const message =
  "Game Tebak Angka \n" + "---------------------------------------- \n" + "Anda diminta untuk menebak angka dari 1-3," + "permainan berlangsung selama 5 ronde." + "Pemenang adalah pemain dengan tebakan benar terbanyak. \n" + "Good Luck!";

alert(message);

let score1 = 0;
let score2 = 0;
let round = 1;
let guess1;
let guess2;

function checkInput(input) {
  const parseInteger = parseInt(input);

  if (!parseInteger) {
    alert("Input tidak valid");
  } else if (parseInteger > 3) {
    alert("Tebakan tidak boleh lebih dari 3");
  } else if (parseInteger < 1) {
    alert("Tebakan tidak boleh kurang dari 1");
  } else {
    console.log("ini masuk kondisi true");
    return true;
  }
  console.log("ini masuk kondisi false");
  return false;
}

function game() {
  while (true) {
    const randomNumbers = Math.floor(Math.random() * 3 + 1);

    console.log("random", randomNumbers);
    alert(`Ronde ${round}`);

    //player 1
    //looping selama input player 1 belum valid
    while (true) {
      guess1 = parseInt(prompt("Player 1 masukkan nilai"));
      //check validasinya
      //kalau belum valid, return false, akan mengulang while loop nya
      //kalau sudah valid, return true, makan dia langsung break, dan keluar dari while loop nya
      if (checkInput(guess1)) break;
    }

    //player 2
    //looping selama input player 1 belum valid
    while (true) {
      guess2 = parseInt(prompt("Player 2 masukkan nilai"));
      //check validasinya
      //kalau belum valid, return false, akan mengulang while loop nya
      //kalau sudah valid, return true, makan dia langsung break, dan keluar dari while loop nya
      if (checkInput(guess2)) break;
    }

    //disini, input yg masuk SUDAH PASTI VALID ( 1 - 3 )

    if (guess1 === guess2) {
      //ini kalau inputnya sama, masuk sini, dan balik lagi looping di while paling atas
      alert("Tebakan tidak boleh sama");
    } else {
      //disini kondisinya, sudah pasti valid, dan SUDAH PASTI BERBEDA
      if (guess1 === randomNumbers) {
        score1++;
        alert("Player 1 benar");
      } else if (guess2 === randomNumbers) {
        score2++;
        alert("Player 2 benar");
      } else {
        alert("Tidak ada yang benar");
      }

      //disini kondisinya, score palyer sudah ditambah kalau ada yg benar
      //saatnya untuk menaikkan ronde
      round++;

      //ronde 6

      alert(`Score sementara saat ini: Player1: ${score1} dan Player2: ${score2}! Angka yang dicari adalah: ${randomNumbers}`);

      if (round === 6) break;
      //kalo klik oke = true
      //kalo klik cancel = false

      if (!confirm(`Lanjutkan ke ronde ${round}?`)) {
        break;
      }
    }
  }

  //score player 1: 0
  //score player 2: 0

  if (score1 > score2) {
    alert(`Selamat player 1 menang dengan score: ${score1}`);
  } else if (score2 > score1) {
    alert(`Selamat player 2 menang dengan score: ${score2}`);
  } else {
    alert("hasil kalian imbang");
  }
}

game();
