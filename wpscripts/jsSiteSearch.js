function GetSiteSearchResults(newWindow,frameObject,frameObjectName,fontFace,fontSize,fontColour,linkFace,linkSize,linkColour,resultsText)
{
var sTerms="";
var iDepth = 0;
var sURL = new String(window.location.href);
if (sURL.indexOf("?") > 0)
{
var arrParams = sURL.split("?");
var arrURLParams = arrParams[1].split("&");
for (var i=0;i<arrURLParams.length;i++)
{
var sParam = arrURLParams[i].split("=");
var sValue = unescape(sParam[1]);
if( sParam[0] == frameObjectName)
	sTerms = sValue;
if( sParam[0] == "depth")
	iDepth = parseInt(sValue);
}
}
var d=frameObject.document;
if (sTerms=="") {d.open(); d.write("<html><head></head><body style=\"background: transparent;\"></body></html>"); d.close();return;}
var sBack=""; for (i=0; i<iDepth; i++) sBack+='..\\\\';
d.open();
d.write("<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.01 Transitional//EN\" \"http://www.w3.org/TR/html4/loose.dtd\">");
d.write("<html lang=\"en\">");
d.write("<head>");
d.write("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">");
d.write("</head>");
d.write("<body style=\"margin: 0px 0px 0px 0px; font-family: "+fontFace+"; font-size: "+fontSize+"; color: "+fontColour+"; background: transparent;\">");
d.write("<div id=\"wpSearchResults\"></div>");
d.write("<script type=\"text/javascript\">");
d.write("var wordMap = new Array(\" should enroll? everyone welcome arduino industira want become professional electrical engineer electronic background right place check what after studying courses \",\" matthew thompson about morbi pellentesque mauris interdum porta tincidunt neque orci molestie vitae iaculis dolor felis nunc maecenas diam massa quis odio feugiat sagittis curabitur erat tempus placerat purus class aptent taciti sociosqu litora torquent conubia nostra inceptos hymenaeos nulla vestibulum eleifend nulla eget sapien rhoncus lacinia nullam metus aliquam semper phasellus ante ultrices quam dictum libero bibendum turpis elit lectus lobortis habitasse platea dictumst mauris rutrum enim proin mattis aliquam pulvinar congue pede fusce condimentum \",\" portfolio \",\" contact nulla quis nibh proin pede ligula facilisis gravida phasellus purus etiam sapien duis diam urna iaculis vehicula varius amet donec nisl aliquam erat volutpat integer fringilla lobortis quam suscipit magna consequat libero hendrerit ante quisque commodo tellus vestibulum lorem habitasse platea mauris rutrum pede wp123 012-345-6789 012-345-6787 fusce nulla vestibulumlorem curabitur \",\" matthew thompson terms nulla quis nibh proin pede ligula facilisis gravida phasellus purus etiam sapien duis diam urna iaculis vehicula varius amet donec nisl aliquam erat volutpat integer fringilla lobortis quam suscipit magna consequat libero hendrerit ante quisque commodo tellus vestibulum eleifend nulla suspendisse potenti turpis nisi venenatis accumsan imperdiet laoreet lacus mattis eget fermentum congue tortor vestibulum velit orci bibendum molestie sagittis nullam enim lorem morbi eros dignissim malesuada convallis augue aenean \",\" enroll your future? arduino beginners advance development product design industry \",\" find hong kong address territory kwai fong gardens block 2308 shenzhen buji street xihuai road floor course enrolments business enquiries email skype vinceliang hotmail 776151049 phone number 51131001 13528438652 \",\" advance arduino this course students have completed beginners course participants will in-depth into platform covering topics such interrupts timers peripheral modules bit-banging \",\" arduino beginners this course students what will learn basics programming your enough electronics dangerous make respond sensors communicate computer with build teleporters levitating fortresses nuclear reactors \",\" arduino products desg this course students have completed advance development course what will learn base servo control design interactive gamming high speed photography door lock mobile phone computer tablet \",\" arduino industry this course students have completed advance development course what will learn vending machine design design datalogging industrial security further automation \",\" arduino industry \",\" srduino industria project next>> accelerometer bike signal jacket control electronic door lock \",\" portfolio \",\" srduino industria project next>> microphone pollution sensor robot photography \");");
d.write("var pageMap = new Array(\"Home\",\"About\",\"Portfolio\",\"Contact\",\"Terms of Use\",\"Courses\",\"Contact\",\"Advance Arduino Development\",\"Arduino for Beginners\",\"Arduino for Product Design\",\"Arduino for the Industry\",\"Search Results\",\"Arduiono Project 01\",\"Portfolio\",\"Arduiono Project 02\");");
d.write("var linkMap = new Array(\"index.html\",\"about.html\",\"portfolio.html\",\"contact.html\",\"terms of use.html\",\"page6.html\",\"page7.html\",\"page8.html\",\"page9.html\",\"page10.html\",\"page11.html\",\"page12.html\",\"page13.html\",\"page14.html\",\"page15.html\");");
d.write("var preMap = new Array(\"Why Should you Enroll? Hi  Everyone  welcome to Arduino Industira  If you want to become a Professional Electrical Engineer but has no electronic background at all  you are in the right place   Check \",\"Matthew Thompson About Morbi pellentesque  mauris interdum porta tincidunt  neque orci molestie mauris  vitae iaculis dolor felis at nunc  Maecenas eu diam a leo porta interdum  In non massa quis odio\",\"Portfolio \",\"Contact Nulla quis nibh  Proin ac pede vel ligula facilisis gravida  Phasellus purus  Etiam sapien  Duis diam urna  iaculis ut  vehicula ac  varius sit amet  mi  Donec id nisl  Aliquam erat volutpat  \",\"Matthew Thompson Terms of use Nulla quis nibh  Proin ac pede vel ligula facilisis gravida  Phasellus purus  Etiam sapien  Duis diam urna  iaculis ut  vehicula ac  varius sit amet  mi  Donec id nisl  A\",\"EnrolL FOR Your Future? Arduino for Beginners Advance Arduino Development Arduino for Product  Design Arduino for the Industry \",\"Find us now    Hong Kong Address  New Territory  Kwai Fong  New Kwai Fong 			      Gardens  Block C  2308  Shenzhen Address  Shenzhen  Buji Street  Xihuai Road  Floor 4  Course Enrolments and Business\",\"Advance Arduino This course is for students who have completed the Arduino for Beginners Course  Participants will go in-depth into the Arduino platform  covering topics such as interrupts  timers  pe\",\"Arduino for Beginners This course is for students who are new to Arduino  What will we learn  The basics of programming your Arduino Enough electronics to be dangerous How to make your Arduino respond\",\"Arduino for ProDucts DEsG This course is for students who are have completed the Advance Arduino Development Course  What will we learn  Web base servo control design Interactive gamming control desig\",\"Arduino for the Industry This course is for students who are have completed the Advance Arduino Development Course  What will we learn  Vending machine design PLC design HMI Design Advance Datalogging\",\"Arduino for the Industry \",\"SRDUINO INDUSTRIA PROJECT NEXT>> Accelerometer Bike Signal Jacket Web Control Car Electronic Door Lock \",\"Portfolio \",\"SRDUINO INDUSTRIA PROJECT NEXT>> Microphone Pollution Sensor Robot Car Photography \");");
d.write("function doNav(ind)");
d.write("{");
if (newWindow)
d.write("		 window.open(\""+sBack+"\"+linkMap[ind],\"_blank\");");
else
d.write("		 parent.window.location.href=linkMap[ind];");
d.write("}");
d.write("function wpDoSearch(searchTerms){");
d.write("var terms = searchTerms.split(\" \");");
d.write("if (terms==\"\") return;");
d.write("var results = \"\";");
d.write("var resultscount = 0;");
d.write("for (var i=0; i<wordMap.length; i++)");
d.write("{");
d.write("			var found=true;");
d.write("			for (var j=0; j<terms.length; j++)");
d.write("					if (wordMap[i].indexOf(terms[j].toLowerCase())==-1) found=false;");
d.write("			if (found)");
d.write("			{");
d.write("				 results+=\"<a style=\\\"cursor: pointer; font-family: "+linkFace+"; font-size: "+linkSize+"; color: "+linkColour+"; \\\" onclick=\\\"doNav(\"+i+\");\\\"><u>\"+pageMap[i]+\"</u></a><br>\"+preMap[i]+\"...<br><br>\";");
d.write("				 resultscount++;");
d.write("			}");
d.write("}");
d.write("document.getElementById(\"wpSearchResults\").innerHTML=resultscount+\" "+resultsText+" \"+searchTerms+\"<br><br>\"+results;");
d.write("}");
while(sTerms.indexOf("\"") != -1 ) {
sTerms = sTerms.replace("\"","");
};
d.write("wpDoSearch(\""+sTerms+"\");");
d.write("</script>");
d.write("</body></html>");
d.close();
}