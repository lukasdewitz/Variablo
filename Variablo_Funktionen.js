var myCookies ={};

function saveCookies()
{
	myCookies["_user"] = document.getElementById("user").value;
	myCookies["_uage"] = document.getElementById("age").value.toString();
	document.cookie =""; //Leert den Cookie
	var expiresAttrib = new Date(Date.now()+60*1000).toString(); //saved für 60000Sekunden
	var cookieString = "";
	for(var key in myCookies)
	{
		cookieString = key+"="+myCookies[key]+";"+expiresAttrib+";";
		document.cookie = cookieString;
	}
	document.getElementById("out").innerHTML = document.cookie;
}

function loadCookies()
{
	myCookies = {}; //myCookiesArray wird geleert
	var kv = document.cookie.split(";"); //kv = keyvalue
	for (var id in kv)
	{
		var cookie = kv[id].split("=");
		myCookies[cookie[0].trim()] = cookie[1];
	}
	document.getElementById("user").value = myCookies["_user"];
	document.getElementById("age").value = myCookies["_uage"];
}