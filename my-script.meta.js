// ==UserScript==
// @name         DeleteAllPixVerse
// @namespace    http://tampermonkey.net/
// @version      2025.10.1.1
// @description  try to take over the world!
// @author       You
// @match        https://app.pixverse.ai/asset/video
// @icon         https://www.google.com/s2/favicons?sz=64&domain=pixverse.ai
// @grant        none
// @updateURL    https://dsxailab.github.io/PixVerseScript/DeleteAllPixVerse.user.js
// @downloadURL  https://dsxailab.github.io/PixVerseScript/DeleteAllPixVerse.user.js
// ==/UserScript==

(function() {
    'use strict';
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async function start() {
        const toolbarQuery = "button div.shrink-0";
        /*
        document.getElementsByTagName("video")[0].click();
        await sleep(1000);

        const delButton = Array.from(document.querySelectorAll(toolbarQuery)).find(el => el.textContent.trim() === 'Delete');
        delButton.click();

        await sleep(1000);

        console.log("confirming");
        const confirm = document.querySelectorAll("div[role='dialog'][data-state='open'] button")[1];
        confirm.click();

        await sleep(2000);

        start();
        */
        const selectBtn = Array.from(document.querySelectorAll(toolbarQuery)).find(el => el.textContent.trim() === 'Select');
        selectBtn.click();

        await sleep(3000);

        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            //realClick(checkbox);
            checkbox.click();

            // Optional: dispatch a change event in case something listens for it
            checkbox.dispatchEvent(new Event('change', { bubbles: true }));
        });
        const delButton = Array.from(document.querySelectorAll(toolbarQuery)).find(el => el.textContent.trim() === 'Delete');
        delButton.click();

        await sleep(1000);

        console.log("confirming");
        const confirm = document.querySelectorAll("div[role='dialog'][data-state='open'] button")[1];
        confirm.click();

        setTimeout(() => start(), 3000);//*/
    }
     // Create a container div for the toolbar
    const bar = document.createElement('div');
    bar.style.marginTop = '140px';
    bar.style.marginLeft = '150px'
    bar.style.position = 'relative';
    bar.style.width = '50%';
    bar.style.background = '#28a74500';
    bar.style.color = 'white';
    bar.style.padding = '10px';
    bar.style.textAlign = 'center';
    bar.style.fontFamily = 'sans-serif';
    bar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
    bar.style.zIndex = '10000';


    const button = document.createElement('button');
    button.textContent = '✔️ Delete All';
    button.style.position = 'fixed';
    button.style.top = '250px';
    button.style.right = '20px';
    button.style.zIndex = '9999';
    button.style.padding = '10px';
    button.style.backgroundColor = '#28a745';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';

    // Add click event to check all checkboxes
    button.addEventListener('click', () => {
        start();
    });

    // Add the button to the bar and the bar to the top of the body
    bar.appendChild(button);
    document.body.insertBefore(bar, document.body.firstChild);

})();
