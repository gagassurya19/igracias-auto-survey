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

    function getRandomOption() {
        var options = ['Sangat puas', 'Puas', 'Netral'];
        return options[Math.floor(Math.random() * options.length)];
    }

    function clickRandomOption() {
        var randomOption = getRandomOption();
        $('.answerlist1:contains('+randomOption+')').each(function() {
            $(this).parent().find('.answerlist2').children().click();
        });
    }

    clickRandomOption();
})();
