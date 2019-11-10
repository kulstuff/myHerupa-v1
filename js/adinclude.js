var externalScript  = document.createElement("script");
externalScript.type = "text/javascript";
externalScript.setAttribute('async','async');
externalScript.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
document.getElementById('two').appendChild(externalScript);

var ins2 = document.createElement("ins");
ins2.setAttribute('id','two');
ins2.setAttribute('class','adsbygoogle');
ins2.setAttribute('style','display:inline-block;width:300px;height:150px');/*add other styles if required*/
ins2.setAttribute('data-ad-client','ca-pub-4625423558686989');
ins2.setAttribute('data-ad-slot','4820122198')
document.getElementById('two').appendChild(ins2)

var inlineScript2 = document.createElement("script")
inlineScript2.type = "text/javascript";
inlineScript2.text = '(adsbygoogle = window.adsbygoogle || []).push({});'  
document.getElementById('two').appendChild(inlineScript2)