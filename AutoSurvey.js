// ==UserScript==
// @name         AUTO-FILL Igracias
// @namespace    http://tampermonkey.net/
// @version      2024-12-16
// @description  lets burn this surveys
// @author       you&me
// @match        https://igracias.telkomuniversity.ac.id/survey/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ac.id
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  function clickRandomOptions() {
    // Index yang ingin dikecualikan
    var excludeIndexes = [0];

    // Loop melalui setiap pertanyaan (dengan class 'tb')
    $('div.tb').each(function() {
      var options = [];

      // Ambil semua opsi untuk pertanyaan saat ini
      $(this).next('div#radioX').find('input.opt').each(function(index) {
        // Jika index tidak ada dalam excludeIndexes, tambahkan ke opsi valid
        if (!excludeIndexes.includes(index)) {
          options.push($(this)); // Simpan elemen jQuery, bukan hanya nilainya
        }
      });

      // Pastikan ada opsi yang valid untuk dipilih
      if (options.length > 0) {
        // Pilih opsi secara acak dari yang valid
        var randomOption = options[Math.floor(Math.random() * options.length)];

        // Klik opsi yang dipilih
        randomOption.click();
      }
    });
  }

  clickRandomOptions();
})();
