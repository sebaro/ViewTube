// ==UserScript==
// @name		ViewTube+
// @version		2015.09.23
// @description		Watch videos from video sharing websites without Flash Player.
// @author		sebaro
// @namespace		http://isebaro.com/viewtube
// @license		GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @downloadURL		https://raw.githubusercontent.com/sebaro/viewtube/master/viewtubeplus.user.js
// @updateURL		https://raw.githubusercontent.com/sebaro/viewtube/master/viewtubeplus.user.js
// @icon		http://s3.amazonaws.com/uso_ss/icon/87011/large.png
// @include		http://*.rai.tv/*
// @include		https://*.rai.tv/*
// @include		http://video.repubblica.it/*
// @include		https://video.repubblica.it/*
// @include		http://video.gelocal.it/*
// @include		https://video.gelocal.it/*
// @include		http://canalplus.fr/*
// @include		http://www.canalplus.fr/*
// @include		https://canalplus.fr/*
// @include		https://www.canalplus.fr/*
// @include		http://d8.tv/*
// @include		http://www.d8.tv/*
// @include		https://d8.tv/*
// @include		https://www.d8.tv/*
// @include		http://wat.tv/*
// @include		http://www.wat.tv/*
// @include		https://wat.tv/*
// @include		https://www.wat.tv/*
// @include		http://videos.tf1.fr/*
// @include		https://videos.tf1.fr/*
// @include		http://ina.fr/*
// @include		http://www.ina.fr/*
// @include		https://ina.fr/*
// @include		https://www.ina.fr/*
// @include		http://nicovideo.jp/*
// @include		http://www.nicovideo.jp/*
// @include		https://nicovideo.jp/*
// @include		https://www.nicovideo.jp/*
// @include		http://buni.tv/*
// @include		http://www.buni.tv/*
// @include		https://buni.tv/*
// @include		https://www.buni.tv/*
// @include		http://v.youku.com/*
// @include		https://v.youku.com/*
// @include		http://*.iqiyi.com/*
// @include		https://*.iqiyi.com/*
// @include		http://jpopsuki.tv/*
// @include		http://www.jpopsuki.tv/*
// @include		https://jpopsuki.tv/*
// @include		https://www.jpopsuki.tv/*
// @include		http://vplay.ro/*
// @include		http://www.vplay.ro/*
// @include		https://vplay.ro/*
// @include		https://www.vplay.ro/*
// @include		http://vhd.ro/*
// @include		http://www.vhd.ro/*
// @include		https://vhd.ro/*
// @include		https://www.vhd.ro/*
// @include		http://trilulilu.ro/*
// @include		http://www.trilulilu.ro/*
// @include		https://trilulilu.ro/*
// @include		https://www.trilulilu.ro/*
// @include		http://adevarul.ro/*
// @include		http://www.adevarul.ro/*
// @include		https://adevarul.ro/*
// @include		https://www.adevarul.ro/*
// @include		http://veehd.com/*
// @include		http://www.veehd.com/*
// @include		https://veehd.com/*
// @include		https://www.veehd.com/*
// @include		http://svtplay.se/*
// @include		http://www.svtplay.se/*
// @include		https://svtplay.se/*
// @include		https://www.svtplay.se/*
// @include		http://tv.nrk.no/*
// @include		https://tv.nrk.no/*
// @include		http://euronews.com/*
// @include		http://www.euronews.com/*
// @include		https://euronews.com/*
// @include		https://www.euronews.com/*
// @include		http://*.ifeng.com/*
// @include		https://*.ifeng.com/*
// @include		http://56.com/*
// @include		http://www.56.com/*
// @include		https://56.com/*
// @include		https://www.56.com/*
// @include		http://telemadrid.es/*
// @include		http://www.telemadrid.es/*
// @include		https://telemadrid.es/*
// @include		https://www.telemadrid.es/*
// @include		http://vk.com/*
// @include		http://www.vk.com/*
// @include		https://vk.com/*
// @include		https://www.vk.com/*
// @include		http://twitch.tv/*
// @include		http://www.twitch.tv/*
// @include		https://twitch.tv/*
// @include		https://www.twitch.tv/*
// @include		http://redmediatv.ru/*
// @include		http://www.redmediatv.ru/*
// @include		https://redmediatv.ru/*
// @include		https://www.redmediatv.ru/*
// @include		http://*.rt.com/*
// @include		https://*.rt.com/*
// @include		http://rutube.ru/*
// @include		http://www.rutube.ru/*
// @include		https://rutube.ru/*
// @include		https://www.rutube.ru/*
// @include		http://now.ru/*
// @include		http://www.now.ru/*
// @include		https://now.ru/*
// @include		https://www.now.ru/*
// @include		http://videomore.ru/*
// @include		https://www.videomore.ru/*
// @include		http://videomore.ru/*
// @include		https://www.videomore.ru/*
// @include		http://tvigle.ru/*
// @include		https://tvigle.ru/*
// @include		http://www.tvigle.ru/*
// @include		https://www.tvigle.ru/*
// @include		http://ivi.ru/*
// @include		https://ivi.ru/*
// @include		http://www.ivi.ru/*
// @include		https://www.ivi.ru/*
// @include		http://megogo.net/*
// @include		https://megogo.net/*
// @include		http://www.megogo.net/*
// @include		https://www.megogo.net/*
// @include		http://alkislarlayasiyorum.com/*
// @include		http://www.alkislarlayasiyorum.com/*
// @include		https://alkislarlayasiyorum.com/*
// @include		https://www.alkislarlayasiyorum.com/*
// @include		http://hurriyet.com.tr/*
// @include		http://www.hurriyet.com.tr/*
// @include		https://hurriyet.com.tr/*
// @include		https://www.hurriyet.com.tr/*
// @include		http://vevo.com/*
// @include		http://www.vevo.com/*
// @include		https://vevo.com/*
// @include		https://www.vevo.com/*
// @include		http://tu.tv/*
// @include		http://www.tu.tv/*
// @include		https://tu.tv/*
// @include		https://www.tu.tv/*
// @include		http://watch.nba.com/*
// @include		https://watch.nba.com/*
// @include		http://wimp.com/*
// @include		http://www.wimp.com/*
// @include		https://wimp.com/*
// @include		https://www.wimp.com/*
// @include		http://marktplaats.nl/*
// @include		http://www.marktplaats.nl/*
// @include		https://marktplaats.nl/*
// @include		https://www.marktplaats.nl/*
// @include		http://npo.nl/*
// @include		http://www.npo.nl/*
// @include		https://npo.nl/*
// @include		https://www.npo.nl/*
// @include		http://rtlxl.nl/*
// @include		http://www.rtlxl.nl/*
// @include		https://rtlxl.nl/*
// @include		https://www.rtlxl.nl/*
// @include		http://nickelodeon.nl/*
// @include		http://www.nickelodeon.nl/*
// @include		https://nickelodeon.nl/*
// @include		https://www.nickelodeon.nl/*
// @include		http://tvthek.orf.at/*
// @include		https://tvthek.orf.at/*
// @include		http://meteoweb.eu/*
// @include		http://www.meteoweb.eu/*
// @include		https://meteoweb.eu/*
// @include		https://www.meteoweb.eu/*
// @include		http://liveleak.com/*
// @include		http://www.liveleak.com/*
// @include		https://liveleak.com/*
// @include		https://www.liveleak.com/*
// @include		http://unblockyoutube.co.uk/*
// @include		http://www.unblockyoutube.co.uk/*
// @include		https://unblockyoutube.co.uk/*
// @include		https://www.unblockyoutube.co.uk/*
// @include		http://jeuxvideo.com/*
// @include		http://www.jeuxvideo.com/*
// @include		https://jeuxvideo.com/*
// @include		https://www.jeuxvideo.com/*
// @include		http://tv.ilfattoquotidiano.it/*
// @include		https://tv.ilfattoquotidiano.it/*
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


// ==========Variables========== //


// Userscript
var userscript = 'ViewTube';

// Page
var page = {win: window, doc: document, body: document.body, url: window.location.href, site: window.location.hostname.match(/([^.]+)\.[^.]+$/)[1]};

// Player
var player = {};
var feature = {'autoplay': true, 'definition': true, 'container': true, 'widesize': true, 'fullsize': true};
var option = {'plugin': 'Auto', 'autoplay': false, 'autoget': false, 'definition': 'HD', 'container': 'MP4', 'widesize': false, 'fullsize': false};
var plugins = ['Auto', 'Alt', 'HTML5', 'MPEG', 'MP4', 'FLV', 'VLC'];
if (navigator.platform.indexOf('Win') != -1) plugins = plugins.concat(['WMP', 'WMP2', 'QT']);
else if (navigator.platform.indexOf('Mac') != -1) plugins = plugins.concat(['QT']);
else plugins = plugins.concat(['Totem', 'Xine']);
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
  'WMV': 'video/x-ms-wmv',
  'QT': 'video/quicktime',
  'VLC': 'application/x-vlc-plugin',
  'Totem': 'application/x-totem-plugin',
  'Xine': 'application/x-xine-plugin',
  'M3U8': 'application/x-mpegurl'
};

// Links
var website = 'http://isebaro.com/viewtube/?ln=en';
var contact = 'http://isebaro.com/contact/?ln=en&sb=viewtube';


// ==========Fixes========== //

// Don't run on frames or iframes
if (window.top != window.self)  return;


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
      obj.volume = 0.5;
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
	  styleMyElement (player['buttonPlay'], {display: 'none'});
	  styleMyElement (player['buttonAutoplay'], {color: '#008080', textShadow: '0px 1px 1px #CCCCCC'});
	  if (!player['isPlaying']) playMyVideo(true);
	}
	else {
	  styleMyElement (player['buttonPlay'], {display: 'inline'});
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
  styleMyElement (player['panelLogo'], {height: panelItemHeight + 'px', padding: '0px', display: 'inline', color: '#336699', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', cursor: 'pointer'});
  appendMyElement (player['playerPanel'], player['panelLogo']);

  /* Panel Video Menu */
  player['videoMenu'] = createMyElement ('select', '', 'change', '', 'video');
  styleMyElement (player['videoMenu'], {width: '200px', height: panelItemHeight + 'px', border: '1px solid transparent', padding: '0px', display: 'inline', backgroundColor: 'inherit', color: '#336699', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', verticalAlign: 'baseline', cursor: 'pointer'});
  appendMyElement (player['playerPanel'], player['videoMenu'] );
  for (var videoCode in player['videoList']) {
    player['videoItem'] = createMyElement ('option', videoCode, '', '', '');
    styleMyElement (player['videoItem'], {padding: '0px', display: 'block', color: '#336699', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', cursor: 'pointer'});
    appendMyElement (player['videoMenu'], player['videoItem']);
  }

  /* Panel Plugin Menu */
  player['pluginMenu'] = createMyElement ('select', '', 'change', '', 'plugin');
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
  styleMyElement (player['buttonPlay'], {height: panelItemHeight + 'px', border: '1px solid #CCCCCC', borderRadius: '3px', padding: '0px 5px', display: 'inline', color: '#37B704', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', cursor: 'pointer'});
  if (option['autoplay']) styleMyElement (player['buttonPlay'], {display: 'none'});
  appendMyElement (player['playerPanel'], player['buttonPlay']);

  /* Panel Get Button */
  player['buttonGet'] = createMyElement ('div', 'Get', 'click', 'get', '');
  styleMyElement (player['buttonGet'], {height: panelItemHeight + 'px', border: '1px solid #CCCCCC', borderRadius: '3px', padding: '0px 5px', display: 'inline', color: '#C000C0', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', cursor: 'pointer'});
  appendMyElement (player['playerPanel'], player['buttonGet']);

  /* Panel Autoplay Button */
  if (feature['autoplay']) {
    player['buttonAutoplay'] = createMyElement ('div', 'AP', 'click', 'autoplay', '');
    styleMyElement (player['buttonAutoplay'], {height: panelItemHeight + 'px', border: '1px solid #CCCCCC', borderRadius: '3px', padding: '0px 5px', display: 'inline', color: '#CCCCCC', fontSize: '12px', cursor: 'pointer'});
    if (option['autoplay']) styleMyElement (player['buttonAutoplay'], {color: '#008080', textShadow: '0px 1px 1px #CCCCCC'});
    appendMyElement (player['playerPanel'], player['buttonAutoplay']);
  }

  /* Panel Definition Button */
  if (feature['definition']) {
    player['buttonDefinition'] = createMyElement ('div', option['definition'], 'click', 'definition', '');
    styleMyElement (player['buttonDefinition'], {height: panelItemHeight + 'px', border: '1px solid #CCCCCC', borderRadius: '3px', padding: '0px 5px', display: 'inline', color: '#008000', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', cursor: 'pointer'});
    appendMyElement (player['playerPanel'], player['buttonDefinition']);
  }

  /* Panel Container Button */
  if (feature['container']) {
    player['buttonContainer'] = createMyElement ('div', option['container'], 'click', 'container', '');
    styleMyElement (player['buttonContainer'], {height: panelItemHeight + 'px', border: '1px solid #CCCCCC', borderRadius: '3px', padding: '0px 5px', display: 'inline', color: '#008000', fontSize: '12px', textShadow: '0px 1px 1px #CCCCCC', cursor: 'pointer'});
    appendMyElement (player['playerPanel'], player['buttonContainer']);
  }

  /* Panel Widesize Button */
  if (feature['widesize']) {
    if (option['widesize']) player['buttonWidesize'] = createMyElement ('div', '&lt;', 'click', 'widesize', '');
    else player['buttonWidesize'] = createMyElement ('div', '&gt;', 'click', 'widesize', '');
    styleMyElement (player['buttonWidesize'], {height: panelItemHeight + 'px', border: '1px solid #CCCCCC', borderRadius: '3px', padding: '0px 5px', display: 'inline', color: '#C05800', fontSize: '12px', textShadow: '1px 1px 2px #CCCCCC', cursor: 'pointer'});
    appendMyElement (player['playerPanel'], player['buttonWidesize']);
  }

  /* Panel Fullsize Button */
  if (feature['fullsize']) {
    if (option['fullsize']) player['buttonFullsize'] = createMyElement ('div', '-', 'click', 'fullsize', '');
    else player['buttonFullsize'] = createMyElement ('div', '+', 'click', 'fullsize', '');
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
  player['videoMenu'].value = player['videoPlay'];
}

function playMyVideo (play) {
  if (play) {
    player['isPlaying'] = true;
    modifyMyElement (player['buttonPlay'], 'div', 'Stop', false);
    styleMyElement (player['buttonPlay'], {color: '#AD0000'});
    if (option['plugin'] == 'HTML5') player['contentVideo'] = createMyElement ('video', player['videoList'][player['videoPlay']], '', '', '');
    else if (option['plugin'] == 'Alt' || option['plugin'] == 'VLC') player['contentVideo'] = createMyElement ('embed', player['videoList'][player['videoPlay']], '', '', '');
    else player['contentVideo'] = createMyElement ('object', player['videoList'][player['videoPlay']], '', '', '');
    player['contentVideo'].width = player['contentWidth'];
    player['contentVideo'].height = player['contentHeight'];
    styleMyElement (player['contentVideo'], {width: player['contentWidth'] + 'px', height: player['contentHeight'] + 'px'});
    modifyMyElement (player['playerContent'], 'div', '', true);
    appendMyElement (player['playerContent'], player['contentVideo']);
    //if (option['plugin'] == 'VLC') page.win.setTimeout(function () {player['contentVideo'].wrappedJSObject.audio.volume = 50;}, 1000);
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
  if (option['autoget']) page.win.location.href = vdoURL;
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
    myPageContent = getMyElement ('', 'body', '', '', -1, true);
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

function getMyContentGM (url, pattern, clean) {
  var myPageContent, myVideosParse, myVideosContent;
  var xmlHTTP = GM_xmlhttpRequest({
    method: 'GET',
    url: url,
    synchronous: true
  });
  if (pattern == 'TEXT') {
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

function setMyOptions (key, value) {
  key = page.site + '_' + userscript.toLowerCase() + '_' + key;
  if (typeof GM_setValue === 'function') {
    GM_setValue(key, value);
  }
  else {
    try {
      localStorage.setItem(key, value);
    }
    catch(e) {
      var date = new Date();
      date.setTime(date.getTime() + (356*24*60*60*1000));
      var expires = '; expires=' + date.toGMTString();
      page.doc.cookie = key + '=' + value + expires + '; path=/';
    }
  }
}

function getMyOptions () {
  for (var opt in option) {
    if (option.hasOwnProperty(opt)) {
      var key = page.site + '_' + userscript.toLowerCase() + '_' + opt;
      if (typeof GM_getValue === 'function') {
	option[opt] = (GM_getValue(key)) ? GM_getValue(key) : option[opt];
      }
      else {
	try {
	  option[opt] = (localStorage.getItem(key)) ? localStorage.getItem(key) : option[opt];
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
  }
  option['autoplay'] = (option['autoplay'] === true || option['autoplay'] == 'true') ? true : false;
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

// =====RAI===== //

if (page.url.indexOf('rai.tv/dl/RaiTV') != -1) {

  var myPlayerWindow;
  page.win.setTimeout(function() {

    /* Get Player Window */
    var raiPlayerWindow = getMyElement ('', 'div', 'class', 'Player', 0, false);
    if (!raiPlayerWindow) {
      //showMyMessage ('!player');
    }
    else {
      /* My Player Window */
      myPlayerWindow = createMyElement ('div', '', '', '', '');
      styleMyElement (myPlayerWindow, {position: 'relative', width: '648px', height: '400px', backgroundColor: '#F4F4F4', zIndex: '99999'});
      modifyMyElement (raiPlayerWindow, 'div', '', true);
      appendMyElement (raiPlayerWindow, myPlayerWindow);

      /* Get Video Thumb */
      var raiVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

      /* Get Videos Content */
      var raiVideoList = {};
      var raiVideoFound, raiDefaultVideo;
      var raiVideoDef = getMyContent (page.url, 'videoURL\\s+=\\s+"(.*?)";', true);
      var raiVideoMP4 = getMyContent (page.url, 'videoURL_MP4\\s+=\\s+"(.*?)";', true);
      if (raiVideoMP4) {
	raiVideoFound = true;
	raiVideoList['Low Definition MP4'] = raiVideoMP4;
	raiDefaultVideo = 'Low Definition MP4';
      }
      if (raiVideoDef && raiVideoDef != raiVideoMP4) {
	if (!raiVideoFound) raiVideoFound = true;
	raiVideoList['Low Definition WMV'] = raiVideoDef;
	if (!raiDefaultVideo) raiDefaultVideo = 'Low Definition WMV';
      }

      if (raiVideoFound) {
	/* Get Watch Sidebar */
	var raiSidebarWindow = getMyElement ('', 'div', 'id', 'evidenzaSpalla', -1, false);

	/* Create Player */
	player = {
	  'playerSocket': raiPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': raiVideoList,
	  'videoPlay': raiDefaultVideo,
	  'videoThumb': raiVideoThumb,
	  'playerWidth': 648,
	  'playerHeight': 400,
	  'playerWideWidth': 970,
	  'playerWideHeight': 510,
	  'sidebarWindow': raiSidebarWindow,
	  'sidebarMarginNormal': 0,
	  'sidebarMarginWide': 530
	};
	feature['widesize'] = false;
	feature['definition'] = false;
	option['definition'] = 'LD';
	option['definitions'] = ['Low Definition'];
	option['containers'] = ['MP4', 'WMV', 'Any'];
	createMyPlayer ();
      }
      else {
	showMyMessage ('!videos');
      }
    }

  }, 2000);

}

// =====Repubblica===== //

else if (page.url.indexOf('video.repubblica.it') != -1) {

  /* Get Player Window */
  var repPlayerWindow = getMyElement ('', 'div', 'id', 'player', -1, false);
  if (!repPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '640px', height: '360px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    modifyMyElement (repPlayerWindow, 'div', '', true);
    appendMyElement (repPlayerWindow, myPlayerWindow);

    /* Get Video Thumb */
    var repVideoThumb = getMyContent (page.url, '\'param\',\\s*\'image\',\\s*\'(.*?)\'', false);

    /* Get Videos Content */
    var repVideoList = {};
    var repVideoFound, repDefaultVideo;
    var repVideo = getMyContent (page.url, '\'format\',\\s*\'mp4\',\\s*\'(.*?)\'', true);
    if (repVideo) {
      repVideoFound = true;
      repVideoList['Low Definition MP4'] = repVideo;
      repDefaultVideo = 'Low Definition MP4';
    }

    if (repVideoFound) {
      /* Get Watch Sidebar */
      var repSidebarWindow = getMyElement ('', 'div', 'id', 'contB', -1, false);

      /* Create Player */
      player = {
	'playerSocket': repPlayerWindow,
	'playerWindow': myPlayerWindow,
	'videoList': repVideoList,
	'videoPlay': repDefaultVideo,
	'videoThumb': repVideoThumb,
	'playerWidth': 640,
	'playerHeight': 360,
	'playerWideWidth': 970,
	'playerWideHeight': 510,
	'sidebarWindow': repSidebarWindow,
	'sidebarMarginNormal': 0,
	'sidebarMarginWide': 530
      };
      feature['definition'] = false;
      feature['container'] = false;
      option['definition'] = 'LD';
      option['definitions'] = ['Low Definition'];
      option['containers'] = ['MP4'];
      createMyPlayer ();
    }
    else {
      showMyMessage ('!videos');
    }
  }

}

// =====Gelocal===== //

else if (page.url.indexOf('video.gelocal.it') != -1) {

  /* Get Player Window */
  var gelPlayerWindow = getMyElement ('', 'div', 'id', 'player', -1, false);
  if (!gelPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '640px', height: '360px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    modifyMyElement (gelPlayerWindow, 'div', '', true);
    appendMyElement (gelPlayerWindow, myPlayerWindow);

    /* Get Video Thumb */
    var gelVideoThumb = getMyContent (page.url, '\'param\',\\s*\'image\',\\s*\'(.*?)\'', false);

    /* Get Videos Content */
    var gelVideoList = {};
    var gelVideoFound, gelDefaultVideo;
    var gelVideo = getMyContent (page.url, '\'format\',\\s*\'mp4\',\\s*\'(.*?)\'', true);
    if (gelVideo) {
      gelVideoFound = true;
      gelVideoList['Low Definition MP4'] = gelVideo;
      gelDefaultVideo = 'Low Definition MP4';
    }

    if (gelVideoFound) {
      /* Get Watch Sidebar */
      var gelSidebarWindow = getMyElement ('', 'div', 'id', 'contB', -1, false);

      /* Create Player */
      player = {
	'playerSocket': gelPlayerWindow,
	'playerWindow': myPlayerWindow,
	'videoList': gelVideoList,
	'videoPlay': gelDefaultVideo,
	'videoThumb': gelVideoThumb,
	'playerWidth': 640,
	'playerHeight': 360,
	'playerWideWidth': 970,
	'playerWideHeight': 510,
	'sidebarWindow': gelSidebarWindow,
	'sidebarMarginNormal': 0,
	'sidebarMarginWide': 530
      };
      feature['definition'] = false;
      feature['container'] = false;
      option['definition'] = 'LD';
      option['definitions'] = ['Low Definition'];
      option['containers'] = ['MP4'];
      createMyPlayer ();
    }
    else {
      showMyMessage ('!videos');
    }
  }

}

// =====CanalPlus===== //

if (page.url.indexOf('canalplus.fr') != -1 || page.url.indexOf('d8.tv') != -1) {

  /* Reload On Video Change */
  page.win.setInterval(function() {
    var nurl = page.win.location.href;
    if (page.url != nurl) page.win.location.href = nurl;
  }, 500);

  /* Get Player Window */
  var cpPlayerWindow = getMyElement ('', '', 'class', 'playerVideo player_16_9', 0, false);

  if (!cpPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '640px', height: '382px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    modifyMyElement (cpPlayerWindow, 'div', '', true);
    styleMyElement (cpPlayerWindow, {height: '100%', overflow: 'visible', padding: '0px 0px 20px 0px'});
    styleMyElement (cpPlayerWindow.parentNode, {overflow: 'visible'});
    appendMyElement (cpPlayerWindow, myPlayerWindow);

    /* Get Video ID */
    var cpVideoID = getMyContent (page.url, 'videoId\\s+=\\s+"(.*?)"', false);

    /* Get Videos Content GM */
    var cpVideosContent = getMyContentGM ('http://service.canal-plus.com/video/rest/getvideos/cplus/' + cpVideoID, 'TEXT', false);

    /* Get Videos */
    if (cpVideosContent) {
      var cpVideoList = {};
      var cpVideoFound = false;
      var cpVideo, cpVideoURL, cpVideoType, cpVideoRTMP, cpVideoHTTP, cpVideoSecret, cpDefaultVideo;
      cpVideoType = (cpVideosContent.indexOf('VOD STREAM') != -1) ? 'STREAMING' : 'PROGRESSIF';
      cpVideoRTMP = 'rtmp://vod-fms.canalplus.fr/ondemand/videos/';
      cpVideoHTTP = 'http://vod-flash.canalplus.fr/WWWPLUS/' + cpVideoType + '/';
      cpVideoURL = cpVideosContent.match (/<HAUT_DEBIT>(.*?)<\/HAUT_DEBIT>/);
      cpVideoURL = (cpVideoURL) ? cpVideoURL[1] : null;
      cpVideoSecret = '?secret=pqzerjlsmdkjfoiuerhsdlfknaes';
      cpDefaultVideo = 'Low Definition MP4';
      if (cpVideoURL) {
	  cpVideoFound = true;
	  cpVideoURL = cpVideoURL.replace(cpVideoRTMP, cpVideoHTTP);
	  cpVideo = cpVideoURL + cpVideoSecret;
	  cpVideoList[cpDefaultVideo] = cpVideo;
      }

      if (cpVideoFound) {
	/* Get Video Thumbnail */
	var cpVideoThumb = cpVideosContent.match (/<GRAND>(.*?)<\/GRAND>/);
	cpVideoThumb = (cpVideoThumb) ? cpVideoThumb[1] : null;

	/* Get Watch Sidebar */
	var cpSidebarWindow = getMyElement ('', 'div', 'id', 'rightSection', -1, false);
	var cpMainSection = getMyElement ('', 'div', 'id', 'mainSection', -1, false);
	if (cpMainSection) styleMyElement (cpMainSection, {overflow: 'visible'});

	/* Create Player */
	player = {
	  'playerSocket': cpPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': cpVideoList,
	  'videoPlay': cpDefaultVideo,
	  'videoThumb': cpVideoThumb,
	  'playerWidth': 640,
	  'playerHeight': 382,
	  'playerWideWidth': 970,
	  'playerWideHeight': 568,
	  'sidebarWindow': cpSidebarWindow,
	  'sidebarMarginNormal': 0,
	  'sidebarMarginWide': 800
	};
	feature['definition'] = false;
	feature['container'] = false;
	option['definition'] = 'LD';
	option['definitions'] = ['Low Definition'];
	option['containers'] = ['MP4'];
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

// =====Wat.TV===== //

else if (page.url.indexOf('wat.tv/video') != -1) {

  /* Remove Top Ads */
  var watTopAds = getMyElement ('', 'div', 'id', 'pub_top', -1, false);
  if (watTopAds) modifyMyElement (watTopAds, 'div', '', true);

  /* Get Player Window */
  var watPlayerWindow = getMyElement ('', 'div', 'class', 'player', 0, false);
  if (!watPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '640px', height: '360px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    modifyMyElement (watPlayerWindow, 'div', '', true);
    appendMyElement (watPlayerWindow, myPlayerWindow);

    /* Get Video Thumbnail */
    var watVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Video ID */
    var watVideoID = getMyContent (page.url, 'oasUvid\\s+=\\s+\'(.*?)\';', false);
    if (!watVideoID) watVideoID = getMyContent (page.url, 'iphoneId\\s+:\\s+"(.*?)"', false);

    /* Get Videos */
    if (watVideoID) {
      var watVideoList = {};
      var watVideo= 'http://www.wat.tv/get/android5/' + watVideoID + '.mp4';
      watVideoList['Low Definition MP4'] = watVideo;

      /* Get Watch Sidebar */
      var watSidebarWindow = getMyElement ('', 'div', 'class', 'right', 0, false);

      /* Create Player */
      var watDefaultVideo = 'Low Definition MP4';
      player = {
	'playerSocket': watPlayerWindow,
	'playerWindow': myPlayerWindow,
	'videoList': watVideoList,
	'videoPlay': watDefaultVideo,
	'videoThumb': watVideoThumb,
	'playerWidth': 640,
	'playerHeight': 360,
	'playerWideWidth': 970,
	'playerWideHeight': 510,
	'sidebarWindow': watSidebarWindow,
	'sidebarMarginNormal': 5,
	'sidebarMarginWide': 600
      };
      feature['definition'] = false;
      feature['container'] = false;
      option['definition'] = 'LD';
      option['definitions'] = ['Low Definition'];
      option['containers'] = ['MP4'];
      createMyPlayer ();
    }
    else {
      showMyMessage ('!videos');
    }
  }

}

// =====TF1===== //

else if (page.url.indexOf('videos.tf1.fr') != -1) {

  /* Get Player Window */
  var tf1PlayerWindow = getMyElement ('', 'div', 'class', 'unique', 0, false);
  if (!tf1PlayerWindow) {
    //showMyMessage ('!player');
  }
  else {
    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '640px', height: '384px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    modifyMyElement (tf1PlayerWindow, 'div', '', true);
    styleMyElement (tf1PlayerWindow, {height: '100%', overflow: 'visible'});
    styleMyElement (tf1PlayerWindow.parentNode, {overflow: 'visible'});
    styleMyElement (tf1PlayerWindow.parentNode.parentNode, {overflow: 'visible'});
    styleMyElement (tf1PlayerWindow.parentNode.parentNode.parentNode, {overflow: 'visible'});
    appendMyElement (tf1PlayerWindow, myPlayerWindow);

    /* Get Video Thumbnail */
    var tf1VideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Video ID */
    var tf1VideoID = getMyContent (page.url, 'mediaId\\s+:\\s+(.*?),', false);
    if (!tf1VideoID) {
      tf1VideoID = getMyContent (page.url, 'embedframe/(.*?)"', false);
      tf1VideoID = (tf1VideoID) ? tf1VideoID.slice(-8) : null;
    }

    /* Get Videos */
    if (tf1VideoID) {
      var tf1VideoList = {};
      var tf1Video = 'http://www.wat.tv/get/android5/' + tf1VideoID + '.mp4';
      tf1VideoList['Low Definition MP4'] = tf1Video;

      /* Get Watch Sidebar */
      var tf1SidebarWindow = getMyElement ('', 'div', 'class', 'fright', 0, false);

      /* Create Player */
      var tf1DefaultVideo = 'Low Definition MP4';
      player = {
	'playerSocket': tf1PlayerWindow,
	'playerWindow': myPlayerWindow,
	'videoList': tf1VideoList,
	'videoPlay': tf1DefaultVideo,
	'videoThumb': tf1VideoThumb,
	'playerWidth': 640,
	'playerHeight': 384,
	'playerWideWidth': 960,
	'playerWideHeight': 564,
	'sidebarWindow': tf1SidebarWindow,
	'sidebarMarginNormal': 0,
	'sidebarMarginWide': 600
      };
      feature['definition'] = false;
      feature['container'] = false;
      option['definition'] = 'LD';
      option['definitions'] = ['Low Definition'];
      option['containers'] = ['MP4'];
      createMyPlayer ();
    }
    else {
      showMyMessage ('!videos');
    }
  }

}

// =====INA===== //

else if (page.url.indexOf('ina.fr/video') != -1 || page.url.indexOf('ina.fr/notice') != -1) {

  /* Get Player Window */
  var inaPlayerWindow = getMyElement ('', 'div', 'class', 'block-medias__show', 0, false);
  if (!inaPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '620px', height: '364px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    modifyMyElement (inaPlayerWindow, 'div', '', true);
    styleMyElement (inaPlayerWindow, {height: '100%'});
    appendMyElement (inaPlayerWindow, myPlayerWindow);

    /* Get Video Thumbnail */
    var inaVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);
    if (inaVideoThumb) inaVideoThumb = inaVideoThumb.replace (/300x225/, '620x349');

    /* Get Video ID */
    var inaVideoID = page.url.match (/ina.fr\/video\/(.*?)(\/|$)/);
    if (!inaVideoID) inaVideoID = page.url.match (/ina.fr\/notice\/voir\/(.*?)(\/|$)/);
    inaVideoID = (inaVideoID) ? inaVideoID[1] : null;

    /* Get Videos Content GM */
    var inaVideosContent = getMyContentGM ('http://player.ina.fr/notices/' + inaVideoID + '.mrss', 'TEXT', false);

    /* Get Videos */
    if (inaVideosContent) {
      var inaVideoList = {};
      var inaVideo = inaVideosContent.match (/media:content\s+url="(.*?)"/);
      inaVideo = (inaVideo) ? inaVideo[1] : null;

      if (inaVideo) {
	/* Get Watch Sidebar */
	var inaSidebarWindow = getMyElement ('', 'div', 'class', 'pub300-250', 0, false);
	var inaStackMedias = getMyElement ('', 'section', 'id', 'stackMedias', -1, false);
	if (inaStackMedias) styleMyElement (inaStackMedias, {height: '100%'});

	/* Create Player */
	var inaDefaultVideo = 'Low Definition MP4';
	inaVideoList[inaDefaultVideo] = inaVideo;
	player = {
	  'playerSocket': inaPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': inaVideoList,
	  'videoPlay': inaDefaultVideo,
	  'videoThumb': inaVideoThumb,
	  'playerWidth': 620,
	  'playerHeight': 364,
	  'playerWideWidth': 940,
	  'playerWideHeight': 552,
	  'sidebarWindow': inaSidebarWindow,
	  'sidebarMarginNormal': 0,
	  'sidebarMarginWide': 800
	};
	feature['definition'] = false;
	feature['container'] = false;
	option['definition'] = 'LD';
	option['definitions'] = ['Low Definition'];
	option['containers'] = ['MP4'];
	createMyPlayer ();
	/* Fix panel */
	styleMyElement(player['playerContent'], {marginTop: '4px'});
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

// =====NicoVideo===== //

else if (page.url.indexOf('nicovideo.jp/watch') != -1) {

  /* Get Player Window */
  //var nicoPlayerWindow = getMyElement ('', 'div', 'id', 'nicoplayerContainerInner', -1, false);
  var nicoPlayerWindow = getMyElement ('', 'div', 'id', 'nicoplayerContainer', -1, false);
  if (!nicoPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Block Flash Message */
    var nicoFlashMessage = getMyElement ('', 'div', 'class', 'notify_update_flash_player', 0, false);
    if (nicoFlashMessage && nicoFlashMessage.parentNode) removeMyElement(nicoFlashMessage.parentNode, nicoFlashMessage);

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '672px', height: '465px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    modifyMyElement (nicoPlayerWindow, 'div', '', true);
    styleMyElement (nicoPlayerWindow, {marginTop: '-120px', width: '672px', height: '465px', backgroundColor: '#F4F4F4'});
    appendMyElement (nicoPlayerWindow, myPlayerWindow);

    /* Get Video ID */
    var nicoVideoID = page.url.match(/\/watch\/(\w*\d+)/);
    nicoVideoID = (nicoVideoID) ? nicoVideoID[1] : null;

    /* Get Videos Content GM */
    var nicoVideo;
    if (nicoVideoID) nicoVideo = getMyContentGM ('http://flapi.nicovideo.jp/api/getflv/' + nicoVideoID, 'url=(.*?)(&|$)', true);

    /* Get Videos */
    if (nicoVideo) {
      var nicoVideoList = {};

      /* Get Video Thumbnail */
      var nicoVideoThumb = getMyContent (page.url, 'thumbImage&quot;:&quot;(.*?)&', true);

      /* Create Player */
      var nicoDefaultVideo = 'Low Definition MP4';
      nicoVideoList[nicoDefaultVideo] = nicoVideo;
      player = {
	'playerSocket': nicoPlayerWindow,
	'playerWindow': myPlayerWindow,
	'videoList': nicoVideoList,
	'videoPlay': nicoDefaultVideo,
	'videoThumb': nicoVideoThumb,
	'playerWidth': 672,
	'playerHeight': 465
      };
      feature['definition'] = false;
      feature['container'] = false;
      feature['widesize'] = false;
      option['definition'] = 'LD';
      option['definitions'] = ['Low Definition'];
      option['containers'] = ['MP4'];
      createMyPlayer ();
    }
    else {
      showMyMessage ('!videos');
    }
  }

}

// =====BuniTV===== //

else if (page.url.indexOf('buni.tv/video') != -1) {

  /* Get Player Window */
  var buniPlayerWindow = getMyElement ('', 'div', 'class', 'video-player', 0, false);
  if (!buniPlayerWindow) buniPlayerWindow = getMyElement ('', 'div', 'class', 'player', 0, false);
  if (!buniPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Buni+ */
    if (buniPlayerWindow.innerHTML.indexOf('This video is only available on Buni+') != -1) return;

    /* YouTube */
    var ytVideoID = buniPlayerWindow.innerHTML.match(/\/embed\/(.*?)(\?|&|$)/);
    if (!ytVideoID) ytVideoID = buniPlayerWindow.innerHTML.match(/\/watch\?v=(.*?)"/);
    ytVideoID = (ytVideoID) ? ytVideoID[1] : null;

    /* Vimeo */
    var viVideoID = buniPlayerWindow.innerHTML.match(/vimeo.com\/video\/(.*?)"/);
    if (!viVideoID) viVideoID = buniPlayerWindow.innerHTML.match(/\/vimeo.com\/(.*?)"/);
    viVideoID = (viVideoID) ? viVideoID[1] : null;

    /* Site Video */
    var buniVideo, buniVideoThumb;
    if (!ytVideoID && !viVideoID) {
      var buniVideoSrc = buniPlayerWindow.innerHTML.match(/src="(.*?)"/);
      buniVideoSrc = (buniVideoSrc) ? buniVideoSrc[1] : null;
      if (buniVideoSrc) {
	buniVideoSrc = buniVideoSrc.replace(/&amp;/, '&');
	buniVideoSrc = getMyContentGM (buniVideoSrc, 'playlist:\\s*"(http.*?)"', false);
	buniVideoSrc = buniVideoSrc.replace(/-.*?\?/, '.xml?').replace(/&amp;/, '&').replace(/players/, 'jw6');
	buniVideo = getMyContentGM (buniVideoSrc, 'source\\s+file="(http://v.*?)"', false);
	buniVideoThumb = 'http://content.bitsontherun.com/thumbs/' + buniVideoSrc.replace(/.*?players\//, '').replace(/\.xml.*$/, '') + '-720.jpg';
      }
    }

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '690px', height: '412px', backgroundColor: '#F4F4F4'});
    var buniPlayerWindowNew = createMyElement ('div', '', '', '', '');
    styleMyElement (buniPlayerWindowNew, {position: 'relative', width: '690px', height: '412px', backgroundColor: '#F4F4F4'});
    if (buniPlayerWindow.parentNode) replaceMyElement(buniPlayerWindow.parentNode, buniPlayerWindowNew, buniPlayerWindow);
    appendMyElement (buniPlayerWindowNew, myPlayerWindow);

    /* YouTube */
    if (ytVideoID) {
      var ytVideoLink = 'http://youtube.com/watch?v=' + ytVideoID;
      showMyMessage ('embed', ytVideoLink);
    }
    /* Vimeo */
    else if (viVideoID) {
      var viVideoLink = 'http://vimeo.com/' + viVideoID;
      showMyMessage ('embed', viVideoLink);
    }
    /* Site Video */
    else {
      if (buniVideo) {
	var buniVideoList = {};

	/* Create Player */
	var buniDefaultVideo = 'Low Definition MP4';
	buniVideoList[buniDefaultVideo] = buniVideo;
	player = {
	  'playerSocket': buniPlayerWindowNew,
	  'playerWindow': myPlayerWindow,
	  'videoList': buniVideoList,
	  'videoPlay': buniDefaultVideo,
	  'videoThumb': buniVideoThumb,
	  'playerWidth': 690,
	  'playerHeight': 412
	};
	feature['definition'] = false;
	feature['container'] = false;
	feature['widesize'] = false;
	option['definition'] = 'LD';
	option['definitions'] = ['Low Definition'];
	option['containers'] = ['MP4'];
	createMyPlayer ();
      }
      else {
	showMyMessage ('!videos');
      }
    }
  }

}

// =====Youku===== //

else if (page.url.indexOf('v.youku.com') != -1) {

  /* Decrypt Function */
  var ykNewEp, ykSid, ykToken;
  function generate_ep(vid, ep) {
    function trans_e(a, c) {
      var f = h = 0;
      var b = [];
      for (var i = 0; i < 256; i++) {
	b.push(i);
      }
      var result = '';
      while (h < 256) {
	f = (f + b[h] + a[h % a.length].charCodeAt(0)) % 256;
	var t = b[h];
	b[h] = b[f]
	b[f] = t;
	h += 1;
      }
      var q = f = h = 0;
      while (q < c.length) {
	h = (h + 1) % 256;
	f = (f + b[h]) % 256;
	var t = b[h];
	b[h] = b[f]
	b[f] = t;
	if (typeof c[q] === 'number') {
	  result += String.fromCharCode((c[q] ^ b[(b[h] + b[f]) % 256]).toString());
	}
	else {
	  result += String.fromCharCode((c[q].charCodeAt(0) ^ b[(b[h] + b[f]) % 256]).toString());
	}
	q += 1;
      }
      return result
    }
    var f_code_1 = 'becaf9be';
    var f_code_2 = 'bf7e5f01';
    var e_code = trans_e(f_code_1, window.atob(ep));
    var sid = e_code.split('_')[0];
    var token = e_code.split('_')[1];
    var new_ep = trans_e(f_code_2, sid + '_' + vid + '_' + token);
    ykNewEp = window.btoa(new_ep);
    ykSid = sid;
    ykToken = token;
  }

  /* Get Player Window */
  var ykPlayerWindow = getMyElement ('', 'div', 'id', 'player', -1, false);
  if (!ykPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '640px', height: '458px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    modifyMyElement (ykPlayerWindow, 'div', '', true);
    appendMyElement (ykPlayerWindow, myPlayerWindow);

    /* Get Video ID */
    var ykVideoID = page.url.match(/show\/id_(.*?)\./);
    ykVideoID = (ykVideoID) ? ykVideoID[1] : null;

    /* Get Videos Content */
    var ykVideosContent;
    if (ykVideoID) ykVideosContent = getMyContent ('http://v.youku.com/player/getPlayList/VideoIDS/' + ykVideoID + '/ctype/12/ev/1', 'TEXT', false);

    /* Get Videos */
    if (ykVideosContent) {
      var ykVideoFound = false;
      var ykVideoList = {};
      var ykDefaultVideo = 'HTTP Live Streaming M3U8';
      var ykVideo;
      var ykEp = ykVideosContent.match(/"ep":"(.*?)"/);
      ykEp = (ykEp) ? ykEp[1].replace(/\\/g, '') : null;
      if (ykEp) generate_ep(ykVideoID, ykEp);
      if (ykNewEp && ykSid && ykToken) {
	var ykVideoThumb = ykVideosContent.match(/"logo":"(.*?)"/);
	ykVideoThumb = (ykVideoThumb) ? ykVideoThumb[1].replace(/\\/g, '') : 'http://static.youku.com/index/img/header/yklogo.png';
	var ykOip = ykVideosContent.match(/"ip":(\d+)/);
	ykOip = (ykOip) ? ykOip[1] : null;
	var ykTs = (new Date).getTime().toString().substring(0,10);
	if (ykOip) {
	  ykVideo = 'http://pl.youku.com/playlist/m3u8?vid=' + ykVideoID + '&ts=' + ykTs +'&keyframe=1&type=mp4&ep=' + ykNewEp + '&oip=' + ykOip +'&ctype=12&ev=1&token=' + ykToken + '&sid=' + ykSid;
	  ykVideoList[ykDefaultVideo] = ykVideo;
	  ykVideoFound = true;
	}
      }

      if (ykVideoFound) {
	/* Create Player */
	player = {
	  'playerSocket': ykPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': ykVideoList,
	  'videoPlay': ykDefaultVideo,
	  'videoThumb': ykVideoThumb,
	  'playerWidth': 640,
	  'playerHeight': 458
	};
	feature['containers'] = false;
	feature['definitions'] = false;
	feature['widesize'] = false;
	option['containers'] = [];
	option['definitions'] = [];
	createMyPlayer ();
      }
      else  {
	showMyMessage ('!videos');
      }
    }
    else {
      showMyMessage ('!content');
    }
  }

}

// =====iQIYI===== //

else if (page.url.indexOf('iqiyi.com') != -1) {

  /* Get Player Window */
  var iqPlayerWindow = getMyElement ('', 'div', 'id', 'flashbox', -1, false);
  if (!iqPlayerWindow) {
    //showMyMessage ('!player');
  }
  else {
    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '854px', height: '518px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    modifyMyElement (iqPlayerWindow, 'div', '', true);
    appendMyElement (iqPlayerWindow, myPlayerWindow);

    /* Get Video Thumbnail */
    var iqVideoThumb = getMyContent (page.url, 'thumbImage&quot;:&quot;(.*?)&', true);
    if (!iqVideoThumb) iqVideoThumb = getMyContent (page.url, 'meta\\s+itemprop="image"\\s+content="(.*?)"', false);
    if (!iqVideoThumb) iqVideoThumb = getMyContent (page.url, 'meta\\s+itemprop="thumbnailUrl"\\s+content="(.*?)"', false);

    /* Get Video ID */
    var iqTVID = getMyContent(page.url, 'data-player-tvid="(.*?)"', false);
    var iqVideoID = getMyContent(page.url, 'data-player-videoid="(.*?)"', false);

    /* Get Videos Content */
    //var iqVideosContent = (iqTVID && iqVideoID) ? getMyContentGM('http://cache.video.qiyi.com/m/' + iqVideoID + '/', 'TEXT', false) : null;
    //var iqVideosContent = (iqTVID && iqVideoID) ? getMyContentGM('http://cache.video.qiyi.com/m/' +iqTVID + '/' + iqVideoID + '/', 'TEXT', false) : null;
    var iqVideosContent = (iqTVID && iqVideoID) ? getMyContentGM('http://cache.video.qiyi.com/vp/' +iqTVID + '/' + iqVideoID + '/', 'TEXT', false) : null;

    /* Get Videos */
    if (iqVideosContent) {
      var iqVideoList = {};
      var iqVideoFormats = {'"bid":96': 'Very Low Definition MP4', '"bid":1': 'Low Definition MP4', '"bid":2': 'Standard Definition MP4'};
      var iqVideoFound = false;
      var iqParser, iqVideo, iqVideoCode;
      for (var videoCode in iqVideoFormats) {
	iqParser = videoCode + '.*?"l":"(.*?)"'
	iqVideo = iqVideosContent.match(iqParser);
	if (iqVideo) {
	  if (!iqVideoFound) iqVideoFound = true;
	  iqVideoCode = iqVideoFormats[videoCode];
	  iqVideoList[iqVideoCode] = 'http://netcncoversea.inter.iqiyi.com/videos' + iqVideo[1];
	}
      }
      /*var iqMP4URL = iqVideosContent.match(/"mp4Url":"(.*?)"/);
      if (iqMP4URL) {
	var iqMP4 = getMyContentGM(iqMP4URL[1], '"l":"(.*?)"', false);
	if (iqMP4) {
	  if (!iqVideoFound) iqVideoFound = true;
	  iqVideoList['Standard Definition MP4'] = iqMP4;
	}
      }*/

      if (iqVideoFound) {
	/* Create Player */
	var iqDefaultVideo = 'Standard Definition MP4';
	player = {
	  'playerSocket': iqPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': iqVideoList,
	  'videoPlay': iqDefaultVideo,
	  'videoThumb': iqVideoThumb,
	  'playerWidth': 854,
	  'playerHeight': 518
	};
	feature['widesize'] = false;
	feature['containers'] = false;
	option['definitions'] = ['Very Low Definition', 'Low Definition', 'Standard Definition'];
	option['containers'] = ['MP4'];
	createMyPlayer ();
	styleMyElement(player['panelLogo'], {display: 'inline-block'});
	styleMyElement(player['buttonPlay'], {display: 'inline-block'});
	styleMyElement(player['buttonGet'], {display: 'inline-block'});
	styleMyElement(player['buttonAutoplay'], {display: 'inline-block'});
	styleMyElement(player['buttonDefinition'], {display: 'inline-block'});
	styleMyElement(player['buttonContainer'], {display: 'inline-block'});
	styleMyElement(player['buttonFullsize'], {display: 'inline-block'});
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

// =====JPopsuki===== //

else if (page.url.indexOf('jpopsuki.tv/video') != -1) {

    var player = page.doc.getElementById("flash");
    if(!player)
    {
        return;
    }
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: "\""+width+"px", height: "\""+height+"px", backgroundColor: '#F4F4F4', zIndex: '999999'});
    modifyMyElement (player, 'div', '', true);
    player = replaceMyElement (player.parentNode, myPlayerWindow, player);

    var jpopsukiSource = getMyContent(page.url, "TEXT", false);
    jpopsukiVideoURL = jpopsukiSource.match('src="(.*?\.mp4)"')[1];
    jpopsukiVideoURL = "http://" + page.doc.location.hostname + jpopsukiVideoURL;
    jpopsukiThumb = jpopsukiSource.match('poster="(.*?\.jpg)"')[1];
    jpopsukiThumb = "http://" + page.doc.location.hostname + jpopsukiThumb;

    var jpopsukiVideoList = {};
    var jpopsukiVideoFormats = {'1': 'Low Definition MP4'};
    var jpopsukiVideoFound = false;

    var width=720;
    var height=396;

    if (jpopsukiVideoURL) {
        jpopsukiVideoFound = true;
        jpopsukiVideoList[jpopsukiVideoFormats[1]] = jpopsukiVideoURL;
    }

    if (jpopsukiVideoFound) {
        /* Create Player */
        player = {
            'playerSocket': player,
            'playerWindow': myPlayerWindow,
            'videoList': jpopsukiVideoList,
            'videoPlay': jpopsukiVideoFormats[1],
            'videoThumb': jpopsukiThumb,
            'playerWidth': width,
            'playerHeight': height
            };
        feature['container'] = true;
        feature['widesize'] = false;
        feature['autoplay'] = true;
        feature['fullscreen'] = true;
        feature['definition'] = false;
        option['definition'] = 'LD';
        option['definitions'] = ['Low Definition'];
        option['container'] = 'MP4';
        option['containers'] = ['MP4', 'Auto'];
        createMyPlayer ();
    }

}

// =====VPlay===== //

else if (page.url.indexOf('vplay.ro/watch') != -1) {

  /* Get Player Window */
  var vpPlayerWindow = getMyElement ('', 'div', 'class', 'video_back', 0, false);
  if (!vpPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '980px', height: '573px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    modifyMyElement (vpPlayerWindow, 'div', '', true);
    appendMyElement (vpPlayerWindow, myPlayerWindow);

    /* Get Video Thumbnail */
    var vpVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Video ID */
    var vpVideoID = getMyContent (page.url, 'meta\\s+property="og:url"\\s+content=".*?vplay.ro/watch/(.*?)/"', false);

    /* Get Videos Content */
    var vpVideosContent;
    if (vpVideoID) {
      var vpGetURL = page.win.location.protocol + '//' + page.win.location.hostname + '/play/dinosaur.do';
      var vpGetParams = 'key=' + vpVideoID;
      var http = new XMLHttpRequest();
      http.open('POST', vpGetURL, false);
      http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      http.send(vpGetParams);
      vpVideosContent = http.responseText;
    }
    if (vpVideosContent) {
      var vpVideoList = {};
      var vpVideoFormats = {'nqURL': 'Standard Definition MP4', 'hdURL': 'High Definition MP4'};
      var vpVideoFound = false;
      var vpParser, vpVideo, vpVideoCode;
      for (var videoCode in vpVideoFormats) {
	vpParser = videoCode + '=(.*?)&';
	vpVideo = vpVideosContent.match(vpParser);
	if (vpVideo) {
	  if (!vpVideoFound) vpVideoFound = true;
	  vpVideoCode = vpVideoFormats[videoCode];
	  vpVideoList[vpVideoCode] = vpVideo[1];
	}
      }

      if (vpVideoFound) {
	/* Create Player */
	var vpDefaultVideo = 'Standard Definition MP4';
	player = {
	  'playerSocket': vpPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': vpVideoList,
	  'videoPlay': vpDefaultVideo,
	  'videoThumb': vpVideoThumb,
	  'playerWidth': 980,
	  'playerHeight': 573
	};
	feature['widesize'] = false;
	option['definitions'] = ['Standard Definition', 'High Definition'];
	option['containers'] = ['MP4'];
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

// =====VHD===== //

else if (page.url.indexOf('vhd.ro/video') != -1 || page.url.indexOf('vhd.ro/film') != -1) {

  var vhdEmbeds= getMyElement ('', 'div', 'class', 'tabpage', -1, false);
  for (i = 0; i < vhdEmbeds.length; i++) {
    var vhdEmbed = vhdEmbeds[i];
    var vhdSource = cleanMyContent(vhdEmbed.innerHTML, true);
    var vhdLink = vhdSource.match(/proxy.link=(.*?)&/);
    vhdLink = (vhdLink) ? vhdLink[1] : null;
    if (!vhdLink) {
      vhdLink = vhdSource.match(/src="(.*?)"/);
      vhdLink = (vhdLink) ? vhdLink[1] : null;
    }
    if (vhdLink) {
      if (vhdLink.indexOf('%26') != -1) vhdLink = vhdLink.replace(/%26/g, '&');
      vhdEmbed.innerHTML = '<a href="' + vhdLink + '" style="color:green;font-weight:bold;font-size:24px">' + vhdLink + '</a>';
    }
  }

}

// =====Trilulilu===== //

else if (page.url.indexOf('trilulilu.ro') != -1) {

  /* Check Page Type */
  var triPageType = getMyContent (page.url, 'meta\\s+property="og:type"\\s+content="(.*?)"', false);
  if (!triPageType || triPageType.indexOf('video') == -1) return;

  /* Get Player Window */
  var triPlayerWindow = getMyElement ('', 'div', 'class', 'player-av-wp', 0, false);
  if (!triPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '728px', height: '432px', backgroundColor: '#FFFFFF', zIndex: '99999'});
    modifyMyElement (triPlayerWindow, 'div', '', true);
    appendMyElement (triPlayerWindow, myPlayerWindow);

    /* Get Video Thumbnail */
    var triVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Videos Content */
    var triVideosContents = getMyContent (page.url, 'file:\\s*"(.*?)"', false);

    /* Get Videos Content */
    if (triVideosContents) {
      var triUser = triVideosContents.match(/username=(.*?)&/);
      triUser = (triUser) ? triUser[1] : null;
      var triHash = triVideosContents.match(/hash=(.*?)&/);
      triHash = (triHash) ? triHash[1] : null;
      var triServer = triVideosContents.match(/fs(\d+)/);
      triServer = (triServer) ? triServer[1] : null;
      var triFormatsURL = 'http://fs' + triServer + '.trilulilu.ro/' + triHash + '/video-formats';
      var triFormatsContent = getMyContentGM(triFormatsURL, 'TEXT', false);

      if (triUser && triHash && triServer && triFormatsContent) {
	var triVideoList = {};
	var triVideoFound = false;
	var triVideosFormats = {'flv-vp6': 'Low Definition FLV', 'mp4-360p': 'Low Definition MP4', 'mp4-720p': 'High Definition MP4'};
	var triFormatsMatcher = /<format>.*?<\/format>/g;
	var triFormats = triFormatsContent.match(triFormatsMatcher);
	var triVideo, triFormat, triVideoCode;
	var triDefaultVideo = 'Low Definition FLV';
	for (var f = 0; f < triFormats.length; f++) {
	  triFormat = triFormats[f].replace(/<format>/, '').replace(/<\/format>/, '');
	  triVideo = 'http://fs' + triServer + '.trilulilu.ro/stream.php?type=video&source=site&hash=' + triHash + '&username=' + triUser + '&key=ministhebest&format=' + triFormat + 'p&start=';
	  triVideoCode = triVideosFormats[triFormat];
	  if (triVideoCode) {
	    if (triVideoCode == 'Low Definition MP4') triDefaultVideo = triVideoCode;
	    if (!triVideoFound) triVideoFound = true;
	    triVideoList[triVideoCode] = triVideo;
	  }
	}

	if (triVideoFound) {
	  /* Create Player */
	  player = {
	    'playerSocket': triPlayerWindow,
	    'playerWindow': myPlayerWindow,
	    'videoList': triVideoList,
	    'videoPlay': triDefaultVideo,
	    'videoThumb': triVideoThumb,
	    'playerWidth': 728,
	    'playerHeight': 432
	  };
	  feature['widesize'] = false;
	  option['definitions'] = ['Low Definition', 'High Definition'];
	  option['containers'] = ['MP4', 'FLV', 'Any'];
	  createMyPlayer ();
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
    else {
      showMyMessage ('!content');
    }
  }

}

// =====Adevărul===== //

else if (page.url.indexOf('adevarul.ro') != -1) {

  /* Check Page Type */
  var adPageType = getMyContent (page.url, 'meta\\s+property="og:type"\\s+content="(.*?)"', false);
  if (!page.url.match(/adevarul.ro\/video-center\/$/)) {
    if (!adPageType || adPageType.indexOf('video') == -1) return;
  }

  /* Get Player Window */
  var adPlayerWindow = getMyElement ('', 'div', 'id', 'tab-video', -1, false);
  if (!adPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video Thumbnail */
    var adVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Videos Content */
    var adVideo;
    var adVideoEmbed = adPlayerWindow.innerHTML.match(/src="(.*?)"/);
    adVideoEmbed = (adVideoEmbed) ? adVideoEmbed[1] : null;
    if (adVideoEmbed) {
      adVideoManifest = getMyContent(adVideoEmbed, 'iframe\\s+src="(.*?)"', false);
      if (!adVideoThumb) adVideoThumb = getMyContent(adVideoEmbed, 'img\\s+src="(.*?)"', false);
      if (adVideoManifest) {
	adVideo = getMyContentGM(adVideoManifest, 'file\\s*:\\s*"(.*?)"', false);
      }
    }

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '980px', height: '576px', backgroundColor: '#FFFFFF', zIndex: '99999'});
    modifyMyElement (adPlayerWindow, 'div', '', true);
    appendMyElement (adPlayerWindow, myPlayerWindow);

    if (adVideo) {
      var adVideoList = {};
      var adDefaultVideo = 'Low Definition MP4';
      adVideoList[adDefaultVideo] = adVideo;
      player = {
	'playerSocket': adPlayerWindow,
	'playerWindow': myPlayerWindow,
	'videoList': adVideoList,
	'videoPlay': adDefaultVideo,
	'videoThumb': adVideoThumb,
	'playerWidth': 980,
	'playerHeight': 576
      };
      feature['definition'] = false;
      feature['container'] = false;
      feature['widesize'] = false;
      option['definitions'] = ['Low Definition'];
      option['containers'] = ['MP4', 'Any'];
      createMyPlayer ();
    }
    else {
      showMyMessage ('!videos');
    }

  }

}

// =====VeeHD===== //

else if (page.url.indexOf('veehd.com/video/') != -1) {

  /* Get Player Window */
  var veePlayerWindow = getMyElement ('', 'div', 'class', 'videoHolder', 0, false);
  if (!veePlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video Thumb */
    //var veeVideoThumb = getMyContent (page.url, 'img\\s+id="veehdpreview"\\s+src="(.*?)"', false);
    var veeVideoThumb;

    /* Get Videos Content */
    var veeVideosContent;
    var veeVideoId = getMyContent (page.url, 'videoid\\s*=\\s*"(.*?)"', false);
    if (veeVideoId) {
      veeVideoThumb = 'http://s3.amazonaws.com/img.veehd.com/' + veeVideoId + '_t1.jpg';
      var veeVideoSource = getMyContent(page.win.location.protocol + '//' + page.win.location.hostname + '/embed?v=' + veeVideoId, 'window.location\\s*=\\s*"(.*?)"', false);
      if (veeVideoSource) veeVideosContent = getMyContent(page.win.location.protocol + '//' + page.win.location.hostname + veeVideoSource, 'TEXT');
    }

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '980px', height: '560px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    modifyMyElement (veePlayerWindow, 'div', '', true);
    styleMyElement (veePlayerWindow, {minHeight: '560px'});
    appendMyElement (veePlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (veeVideosContent) {
      var veeVideoList = {};
      var veeVideoFound = false;
      var veeVideo, veeVideoContainer, veeVideoSize, veeVideoDefinition, veeDefaultVideo;
      veeVideo = veeVideosContent.match(/param\s+name="src"\s+value="(.*?)"/);
      veeVideo = (veeVideo) ? veeVideo[1] : null;
      if (veeVideo) veeVideoContainer = 'AVI';
      else {
	veeVideo = veeVideosContent.match(/"url":"(.*?)"/);
	veeVideo = (veeVideo) ? veeVideo[1] : null;
	veeVideoContainer = 'MP4';
      }
      veeVideoSize = getMyContent (page.url, 'resolution:.*?x(.*?)<', false);
      veeVideoDefinition = 'Low Definition';
      if (veeVideoSize > 400) veeVideoDefinition = 'Standard Definition';
      if (veeVideoSize > 700) veeVideoDefinition = 'High Definition';
      if (veeVideoSize > 1000) veeVideoDefinition = 'Full High Definition';
      veeDefaultVideo = veeVideoDefinition + ' ' + veeVideoContainer;
      if (veeVideo) {
	if (!veeVideoFound) veeVideoFound = true;
	veeVideo = cleanMyContent(veeVideo, true);
	veeVideoList[veeDefaultVideo] = veeVideo;
      }

      if (veeVideoFound) {
	/* Create Player */
	player = {'playerSocket': veePlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': veeVideoList, 'videoPlay': veeDefaultVideo, 'videoThumb': veeVideoThumb, 'playerWidth': 980, 'playerHeight': 560};
	feature['definition'] = false;
	feature['container'] = false;
	feature['widesize'] = false;
	option['definitions'] = [veeVideoDefinition];
	option['containers'] = ['MP4', 'AVI', 'Any'];
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

// =====SVTPlay===== //

else if (page.url.indexOf('svtplay.se/') != -1) {

  /* Get Player Window */
  var svtPlayerWindow = getMyElement ('', 'a', 'id', 'player', -1, false);
  if (!svtPlayerWindow) {
    //showMyMessage ('!player');
  }
  else {
    /* Get Video Thumb */
    var svtVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Videos Content */
    var svtVideosContent = getMyContent (page.url + '?output=json', 'TEXT', false);

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '988px', height: '580px', backgroundColor: '#F4F4F4', zIndex: '99999'});
    modifyMyElement (svtPlayerWindow, 'div', '', true);
    appendMyElement (svtPlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (svtVideosContent) {
      var svtVideoList = {};
      var svtVideoFound = false;
      var svtVideoPattern= /"url":".*?"/g;
      var svtVideoMatcher = svtVideosContent.match(svtVideoPattern);
      var svtVideoHLS, svtVideo;
      if (svtVideoMatcher && svtVideoMatcher[1]) {
	svtVideoFound = true;
	svtVideoHLS = svtVideoMatcher[1].match(/"url":"(.*?)"/);
	svtVideoHLS = (svtVideoHLS) ? svtVideoHLS[1] : null;
	svtVideoHLS = svtVideoHLS.replace(/\?.*$/, '');
	if (svtVideoHLS.indexOf(',900,') != -1) {
	  svtVideo = svtVideoHLS.replace(/master.m3u8/, 'index_0_av.m3u8');
	  svtVideoList['Low Definition MP4'] = svtVideo;
	}
	else if (svtVideoHLS.indexOf(',348,') != -1) {
	  svtVideo = svtVideoHLS.replace(/master.m3u8/, 'index_1_av.m3u8');
	  svtVideoList['Very Low Definition MP4'] = svtVideo;
	}
	else if (svtVideoHLS.indexOf(',1680,') != -1) {
	  svtVideo = svtVideoHLS.replace(/master.m3u8/, 'index_3_av.m3u8');
	  svtVideoList['Standard Definition MP4'] = svtVideo;
	}
	else if (svtVideoHLS.indexOf(',2800,') != -1) {
	  svtVideo = svtVideoHLS.replace(/master.m3u8/, 'index_4_av.m3u8');
	  svtVideoList['High Definition MP4'] = svtVideo;
	}
	else {
	  svtVideoFound = false;
	}
      }

      if (svtVideoFound) {
	/* Create Player */
	svtDefaultVideo = 'Low Definition MP4';
	player = {'playerSocket': svtPlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': svtVideoList, 'videoPlay': svtDefaultVideo, 'videoThumb': svtVideoThumb, 'playerWidth': 988, 'playerHeight': 580};
	feature['container'] = false;
	feature['widesize'] = false;
	option['definitions'] = ['Very Low Definition', 'Low Definition', 'Standard Definition', 'High Definition'];
	option['containers'] = ['MP4'];
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

// =====NRKTV===== //

else if (page.url.indexOf('nrk.no/') != -1) {

  /* Get Player Window */
  var nrkPlayerWindow = getMyElement ('', 'div', 'id', 'playerelement', -1, false);
  if (!nrkPlayerWindow) {
    //showMyMessage ('!player');
  }
  else {
    /* Get Video Thumb */
    var nrkVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Videos Content */
    var nrkVideosContent = getMyContent (page.url + '?foo', 'data-hls-media="(.*?master.m3u8)', false);

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '960px', height: '564px', backgroundColor: '#F4F4F4', zIndex: '9999999999'});
    var nrkPlayerWindowNew = createMyElement ('div', '', '', '', '');
    modifyMyElement (nrkPlayerWindow, 'div', '', true);
    styleMyElement (nrkPlayerWindowNew, {position: 'relative', width: '960px', height: '564px', backgroundColor: '#F4F4F4'});
    if (nrkPlayerWindow.parentNode) replaceMyElement(nrkPlayerWindow.parentNode, nrkPlayerWindowNew, nrkPlayerWindow);
    appendMyElement (nrkPlayerWindowNew, myPlayerWindow);

    /* Get Videos */
    if (nrkVideosContent) {
      var nrkVideoList = {};
      var nrkVideo;
      var nrkVideoFound;
      if (nrkVideosContent.indexOf(',316,') != -1) {
	nrkVideo = nrkVideosContent.replace(/master.m3u8/, 'index_1_av.m3u8');
	nrkVideoList['Very Low Definition MP4'] = nrkVideo;
	nrkVideoFound = true;
      }
      if (nrkVideosContent.indexOf(',563,') != -1) {
	nrkVideo = nrkVideosContent.replace(/master.m3u8/, 'index_2_av.m3u8');
	nrkVideoList['Low Definition MP4'] = nrkVideo;
	nrkVideoFound = true;
      }
      if (nrkVideosContent.indexOf(',1266,') != -1) {
	nrkVideo = nrkVideosContent.replace(/master.m3u8/, 'index_3_av.m3u8');
	nrkVideoList['Standard Definition MP4'] = nrkVideo;
	nrkVideoFound = true;
      }
      if (nrkVideosContent.indexOf(',2250,') != -1) {
	nrkVideo = nrkVideosContent.replace(/master.m3u8/, 'index_2_av.m3u8');
	nrkVideoList['High Definition MP4'] = nrkVideo;
	nrkVideoFound = true;
      }

      if (nrkVideoFound) {
	/* Create Player */
	nrkDefaultVideo = 'Low Definition MP4';
	player = {'playerSocket': nrkPlayerWindowNew, 'playerWindow': myPlayerWindow, 'videoList': nrkVideoList, 'videoPlay': nrkDefaultVideo, 'videoThumb': nrkVideoThumb, 'playerWidth': 960, 'playerHeight': 564};
	feature['container'] = false;
	feature['widesize'] = false;
	option['definitions'] = ['Very Low Definition', 'Low Definition', 'Standard Definition', 'High Definition'];
	option['containers'] = ['MP4'];
	createMyPlayer ();
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

// =====Euronews===== //

else if (page.url.indexOf('euronews.com/') != -1) {

  /* Get Player Window */
  var enPlayerWindow = getMyElement ('', 'div', 'class', 'videoWrapper', 0, false);
  if (!enPlayerWindow) {
    //showMyMessage ('!player');
  }
    else {
      /* Get Video Thumb */
      var enVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

      /* Get Video */
      var enVideo = getMyContent (page.url, 'file:\\s+"(.*?)"', false);

      /* My Player Window */
      var myPlayerWindow = createMyElement ('div', '', '', '', '');
      styleMyElement (myPlayerWindow, {position: 'relative', width: '600px', height: '360px', backgroundColor: '#F4F4F4'});
      modifyMyElement (enPlayerWindow, 'div', '', true);
      styleMyElement (enPlayerWindow, {height: '100%'});
      appendMyElement (enPlayerWindow, myPlayerWindow);

      /* Get Videos */
      if (enVideo) {
	var enVideoList = {};
	var enDefaultVideo = 'Low Definition MP4';
	if (enVideo.indexOf('.flv') != -1) enDefaultVideo = 'Low Definition FLV';
	enVideoList[enDefaultVideo] = enVideo;

	/* Create Player */
	player = {'playerSocket': enPlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': enVideoList, 'videoPlay': enDefaultVideo, 'videoThumb': enVideoThumb, 'playerWidth': 600, 'playerHeight': 360};
	feature['container'] = false;
	feature['definition'] = false;
	feature['widesize'] = false;
	option['definitions'] = ['Low Definition'];
	option['containers'] = ['MP4', 'FLV', 'Any'];
	createMyPlayer ();
      }
      else {
	showMyMessage ('!videos');
      }
    }

}

// =====iFeng===== //

else if (page.url.indexOf('ifeng.com/') != -1) {

  /* Get Player Window */
  var ifPlayerWindow = getMyElement ('', 'div', 'class', 'long_video', 0, false);
  if (!ifPlayerWindow) ifPlayerWindow = getMyElement ('', 'div', 'class', 'player_main', 0, false);
  var ifPlayerWidth = '1000';
  if (!ifPlayerWindow) {
    ifPlayerWindow = getMyElement ('', 'div', 'class', 'video', 0, false);
    ifPlayerWidth = '600';
  }
  if (!ifPlayerWindow) {
    //showMyMessage ('!player');
  }
  else {
    /* Get Video Thumb */
    var ifVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Video ID */
    var ifVideoIDP1, ifVideoIDP2;
    var ifVideoID  = getMyContent (page.url, '"id":\\s+"(.*?)"', false);
    if (!ifVideoID) ifVideoID  = getMyContent (page.url, '"vid":"(.*?)"', false);
    if (!ifVideoID) ifVideoID = window.location.hash.replace(/#/, '');
    if (ifVideoID) {
      ifVideoIDP1 = ifVideoID.substr(34,1);
      ifVideoIDP2 = ifVideoID.substr(34,2);
    }
    else {
      return;
    }
    var ifVideoPath = ifVideoIDP1 + '/' + ifVideoIDP2 + '/' + ifVideoID + '.xml';

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {width: ifPlayerWidth + 'px', height: '455px', backgroundColor: '#F4F4F4'});
    modifyMyElement (ifPlayerWindow, 'div', '', true);
    styleMyElement (ifPlayerWindow, {width: ifPlayerWidth + 'px', height: '455px', backgroundColor: '#F4F4F4'});
    appendMyElement (ifPlayerWindow, myPlayerWindow);

    /* Get Videos Content*/
    var ifVideo;
    if (window.location.hostname != 'v.ifeng.com') ifVideo = getMyContentGM ('http://v.ifeng.com/video_info_new/' + ifVideoPath, 'VideoPlayUrl="(.*?)"', false);
    else ifVideo = getMyContent ('http://v.ifeng.com/video_info_new/' + ifVideoPath, 'VideoPlayUrl="(.*?)"', false);

    /* Get Videos */
    if (ifVideo) {
      var ifVideoList = {};
      var ifDefaultVideo = 'Standard Definition MP4';
      ifVideoList[ifDefaultVideo] = ifVideo;

      /* Create Player */
      player = {'playerSocket': ifPlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': ifVideoList, 'videoPlay': ifDefaultVideo, 'videoThumb': ifVideoThumb, 'playerWidth': ifPlayerWidth, 'playerHeight': 455};
      feature['container'] = false;
      feature['definition'] = false;
      feature['widesize'] = false;
      option['definitions'] = ['Low Definition'];
      option['containers'] = ['MP4', 'FLV', 'Any'];
      createMyPlayer ();
    }
    else {
      showMyMessage ('!videos');
    }
  }

}

// =====56===== //

else if (page.url.indexOf('56.com/') != -1) {

  /* Get Player Window */
  var fsPlayerWindow = getMyElement ('', 'div', 'id', 'player', -1, false);
  if (!fsPlayerWindow) {
    //showMyMessage ('!player');
  }
  else {
    /* Get Video ID */
    var fsVideoID, fsAlbumID;
    if (/v_([a-zA-Z0-9]+)\.html/.test(window.location.pathname)) fsVideoID = RegExp.$1;
    else if (/play_album-aid-(\d+)_vid-([a-zA-Z0-9]+)(_o-\d)?\.html/.test(window.location.pathname)) {
      fsAlbumID = RegExp.$1;
      fsVideoID = RegExp.$2;
    }

    /* Get Videos Content */
    var fsVideosContent = getMyContentGM ('http://vxml.56.com/json/' + fsVideoID + '/', 'TEXT', false);

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '600px', height: '500px', backgroundColor: '#F4F4F4'});
    modifyMyElement (fsPlayerWindow, 'div', '', true);
    styleMyElement (fsPlayerWindow, {height: '100%'});
    appendMyElement (fsPlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (fsVideosContent) {
      var fsVideoList = {};
      var fsVideoFound = false;
      var fsVideoFormats = {'normal': 'Very Low Definition FLV', 'clear': 'Low Definition FLV', 'super': 'Standard Definition FLV'};
      var fsVideoParser, fsVideo, fsVideoCode;
      for (var videoCode in fsVideoFormats) {
	fsVideoParser = '"url":"([^"]*?)","type":"' + videoCode + '"';
	fsVideo = fsVideosContent.match(fsVideoParser);
	if (fsVideo) {
	  if (!fsVideoFound) fsVideoFound = true;
	  fsVideoCode = fsVideoFormats[videoCode];
	  fsVideoList[fsVideoCode] = fsVideo[1];
	}
      }
      var fsHTML5Video = 'http://vxml.56.com/html5/' + fsVideoID + '/';
      if (fsVideoList['Standard Definition FLV']) fsVideoList['Standard Definition MP4'] = fsHTML5Video;
      else if (fsVideoList['Low Definition FLV']) fsVideoList['Low Definition MP4'] = fsHTML5Video;
      else fsVideoList['Very Low Definition MP4'] = fsHTML5Video;
      var fsVideoThumb = fsVideosContent.match(/"bimg":"(.*?)"/);
      fsVideoThumb = (fsVideoThumb) ? fsVideoThumb[1] : null;

      if (fsVideoFound) {
	/* Create Player */
	var fsDefaultVideo = 'Very Low Definition FLV';
	player = {'playerSocket': fsPlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': fsVideoList, 'videoPlay': fsDefaultVideo, 'videoThumb': fsVideoThumb, 'playerWidth': 600, 'playerHeight': 500};
	feature['widesize'] = false;
	option['definitions'] = ['Very Low Definition', 'Low Definition', 'Standard Definition'];
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

// =====TeleMadrid===== //

else if (page.url.indexOf('telemadrid.es/') != -1) {

  /* Get Player Window */
  var tmPlayerWindow = getMyElement ('', 'div', 'class', 'field-items', 0, false);
  if (!tmPlayerWindow) {
    //showMyMessage ('!player');
  }
  else {
    /* Get Videos Content URL */
    var tmFlashID, tmPlayerID, tmPublisherID, tmIsVid, tmIsUI, tmDynamicStreaming, tmVideoPlayer;
    var tmVideoObject = getMyContent (page.url, '<object(.*?)/object>', false);
    if (tmVideoObject) {
      tmFlashID = tmVideoObject.match(/\s+id="(.*?)"/);
      tmFlashID = (tmFlashID) ? tmFlashID[1] : null;
      tmPlayerID = tmVideoObject.match(/name="playerID"\s+value="(.*?)"/);
      tmPlayerID = (tmPlayerID) ? tmPlayerID[1] : null;
      tmPublisherID = tmVideoObject.match(/name="publisherID"\s+value="(.*?)"/);
      tmPublisherID = (tmPublisherID) ? tmPublisherID[1] : null;
      tmIsVid = tmVideoObject.match(/name="isVid"\s+value="(.*?)"/);
      tmIsVid = (tmIsVid) ? tmIsVid[1] : null;
      tmIsUI = tmVideoObject.match(/name="isUI"\s+value="(.*?)"/);
      tmIsUI = (tmIsUI) ? tmIsUI[1] : null;
      tmDynamicStreaming = tmVideoObject.match(/name="dynamicStreaming"\s+value="(.*?)"/);
      tmDynamicStreaming = (tmDynamicStreaming) ? tmDynamicStreaming[1] : null;
      tmVideoPlayer = tmVideoObject.match(/name="@videoPlayer"\s+value="(.*?)"/);
      tmVideoPlayer = (tmVideoPlayer) ? tmVideoPlayer[1] : null;
    }

    /* Get Videos Content */
    var tmVideosContentURL, tmVideosContent;
    if (tmFlashID && tmPlayerID && tmPublisherID && tmIsVid && tmIsUI && tmDynamicStreaming && tmVideoPlayer) {
      tmVideosContentURL = 'http://c.brightcove.com/services/viewer/htmlFederated?flashID=' + tmFlashID +'&playerID=' + tmPlayerID + '&publisherID=' + tmPublisherID + '&isVid=' + tmIsVid + '&isUI=' + tmIsUI + '&dynamicStreaming=' + tmDynamicStreaming + '&@videoPlayer=' + tmVideoPlayer;
      tmVideosContent = getMyContentGM(tmVideosContentURL, 'TEXT', false);
    }
    else return;

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '630px', height: '370px', backgroundColor: '#F4F4F4'});
    modifyMyElement (tmPlayerWindow, 'div', '', true);
    styleMyElement (tmPlayerWindow, {height: '100%'});
    appendMyElement (tmPlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (tmVideosContent) {
      var tmVideoThumb = tmVideosContent.match(/"thumbnailURL":"(.*?)"/);
      tmVideoThumb = (tmVideoThumb) ? cleanMyContent(tmVideoThumb[1], false) : null;
      var tmVideos = tmVideosContent.match(/"renditions":\[\{(.*?)\}\]/);
      tmVideos = (tmVideos) ? tmVideos[1] : null;
      var tmVideo;
      var tmVideoList = {};
      if (tmVideos) {
	var tmVideo = tmVideos.match(/"defaultURL":"(.*?)"/);
	tmVideo = (tmVideo) ? tmVideo[1] : null;
      }

      if (tmVideo) {
	/* Create Player */
	var tmDefaultVideo = 'Low Definition MP4';
	tmVideoList[tmDefaultVideo] = cleanMyContent(tmVideo, false);
	player = {'playerSocket': tmPlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': tmVideoList, 'videoPlay': tmDefaultVideo, 'videoThumb': tmVideoThumb, 'playerWidth': 630, 'playerHeight': 370};
	feature['container'] = false;
	feature['definition'] = false;
	feature['widesize'] = false;
	option['definition'] = 'LD';
	option['container'] = 'MP4';
	option['definitions'] = ['Low Definition'];
	option['containers'] = ['MP4'];
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

// =====VK-Embeded===== //

else if (page.url.indexOf('vk.com/video_ext') != -1) {

  /* Get Player Window */
  //var vkPlayerWindow = getMyElement ('', 'div', 'id', 'playerWrap', -1, false);
  var vkPlayerWindow = page.body;
  if (!vkPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Videos Content */
    var vkVideosContent = getMyContent(page.url, '"flashvars"\\s+value="(.*?)"', false);

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '640px', height: '380px', backgroundColor: '#F4F4F4', margin: '0px auto'});
    modifyMyElement (vkPlayerWindow, 'div', '', true);
    styleMyElement (vkPlayerWindow, {backgroundColor: '#000000'});
    appendMyElement (vkPlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (vkVideosContent) {
      var vkVideoList = {};
      var vkVideoFound = false;
      var vkVideoFormats = {'url240': 'Very Low Definition MP4', 'url360': 'Low Definition MP4', 'url480': 'Standard Definition MP4', 'url720': 'High Definition MP4'};
      var vkVideoParser, vkVideo, vkVideoCode;
      for (var videoCode in vkVideoFormats) {
	vkVideoParser = videoCode + '=(.*?)&amp';
	vkVideo = vkVideosContent.match(vkVideoParser);
	if (vkVideo) {
	  if (!vkVideoFound) vkVideoFound = true;
	  vkVideoCode = vkVideoFormats[videoCode];
	  vkVideoList[vkVideoCode] = vkVideo[1];
	}
      }
      var vkVideoThumb = vkVideosContent.match(/thumb=(.*?)&amp;/);
      vkVideoThumb = (vkVideoThumb) ? vkVideoThumb[1] : null;

      if (vkVideoFound) {
	/* Create Player */
	var vkDefaultVideo = 'Very Low Definition MP4';
	player = {'playerSocket': vkPlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': vkVideoList, 'videoPlay': vkDefaultVideo, 'videoThumb': vkVideoThumb, 'playerWidth': 640, 'playerHeight': 380};
	feature['container'] = false;
	feature['widesize'] = false;
	option['definitions'] = ['Very Low Definition', 'Low Definition', 'Standard Definition', 'High Definition'];
	option['containers'] = ['MP4'];
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

// =====VK-Site===== //

else if (page.url.indexOf('vk.com/video') != -1) {

  page.win.setInterval(function() {
    var nurl = page.win.location.href;
    if (page.url != nurl) page.win.location.href = nurl;
  }, 500);

  /* Video Page */
  if (!page.url.match(/video\d+_\d+/)) return;

  /* Get Player Window */
  var vkPlayerWindow = page.body;
  if (!vkPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video ID */
    var vkVideoID = page.url.match(/video(\d+_\d+)/);
    vkVideoID = (vkVideoID) ? vkVideoID[1] : null;

    /* Get Videos Content */
    var vkVideosContent = getMyContent(page.win.location.protocol + '//' + page.win.location.hostname + '/al_video.php?act=show&al=1&video=' + vkVideoID, 'TEXT', false);

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '640px', height: '380px', backgroundColor: '#F4F4F4', margin: '0px auto'});
    modifyMyElement (vkPlayerWindow, 'div', '', true);
    styleMyElement (vkPlayerWindow, {backgroundColor: '#000000'});
    appendMyElement (vkPlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (vkVideosContent) {
      var vkVideoList = {};
      var vkVideoFound = false;
      var vkVideoFormats = {'url240': 'Very Low Definition MP4', 'url360': 'Low Definition MP4', 'url480': 'Standard Definition MP4', 'url720': 'High Definition MP4'};
      var vkVideoParser, vkVideo, vkVideoCode;
      for (var videoCode in vkVideoFormats) {
	vkVideoParser = '"' + videoCode + '":"(.*?)"';
	vkVideo = vkVideosContent.match(vkVideoParser);
	if (vkVideo) {
	  if (!vkVideoFound) vkVideoFound = true;
	  vkVideoCode = vkVideoFormats[videoCode];
	  vkVideoList[vkVideoCode] = cleanMyContent(vkVideo[1], false);
	}
      }
      var vkVideoThumb = vkVideosContent.match(/"jpg":"(.*?)"/);
      vkVideoThumb = (vkVideoThumb) ? cleanMyContent(vkVideoThumb[1], false) : null;

      if (vkVideoFound) {
	/* Create Player */
	var vkDefaultVideo = 'Very Low Definition MP4';
	player = {'playerSocket': vkPlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': vkVideoList, 'videoPlay': vkDefaultVideo, 'videoThumb': vkVideoThumb, 'playerWidth': 640, 'playerHeight': 380};
	feature['container'] = false;
	feature['widesize'] = false;
	option['definitions'] = ['Very Low Definition', 'Low Definition', 'Standard Definition', 'High Definition'];
	option['containers'] = ['MP4'];
	createMyPlayer ();
      }
      else {
	var ytVideoId = vkVideosContent.match (/youtube.com\/watch\?v=(.*?)("|&)/);
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
    var vkBackURL = page.win.location.protocol + '//' + page.win.location.hostname + '/videos' + vkVideoID.replace(/_.*$/, '');
    var vkBackLink = '<a href="' + vkBackURL + '">&lt;&lt;&lt; Return to the videos list!</a>';
    var myBackLink = createMyElement ('div', vkBackLink, '', '', '');
    styleMyElement (myBackLink, {marginTop: '30px', marginLeft: '40%', fontSize: '24px'});
    appendMyElement (vkPlayerWindow, myBackLink);
  }

}

// =====TwitchTV===== //

else if (page.url.indexOf('twitch.tv') != -1) {

  page.win.setInterval(function() {
    var nurl = page.win.location.href;
    if (page.url != nurl) page.win.location.href = nurl;
  }, 500);

  function Twitch() {
    /* Get Video Thumb */
    var twVideoThumb = getMyContent (page.url, 'content=\'(http://static-cdn.jtvnw.net/jtv.thumbs.*?)\'', false);
    if (!twVideoThumb) twVideoThumb = getMyContent (page.url, 'content=\'(http://static-cdn.jtvnw.net/jtv_user_pictures.*?)\'', false);

    /* Video ID */
    var twVideoType, twChannel, twVideoId;
    twVideoId = page.url.match(/\/(v|c)\/(\d+)/);
    twVideoId = (twVideoId) ? twVideoId[2] : null;
    if (twVideoId) {
      twVideoType = 'v';
    }
    else {
      var twChannel = getMyContent(page.url, 'TwitchPlayer.swf\\?channel=(.*?)&', false);
      if (twChannel) {
	twVideoType = 'l';
      }
    }

    /* Player Size */
    var twPlayerWidth, twPlayerHeight;
    var twScreenWidth, twScreenHeight;
    var twLWindowWidth, twRWindowWidth;
    var twLWindowStatus, twRWindowStatus;
    var twLREvent = 'resize';
    var twLWindow = getMyElement ('', 'div', 'id', 'left_col', -1, false);
    if (twLWindow) {
      if (twLWindow.className.indexOf('closed') != -1) twLWindowStatus = 'closed';
      else twLWindowStatus = 'open';
    }
    var twRWindow = getMyElement ('', 'div', 'id', 'right_col', -1, false);
    if (twRWindow) {
      if (twRWindow.className.indexOf('closed') != -1) twRWindowStatus = 'closed';
      else twRWindowStatus = 'open';
    }
    function twSizes() {
      twScreenWidth = page.win.innerWidth || page.doc.documentElement.clientWidth;
      twScreenHeight = page.win.innerHeight || page.doc.documentElement.clientHeight;
      if (twLWindow) {
	if (twLREvent == 'resize') {
	  if (twLWindowStatus == 'closed') {
	    twLWindowWidth = 0;
	  }
	  else {
	    twLWindowWidth = 240;
	  }
	  if (twRWindowStatus == 'closed') {
	    twRWindowWidth = 0;
	  }
	  else {
	    twRWindowWidth = 340;
	  }
	}
	else if (twLREvent == 'left') {
	  if (twLWindowStatus == 'closed') {
	    twLWindowWidth = 240;
	    twLWindowStatus = 'open';
	  }
	  else {
	    twLWindowWidth = 0;
	    twLWindowStatus = 'closed';
	  }
	}
	else if (twLREvent == 'right') {
	  if (twRWindowStatus == 'closed') {
	    twRWindowWidth = 340;
	    twRWindowStatus = 'open';
	  }
	  else {
	    twRWindowWidth = 0;
	    twRWindowStatus = 'closed';
	  }
	}
      }
      twPlayerWidth = twScreenWidth - (110 + twLWindowWidth + twRWindowWidth);
      twPlayerHeight = Math.round(twPlayerWidth / 1.77);
    }

    /* Parse Videos */
    function twHLS() {
      if (twHLSStep == 1) {
	var twHLSToken = twVideosContent.match(/"token":"(.*?)","sig"/);
	twHLSToken = (twHLSToken) ? escape(twHLSToken[1].replace(/\\/g, '')) : null;
	var twHLSSig = twVideosContent.match(/"sig":"(.*?)"/);
	twHLSSig = (twHLSSig) ? twHLSSig[1] : null;
	if (twHLSToken && twHLSSig) {
	  if (twVideoType == 'v') twVideoSource = 'http://usher.twitch.tv/vod/' + twVideoId + '?nauth=' + twHLSToken + '&nauthsig=' + twHLSSig;
	  else twVideoSource = 'http://usher.twitch.tv/api/channel/hls/' + twChannel + '.m3u8?token=' + twHLSToken + '&sig=' + twHLSSig + '&allow_source=true';
	  twVideoList['Any Definition MP4'] = twVideoSource;
	  twHLSStep = 2;
	  twSource();
	}
	else {
	  showMyMessage ('!videos');
	}
      }
      else if (twHLSStep == 2) {
	var twHLSVideo;
	var twHLSVideos = twVideosContent.split('\n');
	for (var i = 0; i < twHLSVideos.length; i++) {
	  twHLSVideo = twHLSVideos[i];
	  if (twHLSVideo.indexOf('/mobile/') != -1) twVideoList['Very Low Definition MP4'] = twHLSVideo;
	  if (twHLSVideo.indexOf('/low/') != -1) twVideoList['Low Definition MP4'] = twHLSVideo;
	  if (twHLSVideo.indexOf('/medium/') != -1) twVideoList['Standard Definition MP4'] = twHLSVideo;
	  if (twHLSVideo.indexOf('/high/') != -1) twVideoList['High Definition MP4'] = twHLSVideo;
	  if (twHLSVideo.indexOf('/chunked/') != -1) twVideoList['Full High Definition MP4'] = twHLSVideo;
	}
	/* Create Player */
	var twDefaultVideo = 'Any Definition MP4';
	player = {'playerSocket': twPlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': twVideoList, 'videoPlay': twDefaultVideo, 'videoThumb': twVideoThumb, 'playerWidth': twPlayerWidth, 'playerHeight': twPlayerHeight};
	feature['container'] = false;
	feature['widesize'] = false;
	option['definitions'] = ['Full High Definition', 'High Definition', 'Standard Definition', 'Low Definition', 'Very Low Definition'];
	option['containers'] = ['MP4'];
	createMyPlayer ();
	page.win.setInterval(function() {
	  if (player['isPlaying']) {
	    var objEls = document.getElementsByTagName('object');
	    if (objEls.length > 0) {
	      var objEl = objEls[0];
	      if (objEl) {
		if (objEl.style.minHeight != player['contentHeight'] + 'px') objEl.style.minHeight = player['contentHeight'] + 'px';
	      }
	    }
	  }
	}, 1000);
      }
    }
    function twSource() {
      try {
	twVideosContent = getMyContent(twVideoSource, 'TEXT', false);
	if (twVideosContent) twHLS(twHLSStep);
	else showMyMessage ('!content');
      }
      catch (e) {
	try {
	  GM_xmlhttpRequest({
	    method: 'GET',
	    url: twVideoSource,
	    onload: function(response) {
	      if (response.readyState === 4 && response.status === 200) {
		twVideosContent = response.responseText;
	      }
	      if (twVideosContent) twHLS(twHLSStep);
	      else showMyMessage ('!content');
	    }
	  });
	}
	catch (e) {
	  showMyMessage ('!content');
	}
      }
    }

    /* Get Videos */
    var twVideosContent;
    var twVideoList = {};
    var twVideoSource;
    var twHLSStep = 1;
    if (twVideoType) {
      /* Get Sizes */
      twSizes();

      /* My Player Window */
      var myPlayerWindow = createMyElement ('div', '', '', '', '');
      styleMyElement (myPlayerWindow, {position: 'relative', width: twPlayerWidth + 'px', height: twPlayerHeight + 'px', backgroundColor: '#F4F4F4', margin: '0px auto'});
      modifyMyElement (twPlayerWindow, 'div', '', true);
      styleMyElement (twPlayerWindow, {minHeight: twPlayerHeight + 'px', backgroundColor: '#FFFFFF'});
      appendMyElement (twPlayerWindow, myPlayerWindow);

      /* Update Sizes */
      page.win.addEventListener('resize', function() {
	twLREvent = 'resize';
	twSizes();
	player['playerWidth'] = twPlayerWidth;
	player['playerHeight'] = twPlayerHeight;
	styleMyElement(player['playerSocket'], {minHeight: player['playerHeight'] + 'px'});
	resizeMyPlayer('widesize');
      }, false);
      var twLButton = getMyElement ('', 'div', 'id', 'left_close', -1, false);
      if (twLButton) {
	twLButton.addEventListener('click', function() {
	  twLREvent = 'left';
	  twSizes();
	  player['playerWidth'] = twPlayerWidth;
	  player['playerHeight'] = twPlayerHeight;
	  styleMyElement(player['playerSocket'], {minHeight: player['playerHeight'] + 'px'});
	  resizeMyPlayer('widesize');
	}, false);
      }
      var twRButton = getMyElement ('', 'div', 'id', 'right_close', -1, false);
      if (twRButton) {
	twRButton.addEventListener('click', function() {
	  twLREvent = 'right';
	  twSizes();
	  player['playerWidth'] = twPlayerWidth;
	  player['playerHeight'] = twPlayerHeight;
	  styleMyElement(player['playerSocket'], {minHeight: player['playerHeight'] + 'px'});
	  resizeMyPlayer('widesize');
	}, false);
      }

      /* Video Sources */
      if (twVideoType == 'l') {
	twVideoSource = 'http://api.twitch.tv/api/channels/' + twChannel + '/access_token';
      }
      else {
	twVideoSource = 'http://api.twitch.tv/api/vods/' + twVideoId + '/access_token';
      }
      twSource();
    }
  }
  var twPlayerWindow = getMyElement ('', 'div', 'class', 'js-player-container', 0, false);
  if (twPlayerWindow) {
    Twitch();
  }
  else {
    var twPlayerWaitCount = 5;
    function twPlayerWaitFunc() {
      twPlayerWindow = getMyElement ('', 'div', 'class', 'js-player', 0, false);
      if (twPlayerWindow) {
	page.win.clearInterval(twPlayerWaitInterval);
	Twitch();
      }
      twPlayerWaitCount--;
      if (twPlayerWaitCount == 0) {
	page.win.clearInterval(twPlayerWaitInterval);
      }
    }
    var twPlayerWaitInterval = page.win.setInterval(twPlayerWaitFunc, 500);
  }
}

// =====RedMediaTV===== //

else if (page.url.indexOf('redmediatv.ru/video.php?id=') != -1) {

  /* Get Player Window */
  var rmPlayerWindow = getMyElement ('', 'div', 'id', 'playerdiv_wrapper', -1, false);
  if (!rmPlayerWindow) rmPlayerWindow = getMyElement ('', 'div', 'id', 'playerdiv', -1, false);
  if (!rmPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video */
    var rmVideo = getMyContent(page.url, '"file":\\s*"(.*?)"', false);

    /* Get Video Thumb */
    var rmVideoThumb = getMyContent(page.url, '"image":\\s*"(.*?)"', false);

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '640px', height: '502px', backgroundColor: '#F4F4F4'});
    modifyMyElement (rmPlayerWindow, 'div', '', true);
    rmPlayerWindow.addEventListener('click', function(e){e.stopPropagation();e.preventDefault();}, false);
    styleMyElement (rmPlayerWindow, {backgroundColor: '#FFFFFF'});
    appendMyElement (rmPlayerWindow, myPlayerWindow);

    if (rmVideo) {
      /* Create Player */
      var rmVideoList = {};
      var rmDefaultVideo = 'Low Definition MP4';
      rmVideoList[rmDefaultVideo] = rmVideo;
      player = {'playerSocket': rmPlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': rmVideoList, 'videoPlay': rmDefaultVideo, 'videoThumb': rmVideoThumb, 'playerWidth': 640, 'playerHeight': 502};
      feature['container'] = false;
      feature['definition'] = false;
      feature['widesize'] = false;
      option['definition'] = 'LD';
      option['container'] = 'MP4';
      option['definitions'] = ['Low Definition'];
      option['containers'] = ['MP4'];
      createMyPlayer ();
    }
    else {
      showMyMessage ('!videos');
    }
  }

}

// =====RussiaToday===== //

else if (page.url.indexOf('rt.com/filmy/') != -1 || page.url.indexOf('rt.com/films/') != -1) {

  /* Get Player Window */
  var rtPlayerWindow = getMyElement ('', 'div', 'class', 'videoholder', 0, false);
  if (!rtPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Fixes */
    var rtCoverImage = getMyElement ('', 'div', 'class', 'cover_image_a', 0, false);
    if (rtCoverImage) {
      if(rtCoverImage.parentNode) removeMyElement(rtCoverImage.parentNode, rtCoverImage);
    }

    /* Get Video Thumb */
    var rtVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Videos Content */
    var rtVideosContent = getMyContent(page.url, 'mega_playlist\\s*=\\s*\\{([\\S\\s]*?)\\};', false);

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '964px', height: '540px', backgroundColor: '#F4F4F4'});
    var rtPlayerWindowNew = createMyElement ('div', '', '', '', '');
    styleMyElement (rtPlayerWindowNew, {position: 'relative', width: '964px', height: '540px', backgroundColor: '#F4F4F4'});
    if (rtPlayerWindow.parentNode) replaceMyElement(rtPlayerWindow.parentNode, rtPlayerWindowNew, rtPlayerWindow);
    styleMyElement (rtPlayerWindowNew, {marginTop: '50px'});
    appendMyElement (rtPlayerWindowNew, myPlayerWindow);

    /* Get Videos */
    if (rtVideosContent) {
      var rtVideoList = {};
      var rtVideoFound = false;
      var rtLowVideoContent = rtVideosContent.match(/'Low':\s*([\S\s]*?)'Med'/);
      rtLowVideoContent = (rtLowVideoContent) ? rtLowVideoContent[1] : null;
      if (rtLowVideoContent) {
	var rtLowVideos = rtLowVideoContent.split('filesize');
	if (rtLowVideos.length > 2) {
	  for (i = 0; i < rtLowVideos.length; i++) {
	    var rtLowVideo = rtLowVideos[i].match(/file:\s*'(.*?)'.replace/);
	    rtLowVideo = (rtLowVideo) ? rtLowVideo[1] : null;
	    if (rtLowVideo) {
	      if (!rtVideoFound) rtVideoFound = true;
	      rtLowVideo = rtLowVideo.replace(/\'/g, '').replace(/\s/g, '').replace('+', '');
	      rtLowVideo = page.win.location.protocol + '//' + page.win.location.hostname + rtLowVideo;
	      rtLowVideo = rtLowVideo.replace(/\.mp4/, '-l.mp4');
	      rtVideoList['Low Definition MP4 Part ' + (i + 1)] = rtLowVideo;
	    }
	  }
	}
	else {
	  var rtLowVideo = rtLowVideos[0].match(/file:\s*'(.*?)'.replace/);
	  rtLowVideo = (rtLowVideo) ? rtLowVideo[1] : null;
	  if (rtLowVideo) {
	    if (!rtVideoFound) rtVideoFound = true;
	    rtLowVideo = rtLowVideo.replace(/\'/g, '').replace(/\s/g, '').replace('+', '');
	    rtLowVideo = page.win.location.protocol + '//' + page.win.location.hostname + rtLowVideo;
	    rtLowVideo = rtLowVideo.replace(/\.mp4/, '-l.mp4');
	    rtVideoList['Low Definition MP4'] = rtLowVideo;
	  }
	}
      }
      var rtMedVideoContent = rtVideosContent.match(/'Med':\s*([\S\s]*?)'High'/);
      rtMedVideoContent = (rtMedVideoContent) ? rtMedVideoContent[1] : null;
      if (rtMedVideoContent) {
	var rtMedVideos = rtLowVideoContent.split('filesize');
	if (rtMedVideos.length > 2) {
	  for (i = 0; i < rtMedVideos.length; i++) {
	    var rtMedVideo = rtMedVideos[i].match(/file:\s*'(.*?)'.replace/);
	    rtMedVideo = (rtMedVideo) ? rtMedVideo[1] : null;
	    if (rtMedVideo) {
	      if (!rtVideoFound) rtVideoFound = true;
	      rtMedVideo = rtMedVideo.replace(/\'/g, '').replace(/\s/g, '').replace('+', '');
	      rtMedVideo = page.win.location.protocol + '//' + page.win.location.hostname + rtMedVideo;
	      rtVideoList['Standard Definition MP4 Part ' + (i + 1)] = rtMedVideo;
	    }
	  }
	}
	else {
	  var rtMedVideo = rtMedVideos[0].match(/file:\s*'(.*?)'.replace/);
	  rtMedVideo = (rtMedVideo) ? rtMedVideo[1] : null;
	  if (rtMedVideo) {
	    if (!rtVideoFound) rtVideoFound = true;
	    rtMedVideo = rtMedVideo.replace(/\'/g, '').replace(/\s/g, '').replace('+', '');
	    rtMedVideo = page.win.location.protocol + '//' + page.win.location.hostname + rtMedVideo;
	    rtVideoList['Standard Definition MP4'] = rtMedVideo;
	  }
	}
      }
      var rtHighVideoContent = rtVideosContent.match(/'High':\s*([\S\s]*?)$/);
      rtHighVideoContent = (rtHighVideoContent) ? rtHighVideoContent[1] : null;
      if (rtHighVideoContent) {
	var rtHighVideos = rtHighVideoContent.split('filesize');
	if (rtHighVideos.length > 2) {
	  for (i = 0; i < rtHighVideos.length; i++) {
	    var rtHighVideo = rtHighVideos[i].match(/file:\s*'(.*?)'.replace/);
	    rtHighVideo = (rtHighVideo) ? rtHighVideo[1] : null;
	    if (rtHighVideo) {
	      if (!rtVideoFound) rtVideoFound = true;
	      rtHighVideo = rtHighVideo.replace(/\'/g, '').replace(/\s/g, '').replace('+', '');
	      rtHighVideo = page.win.location.protocol + '//' + page.win.location.hostname + rtHighVideo;
 	      rtHighVideo = rtHighVideo.replace(/\.mp4/, '-h.mp4');
	      rtVideoList['High Definition MP4 Part ' + (i + 1)] = rtHighVideo;
	    }
	  }
	}
	else {
	  var rtHighVideo = rtHighVideos[0].match(/file:\s*'(.*?)'.replace/);
	  rtHighVideo = (rtHighVideo) ? rtHighVideo[1] : null;
	  if (rtHighVideo) {
	    if (!rtVideoFound) rtVideoFound = true;
	    rtHighVideo = rtHighVideo.replace(/\'/g, '').replace(/\s/g, '').replace('+', '');
	    rtHighVideo = page.win.location.protocol + '//' + page.win.location.hostname + rtHighVideo;
 	    rtHighVideo = rtHighVideo.replace(/\.mp4/, '-h.mp4');
	    rtVideoList['High Definition MP4'] = rtHighVideo;
	  }
	}
      }

      /* Create Player */
      if (rtVideoFound) {
	var rtDefaultVideo = rtVideoList['Low Definition MP4'] ? 'Low Definition MP4' : 'Low Definition MP4 Part 1';
	player = {'playerSocket': rtPlayerWindowNew, 'playerWindow': myPlayerWindow, 'videoList': rtVideoList, 'videoPlay': rtDefaultVideo, 'videoThumb': rtVideoThumb, 'playerWidth': 964, 'playerHeight': 540};
	feature['container'] = false;
	feature['widesize'] = false;
	option['definitions'] = ['Low Definition', 'Standard Definition', 'High Definition'];
	option['containers'] = ['MP4'];
	createMyPlayer ();
      }
      else {
	var rtYouTubeEmbed = rtVideosContent.match(/youtube.com\/watch/);
	if (rtYouTubeEmbed) {
	  showMyMessage ('embed', 'https://www.youtube.com/user/RussiaToday');
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

// =====RuTube===== //

else if (page.url.indexOf('rutube.ru') != -1) {

  page.win.setInterval(function() {
    var nurl = page.win.location.href;
    if (page.url != nurl) {
      history.replaceState({} , 'History', page.url);
      page.win.location.href = nurl;
    }
  }, 500);

  /* Get Player Window */
  var rutPlayerWindow = getMyElement ('', 'div', 'class', 'b-video__object', 0, false);
  if (!rutPlayerWindow) {
    if (page.url.indexOf('rutube.ru/video') != -1) showMyMessage ('!player');
  }
  else {
    /* Get Video Thumb */
    var rutVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Video */
    var rutVideo = getMyContent (page.url.replace(/\/video\//, '/play/embed/'), '&quot;m3u8&quot;:\\s*&quot;(.*?)&quot;', false);

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '728px', height: '432px', backgroundColor: '#F4F4F4', margin: '0px auto'});
    modifyMyElement (rutPlayerWindow, 'div', '', true);
    //styleMyElement (rutPlayerWindow, {backgroundColor: '#FFFFFF'});
    appendMyElement (rutPlayerWindow, myPlayerWindow);

    /* Create Player */
    if (rutVideo) {
      var rutVideoList = {};
      var rutDefaultVideo = 'HTTP Live Streaming M3U8';
      rutVideoList[rutDefaultVideo] = rutVideo;
      player = {'playerSocket': rutPlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': rutVideoList, 'videoPlay': rutDefaultVideo, 'videoThumb': rutVideoThumb, 'playerWidth': 728, 'playerHeight': 432};
      feature['definition'] = false;
      feature['container'] = false;
      feature['widesize'] = false;
      createMyPlayer ();
      styleMyElement(player['playerContent'], {marginTop: '5px'});
    }
    else {
      showMyMessage ('!videos');
    }
  }

}

// =====NowRu===== //

else if (page.url.indexOf('now.ru/item') != -1) {

  /* Get Player Window */
  var nowPlayerWindow = document.getElementById('header');
  if (!nowPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Page Source*/
    var nowPageSource = getMyContent (page.url, 'TEXT', false);

    /* Get Video Thumb */
    var nowVideoThumb = nowPageSource.match(/meta\s+property="og:image"\s+content="(.*?)"/);
    nowVideoThumb = (nowVideoThumb) ? nowVideoThumb[1] : null;

    /* Get Video Source */
    var nowVideoSource = nowPageSource.match(/meta\s+property="og:video"\s+content="(.*?)"/);
    nowVideoSource = (nowVideoSource) ? nowVideoSource[1] : null;
    if (nowVideoSource && nowVideoSource.indexOf('rutube.ru') != -1) nowVideoSource = nowVideoSource.replace('video.rutube.ru', 'rutube.ru/play/embed');
    else {
      nowVideoSource = nowPageSource.match(/"smil":"(.*?)"/);
      nowVideoSource = (nowVideoSource) ? cleanMyContent(nowVideoSource[1], false) : null;
    }

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '960px', height: '562px', backgroundColor: '#F4F4F4', margin: '0px auto'});
    modifyMyElement (nowPlayerWindow, 'div', '', true);
    styleMyElement (nowPlayerWindow, {backgroundColor: '#000000'});
    appendMyElement (nowPlayerWindow, myPlayerWindow);

    /* Get Video */
    if (nowVideoSource) {
      if (nowVideoSource.indexOf('rutube.ru') != -1) {
	GM_xmlhttpRequest({
	  method: 'GET',
	  url: nowVideoSource,
	  onload: function(response) {
	    if (response.readyState === 4 && response.status === 200) {
	      var nowVideosContent = response.responseText;
	      if (nowVideosContent) {
		var nowVideo = nowVideosContent.match(/&quot;m3u8&quot;:\s*&quot;(.*?)&quot;/);
		nowVideo = (nowVideo) ? nowVideo[1] : null;

		/* Create Player */
		if (nowVideo) {
		  var nowVideoList = {};
		  var nowDefaultVideo = 'HTTP Live Streaming M3U8';
		  nowVideoList[nowDefaultVideo] = nowVideo;
		  player = {'playerSocket': nowPlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': nowVideoList, 'videoPlay': nowDefaultVideo, 'videoThumb': nowVideoThumb, 'playerWidth': 960, 'playerHeight': 562};
		  feature['definition'] = false;
		  feature['container'] = false;
		  feature['widesize'] = false;
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
	    else {
	      showMyMessage ('!content');
	    }
	  }
	});
      }
      else {
	var nowVideoPath = getMyContent(nowVideoSource, 'src="(.*?)"', false);
	if (nowVideoPath) {
	  GM_xmlhttpRequest({
	    method: 'GET',
	    url: nowVideoPath,
	    onload: function(response) {
	      if (response.readyState === 4 && response.status === 200) {
		var nowVideosContent = response.responseText;
		if (nowVideosContent) {
		  var nowVideo = nowVideosContent.match(/<to>(.*?)<\/to>/);
		  nowVideo = (nowVideo) ? nowVideo[1] : null;

		  /* Create Player */
		  if (nowVideo) {
		    nowVideo += nowVideoPath.replace(/.*vod\//, '');
		    var nowVideoList = {};
		    var nowDefaultVideo = 'HTTP Dynamic Streaming F4M';
		    nowVideoList[nowDefaultVideo] = nowVideo;
		    player = {'playerSocket': nowPlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': nowVideoList, 'videoPlay': nowDefaultVideo, 'videoThumb': nowVideoThumb, 'playerWidth': 960, 'playerHeight': 562};
		    feature['definition'] = false;
		    feature['container'] = false;
		    feature['widesize'] = false;
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
	  });
	}
	else {
	  showMyMessage ('!content');
	}
      }
    }
    else {
      showMyMessage ('!content');
    }
  }

}

// =====VideoMoreRu===== //

else if (page.url.indexOf('videomore.ru/') != -1) {

  /* Get Page Type */
  var vmPageType = getMyContent (page.url, 'meta\\s+content="(.*?)"\\s+property="og:type"', false);
  if (!vmPageType || vmPageType.indexOf('video') == -1) return;

  /* Get Player Window */
  var vmPlayerWindow = getMyElement ('', 'div', 'id', 'playerholder', -1, false);
  if (!vmPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video Thumb */
    var vmVideoThumb = getMyContent (page.url, 'meta\\s+content="(.*?)"\\s+property="og:image"', false);

    /* Get Video ID */
    var vmVideoSource = getMyContent (page.url, 'config:\\s+"(.*?)"', false);

    /* Get Video */
    var vmVideo;
    if (vmVideoSource) {
      vmVideo = getMyContent (vmVideoSource, '<video_url>(.*?)</video_url>', false);
    }

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '704px', height: '414px', backgroundColor: '#EEEEEE', margin: '0px auto'});
    modifyMyElement (vmPlayerWindow, 'div', '', true);
    appendMyElement (vmPlayerWindow, myPlayerWindow);

    /* Create Player */
    if (vmVideo) {
      var vmVideoList = {};
      var vmDefaultVideo = 'Low Definition MP4';
      vmVideoList[vmDefaultVideo] = vmVideo;
      player = {'playerSocket': vmPlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': vmVideoList, 'videoPlay': vmDefaultVideo, 'videoThumb': vmVideoThumb, 'playerWidth': 704, 'playerHeight': 414};
      feature['definition'] = false;
      feature['container'] = false;
      feature['widesize'] = false;
      createMyPlayer ();
    }
    else {
      showMyMessage ('!videos');
    }
  }

}

// =====Tvigle===== //

else if (page.url.indexOf('tvigle.ru/video') != -1) {

  /* Get Player Window */
  var tviPlayerWindow = getMyElement ('', 'div', 'class', 'player-content', 0, false);
  if (!tviPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video Thumb */
    var tviVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Video ID */
    var tviVideoId = getMyContent (page.url, 'cloudId\\s*=\\s*\'(.*?)\';', false);

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '712px', height: '422px', backgroundColor: '#F4F4F4'});
    styleMyElement (tviPlayerWindow, {height: '100%'});
    modifyMyElement (tviPlayerWindow, 'div', '', true);
    appendMyElement (tviPlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (tviVideoId) {
      GM_xmlhttpRequest({
	method: 'GET',
	url: 'http://cloud.tvigle.ru/api/play/video/' + tviVideoId,
	onload: function(response) {
	  if (response.readyState === 4 && response.status === 200) {
	    var tviVideosSource = response.responseText;
	    if (tviVideosSource) {
	      var tviVideoFound = false;
	      var tviVideoList = {};
	      var tviVideosMP4 = tviVideosSource.match(/"mp4":\s*\{(.*?)\}/);
	      tviVideosMP4 = (tviVideosMP4) ? tviVideosMP4[1] : null;
	      if (tviVideosMP4) {
		var tviVideo = tviVideosMP4.match(/"480p":\s*"(.*?)"/);
		tviVideo = (tviVideo) ? tviVideo[1] : null;
		if (tviVideo) {
		  tviVideoList['Standard Definition MP4'] = tviVideo;
		  tviVideoFound = true;
		}
		var tviVideo = tviVideosMP4.match(/"720p":\s*"(.*?)"/);
		tviVideo = (tviVideo) ? tviVideo[1] : null;
		if (tviVideo) {
		  tviVideoList['High Definition MP4'] = tviVideo;
		  tviVideoFound = true;
		}
	      }
	      var tviVideosFLV = tviVideosSource.match(/"flv":\s*\{(.*?)\}/);
	      tviVideosFLV = (tviVideosFLV) ? tviVideosFLV[1] : null;
	      if (tviVideosFLV) {
		var tviVideo = tviVideosFLV.match(/"480p":\s*"(.*?)"/);
		tviVideo = (tviVideo) ? tviVideo[1] : null;
		if (tviVideo) {
		  tviVideoList['Standard Definition FLV'] = tviVideo;
		  tviVideoFound = true;
		}
		var tviVideo = tviVideosFLV.match(/"720p":\s*"(.*?)"/);
		tviVideo = (tviVideo) ? tviVideo[1] : null;
		if (tviVideo) {
		  tviVideoList['High Definition FLV'] = tviVideo;
		  tviVideoFound = true;
		}
	      }

	      /* Create Player */
	      if (tviVideoFound) {
		var tviDefaultVideo = 'Standard Definition MP4';
		player = {'playerSocket': tviPlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': tviVideoList, 'videoPlay': tviDefaultVideo, 'videoThumb': tviVideoThumb, 'playerWidth': 712, 'playerHeight': 422};
		feature['widesize'] = false;
		option['definitions'] = ['High Definition', 'Standard Definition'];
		option['containers'] = ['MP4', 'FLV'];
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
	  else {
	    showMyMessage ('!content');
	  }
	},
	onerror: function() {
	  showMyMessage ('!content');
	}
      });
    }
    else {
      showMyMessage ('!content');
    }
  }

}

// =====IVI===== //

else if (page.url.indexOf('ivi.ru/watch/') != -1) {

  /* Get Player Window */
  var iviPlayerWindow = getMyElement ('', 'div', 'id', 'js-player-area', -1, false);
  if (!iviPlayerWindow) {
    //showMyMessage ('!player');
  }
  else {
    /* Get Video Thumb */
    var iviVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Video ID */
    var iviVideoId = getMyContent (page.url, 'data-id="(.*?)"', false);

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '978px', height: '550px', backgroundColor: '#F4F4F4'});
    styleMyElement (iviPlayerWindow, {height: '100%'});
    modifyMyElement (iviPlayerWindow, 'div', '', true);
    appendMyElement (iviPlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (iviVideoId) {
      var params = {"method":"da.content.get","params":[iviVideoId,{"site":"s183","referrer":"http://www.ivi.ru/watch/"+iviVideoId,"contentid":iviVideoId}]};
      GM_xmlhttpRequest({
	method: 'POST',
	url: 'http://api.digitalaccess.ru/api/json/',
	data: JSON.stringify (params),
	headers: {"Content-Type": "application/json"},
	onload: function(response) {
	  if (response.readyState === 4 && response.status === 200) {
	    var iviVideosSource = response.responseText;
	    if (iviVideosSource) {
	      var iviVideoFound = false;
	      var iviVideoList = {};
	      var iviVideosContent = iviVideosSource.match(/"files":\s*\[(.*?)\]/);
	      iviVideosContent = (iviVideosContent) ? iviVideosContent[1] : null;
	      if (iviVideosContent) {
		var iviVideoMatch = iviVideosContent.match(/"url":\s*"(.*?)"/g);
		if (iviVideoMatch) {
		  iviVideoFound = true;
		  for (var i = 0; i < iviVideoMatch.length; i++) {
		    var iviVideo = iviVideoMatch[i].replace(/"url":\s*"/, '').replace(/"/, '');
		    if (iviVideo.indexOf('mp4-hi')) iviVideoList['Very Low Definition MP4'] = iviVideo;
		    if (iviVideo.indexOf('mp4-shq')) iviVideoList['Low Definition MP4'] = iviVideo;
		  }
		}
	      }

	      /* Create Player */
	      if (iviVideoFound) {
		var iviDefaultVideo = 'Low Definition MP4';
		player = {'playerSocket': iviPlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': iviVideoList, 'videoPlay': iviDefaultVideo, 'videoThumb': iviVideoThumb, 'playerWidth': 987, 'playerHeight': 550};
		feature['widesize'] = false;
		option['definitions'] = ['Very Low Definition', 'Low Definition'];
		option['containers'] = ['MP4'];
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
	  else {
	    showMyMessage ('!content');
	  }
	},
	onerror: function() {
	  showMyMessage ('!content');
	}
      });
    }
    else {
      showMyMessage ('!content');
    }
  }

}

// =====Megogo===== //

else if (page.url.indexOf('megogo.net/') != -1) {

  /* Get Player Window */
  //var mePlayerWindow = getMyElement ('', 'div', 'id', 'playerPlace', -1, false);
  var mePlayerWindow = getMyElement ('', 'div', 'class', 'player-container', 0, false);
  if (!mePlayerWindow) {
    //showMyMessage ('!player');
  }
  else {
    /* Get Video Thumb */
    var meVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Video ID */
    var meVideoId = page.url.replace(/.*\//, '').replace(/-.*/, '');

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '690px', height: '406px', backgroundColor: '#E4E4E4', margin: '0px auto'});
    modifyMyElement (mePlayerWindow, 'div', '', true);
    styleMyElement (mePlayerWindow, {height: '410px'});
    appendMyElement (mePlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (meVideoId) {
      GM_xmlhttpRequest({
	method: 'GET',
	url: page.url.replace(/-.*/, '').replace('/view/', '/e/'),
	headers: {"Referer": page.url},
	onload: function(response) {
	  if (response.readyState === 4 && response.status === 200) {
	    var meContentSource = response.responseText;
	    if (meContentSource) {
	      var mePlaylistSource = meContentSource.match(/src='(.*?)'/);
	      mePlaylistSource = (mePlaylistSource) ? mePlaylistSource[1] : null;
	      if (mePlaylistSource) {
		var mePlaylistId = mePlaylistSource.replace(/.*pl=/, '');
		GM_xmlhttpRequest({
		  method: 'GET',
		  url: mePlaylistSource,
		  onload: function(response) {
		    if (response.readyState === 4 && response.status === 200) {
		      var meVideoSource = response.responseText;
		      if (meVideoSource) {
			var meVideoId = meVideoSource.match(/video=(\d+),/);
			meVideoId = (meVideoId) ? meVideoId[1] : null;
			if (meVideoId) {
			  GM_xmlhttpRequest({
			    method: 'GET',
			    url: 'http://out.pladform.ru/getVideo?social=none&pl=' + mePlaylistId + '&videoid=' + meVideoId,
			    onload: function(response) {
			      if (response.readyState === 4 && response.status === 200) {
				var meVideosContent = response.responseText;
				if (meVideosContent) {
				  var meVideoFound;
				  var meVideoList = {};
				  var meVideoThumb = meVideosContent.match(/<cover>\/\/(.*?)</);
				  meVideoThumb = (meVideoThumb) ? 'http://' + meVideoThumb[1] : null;
				  var meVideo = meVideosContent.match(/quality='sd'><!\[CDATA\[(.*?)\]/);
				  meVideo = (meVideo) ? meVideo[1] : null;
				  if (meVideo) {
				    meVideoFound = true;
				    meVideoList['Standard Definition MP4'] = meVideo;
				  }
				  var meVideo = meVideosContent.match(/quality='ld'><!\[CDATA\[(.*?)\]/);
				  meVideo = (meVideo) ? meVideo[1] : null;
				  if (meVideo) {
				    meVideoFound = true;
				    meVideoList['Low Definition MP4'] = meVideo;
				  }

				  /* Create Player */
				  if (meVideo) {
				    var meDefaultVideo = 'Low Definition MP4';
				    player = {'playerSocket': mePlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': meVideoList, 'videoPlay': meDefaultVideo, 'videoThumb': meVideoThumb, 'playerWidth': 690, 'playerHeight': 406};
				    feature['definition'] = false;
				    feature['container'] = false;
				    feature['widesize'] = false;
				    createMyPlayer ();
				    /* Fix panel */
				    styleMyElement(player['playerContent'], {marginTop: '4px'});
				  }
				  else {
				    showMyMessage ('!videos');
				  }
				}
				else {
				  showMyMessage ('!content');
				}
			      }
			      else {
				showMyMessage ('!content');
			      }
			    },
			    onerror: function() {
			     showMyMessage ('!content');
		            }
			  });
			}
			else {
			  showMyMessage ('!content');
			}
		      }
		      else {
			showMyMessage ('!content');
		      }
		    }
		    else {
		      showMyMessage ('!content');
		    }
		  },
		  onerror: function() {
		    showMyMessage ('!content');
		  }
		});
	      }
	      else {
		var meVideo = getMyContent(page.win.location.protocol + '//' + page.win.location.hostname + '/b/info/?l=ru&i=' + meVideoId + '&s=0&p=0&m=%2D1&t=0&preview=0&h=' + page.url + '&e=0', '<src>(.*?)<', false);
		if (meVideo) {
		  var meDefaultVideo = 'HTTP Live Streaming M3U8';
		  var meVideoList = {};
		  meVideoList[meDefaultVideo] = meVideo;
		  player = {'playerSocket': mePlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': meVideoList, 'videoPlay': meDefaultVideo, 'videoThumb': meVideoThumb, 'playerWidth': 690, 'playerHeight': 406};
		  feature['definition'] = false;
		  feature['container'] = false;
		  feature['widesize'] = false;
		  createMyPlayer ();
		  /* Fix panel */
		  styleMyElement(player['playerContent'], {marginTop: '4px'});
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
	  else {
	    showMyMessage ('!content');
	  }
	},
	onerror: function() {
	  showMyMessage ('!content');
	}
      });
    }
    else {
      showMyMessage ('!content');
    }
  }

}

// =====AlkislarlaYasiyorum===== //

else if (page.url.indexOf('alkislarlayasiyorum.com/icerik') != -1) {

  /* Get Player Window */
  var ayPlayerWindow = getMyElement ('', 'div', 'id', 'playerContainer', -1, false);
  if (!ayPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video Thumb */
    var ayVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Video */
    var ayVideo = getMyContent (page.url, 'streamurl:"(.*?)"', true);

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '640px', height: '382px', backgroundColor: '#E6E9D4', margin: '0px auto'});
    modifyMyElement (ayPlayerWindow, 'div', '', true);
    appendMyElement (ayPlayerWindow, myPlayerWindow);

    /* Create Player */
    if (ayVideo) {
      var ayVideoList = {};
      var ayDefaultVideo = 'Low Definition MP4';
      ayVideoList[ayDefaultVideo] = ayVideo;
      player = {'playerSocket': ayPlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': ayVideoList, 'videoPlay': ayDefaultVideo, 'videoThumb': ayVideoThumb, 'playerWidth': 640, 'playerHeight': 382};
      feature['definition'] = false;
      feature['container'] = false;
      feature['widesize'] = false;
      createMyPlayer ();
    }
    else {
      showMyMessage ('!videos');
    }
  }

}

// =====Hurriyet===== //

else if (page.url.indexOf('hurriyet.com.tr/') != -1) {

  /* Get Video Contents */
  var huVideosContent = getMyContent (page.url, 'src="(http://webtv.hurriyet.com.tr/embed/\\?vid=.*?)&', false);
  if (!huVideosContent) return;

  /* Get Player Window */
  var huPlayerWindow = getMyElement ('', 'div', 'class', 'ctx_content', 0, false);
  if (!huPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video Thumb */
    var huVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '580px', height: '340px', backgroundColor: '#FFFFFF'});
    appendMyElement (huPlayerWindow, myPlayerWindow);
    var huFlashWindow = getMyElement (huPlayerWindow, 'iframe', 'tag', '', 0, false);
    if (huFlashWindow) {
      huFlashWindow.src = '';
      styleMyElement(huFlashWindow, {display: 'none'});
    }

    /* get Videos */
    var huVideo = getMyContentGM (huVideosContent, 'VideoCDNURL:\\s*\'(.*?)\',', true);
    if (huVideo) {
      var huVideoList = {};
      huVideoList['Very Low Definition MP4'] = huVideo.replace('.mp4', '_240p.mp4');
      huVideoList['Low Definition MP4'] = huVideo.replace('.mp4', '_360p.mp4');
      huVideoList['Standard Definition MP4'] = huVideo.replace('.mp4', '_480p.mp4');
      huVideoList['High Definition MP4'] = huVideo.replace('.mp4', '_720p.mp4');
      huVideoList['Full High Definition MP4'] = huVideo.replace('.mp4', '_1080p.mp4');
      var huDefaultVideo = 'Low Definition MP4';
      player = {'playerSocket': huPlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': huVideoList, 'videoPlay': huDefaultVideo, 'videoThumb': huVideoThumb, 'playerWidth': 580, 'playerHeight': 340};
      feature['container'] = false;
      feature['widesize'] = false;
      option['definitions'] = ['Full High Definition', 'High Definition', 'Standard Definition', 'Low Definition', 'Very Low Definition'];
      option['containers'] = ['MP4'];
      createMyPlayer ();
    }
    else {
      showMyMessage ('!videos');
    }
  }

}

// =====VEVO===== //

else if (page.url.indexOf('vevo.com/watch') != -1) {

  page.win.setInterval(function() {
    var nurl = page.win.location.href;
    if (page.url != nurl) page.win.location.href = nurl;
  }, 500);

  function VEVO() {
    /* Get Video Thumb */
    var veVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Video ID */
    var veVideoId = getMyContent (page.url, 'meta\\s+property="og:video"\\s+content=".*?videoId=(.*?)&', false);

    /* Get Videos Content */
    var veVideosContent;
    if (veVideoId) veVideosContent = getMyContent('http://videoplayer.vevo.com/VideoService/AuthenticateVideo?isrc=' + veVideoId, '\\{("version":(3|4).*?)\\}', false);

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '940px', height: '552px', backgroundColor: '#F4F4F4', margin: '0px auto'});
    modifyMyElement (vePlayerWindow, 'div', '', true);
    styleMyElement (vePlayerWindow, {height: '100%', textAlign: 'center'});
    appendMyElement (vePlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (veVideosContent) {
      veVideosContent = cleanMyContent(veVideosContent, false);
      var veVideoFormats = {'High': 'High Definition MP4', 'Med': 'Low Definition MP4', 'Low': 'Very Low Definition MP4'};
      var veVideoList = {};
      var veVideoFound = false;
      var veVideoParser, veVideoParse, veVideo, myVideoCode;
      for (var veVideoCode in veVideoFormats) {
	veVideoParser = 'name="' + veVideoCode + '"\\s+url="(.*?)"';
	veVideoParse = veVideosContent.match (veVideoParser);
	veVideo = (veVideoParse) ? veVideoParse[1] : null;
	if (veVideo) {
	  if (!veVideoFound) veVideoFound = true;
	  myVideoCode = veVideoFormats[veVideoCode];
	  veVideoList[myVideoCode] = veVideo;
	}
      }

      if (veVideoFound) {
	/* Hide player Buttons */
	var vePlayerButtons = getMyElement ('', 'div', 'class', 'video-controls-directive', 0, false);
	if (vePlayerButtons) styleMyElement(vePlayerButtons, {display: 'none'});

	/* Create Player */
	var veDefaultVideo = 'Low Definition MP4';
	player = {
	  'playerSocket': vePlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': veVideoList,
	  'videoPlay': veDefaultVideo,
	  'videoThumb': veVideoThumb,
	  'playerWidth': 940,
	  'playerHeight': 552
	};
	feature['container'] = false;
	feature['widesize'] = false;
	option['definitions'] = ['High Definition', 'Low Definition', 'Very Low Definition'];
	option['containers'] = ['MP4'];
	createMyPlayer ();
	styleMyElement(player['playerContent'], {marginTop: '4px'});
      }
      else {
	showMyMessage ('!videos');
      }
    }
    else {
      showMyMessage ('!content');
    }
  }

  var vePlayerWindow = getMyElement ('', 'div', 'class', 'hero-player', 0, false);
  if (vePlayerWindow) {
    VEVO();
  }
  else {
    var vePlayerWaitCount = 5;
    function vePlayerWaitFunc() {
      vePlayerWindow = getMyElement ('', 'div', 'class', 'hero-player', 0, false);
      if (vePlayerWindow) {
	page.win.clearInterval(vePlayerWaitInterval);
	VEVO();
      }
      vePlayerWaitCount--;
      if (vePlayerWaitCount == 0) {
	page.win.clearInterval(vePlayerWaitInterval);
      }
    }
    var vePlayerWaitInterval = page.win.setInterval(vePlayerWaitFunc, 500);
  }

}

// =====Tu.TV===== //

else if (page.url.indexOf('tu.tv/videos') != -1) {

  /* Get Player Window */
  var tuPlayerWindow = getMyElement ('', 'div', 'id', 'div-player', -1, false);
  if (!tuPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video Thumb */
    var tuVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Video ID */
    var tuVideoID = getMyContent (page.url, 'tu.tv/iframe/(.*?)/', false);

    /* Get Video */
    var tuVideo;
    if (tuVideoID) {
      tuVideo = getMyContent ('http://tu.tv/flvurl.php?codVideo=' + tuVideoID, 'kpt=(.*?)&', false);
      if (tuVideo) tuVideo = atob(tuVideo);
    }

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '630px', height: '378px', backgroundColor: '#EEEEEE', margin: '0px auto'});
    modifyMyElement (tuPlayerWindow, 'div', '', true);
    appendMyElement (tuPlayerWindow, myPlayerWindow);

    /* Create Player */
    if (tuVideo) {
      var tuVideoList = {};
      var tuDefaultVideo = 'Low Definition FLV';
      tuVideoList[tuDefaultVideo] = tuVideo;
      player = {'playerSocket': tuPlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': tuVideoList, 'videoPlay': tuDefaultVideo, 'videoThumb': tuVideoThumb, 'playerWidth': 630, 'playerHeight': 378};
      feature['definition'] = false;
      feature['container'] = false;
      feature['widesize'] = false;
      createMyPlayer ();
    }
    else {
      showMyMessage ('!videos');
    }
  }

}

// =====WatchNBA===== //

else if (page.url.indexOf('watch.nba.com/nba/video') != -1) {

  /* Get Player Window */
  var nbaPlayerWindow = getMyElement ('', 'div', 'id', 'playerContainer', -1, false);
  if (!nbaPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Get Video Thumb */
    var nbaVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Video ID */
    var nbaVideoID = getMyContent (page.url, 'programId\\s*=\\s*(.*?);', false);

    /* Get Video */
    var nbaVideo;
    if (nbaVideoID && nbaVideoID != 'undefined') {
      nbaVideo = getMyContent ('http://watch.nba.com/nba/servlets/publishpoint?type=video&isFlex=true&bitrate=1600&id=' + nbaVideoID, '(rtmp.*?)&aifp', false);
    }

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '980px', height: '576px', backgroundColor: '#EEEEEE', margin: '0px auto'});
    modifyMyElement (nbaPlayerWindow, 'div', '', true);
    styleMyElement (nbaPlayerWindow, {height: '576px', width: '980px'});
    appendMyElement (nbaPlayerWindow, myPlayerWindow);

    /* Get Watch Sidebar */
    var nbaSidebarWindow = getMyElement ('', 'div', 'class', 'rightBox', 0, false);
    if (nbaSidebarWindow) styleMyElement (nbaSidebarWindow, {marginTop: '620px'});

    if (nbaVideo) {
      /* Create Player */
      var nbaVideoList = {};
      var nbaDefaultVideo = 'Low Definition MP4';
      nbaVideoList['Standard Definition MP4'] = nbaVideo;
      nbaVideoList['Low Definition MP4'] = nbaVideo.replace('1600.mp4', '800.mp4');
      nbaVideoList['High Definition MP4'] = nbaVideo.replace('1600.mp4', '3000.mp4');
      player = {
	'playerSocket': nbaPlayerWindow,
	'playerWindow': myPlayerWindow,
	'videoList': nbaVideoList,
	'videoPlay': nbaDefaultVideo,
	'videoThumb': nbaVideoThumb,
	'playerWidth': 980,
	'playerHeight': 576
      };
      feature['container'] = false;
      feature['widesize'] = false;
      option['definitions'] = ['High Definition', 'Standard Definition', 'Low Definition'];
      option['containers'] = ['MP4'];
      createMyPlayer ();
    }
    else {
      showMyMessage ('!videos');
    }
  }

}

// =====WIMP===== //

else if (page.url.indexOf('wimp.com/') != -1) {

  /* Get Player Window */
  var wiPlayerWindow = getMyElement ('', 'div', 'id', 'player', -1, false);
  if (!wiPlayerWindow) {
    //showMyMessage ('!player');
  }
  else {
    var ytVideoLink = getMyContent(page.url, '"file","(.*)"', false);
    if (ytVideoLink) {
      /* My Player Window */
      var myPlayerWindow = createMyElement ('div', '', '', '', '');
      styleMyElement (myPlayerWindow, {position: 'relative', width: '560px', height: '440px', backgroundColor: '#F4F4F4', zIndex: 10});
      modifyMyElement (wiPlayerWindow, 'div', '', true);
      appendMyElement (wiPlayerWindow, myPlayerWindow);
      showMyMessage ('embed', ytVideoLink);
    }
  }

}

// =====Marktplaats===== //

else if (page.url.indexOf('marktplaats.nl/') != -1) {

  /* Video Page */
  var mpVideoPlay = getMyElement ('', 'div', 'class', 'icon-mp-icon-video-play', 0, false);
  if (!mpVideoPlay) return;

  /* Hide Video Link */
  var mpPhotoActions = getMyElement ('', 'div', 'id', 'photo-actions', -1, false);
  if (mpPhotoActions) {
    var mpVideoLink = getMyElement (mpPhotoActions, 'a', 'class', 'show-video-link', 0, false);
    if (mpVideoLink) styleMyElement (mpVideoLink, {display: 'none'});
  }

  /* Get Player Window */
  var mpPlayerWindow = getMyElement ('', 'div', 'id', 'vip-ad-price-container', -1, false);
  if (!mpPlayerWindow) {
    //showMyMessage ('!player');
  }
  else {
    /* Video Thumbnail */
    mpVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Videos */
    var mpVideosContent;
    mpVideoUrl = getMyContent (page.url, 'videoUrl:\\s*\'(.*?)\'', false);
    if (mpVideoUrl) {
      mpPlaylistUrl = getMyContentGM (mpVideoUrl, 'playlist_url:\\s*\'(.*?)\'', false);
      if (mpPlaylistUrl) {
	mpVideosContent = getMyContentGM (mpPlaylistUrl, 'TEXT', false);
      }
    }

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '604px', height: '362px', backgroundColor: '#F4F4F4', zIndex: 10});
    appendMyElement (mpPlayerWindow, myPlayerWindow);

    if (mpVideosContent) {
      var mpVideoList = {};
      var mpVideoFound = false;
      var mpVideoFormats = {'720': 'High Definition MP4', '360': 'Low Definition MP4', '270': 'Very Low Definition MP4'};
      var mpVideoParser, mpVideoParse, myVideoCode, mpVideoPath, mpVideo;
      for (var mpVideoCode in mpVideoFormats) {
	mpVideoParser = '"' + mpVideoCode + '">(.*?)<';
	mpVideoParse = mpVideosContent.match (mpVideoParser);
	mpVideo = (mpVideoParse) ? mpVideoParse[1] : null;
	if (mpVideo) {
	  if (!mpVideoFound) mpVideoFound = true;
	  myVideoCode = mpVideoFormats[mpVideoCode];
	  mpVideoList[myVideoCode] = mpVideo;
	}
      }

      if (mpVideoFound) {
	/* Create Player */
	var mpDefaultVideo = 'Low Definition MP4';
	player = {
	  'playerSocket': mpPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': mpVideoList,
	  'videoPlay': mpDefaultVideo,
	  'videoThumb': mpVideoThumb,
	  'playerWidth': 604,
	  'playerHeight': 362,
	};
	feature['container'] = false;
	feature['widesize'] = false;
	option['definitions'] = ['High Definition', 'Low Definition', 'Very Low Definition'];
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
      showMyMessage('!content');
    }
  }

}

// =====NPO===== //

else if (page.url.indexOf('npo.nl/') != -1) {

  /* Get Player Window */
  var npoPlayerWindow = getMyElement ('', 'div', 'class', 'player-span', 0, false);
  if (!npoPlayerWindow) npoPlayerWindow = getMyElement ('', 'div', 'class', 'player-container', 0, false);
  if (!npoPlayerWindow) {
    //showMyMessage ('!player');
  }
  else {
    /* Video Thumbnail */
    npoVideoThumb = getMyContent (page.url, 'meta\\s+content="(.*?)"\\s+name="og:image"', false);

    /* Get Videos */
    var npoVideo;
    //var npoVideoID = page.url.replace(/.*\//, '');
    var npoVideoID = getMyContent (page.url, 'meta\\s+content=".*/(.*?)"\\s+name="og:video"', false);
    var npoToken = getMyContentGM ('http://ida.omroep.nl/npoplayer/i.js', 'token\\s*=\\s*"(.*?)"', false);
    if (npoVideoID && npoToken) {
      var s = npoToken;
      var s2 = '';
      var fc, sc;
      for (var i = 5; i <= s.length - 4; i++) {
	if (s[i] >= 0) {
	  if (!fc) fc = i;
	  else if (!sc) sc = i;
	}
      }
      if (!fc || !sc) {
	fc = 12;
	sc = 13;
      }
      for (var i = 0; i < s.length; i++) {
	if (i == fc) s2 += s[sc];
	else if (i == sc) s2 += s[fc];
	else s2 += s[i]
      }
      npoToken = s2;
      //pubs -> "adaptive","h264_bb","h264_sb","h264_std"
      var npoStreams = getMyContentGM ('http://ida.omroep.nl/odi/?prid=' + npoVideoID + '&puboptions=h264_std&adaptive=yes&token=' + npoToken, '"streams":\\["(.*?)"\\]', true);
      if (npoStreams) npoVideo = getMyContentGM (npoStreams, '"url":"(.*?)\\?', true);
      if (!npoVideo) {
	var npoVideoSource = getMyContentGM ('http://e.omroep.nl/metadata/' + npoVideoID, 'TEXT', false);
	if (npoVideoSource) {
	  npoVideo = npoVideoSource.match(/"kwaliteit":\d+,"url":"(.*?)"/);
	  npoVideo = (npoVideo) ? cleanMyContent(npoVideo[1], false) : null;
	  if (npoVideo && !npoVideoThumb) {
	    npoVideoThumb = npoVideoSource.match(/"url":"(https?.*?images.*?jpg)"/);
	    npoVideoThumb = (npoVideoThumb) ? cleanMyContent(npoVideoThumb[1], false) : null;
	  }
	}
      }
    }

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '580px', height: '350px', backgroundColor: '#F4F4F4', zIndex: 10});
    modifyMyElement (npoPlayerWindow, 'div', '', true);
    appendMyElement (npoPlayerWindow, myPlayerWindow);

    /* Create Player */
    if (npoVideo) {
      var npoVideoList = {};
      var npoDefaultVideo = 'Low Definition MP4';
      npoVideoList[npoDefaultVideo] = npoVideo;
      player = {
	'playerSocket': npoPlayerWindow,
	'playerWindow': myPlayerWindow,
	'videoList': npoVideoList,
	'videoPlay': npoDefaultVideo,
	'videoThumb': npoVideoThumb,
	'playerWidth': 580,
	'playerHeight': 350,
      };
      feature['container'] = false;
      feature['definition'] = false;
      feature['widesize'] = false;
      option['definitions'] = ['Low Definition'];
      option['containers'] = ['MP4'];
      createMyPlayer ();
    }
    else {
      showMyMessage ('!videos');
    }

  }

}

// =====RTLXL===== //

else if (page.url.indexOf('rtlxl.nl/') != -1) {

  page.win.setInterval(function() {
    var nurl = page.win.location.href;
    if (page.url != nurl) location.reload();
  }, 500);

  var myPlayerWindow;
  page.win.setTimeout(function() {

    /* Video Page */
    if (page.url == 'http://rtlxl.nl/#!/' || page.url == 'http://www.rtlxl.nl/#!/') return;
    if (page.url.indexOf('rtlxl.nl/#!/gemist') != -1 && page.url.indexOf('rtlxl.nl/#!/vooruitkijken' != -1)) return;

    /* Get Player Window */
    var rtlPlayerWindow = getMyElement ('', 'div', 'id', 'dont-turn-off-the-lights', -1, false);
    if (!rtlPlayerWindow) {
      var rtlVideoDetails = getMyElement ('', 'div', 'class', 'video-details', 0, false);
      if (rtlVideoDetails) {
	styleMyElement(rtlVideoDetails, {height: '100%'});
	rtlPlayerWindow = createMyElement ('div', '', '', '', '');
	styleMyElement(rtlPlayerWindow, {width: '852px', height: '502px', margin: '-21px 0px 20px -21px'});
	if (rtlVideoDetails.childNodes[0]) {
	  rtlVideoDetails.insertBefore(rtlPlayerWindow, rtlVideoDetails.childNodes[0]);
	}
	var rtlVideoRecom = getMyElement ('', 'ui', 'class', 'video-recom', 0, false);
	if (rtlVideoRecom) styleMyElement(rtlVideoRecom, {marginTop: '0px'});
      }
    }
    if (!rtlPlayerWindow) {
      //showMyMessage ('!player');
    }
    else {
      /* Get Videos */
      var rtlVideo;
      var rtlVideoID = page.url.replace(/.*\//, '');
      var rtlVideoPath = getMyContentGM ('http://www.rtl.nl/system/s4m/vfd/version=2/uuid=' + rtlVideoID + '/fmt=flash/', '"videopath":"(.*?)"', false);
      if (rtlVideoID && rtlVideoPath) {
	// TYPE: LD a2m/ SD a3m
	var rtlVideoPath = rtlVideoPath.replace(/.*\/flash/, '').replace(/\.f4m/, '');
	rtlVideo = 'http://pg.us.rtl.nl/rtlxl/network/a3m/progressive/' + rtlVideoPath + '.mp4';
      }

      /* My Player Window */
      myPlayerWindow = createMyElement ('div', '', '', '', '');
      styleMyElement (myPlayerWindow, {position: 'relative', width: '852px', height: '502px', backgroundColor: '#F4F4F4', zIndex: 10, margin: '0px auto'});
      modifyMyElement (rtlPlayerWindow, 'div', '', true);
      appendMyElement (rtlPlayerWindow, myPlayerWindow);

      /* Create Player */
      if (rtlVideo) {
	var rtlVideoThumb = "http://screenshots.rtl.nl/system/thumb/sz=355x200/uuid=" + rtlVideoID;
	var rtlVideoList = {};
	var rtlDefaultVideo = 'Low Definition MP4';
	rtlVideoList[rtlDefaultVideo] = rtlVideo;
	player = {
	  'playerSocket': rtlPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': rtlVideoList,
	  'videoPlay': rtlDefaultVideo,
	  'videoThumb': rtlVideoThumb,
	  'playerWidth': 852,
	  'playerHeight': 502
	};
	feature['container'] = false;
	feature['definition'] = false;
	feature['widesize'] = false;
	option['definitions'] = ['Low Definition'];
	option['containers'] = ['MP4'];
	createMyPlayer ();

	/* Fix panel */
	styleMyElement(player['playerContent'], {marginTop: '3px'});
      }
      else {
	showMyMessage ('!videos');
      }
    }

  }, 5000);

}

// =====NickelodeonNL===== //

else if (page.url.indexOf('nickelodeon.nl/') != -1) {

  /* Get Player Window */
  var nickPlayerWindow = getMyElement ('', 'div', 'class', 'col-2', 0, false);
  if (!nickPlayerWindow) {
    //showMyMessage ('!player');
  }
  else {
    /* Video Thumbnail */
    var nickVideoThumb = getMyContent (page.url, 'meta\\s+content="(.*?)"\\s+property="og:image"', false);
    if (!nickVideoThumb) nickVideoThumb = getMyContent (page.url, 'meta\\s+content=\'(.*?)\'\\s+property=\'og:image\'', false);
    if (nickVideoThumb) nickVideoThumb = nickVideoThumb.replace(/<|>/, '');

    /* Get Videos */
    var nickVideo;
    var nickMRSS = getMyContent (page.url, 'mrss\\s*:\\s*"(.*?)"', false);
    if (nickMRSS) {
      var nickVideoSource = getMyContentGM (nickMRSS, 'url=\'(.*?)\'', false);
      if (nickVideoSource) nickVideo = getMyContentGM (nickVideoSource, '(rtmp://[^\\s]*?640x.*?mp4)', false);
    }

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '552px', height: '324px', backgroundColor: '#F4F4F4', zIndex: 10, marginTop: '-405px'});
    //modifyMyElement (nickPlayerWindow, 'div', '', true);
    appendMyElement (nickPlayerWindow, myPlayerWindow);
    var nickLoader = getMyElement ('', 'img', 'class', 'loader', 0, false);
    if (nickLoader) styleMyElement(nickLoader, {display: 'none'});
    var nickRowPlayer = getMyElement ('', 'div', 'class', 'row player', 0, false);
    if (nickRowPlayer) styleMyElement(nickRowPlayer, {height: '500px'});

    /* Create Player */
    if (nickVideo) {
      var nickVideoList = {};
      var nickDefaultVideo = 'Low Definition MP4';
      nickVideoList[nickDefaultVideo] = nickVideo;
      player = {
	'playerSocket': nickPlayerWindow,
	'playerWindow': myPlayerWindow,
	'videoList': nickVideoList,
	'videoPlay': nickDefaultVideo,
	'videoThumb': nickVideoThumb,
	'playerWidth': 552,
	'playerHeight': 324,
      };
      feature['container'] = false;
      feature['definition'] = false;
      feature['widesize'] = false;
      option['definitions'] = ['Low Definition'];
      option['containers'] = ['MP4'];
      createMyPlayer ();
    }
    else {
      showMyMessage ('!videos');
    }
  }

}

// =====ORF TV Thek===== //

else if (page.url.indexOf('orf.at/program/') != -1) {

  /* Get Player Window */
  var orfPlayerWindow = getMyElement ('', 'div', 'class', 'player_viewport', 0, false);
  if (!orfPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Fixes */
    styleMyElement(orfPlayerWindow, {width: '800px', height: '400px'});
    var orfPlaylist = getMyElement ('', 'div', 'class', 'playlist_container', 0, false);
    if (orfPlaylist) styleMyElement(orfPlaylist, {width: '800px'});

    /* Video Thumbnail */
    var orfVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Videos Content */
    var orfVideosContent = getMyContent (page.url, '"sources":\\[(.*?)\\]', false);

    /* My Player Window */
    myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '640px', height: '382px', backgroundColor: '#F4F4F4', zIndex: 10, margin: '0px auto'});
    modifyMyElement (orfPlayerWindow, 'div', '', true);
    appendMyElement (orfPlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (orfVideosContent) {
      var orfVideoList = {};
      var orfVideoFound = false;
      var orfDefaultVideo = 'Low Definition MP4';
      var orfVideo;
      var orfVideos = orfVideosContent.split('}');
      for (var i = 0; i < orfVideos.length; i++) {
	if (orfVideos[i].indexOf('"delivery":"progressive","protocol":"http"') != -1) {
	  if (orfVideos[i].indexOf('"quality":"Q4A"') != -1) {
	    orfVideo = orfVideos[i].match(/"src":"(.*?)"/);
	    orfVideo = (orfVideo) ? orfVideo[1] : null;
	    if (orfVideo) {
	      if (!orfVideoFound) orfVideoFound = true;
	      orfVideoList[orfDefaultVideo] = cleanMyContent(orfVideo, false);
	    }
	  }
	  if (orfVideos[i].indexOf('"quality":"Q6A"') != -1) {
	    orfDefaultVideo = 'Standard Definition MP4';
	    orfVideo = orfVideos[i].match(/"src":"(.*?)"/);
	    orfVideo = (orfVideo) ? orfVideo[1] : null;
	    if (orfVideo) {
	      if (!orfVideoFound) orfVideoFound = true;
	      orfVideoList[orfDefaultVideo] = cleanMyContent(orfVideo, false);
	    }
	  }
	}
      }

      /* Create Player */
      if (orfVideoFound) {
	player = {
	  'playerSocket': orfPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': orfVideoList,
	  'videoPlay': orfDefaultVideo,
	  'videoThumb': orfVideoThumb,
	  'playerWidth': 640,
	  'playerHeight': 382,
	};
	feature['container'] = false;
	feature['definition'] = true;
	feature['widesize'] = false;
	option['definitions'] = ['Low Definition', 'Standard Definition'];
	option['containers'] = ['MP4'];
	createMyPlayer ();

	/* Fix panel */
	styleMyElement(player['playerContent'], {marginTop: '5px'});
      }
      else {
	showMyMessage ('!videos');
      }
    }
    else {
      showMyMessage('!content');
    }
  }

}

// =====MeteoWeb===== //

else if (page.url.indexOf('meteoweb.eu/video-gallery/') != -1) {

  /* Get Player Window */
  var mwPlayerWindow = getMyElement ('', 'div', 'class', 'videoPost', 0, false);
  if (!mwPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Video Thumbnail */
    var mwURL = page.url.replace(/.*\.eu/, '').replace(/\/$/, '').replace(/\//g, '\\/');
    var mwVideoThumb = getMyContent (page.url, 'href="' + mwURL + '".*?src="(.*?)"', false);
    if (!mwVideoThumb) mwVideoThumb = 'http://www.meteoweb.eu/wp-content/uploads/2015/04/logo_meteoweb_new.png';

    /* Get Video */
    var mwVideo = getMyContent (page.url, 'var\\s+src\\s*=\\s*"(http.*?)"', false);

    /* My Player Window */
    myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '900px', height: '530px', backgroundColor: '#F4F4F4', margin: '0px auto'});
    modifyMyElement (mwPlayerWindow, 'div', '', true);
    appendMyElement (mwPlayerWindow, myPlayerWindow);

    /* Create Player */
    if (mwVideo) {
      var mwVideoList = {};
      var mwDefaultVideo = 'Low Definition MP4';
      mwVideoList[mwDefaultVideo] = mwVideo;
      player = {
	'playerSocket': mwPlayerWindow,
	'playerWindow': myPlayerWindow,
	'videoList': mwVideoList,
	'videoPlay': mwDefaultVideo,
	'videoThumb': mwVideoThumb,
	'playerWidth': 900,
	'playerHeight': 530,
      };
      feature['container'] = false;
      feature['definition'] = true;
      feature['widesize'] = false;
      option['definitions'] = ['Low Definition'];
      option['containers'] = ['MP4'];
      createMyPlayer ();

      /* Fix panel */
      styleMyElement(player['playerContent'], {marginTop: '5px'});
    }
    else {
      showMyMessage ('!videos');
    }
  }

}

// =====LiveLeak===== //

else if (page.url.indexOf('liveleak.com/view?i=') != -1) {

  /* Get Player Window */
  var llPlayerWindow = getMyElement ('', 'div', 'id', 'wrapper', -1, false);
  if (!llPlayerWindow) {
    //showMyMessage ('!player');
  }
  else {
    /* Video Thumbnail */
    var llVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Videos Content */
    var llVideosContent = getMyContent (page.url, 'config:\\s*"(.*?)"', false);

    /* My Player Window */
    myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '625px', height: '374px', backgroundColor: '#F4F4F4', margin: '0px auto'});
    modifyMyElement (llPlayerWindow, 'div', '', true);
    appendMyElement (llPlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (llVideosContent) {
      var llVideoList = {};
      var llVideoFound = false;
      var llVideoFormats = {'.avi': 'Low Definition FLV', '_base': 'Low Definition MP4', '_270p': 'Low Definition MP4', '_720p': 'High Definition MP4'};
      var llVideo;
      var llVideos = llVideosContent.match(new RegExp('file_url=(.*?)&', 'g'));
      if (llVideos) {
	for (var i = 0; i < llVideos.length; i++) {
	  llVideo = cleanMyContent(llVideos[i].replace('file_url=', ''), true);
	  if (llVideo) {
	    for (var vCode in llVideoFormats) {
	      if (llVideo.indexOf(vCode) != -1) {
		if (!llVideoFound) llVideoFound = true;
		llVideoList[llVideoFormats[vCode]] = llVideo;
	      }
	    }
	  }
	}
      }

      if (llVideoFound) {
	/* Get Watch Sidebar */
	var llSidebarWindow = getMyElement ('', 'div', 'id', 'rightcol', -1, false);
	var llSidebarMargin = (llPlayerWindow.offsetTop) ? llPlayerWindow.offsetTop + 500 : 1000;

	/* Create Player */
	var llDefaultVideo = (llVideoList['Low Definition MP4']) ? 'Low Definition MP4' : 'Low Definition FLV';
	player = {
	  'playerSocket': llPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': llVideoList,
	  'videoPlay': llDefaultVideo,
	  'videoThumb': llVideoThumb,
	  'playerWidth': 625,
	  'playerHeight': 374,
	  'playerWideWidth': 940,
	  'playerWideHeight': 552,
	  'sidebarWindow': llSidebarWindow,
	  'sidebarMarginNormal': 0,
	  'sidebarMarginWide': llSidebarMargin
	};
	feature['container'] = false;
	option['definitions'] = ['Low Definition', 'High Definition'];
	option['containers'] = ['MP4'];
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

// =====UnblockYouTube===== //

else if (page.url.indexOf('unblockyoutube.co.uk/permalink.php?url=') != -1) {

  /* Get Player Window */
  var uyPlayerWindow = getMyElement ('', 'div', 'id', 'player-api', -1, false);
  if (!uyPlayerWindow) {
    showMyMessage ('!player');
  }
  else {
    /* Video Thumbnail */
    var uyVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);
    if (uyVideoThumb) uyVideoThumb = 'https://img.youtube.com' + uyVideoThumb;

    /* Get Video Title */
    var uyVideoTitle = getMyContent (page.url, 'meta\\s+itemprop="name"\\s+content="(.*?)"', false);

    /* Get Videos Content */
    var uyVideosContent = getMyElement ('', 'div', 'class', 'video-js', 0, true);

    /* Player Size */
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
	ytSidebarMarginWide = 370;
      }
      else if (ytScreenWidth >= 1294 && ytScreenHeight >= 630) {
	ytPlayerWidth = 854;
	ytPlayerHeight = 502;
	ytPlayerWideWidth = 1280;
	ytPlayerWideHeight = 742;
	ytSidebarMarginWide = 130;
      }
      else {
	ytPlayerWidth = 640;
	ytPlayerHeight = 382;
	ytPlayerWideWidth = 1066;
	ytPlayerWideHeight = 622;
	ytSidebarMarginWide = 10;
      }
    }

    /* Get Sizes */
    ytSizes();

    /* My Player Window */
    myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: ytPlayerWidth + 'px', height: ytPlayerHeight + 'px', backgroundColor: '#FFFFFF'});
    styleMyElement (uyPlayerWindow, {backgroundColor: '#F1F1F1'});
    modifyMyElement (uyPlayerWindow, 'div', '', false, true);
    appendMyElement (uyPlayerWindow, myPlayerWindow);

    var blockObject = uyPlayerWindow;
    var blockInterval = 20;
    page.win.setInterval(function() {
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

    /* Update Sizes */
    page.win.addEventListener('resize', function() {
      ytSizes();
      player['playerWidth'] = ytPlayerWidth;
      player['playerHeight'] = ytPlayerHeight;
      player['playerWideWidth'] = ytPlayerWideWidth;
      player['playerWideHeight'] = ytPlayerWideHeight;
      player['sidebarMarginWide'] = ytSidebarMarginWide;
      resizeMyPlayer('widesize');
    }, false);

    /* Sidebar Window */
    var ytSidebarWindow = getMyElement ('', 'div', 'id', 'watch7-sidebar', -1, false);
    if (ytSidebarWindow) styleMyElement (ytSidebarWindow, {marginTop: '-400px'});

    /* Get Videos */
    if (uyVideosContent) {
      var uyVideo = uyVideosContent.match(/src="(.*?)"\s+type="video\/mp4"/);
      uyVideo = (uyVideo) ? uyVideo[1].replace(/&amp;/g, '&') : null;

      if (uyVideo) {
	var uyVideoList = {};
	var uyDefaultVideo = 'Low Definition MP4';
	var uyQuality = getMyContent (page.url, 'Select quality:</b> (.*?) <a', false);
	if (uyQuality && uyQuality == '720p') uyDefaultVideo = 'High Definition MP4';
	uyVideoList[uyDefaultVideo] = uyVideo;
	player = {
	  'playerSocket': uyPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': uyVideoList,
	  'videoPlay': uyDefaultVideo,
	  'videoThumb': uyVideoThumb,
	  'videoTitle': uyVideoTitle,
	  'playerWidth': ytPlayerWidth,
	  'playerHeight': ytPlayerHeight,
	  'playerWideWidth': ytPlayerWideWidth,
	  'playerWideHeight': ytPlayerWideHeight,
	  'sidebarWindow': ytSidebarWindow,
	  'sidebarMarginNormal': -400,
	  'sidebarMarginWide': ytSidebarMarginWide
	};
	feature['definition'] = false;
	feature['container'] = false;
	createMyPlayer();
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

// =====JeuxVideo===== //

else if (page.url.indexOf('jeuxvideo.com/videos') != -1) {

  /* Get Player Window */
  var jvPlayerWindow = getMyElement ('', 'div', 'class', 'player-contenu', 0, false);
  if (!jvPlayerWindow) {
    //showMyMessage ('!player');
  }
  else {
    /* Video Thumbnail */
    var jvVideoThumb = getMyContent (page.url, 'meta\\s+property="og:image"\\s+content="(.*?)"', false);

    /* Get Videos Content */
    var jvVideosContent;
    var jvVideoID = getMyContent (page.url, '/iframe/(\\d+)', false);
    if (jvVideoID) {
      jvVideosContent = getMyContent (page.win.location.protocol + '//' + page.win.location.hostname + '/contenu/medias/video.php?q=config&id=' + jvVideoID, '"sources":\\[(.*?)\\]', false);
    }

    /* My Player Window */
    myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '625px', height: '374px', backgroundColor: '#F4F4F4', margin: '0px auto'});
    modifyMyElement (jvPlayerWindow, 'div', '', true);
    styleMyElement (jvPlayerWindow, {height: '100%'});
    appendMyElement (jvPlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (jvVideosContent) {
      var jvVideoList = {};
      var jvVideoFound = false;
      var jvVideoFormats = {'272p': 'Low Definition MP4', '400p': 'Standard Definition MP4', '720p': 'High Definition MP4', '1080p': 'Full High Definition MP4'};
      var jvVideo, jvPattern
      for (var vCode in jvVideoFormats) {
	jvPattern = '"label":"' + vCode + '","file":"(.*?)"';
	jvVideo = jvVideosContent.match(jvPattern);
	jvVideo = (jvVideo) ? jvVideo[1] : null;
	if (jvVideo) {
	  if (!jvVideoFound) jvVideoFound = true;
	  jvVideoList[jvVideoFormats[vCode]] = cleanMyContent(jvVideo, false);
	}
      }

      if (jvVideoFound) {
	/* Get Watch Sidebar */
	var jvSidebarWindow = getMyElement ('', 'div', 'class', 'col-droite-player', 0, false);

	/* Create Player */
	var jvDefaultVideo = 'Low Definition MP4';
	player = {
	  'playerSocket': jvPlayerWindow,
	  'playerWindow': myPlayerWindow,
	  'videoList': jvVideoList,
	  'videoPlay': jvDefaultVideo,
	  'videoThumb': jvVideoThumb,
	  'playerWidth': 625,
	  'playerHeight': 374,
	  'playerWideWidth': 940,
	  'playerWideHeight': 552,
	  'sidebarWindow': jvSidebarWindow,
	  'sidebarMarginNormal': -370,
	  'sidebarMarginWide': 160
	};
	feature['container'] = false;
	option['definitions'] = ['Low Definition', 'Standard Definition', 'High Definition', 'Full High Definition'];
	option['containers'] = ['MP4'];
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

// =====IlFattoQuotidiano===== //

else if (page.url.indexOf('ilfattoquotidiano.it/') != -1) {

  /* Get Player Window */
  var ifqPlayerWindow = getMyElement ('', 'div', 'class', 'internal-player', 0, false);
  if (!ifqPlayerWindow) {
    //showMyMessage ('!player');
  }
  else {
    /* Get Videos Content URL */
    var ifqPlayerID, ifqVideoPlayer;
    var ifqVideoData = getMyContent (page.url, 'meta\\s+property="og:video"\\s+content="(.*?)"', false);
    if (ifqVideoData) {
      ifqPlayerID = ifqVideoData.match(/playerID=(\d+)/);
      ifqPlayerID = (ifqPlayerID) ? ifqPlayerID[1] : null;
      ifqVideoPlayer = ifqVideoData.match(/videoId=(\d+)/);
      ifqVideoPlayer = (ifqVideoPlayer) ? ifqVideoPlayer[1] : null;
    }

    /* Get Videos Content */
    var ifqVideosContentURL, ifqVideosContent;
    if (ifqPlayerID && ifqVideoPlayer) {
      ifqVideosContentURL = 'http://c.brightcove.com/services/viewer/htmlFederated?playerID=' + ifqPlayerID + '&@videoPlayer=' + ifqVideoPlayer;
      ifqVideosContent = getMyContentGM(ifqVideosContentURL, 'TEXT', false);
    }

    /* My Player Window */
    var myPlayerWindow = createMyElement ('div', '', '', '', '');
    styleMyElement (myPlayerWindow, {position: 'relative', width: '630px', height: '380px', backgroundColor: '#F4F4F4'});
    modifyMyElement (ifqPlayerWindow, 'div', '', true);
    styleMyElement (ifqPlayerWindow, {height: '100%'});
    appendMyElement (ifqPlayerWindow, myPlayerWindow);

    /* Get Videos */
    if (ifqVideosContent) {
      var ifqVideoThumb = ifqVideosContent.match(/"thumbnailURL":"(.*?)"/);
      ifqVideoThumb = (ifqVideoThumb) ? cleanMyContent(ifqVideoThumb[1], false) : null;
      var ifqVideos = ifqVideosContent.match(/"renditions":\[\{(.*?)\}\]/);
      ifqVideos = (ifqVideos) ? ifqVideos[1] : null;
      var ifqVideoFormats = {'360': 'Low Definition MP4', '368': 'Low Definition MP4', '404': 'Standard Definition MP4'};
      var ifqVideoFound, ifqVideo;
      var ifqVideoList = {};
      if (ifqVideos) {
	var ifqVideos = ifqVideos.split('},');
	for (var i = 0; i < ifqVideos.length; i++) {
	  for (var c in ifqVideoFormats) {
	    if (ifqVideos[i].indexOf('"frameHeight":' + c) != -1) {
	      ifqVideo = ifqVideos[i].match(/"defaultURL":"(.*?)"/);
	      ifqVideo = (ifqVideo) ? cleanMyContent(ifqVideo[1]) : null;
	      if (ifqVideo) {
		ifqVideoList[ifqVideoFormats[c]] = ifqVideo;
		if (!ifqVideoFound) ifqVideoFound = true;
	      }
	    }
	  }
	}
      }

      if (ifqVideoFound) {
	/* Create Player */
	var ifqDefaultVideo = 'Low Definition MP4';
	player = {'playerSocket': ifqPlayerWindow, 'playerWindow': myPlayerWindow, 'videoList': ifqVideoList, 'videoPlay': ifqDefaultVideo, 'videoThumb': ifqVideoThumb, 'playerWidth': 630, 'playerHeight': 380};
	feature['container'] = false;
	feature['widesize'] = false;
	option['definition'] = 'LD';
	option['container'] = 'MP4';
	option['definitions'] = ['Low Definition', 'Standard Definition'];
	option['containers'] = ['MP4'];
	createMyPlayer ();

	/* Fix panel */
	styleMyElement(player['playerContent'], {marginTop: '9px'});
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
