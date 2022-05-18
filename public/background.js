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

  const url = alarm.name.split(" ")[0];
  const name = alarm.name.split(" ")[4];
  const notifyMode = alarm.name.split(" ")[2] === "true";

  notify(name, url, notifyMode);
  if (notifyMode) return;
  chrome.tabs.create({ url: url });
});

const notify = (name, url, notifyMode) => {
  chrome.notifications.create("jopin", {
    title: "Jopin",
    message: notifyMode ? name : `${name} is now!`,
    type: "basic",
    iconUrl: "./images/logo-128.png",
    buttons: notifyMode ? [{ title: "Open" }] : [],
    requireInteraction: notifyMode ? true : false,
  });

  chrome.notifications.onButtonClicked.addListener((_, buttonIndex) => {
    if (buttonIndex === 0) {
      chrome.tabs.create({ url: url });
      chrome.notifications.clear("jopin");
    }
  });
};
