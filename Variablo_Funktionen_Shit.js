var myCookies ={};
//var myCookies["_user"] = document.getElementById("user").value;
//var myCookies["_uage"] = document.getElementById("age").value.toString();
var date = new Date(Date.now()+60*1000).toString();
var leer = true;
document.cookie = "";


function saveCookies()
{
	myCookies["_user"] = document.getElementById("user").value;
	myCookies["_uage"] = document.getElementById("age").value.toString();
	document.cookie =""; //Leert den Cookie
	var expiresAttrib = date; //saved für 60000Sekunden
	var cookieString = "";
	for(var key in myCookies)
	{
		cookieString = key+"="+myCookies[key]+";"+expiresAttrib+";";
		document.cookie = cookieString;
	}
	document.getElementById("out").innerHTML = document.cookie;
	
}

function saveCookiesNoDelete()
{
	if (leer)
	{
	myCookies["_user"] = document.getElementById("user").value;
	myCookies["_uage"] = document.getElementById("age").value.toString();
	//document.cookie =""; //Leert den Cookie
	var expiresAttrib = date; //saved für 60000Sekunden
	var cookieString = "";
	for(var key in myCookies)
	{
		cookieString = key+"="+myCookies[key]+";"+expiresAttrib+";";
		document.cookie = cookieString;
	}
	document.getElementById("out").innerHTML = document.cookie;
	leer = false;
	}
	else
	{
		document.cookie+= "\n";
		myCookies["_user"] = document.getElementById("user").value;
		myCookies["_uage"] = document.getElementById("age").value.toString();
		//document.cookie =""; //Leert den Cookie
		var expiresAttrib = date; //saved für 60000Sekunden
		for(var key in myCookies)
		{
			cookieString = key+"="+myCookies[key]+";"+expiresAttrib+";";
			document.cookie = cookieString;
		}
		document.getElementById("out").innerHTML = document.cookie;
	}
}

function saveAndLoadCookies()
{
	saveCookies();
}

function saveSatzVonPythagoras()
{
  var expires = "expires="+ date();
  document.cookie = a2+b2+c2 + "=" +  ";" + expires;
}

function saveSatzVonPythagorasTEST()
{
	myCookies["_pyth"] = document.getElementById("pyth").value.toString();
	document.cookie =""; //Leert den Cookie
	var expiresAttrib = date; //saved für 60000Sekunden
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

function loadSatzVonPythagoras()
{
	myCookies = {}; //myCookiesArray wird geleert
	var kv = document.cookie.split(";"); //kv = keyvalue
	for (var id in kv)
	{
		var cookie = kv[id].split("=");
		myCookies[cookie[0].trim()] = cookie[1];
	}
	document.getElementById("Pyth").value = myCookies["_pyth"];
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





