global.browser = require('webextension-polyfill');
import store from './store';

/* Page Load Complete */
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.active) {
        
        console.log(store.getters.scroll);

        chrome.tabs.sendMessage(tab.id, {
            action: "scrollBar",
            data: {
                scroll: store.getters.scroll
            }
        }, function(response) {
            console.log(response);
        });
    }
});

/* Tab Change */
chrome.tabs.onActivated.addListener(function(activeInfo) {
    console.log(activeInfo);
    chrome.tabs.sendMessage(activeInfo.tabId, {
        action: "scrollBar",
        data: {
            scroll: store.getters.scroll
        }
    }, function(response) {
        console.log(response);
    });
});

/* Message Listeners */
chrome.runtime.onMessage.addListener( function(request,sender,sendResponse) {

    if( request.action === "refreshPage" ) {
        chrome.tabs.query({ active: true },function(tabs){
            
            if(tabs.length === 0) {
                sendResponse({});
                return;
            }

            var tabID = tabs[0].id;
            // chrome.tabs.reload(tabID);

            chrome.tabs.sendMessage(tabID, {
                action: "scrollBar",
                data: {
                    scroll: store.getters.scroll
                }
            }, function(response) {
                console.log(response);
            });

            sendResponse( { tabID: tabID } );
        });
    }
});