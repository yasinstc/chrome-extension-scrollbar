import $ from 'jquery';
window.$ = $;

chrome.runtime.onMessage.addListener(gotMessage);

/**
 * Listen Message From Background.js
 * @param {*} request 
 * @param {*} sender 
 * @param {*} sendResponse 
 */
function gotMessage(request, sender, sendResponse) {

    console.log(request);

    if (request.action == "scrollBar") {
        let data = request.data;

        console.log(data);

        $('body').append(`
        <style>
        ::-webkit-scrollbar { width: ${data.scroll.width}; height: 12px; }
        ::-webkit-scrollbar-track { -webkit-box-shadow: inset 0 0 6px ${data.scroll.color.track}; }
        ::-webkit-scrollbar-thumb { -webkit-box-shadow: inset 0 0 6px ${data.scroll.color.thumb}; }
        </style>
        `)

        sendResponse({
            complete: "scrollBar method response"
        });
    }
}
