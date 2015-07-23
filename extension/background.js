chrome.tabs.onUpdated.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {file: "citation-needed.js"});
});