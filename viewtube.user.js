// ==UserScript==
// @name		ViewTube
// @version		2015.11.11
// @description		Watch videos from video sharing websites without Flash Player.
// @author		sebaro
// @namespace		http://isebaro.com/viewtube
// @license		GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @downloadURL		https://raw.githubusercontent.com/sebaro/viewtube/master/viewtube.user.js
// @updateURL		https://raw.githubusercontent.com/sebaro/viewtube/master/viewtube.user.js
// @icon		http://s3.amazonaws.com/uso_ss/icon/87011/large.png
// @include		http://youtube.com*
// @include		http://www.youtube.com*
// @include		https://youtube.com*
// @include		https://www.youtube.com*
// @include		http://gaming.youtube.com*
// @include		https://gaming.youtube.com*
// @include		http://dailymotion.com*
// @include		http://www.dailymotion.com*
// @include		https://dailymotion.com*
// @include		https://www.dailymotion.com*
// @include		http://vimeo.com*
// @include		http://www.vimeo.com*
// @include		https://vimeo.com*
// @include		https://www.vimeo.com*
// @include		http://metacafe.com*
// @include		http://www.metacafe.com*
// @include		https://metacafe.com*
// @include		https://www.metacafe.com*
// @include		http://break.com*
// @include		http://www.break.com*
// @include		https://break.com*
// @include		https://www.break.com*
// @include		http://funnyordie.com*
// @include		http://www.funnyordie.com*
// @include		https://funnyordie.com*
// @include		https://www.funnyordie.com*
// @include		http://videojug.com*
// @include		http://www.videojug.com*
// @include		https://videojug.com*
// @include		https://www.videojug.com*
// @include		http://blip.tv*
// @include		http://www.blip.tv*
// @include		https://blip.tv*
// @include		https://www.blip.tv*
// @include		http://veoh.com*
// @include		http://www.veoh.com*
// @include		https://veoh.com*
// @include		https://www.veoh.com*
// @include		http://crackle.com*
// @include		http://www.crackle.com*
// @include		https://crackle.com*
// @include		https://www.crackle.com*
// @include		http://viki.com*
// @include		http://www.viki.com*
// @include		https://viki.com*
// @include		https://www.viki.com*
// @include		http://imdb.com*
// @include		http://www.imdb.com*
// @include		https://imdb.com*
// @include		https://www.imdb.com*
// @include		http://facebook.com*
// @include		http://www.facebook.com*
// @include		https://facebook.com*
// @include		https://www.facebook.com*
// @include		https://screen.yahoo.com*
// @grant		GM_xmlhttpRequest
// @grant		GM_setValue
// @grant		GM_getValue
// ==/UserScript==


/*

  Copyright (C) 2010 - 2015 Sebastian Luncan

  This program is free software: you can redistribute it and/or modify
  it under the terms of the GNU General Public License as published by
  the Free Software Foundation, either version 3 of the License, or
  (at your option) any later version.

  This program is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
  GNU General Public License for more details.

  You should have received a copy of the GNU General Public License
  along with this program. If not, see <http://www.gnu.org/licenses/>.

  Website: http://isebaro.com/viewtube
  Contact: http://isebaro.com/contact

*/


(function() {


// Don't run on frames or iframes
if (window.top != window.self) return;


// ==========Variables========== //

// Userscript
var userscript = 'ViewTube';

// Page
var page = {win: window, doc: document, body: document.body, url: window.location.href, site: window.location.hostname.match(/([^.]+)\.[^.]+$/)[1]};

// Player
var player = {};
var feature = {'autoplay': true, 'definition': true, 'container': true, 'dash': false, 'direct': false, 'widesize': true, 'fullsize': true};
var option = {'plugin': 'Auto', 'autoplay': false, 'autoget': false, 'definition': 'HD', 'container': 'MP4', 'dash': false, 'direct': false, 'widesize': false, 'fullsize': false};
var plugins = ['Auto', 'Alt', 'HTML5', 'VLC', 'MP4', 'MPEG', 'FLV'];
if (navigator.platform.indexOf('Win') != -1) plugins = plugins.concat(['WMP', 'WMP2', 'QT']);
else if (navigator.platform.indexOf('Mac') != -1) plugins = plugins.concat(['QT']);
else plugins = plugins.concat(['MPV', 'Totem', 'Xine']);
var mimetypes = {
  'MPEG': 'video/mpeg',
  'MP4': 'video/mp4',
  'WebM': 'video/webm',
  'FLV': 'video/x-flv',
  'MOV': 'video/quicktime',
  'M4V': 'video/x-m4v',
  'AVI': 'video/x-msvideo',
  '3GP': 'video/3gpp',
  'WMP': 'application/x-ms-wmp',
  'WMP2': 'application/x-mplayer2',
  'QT': 'video/quicktime',
  'VLC': 'application/x-vlc-plugin',
  'MPV': 'video/mp4',
  'Totem': 'application/x-totem-plugin',
  'Xine': 'application/x-xine-plugin'
};

// Links
var website = 'http://isebaro.com/viewtube/?ln=en';
var contact = 'http://isebaro.com/contact/?ln=en&sb=viewtube';


// ==========Functions========== //

function createMyElement (type, content, event, action, target) {
  var obj = page.doc.createElement(type);
  if (content) {
    if (type == 'div') obj.innerHTML = content;
    else if (type == 'img') obj.src = content;
    else if (type == 'option') {
      obj.value = content;
      obj.innerHTML = content;
    }
    else if (type == 'video') {
      obj.src = content;
      obj.controls = 'controls';
      obj.autoplay = 'autoplay';
      obj.volume = 0.8;
      obj.innerHTML = '<br><br>The video should be loading. If it doesn\'t load, make sure your browser supports HTML5\'s Video and this video codec. If you think it\'s a script issue, please report it <a href="' + contact + '" style="color:#00892C">here</a>.';
    }
    else if (type == 'object') {
      obj.data = content;
      obj.innerHTML = '<br><br>The video should be loading. If it doesn\'t load, make sure a video plugin is installed. If you think it\'s a script issue, please report it <a href="' + contact + '" style="color:#00892C">here</a>.<param name="scale" value="aspect"><param name="stretchtofit" value="true"><param name="autostart" value="true"><param name="autoplay" value="true">';
    }
    else if (type == 'embed') {
      if (option['plugin'] == 'VLC') obj.setAttribute('target', content);
      else obj.src = content;
      obj.innerHTML = '<br><br>The video should be loading. If it doesn\'t load, make sure a video plugin is installed. If you think it\'s a script issue, please report it <a href="' + contact + '" style="color:#00892C">here</a>.<param name="scale" value="aspect"><param name="stretchtofit" value="true"><param name="autostart" value="true"><param name="autoplay" value="true">';
    }
  }
  if (type == 'video' || type == 'object' || type == 'embed') {
    if (option['plugin'] == 'Auto' || option['plugin'] == 'Alt' || option['plugin'] == 'HTML5') {
      obj.type = mimetypes[player['videoPlay'].replace(/.*\s/, '')];
    }
    else {
      obj.type = mimetypes[option['plugin']];
    }
    obj.id = 'vtVideo';
  }
  if (event == 'change') {
    if (target == 'video') {
      obj.addEventListener ('change', function () {
	player['videoPlay'] = this.value;
	if (player['isGetting']) {
	  modifyMyElement (player['buttonGet'] , 'div', 'Get', false);
	  player['isGetting'] = false;
	}
	if (player['isPlaying']) playMyVideo(option['autoplay']);
      }, false);
    }
    else if (target == 'plugin') {
      obj.addEventListener ('change', function () {
	option['plugin'] = this.value;
	setMyOptions ('plugin', option['plugin']);
	if (player['isPlaying']) playMyVideo(true);
      }, false);
    }
  }
  else if (event == 'click') {
    obj.addEventListener ('click', function () {
      if (action == 'close') {
	removeMyElement(page.body, target);
      }
      else if (action == 'logo') {
	page.win.location.href = website;
      }
      else if (action == 'play') {
	playMyVideo(!player['isPlaying']);
      }
      else if (action == 'get') {
	getMyVideo();
      }
      else if (action == 'autoplay') {
	option['autoplay'] = (option['autoplay']) ? false : true;
	if (option['autoplay']) {
	  styleMyElement (player['buttonAutoplay'], {color: '#008080', textShadow: '0px 1px 1px #CCCCCC'});
	  if (!player['isPlaying']) playMyVideo(true);
	}
	else {
	  styleMyElement (player['buttonAutoplay'], {color: '#CCCCCC', textShadow: '0px 0px 0px'});
	  playMyVideo(false);
	}
	setMyOptions ('autoplay', option['autoplay']);
      }
      else if (action == 'definition') {
	for (var itemDef = 0; itemDef < option['definitions'].length; itemDef++) {
	  if (option['definitions'][itemDef].match(/[A-Z]/g).join('') == option['definition']) {
	    var nextDef = (itemDef + 1 < option['definitions'].length) ? itemDef + 1 : 0;
	    option['definition'] = option['definitions'][nextDef].match(/[A-Z]/g).join('');
	    break;
	  }
	}
	modifyMyElement (player['buttonDefinition'], 'div', option['definition'], false);
	setMyOptions ('definition', option['definition']);
	if (player['isGetting']) {
	  modifyMyElement (player['buttonGet'] , 'div', 'Get', false);
	  player['isGetting'] = false;
	}
	selectMyVideo ();
	if (player['isPlaying']) playMyVideo(true);
      }
      else if (action == 'container') {
	for (var itemCont = 0; itemCont < option['containers'].length; itemCont++) {
	  if (option['containers'][itemCont] == option['container']) {
	    var nextCont = (itemCont + 1 < option['containers'].length) ? itemCont + 1 : 0;
	    option['container'] = option['containers'][nextCont];
	    break;
	  }
	}
	modifyMyElement (player['buttonContainer'], 'div', option['container'], false);
	setMyOptions ('container', option['container']);
	if (player['isGetting']) {
	  modifyMyElement (player['buttonGet'] , 'div', 'Get', false);
	  player['isGetting'] = false;
	}
	selectMyVideo ();
	if (player['isPlaying']) playMyVideo(true);
      }
      else if (action == 'dash') {
	option['dash'] = (option['dash']) ? false : true;
	if (option['dash']) {
	  styleMyElement (player['buttonDASH'], {color: '#008080', textShadow: '0px 1px 1px #CCCCCC'});
	}
	else {
	  styleMyElement (player['buttonDASH'], {color: '#CCCCCC', textShadow: '0px 0px 0px'});
	}
	setMyOptions ('dash', option['dash']);
      }
      else if (action == 'direct') {
	option['direct'] = (option['direct']) ? false : true;
	if (option['direct']) {
	  styleMyElement (player['buttonDirect'], {color: '#008080', textShadow: '0px 1px 1px #CCCCCC'});
	}
	else {
	  styleMyElement (player['buttonDirect'], {color: '#CCCCCC', textShadow: '0px 0px 0px'});
	}
	setMyOptions ('direct', option['direct']);
	selectMyVideo();
	if (player['isPlaying']) playMyVideo(true);
      }
      else if (action == 'widesize') {
	option['widesize'] = (option['widesize']) ? false : true;
	setMyOptions ('widesize', option['widesize']);
	resizeMyPlayer('widesize');
      }
      else if (action == 'fullsize') {
	option['fullsize'] = (option['fullsize']) ? false : true;
	setMyOptions ('fullsize', option['fullsize']);
	resizeMyPlayer('fullsize');
      }
    }, false);
  }
  return obj;
}

function getMyElement (obj, type, from, value, child, content) {
  var getObj, chObj, coObj;
  var pObj = (!obj) ? page.doc : obj;
  if (type == 'body') getObj = pObj.body;
  else {
    if (from == 'id') getObj = pObj.getElementById(value);
    else if (from == 'class') getObj = pObj.getElementsByClassName(value);
    else if (from == 'tag') getObj = pObj.getElementsByTagName(type);
    else if (from == 'ns') getObj = pObj.getElementsByTagNameNS(value, type);
  }
  chObj = (child >= 0) ? getObj[child] : getObj;
  if (content && chObj) {
    if (type == 'html' || type == 'body' || type == 'div' || type == 'option') coObj = chObj.innerHTML;
    else if (type == 'object') coObj = chObj.data;
    else if (type == 'img' || type == 'video' || type == 'embed') coObj = chObj.src;
    else coObj = chObj.textContent;
    return coObj;
  }
  else {
    return chObj;
  }
}

function modifyMyElement (obj, type, content, clear, hide) {
  if (content) {
    if (type == 'div') obj.innerHTML = content;
    else if (type == 'option') {
      obj.value = content;
      obj.innerHTML = content;
    }
    else if (type == 'object') obj.data = content;
    else if (type == 'img' || type == 'video' || type == 'embed') obj.src = content;
  }
  if (clear) {
    if (obj.hasChildNodes()) {
      while (obj.childNodes.length >= 1) {
        obj.removeChild(obj.firstChild);
      }
    }
  }
  if (hide) {
    for(var i = 0; i < obj.children.length; i++) {
      styleMyElement(obj.children[i], {display: 'none'});
    }
  }
}

function styleMyElement (obj, styles) {
  for (var property in styles) {
    if (styles.hasOwnProperty(property)) obj.style[property] = styles[property];
  }
}

function appendMyElement (parent, child) {
  parent.appendChild(child);
}

function removeMyElement (parent, child) {
  parent.removeChild(child);
}

function replaceMyElement (parent, orphan, child) {
  parent.replaceChild(orphan, child);
}

function createMyPlayer () {
  /* Get My Options */
  getMyOptions ();

  /* Player Settings */
  player['panelHeight'] = 18;
  player['panelPadding'] = 2;

  /* The Panel */
  var panelWidth = player['playerWidth'] - player['panelPadding'] * 2;
  player['playerPanel'] = createMyElement ('div', '', '', '', '');
  styleMyElement (player['playerPanel'], {width: panelWidth + 'px', height: player['panelHeight'] + 'px', padding: player['panelPadding'] + 'px', backgroundColor: 'inherit', textAlign: 'center'});
  appendMyElement (player['playerWindow'], player['playerPanel']);

  /* Panel Items */
  var panelItemBorder = 1;
  var panelItemHeight = player['panelHeight'] - panelItemBorder * 2;

  /* Panel Logo */
  player['panelLogo'] = createMyElement ('div', userscript + ': ', 'click', 'logo', '');
  player['panelLogo'].title = '{ViewTube: click to visit the script web page}';
  styleMyElement (player['panelLogo'], {height: panelItemHeight + 'px', padding: '0px', display: 'inline', color: '#336699', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', cursor: 'pointer'});
  appendMyElement (player['playerPanel'], player['panelLogo']);

  /* Panel Video Menu */
  player['videoMenu'] = createMyElement ('select', '', 'change', '', 'video');
  player['videoMenu'].title = '{Videos: select the video format for playback}';
  styleMyElement (player['videoMenu'], {width: '200px', height: panelItemHeight + 'px', border: '1px solid transparent', padding: '0px', display: 'inline', backgroundColor: 'inherit', color: '#336699', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', verticalAlign: 'baseline', cursor: 'pointer'});
  appendMyElement (player['playerPanel'], player['videoMenu'] );
  for (var videoCode in player['videoList']) {
    player['videoItem'] = createMyElement ('option', videoCode, '', '', '');
    styleMyElement (player['videoItem'], {padding: '0px', display: 'block', color: '#336699', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', cursor: 'pointer'});
    if (videoCode.indexOf('Video') != -1 || videoCode.indexOf('Audio') != -1) styleMyElement (player['videoItem'], {color: '#8F6B32'});
    if (player['videoList'][videoCode] == 'DASH') styleMyElement (player['videoItem'], {color: '#CF4913'});
    if (player['videoList'][videoCode] != 'DASH' || option['dash']) appendMyElement (player['videoMenu'], player['videoItem']);
    else delete player['videoList'][videoCode];
    if (videoCode == 'Direct Video Link') styleMyElement (player['videoItem'], {color: '#00C0C0'});
  }

  /* Panel Plugin Menu */
  player['pluginMenu'] = createMyElement ('select', '', 'change', '', 'plugin');
  player['pluginMenu'].title = '{Plugins: select the video plugin for playback}';
  styleMyElement (player['pluginMenu'], {width: '70px', height: panelItemHeight + 'px', border: '1px solid transparent', padding: '0px', display: 'inline', backgroundColor: 'inherit', color: '#336699', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', verticalAlign: 'baseline', cursor: 'pointer'});
  appendMyElement (player['playerPanel'], player['pluginMenu'] );
  for (var p = 0; p < plugins.length; p++) {
    player['pluginItem'] = createMyElement ('option', plugins[p], '', '', '');
    styleMyElement (player['pluginItem'], {padding: '0px', display: 'block', color: '#336699', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', cursor: 'pointer'});
    appendMyElement (player['pluginMenu'], player['pluginItem']);
  }
  player['pluginMenu'].value = option['plugin'];

  /* Panel Play Button */
  player['buttonPlay'] = createMyElement ('div', 'Play', 'click', 'play', '');
  player['buttonPlay'].title = '{Play/Stop: click to start/stop video playback}';
  styleMyElement (player['buttonPlay'], {height: panelItemHeight + 'px', border: '1px solid #CCCCCC', borderRadius: '3px', padding: '0px 5px', display: 'inline', color: '#37B704', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', cursor: 'pointer'});
  appendMyElement (player['playerPanel'], player['buttonPlay']);

  /* Panel Autoplay Button */
  if (feature['autoplay']) {
    player['buttonAutoplay'] = createMyElement ('div', 'AP', 'click', 'autoplay', '');
    player['buttonAutoplay'].title = '{Autoplay: click to enable/disable auto playback on page load}';
    styleMyElement (player['buttonAutoplay'], {height: panelItemHeight + 'px', border: '1px solid #CCCCCC', borderRadius: '3px', padding: '0px 5px', display: 'inline', color: '#CCCCCC', fontSize: '12px', cursor: 'pointer'});
    if (option['autoplay']) styleMyElement (player['buttonAutoplay'], {color: '#008080', textShadow: '0px 1px 1px #CCCCCC'});
    appendMyElement (player['playerPanel'], player['buttonAutoplay']);
  }

  /* Panel Get Button */
  player['buttonGet'] = createMyElement ('div', 'Get', 'click', 'get', '');
  player['buttonGet'].title = '{Get: click to download the selected video format}';
  styleMyElement (player['buttonGet'], {height: panelItemHeight + 'px', border: '1px solid #CCCCCC', borderRadius: '3px', padding: '0px 5px', display: 'inline', color: '#C000C0', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', cursor: 'pointer'});
  appendMyElement (player['playerPanel'], player['buttonGet']);

  /* Panel Definition Button */
  if (feature['definition']) {
    player['buttonDefinition'] = createMyElement ('div', option['definition'], 'click', 'definition', '');
    player['buttonDefinition'].title = '{Definition: click to change the preferred video definition}';
    styleMyElement (player['buttonDefinition'], {height: panelItemHeight + 'px', border: '1px solid #CCCCCC', borderRadius: '3px', padding: '0px 5px', display: 'inline', color: '#008000', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', cursor: 'pointer'});
    appendMyElement (player['playerPanel'], player['buttonDefinition']);
  }

  /* Panel Container Button */
  if (feature['container']) {
    player['buttonContainer'] = createMyElement ('div', option['container'], 'click', 'container', '');
    player['buttonContainer'].title = '{Container: click to change the preferred video container}';
    styleMyElement (player['buttonContainer'], {height: panelItemHeight + 'px', border: '1px solid #CCCCCC', borderRadius: '3px', padding: '0px 5px', display: 'inline', color: '#008000', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', cursor: 'pointer'});
    appendMyElement (player['playerPanel'], player['buttonContainer']);
  }

  /* Panel DASH Button */
  if (feature['dash']) {
    player['buttonDASH'] = createMyElement ('div', 'MD', 'click', 'dash', '');
    player['buttonDASH'].title = '{MPEG-DASH: click to enable/disable DASH playback using the HTML5 video player (experimental)}';
    styleMyElement (player['buttonDASH'], {height: panelItemHeight + 'px', border: '1px solid #CCCCCC', borderRadius: '3px', padding: '0px 5px', display: 'inline', color: '#CCCCCC', fontSize: '12px', cursor: 'pointer'});
    if (option['dash']) styleMyElement (player['buttonDASH'], {color: '#008080', textShadow: '0px 1px 1px #CCCCCC'});
    appendMyElement (player['playerPanel'], player['buttonDASH']);
  }

  /* Panel Direct Button */
  if (feature['direct']) {
    player['buttonDirect'] = createMyElement ('div', 'DVL', 'click', 'direct', '');
    player['buttonDirect'].title = '{DVL: click to enable/disable auto selection of Direct Video Link}';
    styleMyElement (player['buttonDirect'], {height: panelItemHeight + 'px', border: '1px solid #CCCCCC', borderRadius: '3px', padding: '0px 5px', display: 'inline', color: '#CCCCCC', fontSize: '12px', cursor: 'pointer'});
    if (option['direct']) styleMyElement (player['buttonDirect'], {color: '#008080', textShadow: '0px 1px 1px #CCCCCC'});
    appendMyElement (player['playerPanel'], player['buttonDirect']);
  }

  /* Panel Widesize Button */
  if (feature['widesize']) {
    if (option['widesize']) player['buttonWidesize'] = createMyElement ('div', '&lt;', 'click', 'widesize', '');
    else player['buttonWidesize'] = createMyElement ('div', '&gt;', 'click', 'widesize', '');
    player['buttonWidesize'].title = '{Widesize: click to enter player widesize or return to normal size}';
    styleMyElement (player['buttonWidesize'], {height: panelItemHeight + 'px', border: '1px solid #CCCCCC', borderRadius: '3px', padding: '0px 5px', display: 'inline', color: '#C05800', fontSize: '12px', textShadow: '1px 1px 2px #CCCCCC', cursor: 'pointer'});
    appendMyElement (player['playerPanel'], player['buttonWidesize']);
  }

  /* Panel Fullsize Button */
  if (feature['fullsize']) {
    if (option['fullsize']) player['buttonFullsize'] = createMyElement ('div', '-', 'click', 'fullsize', '');
    else player['buttonFullsize'] = createMyElement ('div', '+', 'click', 'fullsize', '');
    player['buttonFullsize'].title = '{Fullsize: click to enter player fullsize or return to normal size}';
    styleMyElement (player['buttonFullsize'], {height: panelItemHeight + 'px', border: '1px solid #CCCCCC', borderRadius: '3px', padding: '0px 5px', display: 'inline', color: '#C05800', fontSize: '12px', textShadow: '1px 1px 2px #CCCCCC', cursor: 'pointer'});
    appendMyElement (player['playerPanel'], player['buttonFullsize']);
  }

  /* The Content */
  player['contentWidth'] = player['playerWidth'];
  player['contentHeight'] = player['playerHeight'] - player['panelHeight'] - player['panelPadding'] * 2;
  player['playerContent'] = createMyElement ('div', '', '', '', '');
  styleMyElement (player['playerContent'], {width: player['contentWidth'] + 'px', height: player['contentHeight'] + 'px', position: 'relative', color: '#AD0000', backgroundColor: '#000000', fontSize: '14px', fontWeight: 'bold', textAlign: 'center'});
  appendMyElement (player['playerWindow'], player['playerContent']);

  /* The Video Thumbnail */
  if (player['videoThumb']) {
    player['contentImage'] = createMyElement ('img', player['videoThumb'], 'click', 'play', '');
    player['contentImage'].title = '{Click to start video playback}';
    styleMyElement (player['contentImage'], {maxWidth: '100%', maxHeight: '100%', position: 'absolute', top: '0px', left: '0px', right: '0px', bottom: '0px', margin: 'auto', border: '0px', cursor: 'pointer'});
    player['contentImage'].addEventListener('load', function () {
      if (this.width/this.height >= player['contentWidth']/player['contentHeight']) {
	this.style.width = '100%';
      }
      else {
	this.style.height = '100%';
      }
    });
  }

  /* Disabled Features */
  if (!feature['autoplay']) option['autoplay'] = false;
  if (!feature['dash']) option['dash'] = false;
  if (!feature['widesize']) option['widesize'] = false;
  if (!feature['fullsize']) option['fullsize'] = false;

  /* Resize My Player */
  if (option['widesize']) resizeMyPlayer('widesize');
  if (option['fullsize']) resizeMyPlayer('fullsize');

  /* Select My Video */
  if (feature['definition'] || feature['container']) selectMyVideo ();

  /* Play My Video */
  playMyVideo (option['autoplay']);
}

function selectMyVideo () {
  var vdoCont = (option['container'] != 'Any') ? [option['container']] : option['containers'];
  var vdoDef = option['definitions'];
  var vdoList = {};
  for (var vC = 0; vC < vdoCont.length; vC++) {
    if (vdoCont[vC] != 'Any') {
      for (var vD = 0; vD < vdoDef.length; vD++) {
	var format = vdoDef[vD] + ' ' + vdoCont[vC];
	if (!vdoList[vdoDef[vD]]) {
	  for (var vL in player['videoList']) {
	    if (vL == format) {
	      vdoList[vdoDef[vD]] = vL;
	      break;
	    }
	  }
	}
      }
    }
  }
  if (option['definition'] == 'UHD') {
    if (vdoList['Ultra High Definition']) player['videoPlay'] = vdoList['Ultra High Definition'];
    else if (vdoList['Full High Definition']) player['videoPlay'] = vdoList['Full High Definition'];
    else if (vdoList['High Definition']) player['videoPlay'] = vdoList['High Definition'];
    else if (vdoList['Standard Definition']) player['videoPlay'] = vdoList['Standard Definition'];
    else if (vdoList['Low Definition']) player['videoPlay'] = vdoList['Low Definition'];
    else if (vdoList['Very Low Definition']) player['videoPlay'] = vdoList['Very Low Definition'];
  }
  else if (option['definition'] == 'FHD') {
    if (vdoList['Full High Definition']) player['videoPlay'] = vdoList['Full High Definition'];
    else if (vdoList['High Definition']) player['videoPlay'] = vdoList['High Definition'];
    else if (vdoList['Standard Definition']) player['videoPlay'] = vdoList['Standard Definition'];
    else if (vdoList['Low Definition']) player['videoPlay'] = vdoList['Low Definition'];
    else if (vdoList['Very Low Definition']) player['videoPlay'] = vdoList['Very Low Definition'];
  }
  else if (option['definition'] == 'HD') {
    if (vdoList['High Definition']) player['videoPlay'] = vdoList['High Definition'];
    else if (vdoList['Standard Definition']) player['videoPlay'] = vdoList['Standard Definition'];
    else if (vdoList['Low Definition']) player['videoPlay'] = vdoList['Low Definition'];
    else if (vdoList['Very Low Definition']) player['videoPlay'] = vdoList['Very Low Definition'];
  }
  else if (option['definition'] == 'SD') {
    if (vdoList['Standard Definition']) player['videoPlay'] = vdoList['Standard Definition'];
    else if (vdoList['Low Definition']) player['videoPlay'] = vdoList['Low Definition'];
    else if (vdoList['Very Low Definition']) player['videoPlay'] = vdoList['Very Low Definition'];
  }
  else if (option['definition'] == 'LD') {
    if (vdoList['Low Definition']) player['videoPlay'] = vdoList['Low Definition'];
    else if (vdoList['Very Low Definition']) player['videoPlay'] = vdoList['Very Low Definition'];
  }
  else if (option['definition'] == 'VLD') {
    if (vdoList['Very Low Definition']) player['videoPlay'] = vdoList['Very Low Definition'];
    else if (vdoList['Low Definition']) player['videoPlay'] = vdoList['Low Definition'];
  }
  if (option['direct']) player['videoPlay'] = 'Direct Video Link';
  player['videoMenu'].value = player['videoPlay'];
}

function playDASHwithVLC () {
  if (player['videoPlay'].indexOf('MP4') != -1) {
    player['contentVideo'] = createMyElement ('embed', player['videoList'][player['videoPlay'].replace(/MP4/, 'Video MP4')], '', '', '');
    if (player['videoList']['Medium Bitrate Audio Opus']) {
      player['contentAudio'] = createMyElement ('embed', player['videoList']['Medium Bitrate Audio Opus'], '', '', '');
    }
    else {
      player['contentAudio'] = createMyElement ('embed', player['videoList']['Medium Bitrate Audio MP4'], '', '', '');
    }
  }
  else {
    player['contentVideo'] = createMyElement ('embed', player['videoList'][player['videoPlay'].replace(/WebM/, 'Video WebM')], '', '', '');
    if (player['videoList']['Medium Bitrate Audio Opus']) {
      player['contentAudio'] = createMyElement ('embed', player['videoList']['Medium Bitrate Audio Opus'], '', '', '');
    }
    else {
      player['contentAudio'] = createMyElement ('embed', player['videoList']['Medium Bitrate Audio WebM'], '', '', '');
    }
  }
  styleMyElement (player['contentAudio'], {position: 'absolute', zIndex: '-1'});
  appendMyElement (player['playerContent'], player['contentAudio']);
  player['contentVLCInit'] = page.win.setInterval(function () {
    if (player['contentAudio'].wrappedJSObject.playlist) {
      player['contentAudio'].wrappedJSObject.playlist.pause();
      player['contentVLCAudioPlaylistInit'] = true;
    }
    if (player['contentVideo'].wrappedJSObject.playlist) {
      player['contentVideo'].wrappedJSObject.playlist.pause();
      player['contentVLCVideoPlaylistInit'] = true;
    }
    if (player['contentAudio'].wrappedJSObject.input) {
      player['contentAudio'].wrappedJSObject.input.time = 0;
      player['contentVLCAudioInputInit'] = true;
    }
    if (player['contentVideo'].wrappedJSObject.input) {
      player['contentVideo'].wrappedJSObject.input.time = 0;
      player['contentVLCVideoInputInit'] = true;
    }
    if (player['contentVLCAudioPlaylistInit'] && player['contentVLCVideoPlaylistInit']
	&& player['contentVLCAudioInputInit'] && player['contentVLCVideoInputInit']) {
      player['contentAudio'].wrappedJSObject.playlist.play();
      player['contentVideo'].wrappedJSObject.playlist.play();
      player['contentVLCSync'] = page.win.setInterval(function () {
	if (!player['contentVideo'] || !player['contentVideo'].wrappedJSObject || !player['contentVideo'].wrappedJSObject.input) {
	  page.win.clearInterval(player['contentVLCSync']);
	}
	if (Math.abs(player['contentVideo'].wrappedJSObject.input.time - player['contentAudio'].wrappedJSObject.input.time) >= 500) {
	  player['contentAudio'].wrappedJSObject.input.time = player['contentVideo'].wrappedJSObject.input.time;
	}
	if (player['contentVideo'].wrappedJSObject.input.state == '4') {
	  player['contentAudio'].wrappedJSObject.playlist.pause();
	  player['contentAudioPaused'] = true;
	}
	if (player['contentVideo'].wrappedJSObject.input.state == '6') {
	  player['contentAudio'].wrappedJSObject.playlist.pause();
	  player['contentAudioPaused'] = true;
	}
	if (player['contentVideo'].wrappedJSObject.input.state == '3' && player['contentAudioPaused']) {
	  player['contentAudio'].wrappedJSObject.playlist.play();
	  player['contentAudioPaused'] = false;
	}
      }, 1000);
      page.win.clearInterval(player['contentVLCInit']);
    }
  }, 500);
}

function playDASHwithHTML5 () {
  var prevPlugin = option['plugin'];
  option['plugin'] = 'HTML5';
  if (player['videoPlay'].indexOf('MP4') != -1) {
    player['contentVideo'] = createMyElement ('video', player['videoList'][player['videoPlay'].replace(/MP4/, 'Video MP4')], '', '', '');
    if (player['videoList']['Medium Bitrate Audio Opus']) {
      player['contentAudio'] = createMyElement ('video', player['videoList']['Medium Bitrate Audio Opus'], '', '', '');
    }
    else {
      player['contentAudio'] = createMyElement ('video', player['videoList']['Medium Bitrate Audio MP4'], '', '', '');
    }
  }
  else {
    player['contentVideo'] = createMyElement ('video', player['videoList'][player['videoPlay'].replace(/WebM/, 'Video WebM')], '', '', '');
    if (player['videoList']['Medium Bitrate Audio Opus']) {
      player['contentAudio'] = createMyElement ('video', player['videoList']['Medium Bitrate Audio Opus'], '', '', '');
    }
    else {
      player['contentAudio'] = createMyElement ('video', player['videoList']['Medium Bitrate Audio WebM'], '', '', '');
    }
  }
  player['contentAudio'].pause();
  player['contentAudioPaused'] = true;
  player['contentVideo'].addEventListener ('play', function() {
    if (player['contentVideo'].readyState && player['contentVideo'].readyState >= 4) {
      if (player['contentAudio'].readyState && player['contentAudio'].readyState >= 4) {
	player['contentAudio'].play();
	player['contentAudioPaused'] = false;
      }
    }
  }, false);
  player['contentVideo'].addEventListener ('pause', function() {
    player['contentAudio'].pause();
  }, false);
  player['contentVideo'].addEventListener('ended', function() {
    player['contentVideo'].pause();
    player['contentAudio'].pause();
  }, false);
  player['contentVideo'].addEventListener('timeupdate', function() {
    if (player['contentAudio'].readyState && player['contentAudio'].readyState >= 4) {
      if (player['contentAudioPaused']) {
	player['contentAudio'].play();
      }
      if (player['contentAudio'].paused && !player['contentVideo'].paused) {
	player['contentAudio'].play();
      }
      if (Math.abs(player['contentVideo'].currentTime - player['contentAudio'].currentTime) >= 0.30) {
	player['contentAudio'].currentTime = player['contentVideo'].currentTime;
      }
    }
  }, false);
  styleMyElement (player['contentAudio'], {display: 'none'});
  appendMyElement (player['contentVideo'], player['contentAudio']);
  option['plugin'] = prevPlugin;
}

function playMyVideo (play) {
  if (play) {
    player['isPlaying'] = true;
    modifyMyElement (player['buttonPlay'], 'div', 'Stop', false);
    styleMyElement (player['buttonPlay'], {color: '#AD0000'});
    modifyMyElement (player['playerContent'], 'div', '', true);
    if (player['videoList'][player['videoPlay']] == 'DASH') {
      if (option['plugin'] == 'VLC') {
	playDASHwithVLC();
      }
      else {
	playDASHwithHTML5();
      }
    }
    else {
      if (option['plugin'] == 'HTML5') player['contentVideo'] = createMyElement ('video', player['videoList'][player['videoPlay']], '', '', '');
      else if (option['plugin'] == 'Alt' || option['plugin'] == 'VLC') player['contentVideo'] = createMyElement ('embed', player['videoList'][player['videoPlay']], '', '', '');
      else player['contentVideo'] = createMyElement ('object', player['videoList'][player['videoPlay']], '', '', '');
    }
    player['contentVideo'].width = player['contentWidth'];
    player['contentVideo'].height = player['contentHeight'];
    styleMyElement (player['contentVideo'], {position: 'relative', width: player['contentWidth'] + 'px', height: player['contentHeight'] + 'px'});
    appendMyElement (player['playerContent'], player['contentVideo']);
  }
  else {
    player['isPlaying'] = false;
    modifyMyElement (player['buttonPlay'], 'div', 'Play', false);
    styleMyElement (player['buttonPlay'], {color: '#37B704'});
    modifyMyElement (player['playerContent'], 'div', '', true);
    if (player['contentImage']) appendMyElement (player['playerContent'], player['contentImage']);
    else showMyMessage ('!thumb');
  }
}

function getMyVideo () {
  var vdoURL = player['videoList'][player['videoPlay']];
  if (vdoURL == 'DASH') return;
  if (vdoURL == page.url) return;
  if (player['videoTitle']) {
    var vdoD = ' (' + player['videoPlay'] + ')';
    vdoD = vdoD.replace(/Ultra High Definition/, 'UHD');
    vdoD = vdoD.replace(/Full High Definition/, 'FHD');
    vdoD = vdoD.replace(/High Definition/, 'HD');
    vdoD = vdoD.replace(/Standard Definition/, 'SD');
    vdoD = vdoD.replace(/Very Low Definition/, 'VLD');
    vdoD = vdoD.replace(/Low Definition/, 'LD');
    vdoD = vdoD.replace(/\sFLV|\sMP4|\sWebM|\s3GP/g, '');
    vdoURL = vdoURL + '&title=' + player['videoTitle'] + vdoD;
  }
  if (option['autoget'] && !player['videoPlay'].match(/(Video|Audio)/)) page.win.location.href = vdoURL;
  else {
    var vdoLink = 'Get <a href="' + vdoURL + '" style="color:#00892C">Link</a>';
    modifyMyElement (player['buttonGet'] , 'div', vdoLink, false);
    player['isGetting'] = true;
  }
}

function resizeMyPlayer (size) {
  if (size == 'widesize') {
    if (option['widesize']) {
      if (player['buttonWidesize']) modifyMyElement (player['buttonWidesize'], 'div', '&lt;', false);
      var playerWidth = player['playerWideWidth'];
      var playerHeight= player['playerWideHeight'];
      var sidebarMargin = player['sidebarMarginWide'];
    }
    else {
      if (player['buttonWidesize']) modifyMyElement (player['buttonWidesize'], 'div', '&gt;', false);
      var playerWidth = player['playerWidth'];
      var playerHeight= player['playerHeight'];
      var sidebarMargin = player['sidebarMarginNormal'];
    }
  }
  else if (size == 'fullsize') {
    if (option['fullsize']) {
      var playerPosition = 'fixed';
      var playerWidth = page.win.innerWidth || page.doc.documentElement.clientWidth;
      var playerHeight = page.win.innerHeight || page.doc.documentElement.clientHeight;
      var playerIndex = '9999999999';
      if (!player['isFullsize']) {
	if (feature['widesize']) styleMyElement (player['buttonWidesize'], {display: 'none'});
	modifyMyElement (player['buttonFullsize'], 'div', '-', false);
	appendMyElement (page.body, player['playerWindow']);
	styleMyElement (page.body, {overflow: 'hidden'});
	if (!player['resizeListener']) player['resizeListener'] = function() {resizeMyPlayer('fullsize')};
	page.win.addEventListener ('resize', player['resizeListener'], false);
	player['isFullsize'] = true;
      }
    }
    else {
      var playerPosition = 'relative';
      var playerWidth = (option['widesize']) ? player['playerWideWidth'] : player['playerWidth'];
      var playerHeight = (option['widesize']) ? player['playerWideHeight'] : player['playerHeight'];
      var playerIndex = 'auto';
      if (feature['widesize']) styleMyElement (player['buttonWidesize'], {display: 'inline'});
      modifyMyElement (player['buttonFullsize'], 'div', '+', false);
      appendMyElement (player['playerSocket'], player['playerWindow']);
      styleMyElement (page.body, {overflow: 'auto'});
      page.win.removeEventListener ('resize', player['resizeListener'], false);
      player['isFullsize'] = false;
    }
  }

  /* Resize The Player */
  if (size == 'widesize') {
    if (player['sidebarWindow']) styleMyElement (player['sidebarWindow'], {marginTop: sidebarMargin + 'px'});
    styleMyElement (player['playerWindow'], {width: playerWidth + 'px', height: playerHeight + 'px'});
  }
  else styleMyElement (player['playerWindow'], {position: playerPosition, top: '0px', left: '0px', width: playerWidth + 'px', height: playerHeight + 'px', zIndex: playerIndex});

  /* Resize The Panel */
  var panelWidth = playerWidth - player['panelPadding'] * 2;
  styleMyElement (player['playerPanel'], {width: panelWidth + 'px'});

  /* Resize The Content */
  player['contentWidth'] = playerWidth;
  player['contentHeight'] = playerHeight - player['panelHeight'] - player['panelPadding'] * 2;
  styleMyElement (player['playerContent'], {width: player['contentWidth'] + 'px', height: player['contentHeight'] + 'px'});
  if (player['isPlaying']) {
    player['contentVideo'].width = player['contentWidth'];
    player['contentVideo'].height = player['contentHeight'];
    styleMyElement (player['contentVideo'], {width: player['contentWidth'] + 'px', height: player['contentHeight'] + 'px'});
  }
}

function cleanMyContent (content, unesc) {
  var myNewContent = content;
  if (unesc) myNewContent = unescape (myNewContent);
  myNewContent = myNewContent.replace (/\\u0025/g,'%');
  myNewContent = myNewContent.replace (/\\u0026/g,'&');
  myNewContent = myNewContent.replace (/\\/g,'');
  myNewContent = myNewContent.replace (/\n/g,'');
  return myNewContent;
}

function getMyContent (url, pattern, clean) {
  var myPageContent, myVideosParse, myVideosContent;
  var isIE = (navigator.appName.indexOf('Internet Explorer') != -1) ? true : false;
  var getMethod = (url != page.url || isIE) ? 'XHR' : 'DOM';
  if (getMethod == 'DOM') {
    myPageContent = getMyElement ('', 'html', 'tag', '', 0, true);
    if (!myPageContent) myPageContent = getMyElement ('', 'body', '', '', -1, true);
    if (clean) myPageContent = cleanMyContent (myPageContent, true);
    myVideosParse = myPageContent.match (pattern);
    myVideosContent = (myVideosParse) ? myVideosParse[1] : null;
    if (myVideosContent) return myVideosContent;
    else getMethod = 'XHR';
  }
  if (getMethod == 'XHR') {
    var xmlHTTP = new XMLHttpRequest();
    xmlHTTP.open('GET', url, false);
    xmlHTTP.send();
    if (pattern == 'XML') {
      myVideosContent = xmlHTTP.responseXML;
    }
    else if (pattern == 'TEXT') {
      myVideosContent = xmlHTTP.responseText;
    }
    else {
      myPageContent = xmlHTTP.responseText;
      if (clean) myPageContent = cleanMyContent (myPageContent, true);
      myVideosParse = myPageContent.match (pattern);
      myVideosContent = (myVideosParse) ? myVideosParse[1] : null;
    }
    return myVideosContent;
  }
}

function setMyOptions (key, value) {
  key = page.site + '_' + userscript.toLowerCase() + '_' + key;
  if (typeof GM_setValue === 'function') {
    GM_setValue(key, value);
    if (typeof GM_getValue === 'function' && GM_getValue(key) == value) return;
  }
  try {
    localStorage.setItem(key, value);
    if (localStorage.getItem(key) == value) return;
    else throw false;
  }
  catch(e) {
    var date = new Date();
    date.setTime(date.getTime() + (356*24*60*60*1000));
    var expires = '; expires=' + date.toGMTString();
    page.doc.cookie = key + '=' + value + expires + '; path=/';
  }
}

function getMyOptions () {
  for (var opt in option) {
    if (option.hasOwnProperty(opt)) {
      var key = page.site + '_' + userscript.toLowerCase() + '_' + opt;
      if (typeof GM_getValue === 'function') {
	if (GM_getValue(key)) {
	  option[opt] = GM_getValue(key);
	  continue;
	}
      }
      try {
	if (localStorage.getItem(key)) {
	  option[opt] = localStorage.getItem(key);
	  continue;
	}
	else throw false;
      }
      catch (e) {
	var cookies = page.doc.cookie.split(';');
	for (var i=0; i < cookies.length; i++) {
	  var cookie = cookies[i];
	  while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
	  option[opt] = (cookie.indexOf(key) == 0) ? cookie.substring(key.length + 1, cookie.length) : option[opt];
	}
      }
    }
  }
  option['autoplay'] = (option['autoplay'] === true || option['autoplay'] == 'true') ? true : false;
  option['dash'] = (option['dash'] === true || option['dash'] == 'true') ? true : false;
  option['direct'] = (option['direct'] === true || option['direct'] == 'true') ? true : false;
  option['widesize'] = (option['widesize'] === true || option['widesize'] == 'true') ? true : false;
  option['fullsize'] = (option['fullsize'] === true || option['fullsize'] == 'true') ? true : false;
}

function showMyMessage (cause, content) {
  var myScriptLogo = createMyElement ('div', userscript, '', '', '');
  styleMyElement (myScriptLogo, {margin: '0px auto', padding: '10px', color: '#666666', fontSize: '24px', textAlign: 'center', textShadow: '#FFFFFF -1px -1px 2px'});
  var myScriptMess = createMyElement ('div', '', '', '', '');
  styleMyElement (myScriptMess, {border: '1px solid #F4F4F4', margin: '5px auto 5px auto', padding: '10px', backgroundColor: '#FFFFFF', color: '#AD0000', textAlign: 'center'});
  if (cause == '!player') {
    var myScriptAlert = createMyElement ('div', '', '', '', '');
    styleMyElement (myScriptAlert, {position: 'absolute', top: '30%', left: '35%', border: '1px solid #F4F4F4', borderRadius: '3px', padding: '10px', backgroundColor: '#FFFFFF', fontSize: '14px', textAlign: 'center', zIndex: '99999'});
    appendMyElement (myScriptAlert, myScriptLogo);
    var myNoPlayerMess = 'Couldn\'t get the player element. Please report it <a href="' + contact + '" style="color:#00892C">here</a>.';
    modifyMyElement (myScriptMess, 'div', myNoPlayerMess, false);
    appendMyElement (myScriptAlert, myScriptMess);
    var myScriptAlertButton = createMyElement ('div', 'OK', 'click', 'close', myScriptAlert);
    styleMyElement (myScriptAlertButton, {width: '100px', border: '3px solid #EEEEEE', borderRadius: '5px', margin: '0px auto', backgroundColor: '#EEEEEE', color: '#666666', fontSize: '18px', textAlign: 'center', textShadow: '#FFFFFF -1px -1px 2px', cursor: 'pointer'});
    appendMyElement (myScriptAlert, myScriptAlertButton);
    appendMyElement (page.body, myScriptAlert);
  }
  else if (cause == '!thumb') {
    var myNoThumbMess = '<br><br>Couldn\'t get the thumbnail for this video. Please report it <a href="' + contact + '" style="color:#00892C">here</a>.';
    modifyMyElement (player['playerContent'], 'div', myNoThumbMess, false);
  }
  else {
    appendMyElement (myPlayerWindow, myScriptLogo);
    if (cause == '!content') {
      var myNoContentMess = 'Couldn\'t get the videos content. Please report it <a href="' + contact + '" style="color:#00892C">here</a>.';
      modifyMyElement (myScriptMess, 'div', myNoContentMess, false);
    }
    else if (cause == '!videos') {
      var myNoVideosMess = 'Couldn\'t get any video. Please report it <a href="' + contact + '" style="color:#00892C">here</a>.';
      modifyMyElement (myScriptMess, 'div', myNoVideosMess, false);
    }
    else if (cause == '!support') {
      var myNoSupportMess = 'This video uses the RTMP protocol and is not supported.';
      modifyMyElement (myScriptMess, 'div', myNoSupportMess, false);
    }
    else if (cause == 'embed') {
      var myEmbedMess = 'This is an embedded video. You can watch it <a href="' + content + '" style="color:#00892C">here</a>.';
      modifyMyElement (myScriptMess, 'div', myEmbedMess, false);
    }
    appendMyElement (myPlayerWindow, myScriptMess);
  }
}


// ==========Websites========== //

// Fixes
var blockObject = null;
var blockInterval = 30;
page.win.setInterval(function() {
  // Force page reload on href change
  nurl = page.win.location.href;
  if (page.url != nurl) {
    // YouTube
    if (nurl.indexOf('youtube.com') != -1) {
      if (nurl.indexOf('youtube.com/watch') != -1) page.win.location.href = nurl;
      else if (player['isPlaying']) playMyVideo(false);
    }
    // Facebook
    else if (nurl.indexOf('facebook.com') != -1) {
      if (nurl.match('facebook.com/(video.php|.*/videos/)')) {
	page.win.location.href = nurl.replace('&theater', '');
      }
    }
    // Others
    else {
      page.win.location.href = nurl;
    }
  }
  // Block videos
  if (blockObject && blockInterval > 0) {
    var elEmbeds = getMyElement (blockObject, 'embed', 'tag', '', -1, false) || getMyElement (blockObject, 'object', 'tag', '', -1, false);
    if (elEmbeds.length > 0) {
      for (var e = 0; e < elEmbeds.length; e++) {
	var elEmbed = elEmbeds[e];
	if (elEmbed && elEmbed.id != 'vtVideo' && elEmbed.parentNode) {
	  removeMyElement (elEmbed.parentNode, elEmbed);
	}
      }
    }
    var elVideos = getMyElement (blockObject, 'video', 'tag', '', -1, false);
    if (elVideos.length > 0) {
      for (var v = 0; v < elVideos.length; v++) {
	var elVideo = elVideos[v];
	if (elVideo && elVideo.id != 'vtVideo' && elVideo.currentSrc) {
	  modifyMyElement (elVideo, 'video', 'none', true);
	}
      }
    }
    if (blockInterval > 0) blockInterval--;
  }
}, 500);

// =====YouTube===== //

if (page.url.indexOf('youtube.com/watch') != -1) {

  /* Redirect Categories */
  if (page.url.indexOf('gaming.youtube.com') != -1) {
    page.win.location.href = page.url.replace('gaming', 'www');
  }

  /* Video Availability */
  var ytVideoUnavailable = getMyElement ('', 'div', 'id', 'player-unavailable', -1, false);
  if (ytVideoUnavailable) {
    if (ytVideoUnavailable.className.indexOf('hid') == -1) {
      var ytAgeGateContent = getMyElement ('', 'div', 'id', 'watch7-player-age-gate-content', -1, true);
      if (!ytAgeGateContent) return;
      else {
	if(ytAgeGateContent.indexOf('feature=private_video') != -1) return;
      }
    }
  }

  /* Decrypt Signature */
  var ytScriptSrc;
  function ytDecryptSignature (s) {return null;}
  function ytDecryptFunction () {
    var ytSignFuncName, ytSignFuncBody, ytSwapFuncName, ytSwapFuncBody, ytFuncMatch;
    ytSignFuncName = ytScriptSrc.match(/"signature"\s*,\s*(.*?)\(/);
    ytSignFuncName = (ytSignFuncName) ? ytSignFuncName[1] : null;
    if (ytSignFuncName) {
      ytFuncMatch = ytSignFuncName.replace(/\$/, '\\$') + '\\s*=\\s*function\\s*' + '\\s*\\(\\w+\\)\\s*\\{(.*?)\\}';
      ytSignFuncBody = ytScriptSrc.match(ytFuncMatch);
      ytSignFuncBody = (ytSignFuncBody) ? ytSignFuncBody[1] : null;
      if (ytSignFuncBody) {
	ytSwapFuncName = ytSignFuncBody.match(/((\$|_|\w)+)\.(\$|_|\w)+\(\w,[0-9]+\)/);
	ytSwapFuncName = (ytSwapFuncName) ? ytSwapFuncName[1] : null;
	if (ytSwapFuncName) {
	  ytFuncMatch = 'var\\s+' + ytSwapFuncName.replace(/\$/, '\\$') + '=\\s*\\{(.*?)\\};';
	  ytSwapFuncBody = ytScriptSrc.match(ytFuncMatch);
	  ytSwapFuncBody = (ytSwapFuncBody) ? ytSwapFuncBody[1] : null;
	}
	if (ytSwapFuncBody) ytSignFuncBody = 'var ' + ytSwapFuncName + '={' + ytSwapFuncBody + '};' + ytSignFuncBody;
	ytSignFuncBody = 'try {' + ytSignFuncBody + '} catch(e) {return null}';
	ytDecryptSignature = new Function('a', ytSignFuncBody);
      }
    }
  }

  /* Player Size */
  var ytSidebarMarginNormal = 382;
  var ytSidebarWindow = getMyElement ('', 'div', 'id', 'watch7-sidebar', -1, false);
  var ytSidebarWindowStyle = ytSidebarWindow.currentStyle || window.getComputedStyle(ytSidebarWindow);
  if (ytSidebarWindow && ytSidebarWindowStyle) {
    ytSidebarMarginNormal = -12 + parseInt(ytSidebarWindowStyle.marginTop.replace('px', ''));
    styleMyElement (ytSidebarWindow, {marginTop: ytSidebarMarginNormal + 'px'});
  }
  var ytPlayerWidth, ytPlayerHeight;
  var ytPlayerWideWidth, ytPlayerWideHeight;
  var ytSidebarMarginWide;
  var ytScreenWidth, ytScreenHeight;
  function ytSizes() {
    ytScreenWidth = page.win.innerWidth || page.doc.documentElement.clientWidth;
    ytScreenHeight = page.win.innerHeight || page.doc.documentElement.clientHeight;
    if (ytScreenWidth >= 1720 && ytScreenHeight >= 980) {
      ytPlayerWidth = 1280;
      ytPlayerHeight = 742;
      ytPlayerWideWidth = 1706;
      ytPlayerWideHeight = 982;
    }
    else if (ytScreenWidth >= 1294 && ytScreenHeight >= 630) {
      ytPlayerWidth = 854;
      ytPlayerHeight = 502;
      ytPlayerWideWidth = 1280;
      ytPlayerWideHeight = 742;
    }
    else {
      ytPlayerWidth = 640;
      ytPlayerHeight = 382;
      ytPlayerWideWidth = 1066;
      ytPlayerWideHeight = 622;
    }
    ytSidebarMarginWide = ytPlayerHeight + ytSidebarMarginNormal;
  }

  /* Get Player Window */
  var ytPlayerWindow = getMyElement ('', 'div', 'id', 'player', -1, false);
  if (!ytPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    var ytVideoThumb = getMyContent (page.url, 'link\\s+itemprop="thumbnailUrl"\\s+href="(.*?)"', false);
    if (!ytVideoThumb) ytVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);
    if (!ytVideoThumb) {
      var ytVideoID = page.url.match (/(\?|&)v=(.*?)(&|$)/);
      if (ytVideoID) ytVideoThumb = 'http://img.youtube.com/vi/' + ytVideoID[2] + '/0.jpg';
    }

    /* Get Video Title */
    var ytVideoTitle = getMyContent (page.url, 'meta\\s+itemprop="name"\\s+content="(.*?)"', false);
    if (!ytVideoTitle) ytVideoTitle = getMyContent (page.url, 'meta\\s+property="og:title"\\s+content="(.*?)"', false);
    if (!ytVideoTitle) ytVideoTitle = page.doc.title;
    if (ytVideoTitle) {
      ytVideoTitle = ytVideoTitle.replace(/&quot;/g, '\'').replace(/&#34;/g, '\'').replace(/"/g, '\'');
      ytVideoTitle = ytVideoTitle.replace(/&#39;/g, '\'').replace(/'/g, '\'');
      ytVideoTitle = ytVideoTitle.replace(/&amp;/g, 'and').replace(/&/g, 'and');
      ytVideoTitle = ytVideoTitle.replace(/\?/g, '').replace(/[#:\*]/g, '-').replace(/\//g, '-');
      ytVideoTitle = ytVideoTitle.replace(/^\s+|\s+$/, '').replace(/\.+$/g, '');
      ytVideoTitle = ytVideoTitle.replace(/^YouTube\s-\s/, '');
    }

    /* Get Videos Content */
    var ytVideosContent, ytHLSContent;
    var ytVideosEncodedFmts, ytVideosAdaptiveFmts;
    ytVideosEncodedFmts = getMyContent(page.url, '"url_encoded_fmt_stream_map":\\s*"(.*?)"', false);
    ytVideosAdaptiveFmts = getMyContent(page.url, '"adaptive_fmts":\\s*"(.*?)"', false);
    if (ytVideosEncodedFmts) {
      ytVideosContent = ytVideosEncodedFmts;
    }
    else {
      if (!ytVideoID) {
	var ytVideoID = page.url.match (/(\?|&)v=(.*?)(&|$)/);
	ytVideoID = (ytVideoID) ? ytVideoID[2] : null;
      }
      if (ytVideoID) {
	var ytVideoSts = getMyContent(page.url.replace(/watch.*?v=/, 'embed/').replace(/&.*$/, ''), '"sts"\\s*:\\s*(\\d+)', false);
	var ytVideosInfoURL = page.win.location.protocol + '//' + page.win.location.hostname + '/get_video_info?video_id=' + ytVideoID + '&eurl=https://youtube.googleapis.com/v/' + ytVideoID + '&sts=' + ytVideoSts;
	var ytVideosInfo = getMyContent(ytVideosInfoURL, 'TEXT', false);
	if (ytVideosInfo) {
	  ytVideosEncodedFmts = ytVideosInfo.match(/url_encoded_fmt_stream_map=(.*?)&/);
	  ytVideosEncodedFmts = (ytVideosEncodedFmts) ? ytVideosEncodedFmts[1] : null;
	  if (ytVideosEncodedFmts) {
	    ytVideosEncodedFmts = cleanMyContent(ytVideosEncodedFmts, true);
	    ytVideosContent = ytVideosEncodedFmts;
	  }
	  if (!ytVideosAdaptiveFmts) {
	    ytVideosAdaptiveFmts = ytVideosInfo.match(/adaptive_fmts=(.*?)&/);
	    ytVideosAdaptiveFmts = (ytVideosAdaptiveFmts) ? ytVideosAdaptiveFmts[1] : null;
	    if (ytVideosAdaptiveFmts) ytVideosAdaptiveFmts = cleanMyContent(ytVideosAdaptiveFmts, true);
	  }
	}
      }
    }
    if (ytVideosAdaptiveFmts) {
      if (ytVideosContent) ytVideosContent += ',' + ytVideosAdaptiveFmts;
      else ytVideosContent = ytVideosAdaptiveFmts;
    }

    /* Get HLS Content */
    if (!ytVideosContent) {
      var ytHLSVideos, ytHLSContent;
      ytHLSVideos = getMyContent(page.url, '"hlsvp":\\s*"(.*?)"', false);
      if (ytHLSVideos) ytHLSVideos = cleanMyContent(ytHLSVideos, false);
    }

    /* Get Sizes */
    ytSizes();

    /* Hide Player Window */
    var ytPlaceholderPlayer = getMyElement ('', 'div', 'id', 'placeholder-player', -1, false);
    if (ytPlaceholderPlayer) styleMyElement (ytPlaceholderPlayer, {display: 'none'});

    /* Hide Sidebar Ads */
    var ytSidebarAds = getMyElement ('', 'div', 'id', 'watch7-sidebar-ads', -1, false);
    if (ytSidebarAds) styleMyElement (ytSidebarAds, {display: 'none'});

    /* Hide Autoplay */
    var ytAutoplay = getMyElement ('', 'div', 'class', 'checkbox-on-off', 0, false);
    if (ytAutoplay) styleMyElement (ytAutoplay, {display: 'none'});

    /* Playlist */
    var ytPlaylist = getMyElement ('', 'div', 'id', 'player-playlist', -1, false);
    if (ytPlaylist) {
      styleMyElement(ytPlaylist, {marginLeft: '-' + ytPlayerWidth + 'px'});
      var ytPlaceholderPlaylist = getMyElement ('', 'div', 'id', 'placeholder-playlist', -1, false);
      if (ytPlaceholderPlaylist) appendMyElement(ytPlaceholderPlaylist, ytPlaylist);
    }

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: ytPlayerWidth + 'px', height: ytPlayerHeight + 'px', backgroundColor: '#FFFFFF'});
    modifyMyElement (ytPlayerWindow, 'div', '', false, true);
    appendMyElement (ytPlayerWindow, myPlayerWindow);
    blockObject = ytPlayerWindow;

    /* Update Sizes */
    page.win.addEventListener('resize', function() {
      ytSizes();
      player['playerWidth'] = ytPlayerWidth;
      player['playerHeight'] = ytPlayerHeight;
      player['playerWideWidth'] = ytPlayerWideWidth;
      player['playerWideHeight'] = ytPlayerWideHeight;
      player['sidebarMarginWide'] = ytSidebarMarginWide;
      resizeMyPlayer('widesize');
      if (ytPlaylist) styleMyElement(ytPlaylist, {marginLeft: '-' + ytPlayerWidth + 'px'});
    }, false);

    /* Create Player */
    var ytDefaultVideo = 'Low Definition MP4';
    function ytPlayer() {
      player = {
	'playerSocket': ytPlayerWindow,
	'playerWindow': myPlayerWindow,
	'videoList': ytVideoList,
	'videoPlay': ytDefaultVideo,
	'videoThumb': ytVideoThumb,
	'videoTitle': ytVideoTitle,
	'playerWidth': ytPlayerWidth,
	'playerHeight': ytPlayerHeight,
	'playerWideWidth': ytPlayerWideWidth,
	'playerWideHeight': ytPlayerWideHeight,
	'sidebarWindow': ytSidebarWindow,
	'sidebarMarginNormal': ytSidebarMarginNormal,
	'sidebarMarginWide': ytSidebarMarginWide
      };
      option['definitions'] = ['Ultra High Definition', 'Full High Definition', 'High Definition', 'Standard Definition', 'Low Definition', 'Very Low Definition'];
      option['containers'] = ['MP4', 'WebM', 'FLV', '3GP', 'Any'];
      createMyPlayer();
    }

    /* Parse Videos */
    function ytVideos() {
      var ytVideoFormats = {
	'5': 'Very Low Definition FLV',
	'17': 'Very Low Definition 3GP',
	'18': 'Low Definition MP4',
	'22': 'High Definition MP4',
	'34': 'Low Definition FLV',
	'35': 'Standard Definition FLV',
	'36': 'Low Definition 3GP',
	'37': 'Full High Definition MP4',
	'38': 'Ultra High Definition MP4',
	'43': 'Low Definition WebM',
	'44': 'Standard Definition WebM',
	'45': 'High Definition WebM',
	'46': 'Full High Definition WebM',
	'82': 'Low Definition 3D MP4',
	'83': 'Standard Definition 3D MP4',
	'84': 'High Definition 3D MP4',
	'85': 'Full High Definition 3D MP4',
	'100': 'Low Definition 3D WebM',
	'101': 'Standard Definition 3D WebM',
	'102': 'High Definition 3D WebM',
	'135': 'Standard Definition Video MP4',
	'136': 'High Definition Video MP4',
	'137': 'Full High Definition Video MP4',
	'138': 'Ultra High Definition Video MP4',
	'139': 'Low Bitrate Audio MP4',
	'140': 'Medium Bitrate Audio MP4',
	'141': 'High Bitrate Audio MP4',
	'171': 'Medium Bitrate Audio WebM',
	'172': 'High Bitrate Audio WebM',
	'244': 'Standard Definition Video WebM',
	'247': 'High Definition Video WebM',
	'248': 'Full High Definition Video WebM',
	'249': 'Low Bitrate Audio Opus',
	'250': 'Medium Bitrate Audio Opus',
	'251': 'High Bitrate Audio Opus',
	'266': 'Ultra High Definition Video MP4',
	'272': 'Ultra High Definition Video WebM',
	'298': 'High Definition Video MP4',
	'299': 'Full High Definition Video MP4',
	'302': 'High Definition Video WebM',
	'303': 'Full High Definition Video WebM',
	'313': 'Ultra High Definition Video WebM'
      };
      var ytVideoFound = false;
      var ytVideos = ytVideosContent.split(',');
      var ytVideoParse, ytVideoCodeParse, ytVideoCode, myVideoCode, ytVideo;
      for (var i = 0; i < ytVideos.length; i++) {
	if (!ytVideos[i].match(/^url/)) {
	  ytVideoParse = ytVideos[i].match(/(.*)(url=.*$)/);
	  if (ytVideoParse) ytVideos[i] = ytVideoParse[2] + '&' + ytVideoParse[1];
	}
	ytVideoCodeParse = ytVideos[i].match (/itag=(\d{1,3})/);
	ytVideoCode = (ytVideoCodeParse) ? ytVideoCodeParse[1] : null;
	if (ytVideoCode) {
	  myVideoCode = ytVideoFormats[ytVideoCode];
	  if (myVideoCode) {
	    ytVideo = cleanMyContent(ytVideos[i], true);
	    ytVideo = ytVideo.replace (/url=/, '').replace(/&$/, '');
	    if (ytVideo.match(/itag=/) && ytVideo.match(/itag=/g).length > 1) {
	      if (ytVideo.match(/itag=\d{1,3}&/)) ytVideo = ytVideo.replace(/itag=\d{1,3}&/, '');
	      else if (ytVideo.match(/&itag=\d{1,3}/)) ytVideo = ytVideo.replace(/&itag=\d{1,3}/, '');
	    }
	    if (ytVideo.match(/clen=/) && ytVideo.match(/clen=/g).length > 1) {
	      if (ytVideo.match(/clen=\d+&/)) ytVideo = ytVideo.replace(/clen=\d+&/, '');
	      else if (ytVideo.match(/&clen=\d+/)) ytVideo = ytVideo.replace(/&clen=\d+/, '');
	    }
	    if (ytVideo.match(/lmt=/) && ytVideo.match(/lmt=/g).length > 1) {
	      if (ytVideo.match(/lmt=\d+&/)) ytVideo = ytVideo.replace(/lmt=\d+&/, '');
	      else if (ytVideo.match(/&lmt=\d+/)) ytVideo = ytVideo.replace(/&lmt=\d+/, '');
	    }
	    if (ytVideo.match(/type=(video|audio).*?&/)) ytVideo = ytVideo.replace(/type=(video|audio).*?&/, '');
	    else ytVideo = ytVideo.replace(/&type=(video|audio).*$/, '');
	    if (ytVideo.match(/&sig=/)) ytVideo = ytVideo.replace (/&sig=/, '&signature=');
	    else if (ytVideo.match(/&s=/)) {
	      var ytSig = ytVideo.match(/&s=(.*?)(&|$)/);
	      if (ytSig) {
		var s = ytSig[1];
		s = ytDecryptSignature(s);
		if (s) ytVideo = ytVideo.replace(/&s=.*?(&|$)/, '&signature=' + s + '$1');
		else ytVideo = '';
	      }
	      else ytVideo = '';
	    }
	    ytVideo = cleanMyContent (ytVideo, true);
	    if (ytVideo.indexOf('ratebypass') == -1) ytVideo += '&ratebypass=yes';
	    if (ytVideo && ytVideo.indexOf('http') == 0) {
	      if (!ytVideoFound) ytVideoFound = true;
	      ytVideoList[myVideoCode] = ytVideo;
	    }
	  }
	}
      }

      if (ytVideoFound) {
	/* DASH */
	if (!ytVideoList['Standard Definition MP4'] && ytVideoList['Standard Definition Video MP4']) ytVideoList['Standard Definition MP4'] = 'DASH';
	if (!ytVideoList['High Definition MP4'] && ytVideoList['High Definition Video MP4']) ytVideoList['High Definition MP4'] = 'DASH';
	if (!ytVideoList['Full High Definition MP4'] && ytVideoList['Full High Definition Video MP4']) ytVideoList['Full High Definition MP4'] = 'DASH';
	if (!ytVideoList['Ultra High Definition MP4'] && ytVideoList['Ultra High Definition Video MP4']) ytVideoList['Ultra High Definition MP4'] = 'DASH';
	if (!ytVideoList['Standard Definition WebM'] && ytVideoList['Standard Definition Video WebM']) ytVideoList['Standard Definition WebM'] = 'DASH';
	if (!ytVideoList['High Definition WebM'] && ytVideoList['High Definition Video WebM']) ytVideoList['High Definition WebM'] = 'DASH';
	if (!ytVideoList['Full High Definition WebM'] && ytVideoList['Full High Definition Video WebM']) ytVideoList['Full High Definition WebM'] = 'DASH';
	if (!ytVideoList['Ultra High Definition WebM'] && ytVideoList['Ultra High Definition Video WebM']) ytVideoList['Ultra High Definition WebM'] = 'DASH';
	feature['dash'] = true;

	/* DVL */
	ytVideoList['Direct Video Link'] = page.url;
	feature['direct'] = true;

	option['autoget'] = true;
	ytPlayer();
      }
      else {
	if (ytVideosContent.indexOf('conn=rtmp') != -1) showMyMessage ('!support');
	else showMyMessage ('!videos');
      }
    }

    /* Parse HLS */
    function ytHLS() {
      var ytHLSFormats = {
	'92': 'Very Low Definition MP4',
	'93': 'Low Definition MP4',
	'94': 'Standard Definition MP4',
	'95': 'High Definition MP4',
	'96': 'Full High Definition MP4'
      };
      ytVideoList["Any Definition MP4"] = ytHLSVideos;
      if (ytHLSContent) {
	var ytHLSVideo, ytVideoCodeParse, ytVideoCode, myVideoCode;
	var ytHLSMatcher = new RegExp('(http.*?m3u8)', 'g');
	ytHLSVideos = ytHLSContent.match(ytHLSMatcher);
	if (ytHLSVideos) {
	  for (var i = 0; i < ytHLSVideos.length; i++) {
	    ytHLSVideo = ytHLSVideos[i];
	    ytVideoCodeParse = ytHLSVideo.match(/\/itag\/(\d{1,3})\//);
	    ytVideoCode = (ytVideoCodeParse) ? ytVideoCodeParse[1] : null;
	    if (ytVideoCode) {
	      myVideoCode = ytHLSFormats[ytVideoCode];
	      if (myVideoCode && ytHLSVideo) {
		ytVideoList[myVideoCode] = ytHLSVideo;
	      }
	    }
	  }
	}
      }

      ytVideoTitle = null;
      ytDefaultVideo = 'Any Definition MP4';
      ytPlayer();
    }

    /* Get Videos */
    var ytVideoList = {};
    if (ytVideosContent) {
      if (ytVideosContent.match(/&s=/) || ytVideosContent.match(/,s=/) || ytVideosContent.match(/u0026s=/)) {
	var ytScriptURL = getMyContent(page.url, '"js":\\s*"(.*?)"', true);
	if (!ytScriptURL) ytScriptURL = getMyContent(page.url.replace(/watch.*?v=/, 'embed/').replace(/&.*$/, ''), '"js":\\s*"(.*?)"', true);
	if (ytScriptURL) {
	  ytScriptURL = page.win.location.protocol + ytScriptURL;
	  try {
	    ytScriptSrc = getMyContent(ytScriptURL, 'TEXT', false);
	    if (ytScriptSrc) ytDecryptFunction();
	    ytVideos();
	  }
	  catch (e) {
	    try {
	      GM_xmlhttpRequest({
		method: 'GET',
		url: ytScriptURL,
		onload: function(response) {
		  if (response.readyState === 4 && response.status === 200) {
		    ytScriptSrc = response.responseText;
		  }
		  if (ytScriptSrc) ytDecryptFunction();
		  ytVideos();
		}
	      });
	    }
	    catch (e) {
	      ytVideos();
	    }
	  }
	}
	else {
	  ytVideos();
	}
      }
      else {
	ytVideos();
      }
    }
    else {
      if (ytHLSVideos) {
	try {
	  ytHLSContent = getMyContent(ytHLSVideos, 'TEXT', false);
	  ytHLS();
	}
	catch (e) {
	  try {
	    GM_xmlhttpRequest({
	      method: 'GET',
	      url: ytHLSVideos,
	      onload: function(response) {
		if (response.readyState === 4 && response.status === 200) {
		  ytHLSContent = response.responseText;
		}
		ytHLS();
	      }
	    });
	  }
	  catch (e) {
	    ytHLS();
	  }
	}
      }
      else {
	showMyMessage ('!content');
      }
    }
  }

}

// =====DailyMotion===== //

else if (page.url.indexOf('dailymotion.com/video') != -1 || page.url.indexOf('dailymotion.com/playlist') != -1) {

  /* Redirect Playlist To Video */
  if (page.url.indexOf('dailymotion.com/playlist') != -1 && page.url.indexOf('#video=') != -1) {
    page.win.location.href = page.url.replace(/playlist.*#/, '').replace("=", "/");
  }

  /* Get Player Window */
  var dmPlayerWindow = getMyElement ('', 'div', 'id', 'player_container', -1, false);
  if (!dmPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video Thumbnail */
    var dmVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Videos Content */
    var dmEmbed;
    if (page.url.indexOf('dailymotion.com/video') != -1) dmEmbed = page.url.replace(/\/video\//, "/embed/video/");
    else dmEmbed = page.url.replace(/playlist.*=/, "embed/video/");
    dmVideosContent = getMyContent (dmEmbed, '"qualities":\\{(.*?)\\]\\},', false);

    /* Player Size */
    var dmSidebarWidth = 320;
    var dmSidebarWindow = getMyElement ('', 'div', 'class', 'sidebar', 0, false);
    var dmSidebarWindowStyle = (dmSidebarWindow) ? dmSidebarWindow.currentStyle || window.getComputedStyle(dmSidebarWindow) : null;
    var dmPlayerWidth, dmPlayerHeight;
    var dmPlayerWideWidth, dmPlayerWideHeight;
    var dmSidebarMarginWide;
    function dmGetSizes() {
      dmPlayerWidth = dmPlayerWindow.clientWidth;
      dmPlayerHeight = Math.ceil(dmPlayerWidth / (16 / 9)) + 22;
      if (dmSidebarWindow && dmSidebarWindowStyle) dmSidebarWidth = parseInt(dmSidebarWindowStyle.width);
      dmPlayerWideWidth = dmPlayerWidth + dmSidebarWidth;
      dmPlayerWideHeight = Math.ceil(dmPlayerWideWidth / (16 / 9)) + 22;
      dmSidebarMarginWide = dmPlayerWideHeight + 30;
    }
    function dmUpdateSizes() {
      dmGetSizes();
      player['playerWidth'] = dmPlayerWidth;
      player['playerHeight'] = dmPlayerHeight;
      player['playerWideWidth'] = dmPlayerWideWidth;
      player['playerWideHeight'] = dmPlayerWideHeight;
      player['sidebarMarginWide'] = dmSidebarMarginWide;
      resizeMyPlayer('widesize');
      styleMyElement (dmPlayerWindow, {overflow: 'visible', height: '100%'});
    }
    dmGetSizes();

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: dmPlayerWidth + 'px', height: dmPlayerHeight + 'px', backgroundColor: '#FFFFFF'});
    modifyMyElement (dmPlayerWindow, 'div', '', false, true);
    appendMyElement (dmPlayerWindow, myPlayerWindow);
    blockObject = dmPlayerWindow;

    /* Fix Visibility & Height */
    var dmPlayerJSBox = getMyElement ('', 'div', 'class', 'js-player-box', 0, false);
    if (dmPlayerJSBox) styleMyElement(dmPlayerJSBox, {overflow: 'visible', height: '100%', backgroundColor: '#FFFFFF'});
    else styleMyElement(dmPlayerWindow.parentNode, {overflow: 'visible', height: '100%', backgroundColor: '#FFFFFF'});
    page.win.setTimeout(function() {styleMyElement (dmPlayerWindow, {overflow: 'visible', height: '100%', backgroundColor: '#FFFFFF'});}, 2000);

    /* Fix Video Info Position */
    var dmPlayerInfos = getMyElement ('', 'div', 'class', 'pl_video_infos', 0, false);
    if (dmPlayerInfos) styleMyElement(dmPlayerInfos, {marginTop: '10px'});

    /* Fix Right Ad Issue */
    var dmMcRight = getMyElement ('', 'div', 'id', 'mc_Right', -1, false);
    if (dmMcRight) {
      var dmWaitForAdTime = 20;
      var dmPlayerWidthPrev = dmPlayerWidth;
      var dmWaitForAdFunc = page.win.setInterval(function() {
	if(dmMcRight.clientWidth) {
	  dmUpdateSizes();
	  if (dmPlayerWidth != dmPlayerWidthPrev) clearInterval(dmWaitForAdFunc);
	}
	dmWaitForAdTime--;
	if (dmWaitForAdTime == 0) clearInterval(dmWaitForAdFunc);
      }, 500);
    }

    /* Resize Event */
    page.win.addEventListener('resize', dmUpdateSizes, false);

    /* Hide Top Ads */
    var dmMcTop = getMyElement ('', 'div', 'id', 'mc_Top', -1, false);
    if (dmMcTop) styleMyElement(dmMcTop, {display: 'none'});

    /* Get Videos */
    if (dmVideosContent) {
      var dmVideoFormats = {'240': 'Very Low Definition MP4', '380': 'Low Definition MP4', '480': 'Standard Definition MP4',
	'720': 'High Definition MP4', '1080': 'Full High Definition MP4', '.*?x-mpegURL': 'HTTP Live Streaming M3U8'};
      var dmVideoList = {};
      var dmVideoFound = false;
      var dmVideoParser, dmVideoParse, myVideoCode, dmVideo;
      for (var dmVideoCode in dmVideoFormats) {
	dmVideoParser = '"' + dmVideoCode + '".*?"url":"(.*?)"';
	dmVideoParse = dmVideosContent.match (dmVideoParser);
	dmVideo = (dmVideoParse) ? dmVideoParse[1] : null;
	if (dmVideo) {
	  if (!dmVideoFound) dmVideoFound = true;
	  dmVideo = cleanMyContent(dmVideo, true);
	  myVideoCode = dmVideoFormats[dmVideoCode];
	  if (!dmVideoList[myVideoCode]) dmVideoList[myVideoCode] = dmVideo;
	}
      }

      if (dmVideoFound) {
	/* DVL */
	dmVideoList['Direct Video Link'] = page.url;
	feature['direct'] = true;

	/* Create Player */
	var dmDefaultVideo = 'Low Definition MP4';
	player = {
	  'playerSocket': dmPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': dmVideoList,
	  'videoPlay': dmDefaultVideo,
	  'videoThumb': dmVideoThumb,
	  'playerWidth': dmPlayerWidth,
	  'playerHeight': dmPlayerHeight,
	  'playerWideWidth': dmPlayerWideWidth,
	  'playerWideHeight': dmPlayerWideHeight,
	  'sidebarWindow': dmSidebarWindow,
	  'sidebarMarginNormal': 0,
	  'sidebarMarginWide': dmSidebarMarginWide
	};
	feature['container'] = false;
	option['definitions'] = ['Full High Definition', 'High Definition', 'Standard Definition', 'Low Definition', 'Very Low Definition'];
	option['containers'] = ['MP4'];
	createMyPlayer ();

	/* Fix panel */
	styleMyElement(player['playerContent'], {marginTop: '7px'});
      }
      else {
	showMyMessage ('!videos');
      }
    }
    else {
      showMyMessage ('!content');
    }
  }

}

// =====Vimeo===== //

else if (page.url.match(/vimeo.com\/\d+/) || page.url.match(/vimeo.com\/channels\/[^\/]*($|\/page|\/\d+)/) || page.url.match(/vimeo.com\/originals\/[^\/]*\/\d+/) || page.url.match(/vimeo.com\/album\/\d+\/video\/\d+/)) {

  /* Multi Video Page */
  if (getMyElement('', 'div', 'class', 'player_container', -1, false).length > 1) return;

  /* Get Player Window */
  var viPlayerWindow = getMyElement ('', 'div', 'class', 'player_container', 0, false);
  if (!viPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video Thumbnail */
    var viVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);
    if (!viVideoThumb) viVideoThumb = getMyContent (page.url, 'meta\\s+itemprop="image"\\s+content="(.*?)"', false);
    if (!viVideoThumb) viVideoThumb = getMyContent (page.url, 'meta\\s+itemprop="thumbnailUrl"\\s+content="(.*?)"', false);
    if (!viVideoThumb) viVideoThumb = getMyContent (page.url, 'meta\\s+name="twitter:image"\\s+content="(.*?)"', false);

    /* Get Content Source */
    var viVideoSource = getMyContent (page.url, 'data-config-url="(.*?)"', false).replace(/&amp;/g, '&');

    /* Get Videos Content */
    var viVideosContent;
    if (viVideoSource) {
      viVideosContent = getMyContent(viVideoSource, '"h264":\\{(.*?)\\}\\}', false);
      if (!viVideosContent) viVideosContent = getMyContent(viVideoSource, '"vp6":\\{(.*?)\\}\\}', false);
    }

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '960px', height: '562px', backgroundColor: '#F4F5F7'});
    modifyMyElement (viPlayerWindow, 'div', '', true);
    styleMyElement (viPlayerWindow, {height: '100%'});
    appendMyElement (viPlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (viVideosContent) {
      var viVideoFormats = {'hd': 'High Definition MP4', 'sd': 'Low Definition MP4', 'mobile': 'Very Low Definition MP4'};
      var viVideoList = {};
      var viVideoFound = false;
      var viPattern, viMatcher, viVideo, myVideoCode;
      for (var viVideoCode in viVideoFormats) {
	viPattern = '"' + viVideoCode + '":\\{.*?"url":"(.*?)"';
	viMatcher = viVideosContent.match(viPattern);
	viVideo = (viMatcher) ? viMatcher[1] : null;
	if (viVideo) {
	  if (!viVideoFound) viVideoFound = true;
	  myVideoCode = viVideoFormats[viVideoCode];
	  viVideoList[myVideoCode] = viVideo;
	}
      }

      /* Channels Sidebar */
      if (page.url.indexOf('/channels/staffpicks') == -1) {
	var viSidebar = getMyElement ('', 'div', 'class', 'col_small', 0, false);
	if (viSidebar) {
	  styleMyElement (viSidebar, {marginTop: '570px'});
	  styleMyElement (viPlayerWindow, {paddingBottom: '10px'});
	}
      }

      if (viVideoFound) {
	/* DVL */
	viVideoList['Direct Video Link'] = page.url;
	feature['direct'] = true;

	/* Create Player */
	var viDefaultVideo = 'Low Definition MP4';
	player = {
	  'playerSocket': viPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': viVideoList,
	  'videoPlay': viDefaultVideo,
	  'videoThumb': viVideoThumb,
	  'playerWidth': 960,
	  'playerHeight': 562
	};
	feature['container'] = false;
	feature['widesize'] = false;
	option['definitions'] = ['High Definition', 'Low Definition', 'Very Low Definition'];
	option['containers'] = ['MP4'];
	createMyPlayer ();

	/* Fix panel */
	styleMyElement(player['playerContent'], {marginTop: '3px'});
      }
      else {
	showMyMessage ('!videos');
      }
    }
    else {
      showMyMessage ('!content');
    }
  }

}

// =====MetaCafe===== //

else if (page.url.indexOf('metacafe.com/watch') != -1) {

  /* Get Player Window */
  var mcPlayerWindow = getMyElement ('', 'div', 'id', 'FlashWrap', -1, false);
  if (!mcPlayerWindow) mcPlayerWindow = getMyElement ('', 'div', 'id', 'ItemContainer', -1, false);
  if (!mcPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Check Video Availability */
    if (mcPlayerWindow.innerHTML.indexOf('This Video cannot be played on this device.') != -1) return;

    /* Hide Ads */
    var mcTopAd = getMyElement ('', 'div', 'id', 'BillboardContainer', -1, false);
    if (mcTopAd) styleMyElement(mcTopAd, {display: 'none'});
    var mcTopAd2 = getMyElement ('', 'div', 'id', 'taboola-header-thumbnails', -1, false);
    if (mcTopAd2) styleMyElement(mcTopAd2, {display: 'none'});

    /* Get Video Thumbnail */
    var mcVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Videos Content */
    var mcVideosContent, mcVideo;
    var mcFlashVideo = getMyElement (mcPlayerWindow, 'embed', 'tag', '', 0, false) || getMyElement (mcPlayerWindow, 'object', 'tag', '', 0, false);
    if (mcFlashVideo) {
      mcVideosContent = getMyContent (page.url, '"mediaData":"(.*?)"', false);
      if (!mcVideosContent) {
	anyClipId = page.url.match(/\/an-(.*?)\//);
	if (anyClipId && anyClipId[1]) {
	  mcVideo = 'http://vid2.anyclip.com/' + anyClipId[1];
	}
      }
    }
    else mcVideo = getMyContent (page.url, 'video\\s+src="(.*?)"', false);
    /* New */
    if (!mcVideosContent && !mcVideo) {
      mcVideo = getMyContent (page.url, 'videoURL=(.*?)&', true);
    }

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '640px', height: '382px', backgroundColor: '#F4F4F4', zIndex: 10});
    modifyMyElement (mcPlayerWindow, 'div', '', true);
    styleMyElement (mcPlayerWindow, {height: '100%'});
    appendMyElement (mcPlayerWindow, myPlayerWindow);
    //blockObject = mcPlayerWindow;

    /* Get Videos */
    if (mcVideosContent || mcVideo) {
      var mcVideoList = {};
      var mcVideoFound = false;
      if (mcVideosContent) {
	mcVideosContent = cleanMyContent(mcVideosContent, true);
	var mcVideoFormats = {'highDefinitionMP4': 'High Definition MP4', 'MP4': 'Low Definition MP4', 'flv': 'Low Definition FLV'};
	var mcVideoParser, mcVideoParse, myVideoCode, mcVideoPath, mcVideoKey, mcVideo;
	for (var mcVideoCode in mcVideoFormats) {
	  mcVideoParser = '"' + mcVideoCode + '":\\{.*?"mediaURL":"(.*?)","access":\\[\\{"key":"(.*?)","value":"(.*?)"\\}\\]\\}';
	  mcVideoParse = mcVideosContent.match (mcVideoParser);
	  mcVideoPath = (mcVideoParse) ? mcVideoParse[1] : null;
	  mcVideoKeyName = (mcVideoParse) ? mcVideoParse[2] : null;
	  mcVideoKeyValue = (mcVideoParse) ? mcVideoParse[3] : null;
	  if (mcVideoPath && mcVideoKeyName && mcVideoKeyValue) {
	    if (!mcVideoFound) mcVideoFound = true;
	    myVideoCode = mcVideoFormats[mcVideoCode];
	    mcVideo = mcVideoPath + '?' + mcVideoKeyName + '=' + mcVideoKeyValue;
	    mcVideoList[myVideoCode] = mcVideo;
	  }
	}
      }
      else {
	mcVideoList['Low Definition MP4'] = mcVideo;
	mcVideoFound = true;
	feature['definition'] = false;
	feature['container'] = false;
      }

      if (mcVideoFound) {
	/* Get Watch Sidebar */
	var mcSidebarWindow = getMyElement ('', 'div', 'id', 'Sidebar', -1, false);

	/* Create Player */
	var mcDefaultVideo = (mcVideoList['Low Definition MP4']) ? 'Low Definition MP4' : 'Low Definition FLV';
	player = {
	  'playerSocket': mcPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': mcVideoList,
	  'videoPlay': mcDefaultVideo,
	  'videoThumb': mcVideoThumb,
	  'playerWidth': 640,
	  'playerHeight': 382,
	  'playerWideWidth': 960,
	  'playerWideHeight': 562,
	  'sidebarWindow': mcSidebarWindow,
	  'sidebarMarginNormal': 0,
	  'sidebarMarginWide': 576
	};
	option['definitions'] = ['High Definition', 'Low Definition'];
	option['containers'] = ['MP4', 'FLV', 'Any'];
	createMyPlayer ();
      }
      else {
	showMyMessage ('!videos');
      }
    }
    else {
      var ytVideoId = page.url.match (/\/yt-(.*?)\//);
      if (ytVideoId && ytVideoId[1]) {
	var ytVideoLink = 'http://youtube.com/watch?v=' + ytVideoId[1];
	showMyMessage ('embed', ytVideoLink);
      }
      else {
	showMyMessage ('!content');
      }
    }
  }

}

// =====Break===== //

else if (page.url.indexOf('break.com/video') != -1 || page.url.indexOf('break.com/movies') != -1) {

  /* Get Player Window */
  var brPlayerWindow = getMyElement ('', 'div', 'id', 'video-player', -1, false);
  if (!brPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video ID */
    var brVideoID = page.url.match(/-(\d+)($|\?)/);
    brVideoID = (brVideoID) ? brVideoID[1] : null;

    /* Get Videos Content */
    var brSource = page.win.location.protocol + '//' + page.win.location.hostname + '/embed/' + brVideoID;
    var brVideosContent = getMyContent (brSource, 'TEXT', false);

    /* Player Size */
    var brScreenWidth;
    var brPlayerWidth, brPlayerHeight;
    var brPlayerWideWidth, brPlayerWideHeight;
    var brSidebarMarginWide = 720;
    function brSizes() {
      brScreenWidth = page.win.innerWidth || page.doc.documentElement.clientWidth;
      if (page.url.indexOf('break.com/movies') != -1) {
	if (brScreenWidth >= 1400) {
	  brPlayerWidth = 1152;
	  brPlayerHeight = 690;
	}
	else {
	  brPlayerWidth = 912;
	  brPlayerHeight = 546;
	}
      }
      else {
	if (brScreenWidth >= 1400) {
	  brPlayerWidth = 832;
	  brPlayerHeight = 490;
	  brPlayerWideWidth = 1152;
	  brPlayerWideHeight = 690;
	  brSidebarMarginWide = 850;
	}
	else {
	  brPlayerWidth = 592;
	  brPlayerHeight = 356;
	  brPlayerWideWidth = 910;
	  brPlayerWideHeight = 534;
	}
      }
    }
    brSizes();

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: brPlayerWidth + 'px', height: brPlayerHeight + 'px', backgroundColor: '#F4F4F4'});
    modifyMyElement (brPlayerWindow, 'div', '', true);
    styleMyElement (brPlayerWindow, {height: '100%', overflow: 'visible', paddingBottom: '20px'});
    appendMyElement (brPlayerWindow, myPlayerWindow);

    /* Update Sizes */
    page.win.addEventListener('resize', function() {
      brSizes();
      player['playerWidth'] = brPlayerWidth;
      player['playerHeight'] = brPlayerHeight;
      player['playerWideWidth'] = brPlayerWideWidth;
      player['playerWideHeight'] = brPlayerWideHeight;
      player['sidebarMarginWide'] = brSidebarMarginWide;
      resizeMyPlayer('widesize');
    }, false);

    /* Get Videos */
    if (brVideosContent) {
      var brVideoList = {};
      var brVideoFormats = {};
      var brVideoFound = false;
      var brVideoFormats = {'320_kbps.mp4': 'Very Low Definition MP4', '496_kbps.mp4': 'Low Definition MP4', '864_kbps.mp4': 'Standard Definition MP4', '2240_kbps.mp4': 'High Definition MP4', '3264_kbps.mp4': 'Full High Definition MP4'};
      var brVideoPath, brVideoToken, brVideoThumb, brVideo, myVideoCode;
      if (page.url.indexOf('break.com/video') != -1) {
	brVideoPath = brVideosContent.match (/"videoUri":\s"(.*?)496_kbps/);
	brVideoPath = (brVideoPath) ? brVideoPath[1] : null;
      }
      else {
	brVideoPath = brVideosContent.match (/"hlsUri":\s"(.*?)"/);
	brVideoPath = (brVideoPath) ? brVideoPath[1] : null;
      }
      brVideoToken = brVideosContent.match (/"AuthToken":\s"(.*?)"/);
      brVideoToken = (brVideoToken) ? brVideoToken[1] : null;
      brVideoThumb = brVideosContent.match (/"thumbUri":\s"(.*?)"/);
      brVideoThumb = (brVideoThumb) ? brVideoThumb[1] : null;
      if (brVideoPath && brVideoToken) {
	for (var brVideoCode in brVideoFormats) {
	  if (brVideosContent.match(brVideoCode)) {
	    if (!brVideoFound) brVideoFound = true;
	    myVideoCode = brVideoFormats[brVideoCode];
	    if (page.url.indexOf('break.com/video') != -1) brVideo = brVideoPath + brVideoCode + '?' + brVideoToken;
	    else brVideo = brVideoPath + brVideoCode + '.m3u8?' + brVideoToken;
	    brVideoList[myVideoCode] = brVideo;
	  }
	}
      }

      if (brVideoFound) {
	/* Get Watch Sidebar */
	var brSidebarWindow = getMyElement ('', 'aside', 'class', 'sidebar', 0, false);

	/* Create Player */
	var brDefaultVideo = 'Low Definition MP4';
	player = {
	  'playerSocket': brPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': brVideoList,
	  'videoPlay': brDefaultVideo,
	  'videoThumb': brVideoThumb,
	  'playerWidth': brPlayerWidth,
	  'playerHeight': brPlayerHeight,
	  'playerWideWidth': brPlayerWideWidth,
	  'playerWideHeight': brPlayerWideHeight,
	  'sidebarWindow': brSidebarWindow,
	  'sidebarMarginNormal': 10,
	  'sidebarMarginWide': brSidebarMarginWide
	};
	if (page.url.indexOf('break.com/movies') != -1) feature['widesize'] = false;
	option['definitions'] = ['Very Low Definition', 'Low Definition', 'Standard Definition', 'High Definition', 'Full High Definition'];
	option['containers'] = ['MP4', 'FLV', 'Any'];
	createMyPlayer ();
      }
      else {
	var ytVideoId =  brVideosContent.match (/"youtubeId":\s"(.*?)"/);
	if (ytVideoId && ytVideoId[1]) {
	  var ytVideoLink = 'http://youtube.com/watch?v=' + ytVideoId[1];
	  showMyMessage ('embed', ytVideoLink);
	}
	else {
	showMyMessage ('!videos');
	}
      }
    }
    else {
      showMyMessage ('!content');
    }
  }

}

// =====FunnyOrDie===== //

else if (page.url.indexOf('funnyordie.com/videos') != -1) {

  /* Get Player Window */
  var fodPlayerWindow = getMyElement ('', 'div', 'id', 'videoContainer', -1, false);
  if (!fodPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video Thumbnail */
    var fodVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);
    if (fodVideoThumb) fodVideoThumb = fodVideoThumb.replace (/large/, 'fullsize');

    /* Get Videos Content */
    var fodVideosContent = getMyContent (page.url, '<video([\\s\\S]*?)video>', false);

    /* Restyle */
    var fodPlayerContainer = getMyElement ('', 'div', 'class', 'video-content', 0, false);
    if (fodPlayerContainer) styleMyElement (fodPlayerContainer, {width: '100%'});

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '970px', height: '570px', backgroundColor: '#F4F4F4', margin: '0px auto'});
    var fodPlayerSocket = createMyElement ('div', '', '', '', '');
    styleMyElement (fodPlayerSocket, {height: '570px', backgroundColor: '#252525'});
    replaceMyElement(fodPlayerWindow.parentNode, fodPlayerSocket, fodPlayerWindow);
    appendMyElement (fodPlayerSocket, myPlayerWindow);

    /* Get Videos */
    if (fodVideosContent) {
      var fodVideoFormats = {'v2500.mp4': 'High Definition MP4', 'v1800.mp4': 'Standard Definition MP4', 'v600.mp4': 'Low Definition MP4', 'v600.webm': 'Low Definition WebM', 'v110.mp4': 'Very Low Definition MP4'};
      var fodVideoList = {};
      var fodVideoFound = false;
      var fodVideoPath, fodVideoCodes, fodVideo, myVideoCode;
      fodVideoPath = fodVideosContent.match(/src="(.*?)v\d+.*?\.mp4"/);
      fodVideoPath = (fodVideoPath) ? fodVideoPath[1] : null;
      fodVideoCodes = fodVideosContent.match (/v,(.*?),\./);
      fodVideoCodes = (fodVideoCodes) ? fodVideoCodes[1] : '';
      if (fodVideoPath) {
	if (fodVideoCodes) {
	  for (var fodVideoCode in fodVideoFormats) {
	    if (fodVideoCodes.indexOf(fodVideoCode.replace(/v/, '').replace(/\..*/, '')) != -1) {
	      if (!fodVideoFound) fodVideoFound = true;
	      fodVideo = fodVideoPath + fodVideoCode;
	      myVideoCode = fodVideoFormats[fodVideoCode];
	      fodVideoList[myVideoCode] = fodVideo;
	    }
	  }
	}
	else {
	  for (var fodVideoCode in fodVideoFormats) {
	    fodVideo = fodVideoPath + fodVideoCode;
	    if (fodVideosContent.match(fodVideo)) {
	      if (!fodVideoFound) fodVideoFound = true;
	      myVideoCode = fodVideoFormats[fodVideoCode];
	      fodVideoList[myVideoCode] = fodVideo;
	    }
	  }
	}
      }

      if (fodVideoFound) {
	/* Create Player */
	fodDefaultVideo = 'Low Definition MP4';
	player = {
	  'playerSocket': fodPlayerSocket,
	  'playerWindow': myPlayerWindow,
	  'videoList': fodVideoList,
	  'videoPlay': fodDefaultVideo,
	  'videoThumb': fodVideoThumb,
	  'playerWidth': 970,
	  'playerHeight': 570
	};
	feature['container'] = false;
	feature['widesize'] = false;
	option['definitions'] = ['High Definition', 'Low Definition'];
	option['containers'] = ['MP4'];
	createMyPlayer ();

	/* Fix panel */
	styleMyElement(player['playerContent'], {marginTop: '7px'});
      }
      else {
	showMyMessage ('!videos');
      }
    }
    else {
      showMyMessage ('!content');
    }
  }

}

// =====Videojug===== //

else if (page.url.indexOf('videojug.com/') != -1) {

  /* Get Player Window */
  var vjPlayerWindow;
  var vjPlayerWidth = 640;
  var vjPlayerHeight = 384;
  var vjPlayerWide = true;
  if (page.url.indexOf("videojug.com/film") != -1) vjPlayerWindow = getMyElement ('', 'div', 'class', 'top-border-only', 0, false);
  else if (page.url.indexOf("videojug.com/series") != -1) {
    vjPlayerWindow = getMyElement ('', 'div', 'class', 'largePlayer', 0, false);
    vjPlayerWidth = 954;
    vjPlayerHeight = 562;
    vjPlayerWide = false;
  }
  else return;
  if (!vjPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Videos Content */
    var vjVideoID = getMyContent (page.url, 'data-videoid="(.*?)"', true);
    var vjVideoTitle = getMyContent (page.url, 'data-filenameprefix="(.*?)"', true);

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: vjPlayerWidth + 'px', height: vjPlayerHeight + 'px', backgroundColor: '#F4F4F4'});
    modifyMyElement (vjPlayerWindow, 'div', '', true);
    styleMyElement (vjPlayerWindow, {height: '100%', backgroundColor: '#FFFFFF', border: 'none', boxShadow: 'none'});
    if (!vjPlayerWide) styleMyElement (vjPlayerWindow, {width: vjPlayerWidth + 'px'});
    appendMyElement (vjPlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (vjVideoID && vjVideoTitle) {
      var vjVideoID2 = vjVideoID.substring(0,2);
      var vjVideoProtocol = page.win.location.protocol;
      var vjVideoSource = vjVideoProtocol + '//' + page.win.location.hostname + '/views/film/playlist.aspx?id=' + vjVideoID;
      var vjVideoShapes = getMyContent(vjVideoSource, '<Shapes>(.*?)<\/Shapes>', false);
      var vjVideoFormats = {'VJ480PENG.mp4': 'Standard Definition MP4', 'VJ360PENG.mp4': 'Low Definition MP4', 'PHOENG.mp4': 'Very Low Definition MP4', 'FW8ENG.flv': 'Low Definition FLV', 'FS8ENG.flv': 'Very Low Definition FLV'};
      var vjVideoList = {};
      var vjVideoFound = false;
      var vjVideoPart, myVideoCode, vjVideo, vjVideoThumb, vjVideoCodePart, vjVideoPattern, vjVideoLocation;
      if (vjVideoShapes) {
	vjVideoPart = vjVideoID2 + '/' + vjVideoID + '/' + vjVideoTitle;
	for (var vjVideoCode in vjVideoFormats) {
	  if (vjVideoCode.indexOf('VJ') != -1) vjVideoCodePart = vjVideoCode.substring(0, 6);
	  else vjVideoCodePart = vjVideoCode.substring(0, 3);
	  vjVideoPattern = 'Code="' + vjVideoCodePart + '"\\s+Locations="(.*?),';
	  vjVideoLocation = vjVideoShapes.match(vjVideoPattern);
	  vjVideoLocation = (vjVideoLocation) ? vjVideoProtocol + '//' + vjVideoLocation[1] : null;
	  if (vjVideoLocation) {
	    if (!vjVideoFound) vjVideoFound = true;
	    vjVideo = vjVideoLocation + '/' + vjVideoPart + '__' + vjVideoCode;
	    myVideoCode = vjVideoFormats[vjVideoCode];
	    vjVideoList[myVideoCode] = vjVideo;
	  }
	}
	vjVideoThumb = 'http://content5.videojug.com/' + vjVideoPart + '.WidePlayer.jpg';
      }

      if (vjVideoFound) {
	/* Get Watch Sidebar */
	var vjSidebarWindow = getMyElement ('', 'aside', 'id', 'side-bar', -1, false);

	/* Create Player */
	var vjDefaultVideo = 'Low Definition MP4';
	player = {
	  'playerSocket': vjPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': vjVideoList,
	  'videoPlay': vjDefaultVideo,
	  'videoThumb': vjVideoThumb,
	  'playerWidth': vjPlayerWidth,
	  'playerHeight': vjPlayerHeight,
	  'playerWideWidth': 954,
	  'playerWideHeight': 562,
	  'sidebarWindow': vjSidebarWindow,
	  'sidebarMarginNormal': 5,
	  'sidebarMarginWide': 580
	};
	feature['widesize'] = vjPlayerWide;
	option['definition'] = 'SD';
	option['definitions'] = ['Standard Definition', 'Low Definition', 'Very Low Definition'];
	option['containers'] = ['MP4', 'FLV', 'Any'];
	createMyPlayer ();
      }
      else {
	showMyMessage ('!videos');
      }
    }
    else {
      showMyMessage ('!content');
    }
  }

}

// =====Blip===== //

else if (page.url.indexOf('blip.tv') != -1) {

  /* Get Page Type */
  var blipPageType = getMyContent (page.url, 'meta\\s+property="video:tag"\\s+content="(.*?)"', false);
  if (!blipPageType || blipPageType.indexOf('episode') == -1) return;

  /* Get Player Window */
  var blipPlayerWidth, blipPlayerHeight;
  var blipPlayerWindow = getMyElement ('', 'div', 'class', 'EpisodePlayer', 0, false) || getMyElement ('', 'div', 'id', 'ErrorWrap', -1, false);
  if (!blipPlayerWindow) {
    blipPlayerWindow = getMyElement ('', 'div', 'id', 'PlayerEmbed', -1, false);
    blipPlayerWidth = 596;
    blipPlayerHeight = 334;
  }
  else {
    blipPlayerWidth = 960;
    blipPlayerHeight = 565;
  }
  if (!blipPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video Info */
    var blipVideoInfo = getMyContent(page.url + '?skin=json', 'TEXT', false);

    /* Get Video Thumbnail */
    var blipVideoThumb = (blipVideoInfo) ? blipVideoInfo.match(/"thumbnailUrl":"(.*?)"/) : null;
    blipVideoThumb = (blipVideoThumb) ? blipVideoThumb[1] : null;

    /* Get Videos Content */
    var blipVideosContent = (blipVideoInfo) ? blipVideoInfo.match(/"additionalMedia":\[(.*?)\]/) : null;
    blipVideosContent = (blipVideosContent) ? blipVideosContent[1] : null;

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: blipPlayerWidth + 'px', height: blipPlayerHeight + 'px', backgroundColor: '#F4F4F4'});
    modifyMyElement (blipPlayerWindow, 'div', '', true);
    styleMyElement (blipPlayerWindow, {paddingTop: '0px'});
    appendMyElement (blipPlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (blipVideosContent) {
      var blipVideoList = {};
      var blipVideoFound = false;
      var blipMimeTypes = {'video/x-m4v': 'M4V', 'video/quicktime': 'MOV', 'video/mp4': 'MP4', 'video/x-flv': 'FLV'};
      var blipVideos = blipVideosContent.split(',{');
      var blipVideoURL, blipVideoMime, blipVideoHeight, blipVideoRole, blipVideoDef, blipVideoCode;
      var blipDefaultVideo = 'Low Definition MP4';
      for (var blipV = 0; blipV < blipVideos.length; blipV++) {
	blipVideoMime = blipVideos[blipV].match(/"primary_mime_type":"(.*?)"/);
	blipVideoMime = (blipVideoMime) ? blipVideoMime[1] : null;
	if (blipMimeTypes[blipVideoMime]) {
	  blipVideoURL = blipVideos[blipV].match(/"url":"(.*?)"/);
	  blipVideoURL = (blipVideoURL) ? blipVideoURL[1] : null;
	  blipVideoHeight = blipVideos[blipV].match(/"media_height":"(.*?)"/);
	  blipVideoHeight = (blipVideoHeight) ? blipVideoHeight[1] : null;
	  blipVideoRole = blipVideos[blipV].match(/"role":"(.*?)"/);
	  blipVideoRole = (blipVideoRole) ? blipVideoRole[1] : null;
	  if (blipVideoURL && blipVideoHeight && blipVideoRole) {
	    if (!blipVideoFound) blipVideoFound = true;
	    if (blipVideoHeight >= 200 && blipVideoHeight < 400) blipVideoDef = 'Low Definition';
	    else if (blipVideoHeight >= 400 && blipVideoHeight < 700) blipVideoDef = 'Standard Definition';
	    else if (blipVideoHeight >= 700) blipVideoDef = 'High Definition';
	    blipVideoCode = blipVideoDef + ' ' + blipMimeTypes[blipVideoMime];
	    blipVideoList[blipVideoCode] = blipVideoURL;
	    if (blipVideoRole == 'Source') blipDefaultVideo = blipVideoCode;
	  }
	}
      }

      if (blipVideoFound) {
	/* Create Player */
	player = {'playerSocket': blipPlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': blipVideoList, 'videoPlay': blipDefaultVideo, 'videoThumb': blipVideoThumb, 'playerWidth': blipPlayerWidth, 'playerHeight': blipPlayerHeight};
	feature['widesize'] = false;
	option['definitions'] = ['High Definition', 'Standard Definition', 'Low Definition'];
	option['containers'] = ['MP4', 'M4V', 'MOV', 'FLV', 'Any'];
	createMyPlayer ();
      }
      else {
	showMyMessage ('!videos');
      }
    }
    else {
      showMyMessage ('!content');
    }
  }

}

// =====Veoh===== //

else if (page.url.indexOf('veoh.com/watch') != -1) {

  /* Get Video Availability */
  if (getMyElement ('', 'div', 'class', 'veoh-video-player-error', 0, false)) return;

  /* Get Player Window */
  var vePlayerWindow = getMyElement ('', 'div', 'id', 'videoPlayerContainer', -1, false);
  if (!vePlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Videos Content */
    var veVideosContent = getMyContent (page.url, '__watch.videoDetailsJSON = \'\\{(.*?)\\}', false);
    veVideosContent = cleanMyContent (veVideosContent, true);

    /* Get Video Thumbnail */
    var veVideoThumbGet = veVideosContent.match (/"highResImage":"(.*?)"/);
    var veVideoThumb = (veVideoThumbGet) ? veVideoThumbGet[1] : null;

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '640px', height: '382px', backgroundColor: '#F4F4F4'});
    modifyMyElement (vePlayerWindow, 'div', '', true);
    styleMyElement (vePlayerWindow, {height: '100%'});
    appendMyElement (vePlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (veVideosContent) {
      var veVideoFormats = {'fullPreviewHashLowPath': 'Very Low Definition MP4', 'fullPreviewHashHighPath': 'Low Definition MP4'};
      var veVideoList = {};
      var veVideoFound = false;
      var veVideoParser, veVideoParse, veVideo, myVideoCode;
      for (var veVideoCode in veVideoFormats) {
	veVideoParser = veVideoCode + '":"(.*?)"';
	veVideoParse = veVideosContent.match (veVideoParser);
	veVideo = (veVideoParse) ? veVideoParse[1] : null;
	if (veVideo) {
	  if (!veVideoFound) veVideoFound = true;
	  myVideoCode = veVideoFormats[veVideoCode];
	  veVideoList[myVideoCode] = veVideo;
	}
      }

      if (veVideoFound) {
	/* Get Watch Sidebar */
	var veSidebarWindow = getMyElement ('', 'div', 'id', 'videoToolsContainer', -1, false);
	if (veSidebarWindow) styleMyElement(veSidebarWindow, {marginTop: '-380px'});

	/* Create Player */
	var veDefaultVideo = 'Low Definition MP4';
	player = {
	  'playerSocket': vePlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': veVideoList,
	  'videoPlay': veDefaultVideo,
	  'videoThumb': veVideoThumb,
	  'playerWidth': 640,
	  'playerHeight': 382,
	  'playerWideWidth': 970,
	  'playerWideHeight': 568,
	  'sidebarWindow': veSidebarWindow,
	  'sidebarMarginNormal': -380,
	  'sidebarMarginWide': 20
	};
	feature['container'] = false;
	option['definition'] = 'LD';
	option['definitions'] = ['Low Definition', 'Very Low Definition'];
	option['containers'] = ['MP4'];
	createMyPlayer ();
      }
      else {
	var veVideoSource = getMyContent(page.url, '"videoContentSource":"(.*?)"', false);
	if (veVideoSource == 'YouTube') var ytVideoId = getMyContent(page.url, '"videoId":"yapi-(.*?)"', false);
	if (ytVideoId) {
	  var ytVideoLink = 'http://youtube.com/watch?v=' + ytVideoId;
	  showMyMessage ('embed', ytVideoLink);
	}
	else {
	  showMyMessage ('!videos');
	}
      }
    }
    else {
      showMyMessage ('!content');
    }
  }

}

// =====Crackle===== //

else if (page.url.indexOf('crackle.com/') != -1) {

  /* Get Page Type */
  var crPageType = getMyContent (page.url, 'meta\\s+property="og:type"\\s+content="(.*?)"', false);
  if (!crPageType || crPageType.indexOf('video') == -1) return;

  /* Get Player Window */
  var crPlayerWindow = getMyElement ('', 'div', 'id', 'main', -1, false);
  if (!crPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Videos Content */
    var crVideoPath = getMyContent (page.url, 'images-us-am.crackle.com\/(.*?_)tnl', false);
    if (!crVideoPath) {
      var crVideoID = getMyContent (page.url, 'mediaId:\\s*(.*?),', false);
      if (crVideoID) {
	var crVidWallCache = page.win.location.protocol + '//' + page.win.location.hostname + '/app/vidwallcache.aspx?flags=-1&fm=' + crVideoID + '&partner=20';
	crVideoPath = getMyContent (crVidWallCache, '\\sp="(.*?)"', false);
      }
    }

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '970px', height: '566px', backgroundColor: '#F4F4F4'});
    modifyMyElement (crPlayerWindow, 'div', '', true);
    styleMyElement (crPlayerWindow, {width: '970px', height: '600px', backgroundColor: '#FFFFFF'});
    appendMyElement (crPlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (crVideoPath) {
      var crVideoList = {};
      var crVideoFormats = {'360p.mp4': 'Low Definition MP4', '480p.mp4': 'Standard Definition MP4'};
      var crVideoThumb, crVideo, myVideoCode;
      for (var crVideoCode in crVideoFormats) {
	crVideo = 'http://media-us-am.crackle.com/' + crVideoPath + crVideoCode;
	myVideoCode = crVideoFormats[crVideoCode];
	crVideoList[myVideoCode] = crVideo;
      }
      crVideoThumb = 'http://images-us-am.crackle.com/' + crVideoPath + 'tnl.jpg';

      /* Create Player */
      var crDefaultVideo = 'Low Definition MP4';
      player = {
	'playerSocket': crPlayerWindow,
	'playerWindow': myPlayerWindow,
	'videoList': crVideoList,
	'videoPlay': crDefaultVideo,
	'videoThumb': crVideoThumb,
	'playerWidth': 970,
	'playerHeight': 566
      };
      feature['container'] = false;
      feature['widesize'] = false;
      option['definition'] = 'SD';
      option['definitions'] = ['Standard Definition', 'Low Definition'];
      option['containers'] = ['MP4'];
      createMyPlayer ();

      /* Fix Thumbnails */
      var crThumbs = getMyElement('', 'div', 'class', 'thumbnail', -1, false);
      for (var crT = 0; crT < crThumbs.length; crT++) {
	if (crThumbs[crT].innerHTML.indexOf('AddObjectToQueue') != -1) {
	  var crLink = crThumbs[crT].innerHTML.match(/,\s+\d+,\s+'(.*?)'/);
	  crLink = (crLink) ? crLink[1] : null;
	  var crImg = crThumbs[crT].innerHTML.match(/src="(.*?)"/);
	  crImg = (crImg) ? crImg[1] : null;
	  crThumbs[crT].innerHTML = '<img src="' + crImg + '" onclick="window.location.href=\'' + crLink + '\'" style="cursor:pointer">';
	}
      }
    }
    else {
      showMyMessage ('!videos');
    }
  }

}

// =====Viki===== //

else if (page.url.indexOf('viki.com/videos') != -1) {

  /* Get Player Window */
  var vkPlayerWindow = getMyElement ('', 'div', 'class', 'video-placeholder', 0, false);
  if (!vkPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video ID */
    var vkVideoID = page.url.match(/videos\/(.*?)v/);
    vkVideoID = (vkVideoID) ? vkVideoID[1] : null;

    /* Get Videos Content */
    var vkVideosContent;
    if (vkVideoID) vkVideosContent = getMyContent (page.win.location.protocol + '//' + page.win.location.host + '/player5_fragment/' + vkVideoID + 'v.json', 'TEXT', false);

    /* Player Size */
    var vkSidebarWidth = 320;
    var vkSidebarWindow = getMyElement ('', 'div', 'class', 'col s12 l4 right', 0, false);
    var vkPlayerWidth, vkPlayerHeight;
    var vkPlayerWideWidth, vkPlayerWideHeight;
    var vkSidebarMarginWide;
    function vkGetSizes() {
      vkPlayerWidth = vkPlayerWindow.clientWidth;
      vkPlayerHeight = Math.ceil(vkPlayerWidth / (16 / 9)) + 22;
      vkSidebarWidth = vkSidebarWindow.clientWidth;
      vkPlayerWideWidth = vkPlayerWidth + vkSidebarWidth;
      vkPlayerWideHeight = Math.ceil(vkPlayerWideWidth / (16 / 9)) + 22;
      vkSidebarMarginWide = vkPlayerWideHeight + 20;
    }
    function vkUpdateSizes() {
      vkGetSizes();
      player['playerWidth'] = vkPlayerWidth;
      player['playerHeight'] = vkPlayerHeight;
      player['playerWideWidth'] = vkPlayerWideWidth;
      player['playerWideHeight'] = vkPlayerWideHeight;
      player['sidebarMarginWide'] = vkSidebarMarginWide;
      resizeMyPlayer('widesize');
    }
    vkGetSizes();

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: vkPlayerWidth + 'px', height: vkPlayerHeight + 'px', backgroundColor: '#FFFFFF'});
    modifyMyElement (vkPlayerWindow, 'div', '', false, true);
    styleMyElement (vkPlayerWindow, {overflow: 'visible', height: '100%'});
    appendMyElement (vkPlayerWindow, myPlayerWindow);
    blockObject = vkPlayerWindow;

    /* Resize Event */
    page.win.addEventListener('resize', vkUpdateSizes, false);

    /* Get Videos */
    if (vkVideosContent) {
      var vkVideoList = {};
      var vkVideo = vkVideosContent.match(/"video_url":"(.*?)"/);
      vkVideo = (vkVideo) ? vkVideo[1] : null;
      var vkVideoThumb = vkVideosContent.match(/"image_url":"(.*?)"/);
      vkVideoThumb = (vkVideoThumb) ? vkVideoThumb[1] : null;

      /* Create Player */
      if (vkVideo) {
	var vkDefaultVideo = 'Low Definition MP4';
	vkVideoList[vkDefaultVideo] = vkVideo
	player = {
	  'playerSocket': vkPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': vkVideoList,
	  'videoPlay': vkDefaultVideo,
	  'videoThumb': vkVideoThumb,
	  'playerWidth': vkPlayerWideHeight,
	  'playerHeight': vkPlayerWideHeight,
	  'playerWideWidth': vkPlayerWideWidth,
	  'playerWideHeight': vkPlayerWideHeight,
	  'sidebarWindow': vkSidebarWindow,
	  'sidebarMarginNormal': 0,
	  'sidebarMarginWide': vkSidebarMarginWide
	};
	feature['definition'] = false;
	feature['container'] = false;
	option['definition'] = 'LD';
	option['definitions'] = ['Low Definition'];
	option['containers'] = ['MP4'];
	createMyPlayer ();
	vkUpdateSizes ();

	/* Fix panel */
	styleMyElement(player['playerContent'], {marginTop: '5px'});
      }
      else {
	showMyMessage ('!videos');
      }
    }
    else {
      showMyMessage ('!content');
    }
  }

}

// =====IMDB===== //

else if (page.url.indexOf('imdb.com') != -1) {

  /* Redirect To Video Page */
  if (page.url.indexOf('imdb.com/video/') == -1) {
    page.doc.addEventListener('click', function(e) {
      var p = e.target.parentNode;
      while (p) {
	if (p.tagName === 'A' && p.href.indexOf('/video/imdb') != -1) {
	  page.win.location.href = p.href.replace(/imdb\/inline.*/, '');
	}
	p = p.parentNode;
      }
    }, false);
    return;
  }

  /* Get Player Window */
  var imdbPlayerWindow = getMyElement ('', 'div', 'id', 'player-article', -1, false);
  if (!imdbPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '670px', height: '398px', backgroundColor: '#F4F4F4'});
    modifyMyElement (imdbPlayerWindow, 'div', '', true);
    appendMyElement (imdbPlayerWindow, myPlayerWindow);

    /* Get Videos Content */
    var imdbVideoList = {};
    var imdbVideoFormats = {'1': 'Low Definition MP4', '2': 'Standard Definition MP4', '3': 'High Definition MP4'};
    var imdbVideoThumb, imdbDefaultVideo, imdbURL, imdbVideo, myVideoCode;
    var imdbVideoFound = false;
    var imdbVideoRTMP = false;
    var imdbPageURL = page.url.replace(/\?.*$/, '').replace(/\/$/, '');
    for (var imdbVideoCode in imdbVideoFormats) {
      imdbURL = imdbPageURL + '/player?uff=' + imdbVideoCode;
      imdbVideo = getMyContent (imdbURL, 'so.addVariable\\("file",\\s+"(.*?)"\\);', true);
      if (!imdbVideoThumb) imdbVideoThumb = getMyContent (imdbURL, 'so.addVariable\\("image",\\s+"(.*?)"\\);', true);
      if (imdbVideo) {
	if (imdbVideo.indexOf('rtmp') != -1) {
	  if (!imdbVideoRTMP) imdbVideoRTMP = true;
	}
	else {
	  if (!imdbVideoFound) imdbVideoFound = true;
	  myVideoCode = imdbVideoFormats[imdbVideoCode];
	  imdbVideoList[myVideoCode] = imdbVideo;
	  if (!imdbDefaultVideo) imdbDefaultVideo = myVideoCode;
	}
      }
    }

    if (imdbVideoFound) {
      /* Get Watch Sidebar */
      var imdbSidebarWindow = getMyElement ('', 'div', 'id', 'sidebar', -1, false);
      styleMyElement (imdbSidebarWindow, {marginTop: '-400px'});

      /* Create Player */
      player = {
	'playerSocket': imdbPlayerWindow,
	'playerWindow': myPlayerWindow,
	'videoList': imdbVideoList,
	'videoPlay': imdbDefaultVideo,
	'videoThumb': imdbVideoThumb,
	'playerWidth': 670,
	'playerHeight': 398,
	'playerWideWidth': 1010,
	'playerWideHeight': 592,
	'sidebarWindow': imdbSidebarWindow,
	'sidebarMarginNormal': -400,
	'sidebarMarginWide': 0
      };
      feature['container'] = false;
      option['definitions'] = ['High Definition', 'Standard Definition', 'Low Definition'];
      option['containers'] = ['MP4'];
      createMyPlayer ();
    }
    else {
      if (imdbVideoRTMP) showMyMessage ('!support');
      else showMyMessage ('!videos');
    }
  }

}

// =====Facebook===== //

else if (page.url.match('facebook.com/(video.php|.*/videos/)')) {

  /* Get Player Window */
  var fbPlayerWindow = getMyElement ('', 'div', 'class', 'videoStage', 0, false);
  if (!fbPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Videos Content */
    var fbVideosContent = getMyContent(page.url, '"params","(.*?)"', false);
    var fbPattern = /\\u([\d\w]{4})/gi;
    fbVideosContent = fbVideosContent.replace(fbPattern, function (match, group) {
      return String.fromCharCode(parseInt(group, 16));
    });
    fbVideosContent = unescape(fbVideosContent);

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '720px', height: '428px', backgroundColor: '#F4F4F4'});
    modifyMyElement (fbPlayerWindow, 'div', '', false, true);
    appendMyElement (fbPlayerWindow, myPlayerWindow);
    blockObject = fbPlayerWindow;

    /* Get Videos */
    if (fbVideosContent) {
      var fbVideoList = {};
      var fbVideoFormats = {'sd_src': 'Low Definition MP4', 'hd_src': 'High Definition MP4'};
      var fbVideoFound = false;
      var fbVideoPattern, fbVideo, myVideoCode, fbVideoThumb, fbDefaultVideo;
      for (var fbVideoCode in fbVideoFormats) {
	fbVideoPattern = '"' + fbVideoCode + '":"(.*?)"';
	fbVideo = fbVideosContent.match(fbVideoPattern);
	fbVideo = (fbVideo) ? fbVideo[1] : null;
	if (fbVideo) {
	  fbVideo = cleanMyContent(fbVideo, false);
	  if (!fbVideoFound) fbVideoFound = true;
	  myVideoCode = fbVideoFormats[fbVideoCode];
	  if (fbVideo.indexOf('.flv') != -1) myVideoCode = myVideoCode.replace('MP4', 'FLV');
	  fbVideoList[myVideoCode] = fbVideo;
	  if (!fbDefaultVideo) fbDefaultVideo = myVideoCode;
	}
	fbVideoThumb = fbVideosContent.match(/"thumbnail_src":"(.*?)"/);
	fbVideoThumb = (fbVideoThumb) ? fbVideoThumb[1] : null;
	if (fbVideoThumb) fbVideoThumb = cleanMyContent(fbVideoThumb, false);
	else fbVideoThumb = 'https://www.facebook.com/images/fb_icon_325x325.png';
      }

      if (fbVideoFound) {
	/* Create Player */
	player = {
	  'playerSocket': fbPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': fbVideoList,
	  'videoPlay': fbDefaultVideo,
	  'videoThumb': fbVideoThumb,
	  'playerWidth': 720,
	  'playerHeight': 428
	};
	feature['widesize'] = false;
	option['definitions'] = ['High Definition', 'Low Definition'];
	option['containers'] = ['MP4', 'FLV', 'Any'];
	createMyPlayer ();
      }
      else {
	showMyMessage ('!videos');
      }
    }
    else {
      showMyMessage ('!content');
    }
  }

}

// =====YahooScreen===== //

else if (page.url.indexOf('screen.yahoo.com') != -1) {

  /* Get Player Window */
  var ysPlayerWindow = getMyElement ('', 'div', 'class', 'vp-container', 0, false);
  if (!ysPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Videos Content */
    var ysVideosContent;
    var ysVideoID = getMyContent (page.url, '"first_videoid":"(.*?)"', false);
    if (ysVideoID) ysVideosContent = getMyContent('https://video.media.yql.yahoo.com/v1/video/sapi/streams/' + ysVideoID + '?protocol=http&region=US', '"streams":\\[(.*?)\\]', false);

    /* Get Video Thumbnail */
    var ysVideoThumb = getMyContent (page.url, '"thumbnails":\\[\\{"tag":"original","url":"(.*?)"', false);
    if (!ysVideoThumb) ysVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '920px', height: '540px', backgroundColor: '#F4F4F4', margin: '0px auto'});
    modifyMyElement (ysPlayerWindow, 'div', '', true);
    styleMyElement (ysPlayerWindow, {height: '100%', width: '1050px', backgroundColor: '#17151D'});
    appendMyElement (ysPlayerWindow, myPlayerWindow);

    /* Restyle */
    var ysStage = getMyElement ('', 'div', 'class', 'y-stage', 0, false);
    if (ysStage) styleMyElement (ysStage, {height: '1150px', maxHeight: '1150px'});
    var ysOverlay = getMyElement ('', 'div', 'class', 'vp-overlay', 0, false);
    if (ysOverlay) styleMyElement (ysOverlay, {marginTop: '580px', width: '1000px'});

    /* Get Videos */
    if (ysVideosContent) {
      var ysVideoList = {};
      var ysVideoFound = false;
      var ysVideoFormats = {'240': 'Very Low Definition', '360': 'Low Definition', '432': 'Low Definition', '540': 'Standard Definition', '720': 'High Definition', '1080': 'Full High Definition'};
      var ysVideoParts = ysVideosContent.split('},');
      var ysVideoPart, ysVideoPath, ysVideoHost, ysVideoHeight, ysVideoType, myVideoCode;
      for (var i = 0; i < ysVideoParts.length; i++) {
	ysVideoPart = ysVideoParts[i];
	ysVideoPath = ysVideoPart.match(/"path":"(.*?)"/);
	ysVideoPath = (ysVideoPath) ? ysVideoPath[1] : null;
	ysVideoHost = ysVideoPart.match(/"host":"(.*?)"/);
	ysVideoHost = (ysVideoHost) ? ysVideoHost[1] : null;
	ysVideoHeight = ysVideoPart.match(/"height":(\d+),/);
	ysVideoHeight = (ysVideoHeight) ? ysVideoHeight[1] : null;
	ysVideoType = ysVideoPart.match(/"mime_type":"(.*?)"/);
	ysVideoType = (ysVideoType) ? ysVideoType[1] : null;
	if (ysVideoPath && ysVideoHost && ysVideoHeight && ysVideoType) {
	  for (var ysVideoCode in ysVideoFormats) {
	    if (ysVideoCode == ysVideoHeight) {
	      if (!ysVideoFound) ysVideoFound = true;
	      myVideoCode = ysVideoFormats[ysVideoCode]
	      if (ysVideoType == 'video/mp4') myVideoCode += ' MP4';
	      else if (ysVideoType == 'video/webm') myVideoCode += ' WebM';
	      ysVideoList[myVideoCode] = ysVideoHost + ysVideoPath;
	    }
	  }
	}
      }

      if (ysVideoFound) {
	/* Create Player */
	var ysDefaultVideo = 'Low Definition MP4';
	player = {
	  'playerSocket': ysPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': ysVideoList,
	  'videoPlay': ysDefaultVideo,
	  'videoThumb': ysVideoThumb,
	  'playerWidth': 920,
	  'playerHeight': 540
	};
	feature['widesize'] = false;
	option['definitions'] = ['Full High Definition', 'High Definition', 'Standard Definition', 'Low Definition', 'Very Low Definition'];
	option['containers'] = ['MP4', 'WebM', 'Any'];
	createMyPlayer ();

	/* Fix panel */
	styleMyElement(player['playerContent'], {marginTop: '5px'});
      }
      else {
	showMyMessage ('!videos');
      }
    }
    else {
      showMyMessage ('!content');
    }
  }

}

})();
