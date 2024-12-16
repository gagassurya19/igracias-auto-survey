// ==UserScript==
// @name         AutoSurvey
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Auto Survey Script!
// @author       iamnubs
// @match        https://igracias.telkomuniversity.ac.id/survey/index.php*
// @grant        none
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==

(function() {
  'use strict';

  function clickRandomOptions() {
    // Index yang ingin dikecualikan
    var excludeIndexes = [0, 1];

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
