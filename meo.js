// ==UserScript==
// @name         Meo Glass
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Give Meo Glass UI
// @author       JoshAtticus
// @match        https://meo-32r.pages.dev/*
// @run-at       document-start
// @license      MIT
// @downloadURL  https://update.greasyfork.org/scripts/485845/Meo%20Glass.user.js
// @updateURL    https://update.greasyfork.org/scripts/485845/Meo%20Glass.meta.js
// ==/UserScript==

(function() {
    'use strict';

    const mainOpacity = 0.3; // Adjust the main opacity value from 0.0 to 1
    const blur = '10px'; // Adjust the blur value as per your preference
    const backgroundImage = 'https://i.ibb.co/s2JWJnR/Dark.png'; // Adjust the background image URL

    const repliesOpacity = mainOpacity + 0.1; // Opacity for replies div DO NOT EDIT

    const style = document.createElement('style');
    style.innerHTML = `
        html, body {
            height: 100%;
            margin: 0;
            padding: 0;
            background-image: url('${backgroundImage}');
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: fixed;
            overflow: visible !important;
            color: white !important; /* Set text color to white */
        }

        input.login-input.text, /* Login textboxes */
        input.login-input.button, /* Login buttons */

        textarea.message-input.text, /* Post Content box */
        button.message-send.button, /* Send Post button */
        div.post, /* Posts */

        input.navigation-button.button:not(.theme-button), /* Most buttons except theme-button */

        div.plugin, /* Plugins */
        textarea.cstpgtxt, /* Custom Plugins code box */
        input.cstpgbt /* Custom Plugins run button */ {
            background-color: rgba(0, 0, 0, ${mainOpacity});
            backdrop-filter: blur(${blur});
            border: none;
            box-shadow: none;
            color: white !important; /* Set text color to white */
        }

         div.message-container /* Message Area box */ {
            background-color: rgba(0, 0, 0, ${repliesOpacity});
            color: white !important; /* Set text color to white */
        }
    `;
    document.head.appendChild(style);

    // Function to remove buttons with class "theme-button"
    function removeThemeButtons() {
        const themeButtons = document.querySelectorAll('.theme-button');
        themeButtons.forEach(button => button.remove());
    }

    // Attach click event listener to document
    document.addEventListener('click', removeThemeButtons);
})();
