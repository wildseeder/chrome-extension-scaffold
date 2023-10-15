import { greeting } from '../common/whatever';

console.log(greeting());

chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({ url: chrome.runtime.getURL('main/index.html') });
});
