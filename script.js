document.addEventListener('DOMContentLoaded', function() {
    const pesan = "Jaga kesehatanmu dan jangan sedih terus. Maaf jika aku sering membuat kesalahan. Sampai bertemu di titik terbaik menurut takdir. Aku selalu mencintaimu dan akan terus mencintaimu, sampai kapan pun. Jangan pernah menyerah dalam meraih mimpi-mimpimu, aku selalu percaya kamu bisa! Kamu adalah orang yang kuat dan istimewa. Kalau boleh ngomong jujur, sebenarnya aku kangen, pengen ketemu. Nama kontak Riva masih seperti yang dulu, semuanya masih disemat. Foto-foto pap random Riva masih tersusun rapi di galeri ini. Kita gak bisa kayak dulu lagi? Kadang aku berpikir, semua kenangan yang kita bangun masih sangat berarti. Aku berharap, satu hari nanti, semua akan kembali seperti semula. Tapi aku juga sadar, bahwa hidup punya jalannya sendiri. Meski begitu, aku akan selalu ada di sini, mendukung dari kejauhan, mendoakan kebahagiaanmu. Tidak peduli sejauh apapun jarak memisahkan kita, perasaanku tidak pernah berubah. Aku percaya, jika memang takdir berpihak, suatu saat kita akan bertemu lagi dengan senyum yang sama. Sampai saat itu tiba, teruslah berjuang dan jangan pernah ragu untuk melangkah. Dunia ini punya begitu banyak hal indah yang menunggu untuk kamu temukan. Dan aku percaya, kamu layak mendapatkan kebahagiaan yang terbaik i love you.";
    const pesanElem = document.getElementById('pesan');
    const playButton = document.getElementById('playButton');
    const musik = document.getElementById('musik');
    let index = 0;
    let isPlaying = false;

    function tampilkanPesan() {
        if (index < pesan.length) {
            pesanElem.textContent += pesan.charAt(index);
            index++;
            setTimeout(tampilkanPesan, 50); // Atur kecepatan tampil huruf di sini (ms)
        }
    }

    playButton.addEventListener('click', function() {
        if (!isPlaying) {
            musik.play();
            tampilkanPesan();
            playButton.style.display = 'none'; // Sembunyikan tombol setelah diklik
            isPlaying = true;
        }
    });
});
