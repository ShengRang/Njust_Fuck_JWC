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
document.addEventListener('DOMContentLoaded', function () {
	var data = chrome.extension.getBackgroundPage().articleData;
	//alert(data.course);
	//$("#message").text(data.hrefs);
	//$("#p_c").text(data.course);
	var obj = data.hrefs.split('@');
	var cs = data.course.split('@');
	var div = document.getElementById("div1");
	var tbody = document.getElementById("tbody");
	for(var i=0; i<obj.length; i++){
		$("tbody").append("<tr><td><a target='_blank'" + "href=http://" + getDomainFromUrl(tabs.url) + obj[i] +
        ">" + cs[i] + "</a></td></tr>");
	}

});
