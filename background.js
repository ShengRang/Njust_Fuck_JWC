function getDomainFromUrl(url){
	var host = "null";
	if(typeof url == "undefined" || null == url)
		url = window.location.href;
	var regex = /.*\:\/\/([^\/]*).*/;
	var match = url.match(regex);
	if(typeof match != "undefined" && null != match)
		host = match[1];
	return host;
}

function checkForValidUrl(tabId, changeInfo, tab) {
	if(getDomainFromUrl(tab.url).toLowerCase()=="202.119.81.112:9080"){
		chrome.pageAction.show(tabId);
	}
};

//chrome.tabs.onUpdated.addListener(checkForValidUrl);

var articleData = {};
articleData.error = "加载中...";
chrome.extension.onMessage.addListener(function(request, sender, sendRequest){
	//console.log("Request comes from content script " + sender.tab.url);
	articleData = request;
});
