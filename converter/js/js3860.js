Event.observe(document,'keyup',function(event){if(ctrlPressed&&altPressed)
{altPressed=false;ctrlPressed=false;}});Event.observe(document,'keydown',function(event)
{if(event.keyCode==18)
{altPressed=true;}
else if(event.keyCode==17)
{ctrlPressed=true;}
if(event.keyCode==69&&ctrlPressed&&altPressed)
{if(isEnglishOn=="false")
{isEnglishOn="true";$('english').checked="checked";changeKeyBoard('english');}
else
{isEnglishOn="false";$('unijoy').checked="checked";changeKeyBoard('unijoy');}}});var OldTitle="";var OldContent="";function insertEnglish(){insertAtCursor('[Bswjk]'+$F('english')+'[/Bswjk]');}
function insertLink(linkurl){if((linkurl==' ')||(linkurl==null)){}else{insertAtCursor('[wjsK='+linkurl+'][/wjsK]');}}
function chkForm(){if(!$('title').present()){alert("Please give post title... ");$('title').focus();return false;}
if(!$('content').present()){alert("Please give post Content... ");$('content').focus();return false;}
return true;}
function changeKeyBoard(kbselector)
{var kb=kbselector;if(kb=="unijoy"){isEnglishOn="false";setCookie('phonetic','false',3);setCookie('bijoykb','false',3);setCookie('english','false',3);}
else if(kb=="phonetic"){isEnglishOn="false";setCookie('phonetic','true',3);setCookie('bijoykb','false',3);setCookie('english','false',3);}
else if(kb=="bijoy"){isEnglishOn="false";setCookie('phonetic','false',3);setCookie('bijoykb','true',3);setCookie('english','false',3);}
else if(kb=="english"){isEnglishOn="true";setCookie('phonetic','false',3);setCookie('bijoykb','false',3);setCookie('english','true',3);}}
function setUnijoyAsDefaultLayout(){}