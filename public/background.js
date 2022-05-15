/*global chrome*/
chrome.runtime.onInstalled.addListener(() => {
  console.log("Chrome extension successfully installed!");
  return;
});

chrome.alarms.onAlarm.addListener((alarm) => {
  // Avoids opening tab when scheduled before current date
  // -10 seconds to have a reasonable threshold of time.
  // without -10 seconds, Date.now() > alarm.scheduledTime would
  // always be true
  if (Date.now() - 10000 > alarm.scheduledTime) {
    return;
  }

  chrome.tabs.create({ url: alarm.name.split(" ")[0] });
});
