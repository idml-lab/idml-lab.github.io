// js.js 

// stylesheet
document.write('<link href="./rsrc/jlcss.css" rel=stylesheet type=text/css>');

// google fonts
//document.write('<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=ABeeZee">');
//document.write('<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Gudea">');
document.write('<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Open Sans">');

// header
function header()
{
document.write('<div id="wrapper">');
document.write('<div id="wall">')
document.write('<div id="main">');
}

// footer
function footer()
{
document.write('</div>'); // main
document.write('</div>'); // wall
document.write('</div>'); // wrapper
}

// publications

function publicationAll(pubUrl, bibUrl, extraUrl, extraName, title, author, journal, detail)
{
    var boldAuthor = author.replace("J. Lee", "<b>J. Lee</b>");

    if (pubUrl.length > 0)
        document.write('<li><a href=' + pubUrl + '><b>' + title + '</b></a>. ');
    else
        document.write('<li><b>' + title + '</b>. ');
    
    document.write(boldAuthor + '. ');
    document.write('<br> &nbsp <i>' + journal + '</i>. ');	 
    document.write(detail + '. ');

    if (pubUrl.length > 0)
        document.write('(<a href=' + pubUrl + '>pdf</a>'); 
 
    if (bibUrl.length > 0)
	document.write(' | <a href=' + bibUrl + '>video</a>');

    if (extraUrl.length > 0)
        document.write(' | <a href=' + extraUrl + '>' + extraName + '</a>');

    if ((pubUrl.length > 0) || (bibUrl.length > 0) || (extraUrl.length > 0))
        document.write(')');	
}

function publication(id, title, author, journal, detail)
{
	var pubUrl = './papers/' + id + '.pdf';
       var vUrl = './papers/' + id + '.wmv';	
        var extraUrl = '';
        var extraName = '';

	publicationAll(pubUrl, vUrl, extraUrl, extraName, title, author, journal, detail);
}

function publicationNoBib(pubUrl, title, author, journal, detail)
{
    publicationAll(pubUrl, '', '', '', title, author, journal, detail);
}

function publicationNoFile(title, author, journal, detail)
{
    publicationAll('', '', '', '', title, author, journal, detail);
}

function publicationToAppear(title, author, journal, detail)
{
    detail = detail + '. (To appear)';
    publicationAll('', '', '', '', title, author, journal, detail);
}

function publicationExtraUrl(id, title, author, journal, detail, extraUrl, extraName)
{
	var pubUrl = '../papers/' + id + '.pdf';
        var bibUrl = '../papers/bib/' + id + '.txt';	

	publicationAll(pubUrl, bibUrl, extraUrl, extraName, title, author, journal, detail);    
}


// picture
function picture(location,caption)
{
document.write('<div align=center>');
document.write('<img src="' + location + '">');
document.write('<br><br><i>' + caption + '</i>');
document.write('<br><br></div>');
}

// link picture
function linkpicture(thumb, location, caption)
{
document.write('<div align=center>');
document.write('<a href=' + location + '>');
document.write('<img src="' + thumb + '">');
document.write('</a>');
document.write('<br><br><i>' + caption + '</i>');
document.write('<br><br></div>');
}

// double picture
function doublepicture(src1, src2, caption)
{
document.write('<div align=center><table width=100%><tr>');
document.write('<td width=50% align=center><img src="' + src1 + '">');
document.write('<td width=50% align=center><img src="' + src2 + '">');
document.write('</table>');
document.write('<br><br><i>' + caption + '</i>');
document.write('<br><br></div>');
}

// crop picture
function cropPictureAll(src, caption, linkUrl, height, pad)
{    
    document.write('<div align=center style="padding-left: ');
    document.write(pad);
    document.write('; padding-right: ');
    document.write(pad);
    document.write(';">');

    document.write('<div style="background:url(');
    document.write(src);
    document.write(') no-repeat top center; height: ');
    document.write(height);
    document.write(';">');

    //    if (linkUrl.length > 0)
    //    document.write('<a href=' + linkUrl + ' style="display:block; height:100%; width:100%;"></a>'); 

    document.write('</div><br>');

    if (linkUrl.length > 0)
	document.write('<a href=' + linkUrl + '>');

    document.write('<i>' + caption + '</i>');

    if (linkUrl.length > 0)
	document.write('</a>');
    
    document.write('</div><br>');
}

function cropPicture(src, caption, height)
{
    cropPictureAll(src, caption, "", height, "0px");
}

function cropPicturePad(src, caption, height, pad)
{
    cropPictureAll(src, caption, "", height, pad);
}

function cropPictureLinkPad(src, linkUrl, caption, height, pad)
{
    cropPictureAll(src, caption, linkUrl, height, pad);
}

// title
function title(title)
{
document.write('<h2>' + title + '</h2>');
}

// subtitle
function subtitle(subtitle)
{
document.write('<h3>' + subtitle + '</h3>');
}

// subsubtitle
function subsubtitle(subsubtitle)
{
document.write('<br><br><b>' + subsubtitle + '</b>');
}

// text
function text(text)
{
document.write('<p>' + text + '<br>');
}

// sprite text

function ToAscii(ch)
{
var asciiTable = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

var ascii = asciiTable.indexOf( ch );

return ( ascii + 32 );
}

function HasTail(ascii)
{
var tailTable    = "00000000000000000000000000000000000000000000000000000000000000000000000100100000110000000100000"

var tail = tailTable.charAt( ascii - 32);

return( tail );
}

function SpriteText (text)
{
	for(i = 0; i < text.length; i++)
	{	
		var ascii = ToAscii( text.charAt( i ) );
		var tail  = HasTail( ascii );

		if (ascii == 47) 
		{ document.write("<br>");}

		else
		{
			document.write('<img ');
 			if ( tail == 1 )
				{ document.write('align=middle '); }
			else
				{ document.write('align=bottom '); }
	
			document.write(' src = "../font/' + ascii + '.gif">');
		}
	}
}


function SpriteTitle (title)
{
	var maxChars = 40;
	var brk = 0;

	for (j = 0; j < title.length; j++)
	{
		if ((j - brk > maxChars) && (title.charAt( j ) == ' '))
		{	
			SpriteText( title.substring(brk, j));
			document.write("<br>");	
			brk = j;
		}	
	}	

	SpriteText( title.substring(brk, title.length));
}

