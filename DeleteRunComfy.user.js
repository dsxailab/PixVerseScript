// ==UserScript==
// @name         DeleteRunComfy
// @namespace    http://tampermonkey.net/
// @version      2025.12.9.3
// @description  try to take over the world!
// @author       You
// @match        https://www.runcomfy.com/playground/assets
// @icon         https://www.runcomfy.com/_next/image?url=%2Fassets%2Fimages%2Flogo.png&w=256&q=75
// @grant        none
// @updateURL    https://dsxailab.github.io/PixVerseScript/DeleteRunComfy.user.js
// @downloadURL  https://dsxailab.github.io/PixVerseScript/DeleteRunComfy.user.js
// ==/UserScript==

(function() {
    'use strict';
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function scrollToBottom(){
        const div = document.querySelector('div[data-radix-scroll-area-viewport]');
        let scrollHeight = 0;
        while(scrollHeight != div.scrollHeight){
            scrollHeight = div.scrollHeight;
            div.scrollTo({
                top: div.scrollHeight
            });
            await sleep(1000);
        }
    }

    async function start() {
        await scrollToBottom();
        const deleteBtns = Array.from(document.querySelectorAll('button[aria-label="Delete asset"]')).slice(500).reverse();
        for(const btn of deleteBtns){
            btn.click();
            await sleep(500);
            const confirmBtn = Array.from(document.querySelectorAll("button.ring-offset-background")).find(x => x.textContent == "Yes, delete forever");
            confirmBtn.click();
            await sleep(1000);
        }
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
    button.textContent = '✔️ Delete Old Video';
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
