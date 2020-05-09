var myCookies = {};
//document.cookie = myCookies;

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


function saveAreaTriangle()
{
	myCookies += document.getElementById("Fläche Dreieck").innerHTML + "<br>";
	document.cookie = myCookies;
	//console.log(myCookies);
	console.log(document.cookie.toString());
}

function loadCookieString()
{
	//document.getElementById("age").value = document.cookie;
	//document.getElementById("out").innerHTML = myCookies;
	document.getElementById("out").innerHTML = myCookies;
}

function emptyCookie()
{
	myCookies = {};
	document.cookie = "theme=twenty; max-age=0; path=/; domain=myhome.me"
	alert("Cookie wurde geleert!");
}

function noCookie()
{
	if(myCookies.isEmpty())
		return true;
	else
		return false;
}



var mathContent = ['Pythagoras', 'kleine Lösungsformel'];

var physicsContent = ['Ohm´sches Gesetz', 'Leitwertstoffe'];

var chemistryContent = ['Stoffmenge'];


function search()
{ 
   var searchString = document.getElementById('searchString').value; // Suchwort auslesen 
   var match = false;

	for(var i = 0; i < mathContent.length; i++)
	{
		if(mathContent[i] == searchString)
		match = true;
	}
	if(match)
	{
		window.location.assign("Mathematik.html#"+searchString);
	}
	else
	{
		for(var i = 0; i < physicsContent.length; i++)
		{
			if(physicsContent[i] == searchString)
				match = true;
		}
		if(match)
		{
			window.location.assign("Physik.html#"+searchString);
			//alert("ji");
		}
		else
		{
			for(var i = 0; i < chemistryContent.length; i++)
			{
				if(chemistryContent[i] == searchString)
					match = true;
			}
			if(match)
				window.location.assign("Chemie.html#"+searchString);
			else
				alert("Keine Inhalte gefunden.");
		}
	}
}





