/*global chrome*/
chrome.runtime.onInstalled.addListener(() => {
  console.log('Chrome extension successfully installed!');
  return;
});

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.tabs.create({ url: alarm.name.split(" ")[0] })
})
