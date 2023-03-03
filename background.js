
chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.local.set({
        name: "Jack"
    });
});

// Get installed data
chrome.storage.local.get('name', data => {});