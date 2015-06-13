var pxs = $("input[name='pj06xh']");
if(pxs.length==0) {
    function getRawUrl(href) {
        return href.slice(18, -11);
    }

    var tds = $("td a");

    var hs = [];

    $.each(tds, function (n, value) {
        hs.push(getRawUrl($(value).attr('href')));
    });
    var cs = [];

    var tbs = document.getElementById("dataList");
    for (var i = 1; i < tbs.rows.length; i++) {
        cs.push(tbs.rows[i].cells[2].innerText);
    }

    var msg = {
        type: "get href",
        hrefs: hs.join('@'),
        course: cs.join('@'),
        error: "失败哈哈哈"
    };
    chrome.extension.sendMessage(msg);
}
else{
    for(var i=0; i<pxs.length; i++){
        var tmp = pxs[i];
        var x = document.getElementById('pj0601id_' + $(tmp).attr('value') + '_1');
        $(x).attr('checked', 'checked');
        document.getElementById("issubmit").value = "1";
        $("#Form1").submit();
    }
}