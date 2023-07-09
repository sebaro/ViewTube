// ==UserScript==
// @name            ViewTube
// @version         2023.07.07
// @description     Watch videos from video sharing websites with extra options.
// @author          sebaro
// @namespace       http://sebaro.pro/viewtube
// @downloadURL     https://gitlab.com/sebaro/viewtube/raw/master/viewtube.user.js
// @updateURL       https://gitlab.com/sebaro/viewtube/raw/master/viewtube.user.js
// @icon            https://gitlab.com/sebaro/viewtube/raw/master/viewtube.png
// @include         http://youtube.com*
// @include         http://www.youtube.com*
// @include         https://youtube.com*
// @include         https://www.youtube.com*
// @include         http://m.youtube.com*
// @include         https://m.youtube.com*
// @include         http://dailymotion.com*
// @include         http://www.dailymotion.com*
// @include         https://dailymotion.com*
// @include         https://www.dailymotion.com*
// @include         http://vimeo.com*
// @include         http://www.vimeo.com*
// @include         https://vimeo.com*
// @include         https://www.vimeo.com*
// @include         http://veoh.com*
// @include         http://www.veoh.com*
// @include         https://veoh.com*
// @include         https://www.veoh.com*
// @include         http://imdb.com*
// @include         http://www.imdb.com*
// @include         https://imdb.com*
// @include         https://www.imdb.com*
// @noframes
// @grant           none
// @run-at          document-end
// ==/UserScript==


/*

	Copyright (C) 2010 - 2023 Sebastian Luncan

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

	Website: http://sebaro.pro/viewtube
	Contact: http://sebaro.pro/contact

*/


(function() {


// Don't run on frames or iframes
if (window.top != window.self) return;


// ==========Variables========== //

// Userscript
var userscript = 'ViewTube';
var website = 'http://sebaro.pro/viewtube';
var contact = 'http://sebaro.pro/contact';

// Page
var page = {win: window, doc: window.document, body: window.document.body, url: window.location.href, site: window.location.hostname.match(/([^.]+)\.[^.]+$/)[1]};

// Player
var player = {};
var myPlayerWindow;
var myPlayerPanelHeight = 30;

// Features/Options
var feature = {'definition': true, 'container': true, 'openpagelink': true, 'autoplay': true, 'subtitles': false, 'playdash': false, 'widesize': true, 'fullsize': true};
var option = {'embed': 'Video', 'media': 'Auto', 'definition': 'High Definition', 'container': 'MP4', 'openpagelink': false, 'autoplay': false, 'subtitles': 'None', 'playdash': false, 'widesize': false, 'fullsize': false};

// Embed
var embedtypes = ['Video', 'Object', 'Embed', 'Protocol'];
var embedcontent = {
	'Video': '<br><br>The video should be loading. If it doesn\'t load, make sure your browser supports HTML5\'s Video and this video codec. If you think it\'s a script issue, please report it <a href="' + contact + '" style="color:#00892C">here</a>.',
	'Object': '<br><br>The video should be loading. If it doesn\'t load, make sure a video plugin is installed. If you think it\'s a script issue, please report it <a href="' + contact + '" style="color:#00892C">here</a>.<param name="scale" value="aspect"><param name="stretchtofit" value="true"><param name="autostart" value="true"><param name="autoplay" value="true">',
	'Embed': '<br><br>The video should be loading. If it doesn\'t load, make sure a video plugin is installed. If you think it\'s a script issue, please report it <a href="' + contact + '" style="color:#00892C">here</a>.<param name="scale" value="aspect"><param name="stretchtofit" value="true"><param name="autostart" value="true"><param name="autoplay" value="true">'
};

// Media
var mediatypes = {'MP4': 'video/mp4', 'WebM': 'video/webm', 'M3U8': 'application/x-mpegURL', 'M3U8*': 'application/vnd.apple.mpegURL', 'VLC': 'application/x-vlc-plugin', 'VLC*': 'application/x-vlc-plugin'}
if (navigator.platform.indexOf('Win') != -1) {
	mediatypes['WMP'] = 'application/x-ms-wmp';
	mediatypes['WMP*'] = 'application/x-mplayer2';
	mediatypes['QT'] = 'video/quicktime';
}
else if (navigator.platform.indexOf('Mac') != -1) {
	mediatypes['QT'] = 'video/quicktime';
}
else {
	mediatypes['Totem'] = 'application/x-totem-plugin';
	mediatypes['Xine'] = 'application/x-xine-plugin';
}
var mediakeys = ['Auto'];
for (var mediakey in mediatypes) {
	mediakeys.push(mediakey);
}

// Sources
var sources = {};

// Intervals
var intervals = [];


// ==========Functions========== //

function createMyElement(type, properties, event, listener) {
	var obj = page.doc.createElement(type);
	for (var propertykey in properties) {
		if (propertykey == 'target') obj.setAttribute('target', properties[propertykey]);
		else obj[propertykey] = properties[propertykey];
	}
	if (event && listener) {
		obj.addEventListener(event, listener, false);
	}
	return obj;
}

function modifyMyElement(obj, properties, event, listener) {
	for (var propertykey in properties) {
		if (propertykey == 'target') obj.setAttribute('target', properties[propertykey]);
		else obj[propertykey] = properties[propertykey];
	}
	if (event && listener) {
		obj.addEventListener(event, listener, false);
	}
}

function styleMyElement(obj, styles) {
	for (var stylekey in styles) {
		obj.style[stylekey] = styles[stylekey];
	}
}

function cleanMyElement(obj, hide) {
	if (hide) {
		for (var i = 0; i < obj.children.length; i++) {
			styleMyElement(obj.children[i], {display: 'none'});
		}
	}
	else {
		if (obj.hasChildNodes()) {
			while (obj.childNodes.length >= 1) {
				obj.removeChild(obj.firstChild);
			}
		}
	}
}

function getMyElement(obj, type, from, value, child, content) {
	var getObj, chObj, coObj;
	var pObj = (!obj) ? page.doc : obj;
	if (type == 'body') {
		getObj = pObj.body;
	}
	else {
		if (from == 'id') getObj = pObj.getElementById(value);
		else if (from == 'class') getObj = pObj.getElementsByClassName(value);
		else if (from == 'tag') getObj = pObj.getElementsByTagName(type);
		else if (from == 'ns') {
			if (pObj.getElementsByTagNameNS) getObj = pObj.getElementsByTagNameNS(value, type);
		}
		else if (from == 'query') {
			if (child > 0) {
				if (pObj.querySelectorAll) getObj = pObj.querySelectorAll(value);
			}
			else {
				if (pObj.querySelector)	getObj = pObj.querySelector(value);
			}
		}
	}
	chObj = (getObj && child >= 0) ? getObj[child] : getObj;
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

function appendMyElement(parent, child) {
	parent.appendChild(child);
}

function removeMyElement(parent, child) {
	parent.removeChild(child);
}

function replaceMyElement(parent, orphan, child) {
	parent.replaceChild(orphan, child);
}

function cleanMyContent(content, unesc, extra) {
	if (unesc) content = unescape(content);
	content = content.replace(/\\u0025/g, '%');
	content = content.replace(/\\u0026/g, '&');
	content = content.replace(/\\u002F/g, '/');
	content = content.replace(/\\/g, '');
	content = content.replace(/\n/g, '');
	if (extra) {
		content = content.replace(/&quot;/g, '\'').replace(/&#34;/g, '\'').replace(/&#034;/g, '\'').replace(/["“”„‘’]/g, '\'');
		content = content.replace(/&#39;/g, '\'').replace(/&#039;/g, '\'').replace(/'/g, '\'');
		content = content.replace(/&amp;/g, 'and').replace(/&/g, 'and');
		content = content.replace(/[^\x20-\xFF]/g, '');
		content = content.replace(/[\/\|]/g, '-');
		content = content.replace(/[<>#:\*\?]/g, '');
		content = content.replace(/^\s+|\s+$/, '').replace(/\s+/g, ' ').replace(/\.+$/g, '');
	}
	return content;
}

function parseMyContent(content, pattern) {
	var parse, response;
	content = content.replace(/(\r\n|\n|\r)/gm, '');
	parse = content.match(pattern);
	if (parse) {
		response = (/g$/.test(pattern)) ? parse : parse[1];
	}
	return response;
}

function getMyContent(url, pattern) {
	var urle, data, headers, xhr, response;
	if (url.indexOf('|') != -1) {
		headers = url.split('|')[2];
		data = url.split('|')[1];
		url = url.split('|')[0];
	}
	if (data) {
		//console.log('ViewTube: POST [' + pattern + '] ' + url + '\n' + data + '\n' + headers);
		urle = btoa(url + data + headers);
		if (!sources[urle]) {
			xhr = new XMLHttpRequest();
			xhr.open('POST', url, false);
			if (data.indexOf('{') != -1) {
				xhr.setRequestHeader('Content-Type', 'application/json');
			}
			else {
				xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
			}
			if (headers) {
				headers = JSON.parse(headers);
				if (headers['withCredentials']) {
					xhr.withCredentials = true;
					delete headers['withCredentials']
				}
				for (var header in headers) {
					xhr.setRequestHeader(header, headers[header]);
				}
			}
			try {
				xhr.send(data);
			}
			catch(e) {
			}
			sources[urle] = (xhr.responseText) ? xhr.responseText : xhr.responseXML;
		}
	}
	else {
		//console.log('ViewTube: GET [' + pattern + '] ' + url + '\n' + headers);
		urle = btoa(url + headers);
		if (!sources[urle]) {
			xhr = new XMLHttpRequest();
			xhr.open('GET', url, false);
			if (headers) {
				headers = JSON.parse(headers);
				if (headers['withCredentials']) {
					xhr.withCredentials = true;
					delete headers['withCredentials']
				}
				for (var header in headers) {
					xhr.setRequestHeader(header, headers[header]);
				}
			}
			try {
				xhr.send();
			}
			catch(e) {
			}
			sources[urle] = (xhr.responseText) ? xhr.responseText : xhr.responseXML;
		}
	}
	if (sources[urle]) {
		response = sources[urle];
		if (pattern) {
			response = parseMyContent(response, pattern);
		}
	}
	return response;
}

function createMyPlayer() {
	/* The Content */
	player['contentWidth'] = player['playerWidth'];
	player['contentHeight'] = player['playerHeight'] - myPlayerPanelHeight;
	player['playerContent'] = createMyElement('div');
	styleMyElement(player['playerContent'], {width: player['contentWidth'] + 'px', height: player['contentHeight'] + 'px', position: 'relative', color: '#AD0000', backgroundColor: '#000000', fontFamily: 'sans-serif', fontSize: '14px', fontWeight: 'bold', textAlign: 'center'});
	appendMyElement(player['playerWindow'], player['playerContent']);

	/* The Video Thumbnail */
	if (player['videoThumb']) {
		player['contentImage'] = createMyElement('img', {src: player['videoThumb'], title: '{Click to start video playback}'}, 'click', function() {
			if (player['showsOptions'] && option['embed'] != 'Protocol') {
				player['showsOptions'] = false;
			}
			playMyVideo(!player['isPlaying']);
		});
		styleMyElement(player['contentImage'], {maxWidth: '100%', maxHeight: '100%', position: 'absolute', top: '0px', left: '0px', right: '0px', bottom: '0px', margin: 'auto', border: '0px', cursor: 'pointer'});
		player['contentImage'].addEventListener('load', function() {
			if (page.site == 'youtube') {
				if (this.width < 300) {
					player['videoThumb'] = this.src.replace('maxresdefault', 'mqdefault');
					this.src = player['videoThumb'];
				}
			}
			if (this.width/this.height >= player['contentWidth']/player['contentHeight']) {
				this.style.width = '100%';
			}
			else {
				this.style.height = '100%';
			}
		}, false);
	}

	/* The Panel */
	player['playerPanel'] = createMyElement('div');
	styleMyElement(player['playerPanel'], {width: player['playerWidth'] + 'px', height: myPlayerPanelHeight + 'px', fontFamily: 'sans-serif', fontSize: '10px', lineHeight: (myPlayerPanelHeight - 2) + 'px', backgroundColor: '#000000', textAlign: 'center', boxSizing: 'content-box'});
	appendMyElement(player['playerWindow'], player['playerPanel']);

	/* Panel Logo */
	player['panelLogo'] = createMyElement('div', {title: '{ViewTube: click to visit the script wesite}', textContent: userscript}, 'click', function() {
		page.win.location.href = website;
	});
	styleMyElement(player['panelLogo'], {display: 'inline-block', color: '#E24994', fontSize: '14px', fontWeight: 'bold', border: '1px solid #E24994', borderRadius: '2px', padding: '0px 4px', lineHeight: 'normal', verticalAlign: 'middle', marginRight: '10px', cursor: 'pointer', boxSizing: 'content-box'});
	appendMyElement(player['playerPanel'], player['panelLogo']);

	/* Panel Video Menu */
	player['videoMenu'] = createMyElement('select', {title: '{Videos: select the video format for playback}'}, 'change', function() {
		player['videoPlay'] = this.value;
		if (player['isSaving']) {
			cleanMyElement(player['buttonSaveLink'], false);
			player['isSaving'] = false;
		}
		if (player['isPlaying']) playMyVideo(option['autoplay']);
	});
	styleMyElement(player['videoMenu'], {display: 'inline-block', width: 'auto', height: '20px', fontFamily: 'inherit', fontSize: '14px', fontWeight: 'bold', padding: '0px 3px', overflow: 'hidden', border: '1px solid #777777', color: '#CCCCCC', backgroundColor: '#000000', lineHeight: 'normal', verticalAlign: 'middle', cursor: 'pointer', boxSizing: 'content-box'});
	appendMyElement(player['playerPanel'], player['videoMenu']);
	if (feature['openpagelink']) {
		player['videoList']['Page Link'] = page.url;
	}
	var videosProgressive = [];
	var videosAdaptiveHLS = [];
	var videosAdaptiveDASHVideo = [];
	var videosAdaptiveDASHAudio = [];
	var videosAdaptiveDASHMuxed = [];
	var videosExtra = [];
	for (var videoCode in player['videoList']) {
		if (videoCode.indexOf('Video') != -1) videosAdaptiveDASHVideo.push(videoCode);
		else if (videoCode.indexOf('Audio') != -1) videosAdaptiveDASHAudio.push(videoCode);
		else if (player['videoList'][videoCode] == 'DASH') videosAdaptiveDASHMuxed.push(videoCode);
		else if (videoCode.indexOf('M3U8') != -1) videosAdaptiveHLS.push(videoCode);
		else if (videoCode.indexOf('MP4') != -1 || videoCode.indexOf('WebM') != -1) videosProgressive.push(videoCode);
		else videosExtra.push(videoCode);
	}
	if (videosProgressive.length > 0) {
		for (var i = 0; i < videosProgressive.length; i++) {
			player['videoItem'] = createMyElement('option', {value: videosProgressive[i], textContent: videosProgressive[i]});
			styleMyElement(player['videoItem'], {fontSize: '14px', fontWeight: 'bold', cursor: 'pointer'});
			appendMyElement(player['videoMenu'], player['videoItem']);
		}
	}
	if (videosAdaptiveHLS.length > 0) {
		player['videoItem'] = createMyElement('option', {value: 'HLS', textContent: 'HLS'});
		styleMyElement(player['videoItem'], {fontSize: '14px', fontWeight: 'bold', color: '#FF0000'});
		player['videoItem'].disabled = 'disabled';
		appendMyElement(player['videoMenu'], player['videoItem']);
		for (var i = 0; i < videosAdaptiveHLS.length; i++) {
			player['videoItem'] = createMyElement('option', {value: videosAdaptiveHLS[i], textContent: videosAdaptiveHLS[i]});
			styleMyElement(player['videoItem'], {fontSize: '14px', fontWeight: 'bold', cursor: 'pointer'});
			appendMyElement(player['videoMenu'], player['videoItem']);
		}
	}
	if (videosAdaptiveDASHVideo.length > 0) {
		player['videoItem'] = createMyElement('option', {value: 'DASH (Video Only)', textContent: 'DASH (Video Only)'});
		styleMyElement(player['videoItem'], {fontSize: '14px', fontWeight: 'bold', color: '#FF0000'});
		player['videoItem'].disabled = 'disabled';
		appendMyElement(player['videoMenu'], player['videoItem']);
		for (var i = 0; i < videosAdaptiveDASHVideo.length; i++) {
			player['videoItem'] = createMyElement('option', {value: videosAdaptiveDASHVideo[i], textContent: videosAdaptiveDASHVideo[i]});
			styleMyElement(player['videoItem'], {fontSize: '14px', fontWeight: 'bold', cursor: 'pointer'});
			appendMyElement(player['videoMenu'], player['videoItem']);
		}
	}
	if (videosAdaptiveDASHAudio.length > 0) {
		player['videoItem'] = createMyElement('option', {value: 'DASH (Audio Only)', textContent: 'DASH (Audio Only)'});
		styleMyElement(player['videoItem'], {fontSize: '14px', fontWeight: 'bold', color: '#FF0000'});
		player['videoItem'].disabled = 'disabled';
		appendMyElement(player['videoMenu'], player['videoItem']);
		for (var i = 0; i < videosAdaptiveDASHAudio.length; i++) {
			player['videoItem'] = createMyElement('option', {value: videosAdaptiveDASHAudio[i], textContent: videosAdaptiveDASHAudio[i]});
			styleMyElement(player['videoItem'], {fontSize: '14px', fontWeight: 'bold', cursor: 'pointer'});
			appendMyElement(player['videoMenu'], player['videoItem']);
		}
	}
	if (videosAdaptiveDASHMuxed.length > 0) {
		feature['playdash'] = true;
		if (option['playdash']) {
			player['videoItem'] = createMyElement('option', {value: 'DASH (Video With Audio)', textContent: 'DASH (Video With Audio)'});
			styleMyElement(player['videoItem'], {fontSize: '14px', fontWeight: 'bold', color: '#FF0000'});
			player['videoItem'].disabled = 'disabled';
			appendMyElement(player['videoMenu'], player['videoItem']);
			for (var i = 0; i < videosAdaptiveDASHMuxed.length; i++) {
				player['videoItem'] = createMyElement('option', {value: videosAdaptiveDASHMuxed[i], textContent: videosAdaptiveDASHMuxed[i]});
				styleMyElement(player['videoItem'], {fontSize: '14px', fontWeight: 'bold', cursor: 'pointer'});
				appendMyElement(player['videoMenu'], player['videoItem']);
			}
		}
		else {
			for (var videoCode in player['videoList']) {
				if (player['videoList'][videoCode] == 'DASH') delete player['videoList'][videoCode];
			}
		}
	}
	if (videosExtra.length > 0) {
		player['videoItem'] = createMyElement('option', {value: 'Extra', textContent: 'Extra'});
		styleMyElement(player['videoItem'], {fontSize: '14px', fontWeight: 'bold', color: '#FF0000'});
		player['videoItem'].disabled = 'disabled';
		appendMyElement(player['videoMenu'], player['videoItem']);
		for (var i = 0; i < videosExtra.length; i++) {
			player['videoItem'] = createMyElement('option', {value: videosExtra[i], textContent: videosExtra[i]});
			styleMyElement(player['videoItem'], {fontSize: '14px', fontWeight: 'bold', cursor: 'pointer'});
			appendMyElement(player['videoMenu'], player['videoItem']);
		}
	}

	/* Panel Options Button */
	player['buttonOptions'] = createMyElement('div', {title: '{Options: click to show the available options}'}, 'click', function() {
		if (player['showsOptions']) {
			player['showsOptions'] = false;
			playMyVideo(option['autoplay']);
		}
		else {
			player['showsOptions'] = true;
			playMyVideo(false);
			createMyOptions();
		}
	});
	styleMyElement(player['buttonOptions'], {width: '1px', height: '8px', borderTop: '4px dotted #CCCCCC', borderBottom: '4px dotted #CCCCCC', borderLeft: '4px dotted #CCCCCC', display: 'inline-block', lineHeight: 'normal', verticalAlign: 'middle', marginLeft: '20px', cursor: 'pointer', boxSizing: 'content-box'});
	appendMyElement(player['playerPanel'], player['buttonOptions']);

	/* Panel Play Button */
	player['buttonPlay'] = createMyElement('div', {title: '{Play/Stop: click to start/stop video playback}'}, 'click', function() {
		if (player['showsOptions'] && option['embed'] != 'Protocol') {
			player['showsOptions'] = false;
		}
		playMyVideo(!player['isPlaying']);
	});
	styleMyElement(player['buttonPlay'], {width: '0px', height: '0px', display: 'inline-block', borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: '15px solid #CCCCCC', lineHeight: 'normal', verticalAlign: 'middle', marginLeft: '20px', cursor: 'pointer', boxSizing: 'content-box'});
	appendMyElement(player['playerPanel'], player['buttonPlay']);

	/* Panel Save Button */
	player['buttonSave'] = createMyElement('div', {title: '{Save: click to download the selected video format}'}, 'click', function() {
		saveMyVideo();
	});
	styleMyElement(player['buttonSave'], {width: '0px', height: '0px', display: 'inline-block', borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '15px solid #CCCCCC', lineHeight: 'normal', verticalAlign: 'middle', marginTop: '1px', marginLeft: '20px', cursor: 'pointer', boxSizing: 'content-box'});
	appendMyElement(player['playerPanel'], player['buttonSave']);

	/* Panel Save Button Link */
	player['buttonSaveLink'] = createMyElement('div', {title: '{Save: right click & save as to download the selected video format}'});
	styleMyElement(player['buttonSaveLink'], {display: 'inline-block', color: '#CCCCCC', fontSize: '14px', fontWeight: 'bold', lineHeight: 'normal', verticalAlign: 'middle', marginLeft: '5px', marginBottom: '2px', boxSizing: 'content-box'});
	appendMyElement(player['playerPanel'], player['buttonSaveLink']);

	/* Panel Widesize Button */
	if (!player['playerWideWidth']) {
		feature['widesize'] = false;
		option['widesize'] = false;
	}
	if (feature['widesize']) {
		player['buttonWidesize'] = createMyElement('div', {title: '{Widesize: click to enter player widesize or return to normal size}'}, 'click', function() {
			option['widesize'] = (option['widesize']) ? false : true;
			setMyOptions('widesize', option['widesize']);
			resizeMyPlayer('widesize');
		});
		styleMyElement(player['buttonWidesize'], {border: '2px solid #CCCCCC', display: 'inline-block', lineHeight: 'normal', verticalAlign: 'middle', marginLeft: '20px', cursor: 'pointer', boxSizing: 'content-box'});
		if (option['widesize']) styleMyElement(player['buttonWidesize'], {width: '16px', height: '8px'});
		else styleMyElement(player['buttonWidesize'], {width: '20px', height: '10px'});
		appendMyElement(player['playerPanel'], player['buttonWidesize']);
	}

	/* Panel Fullsize Button */
	if (feature['fullsize']) {
		player['buttonFullsize'] = createMyElement('div', {title: '{Fullsize: click to enter player fullsize or return to normal size}'}, 'click', function() {
			option['fullsize'] = (option['fullsize']) ? false : true;
			setMyOptions('fullsize', option['fullsize']);
			resizeMyPlayer('fullsize');
		});
		styleMyElement(player['buttonFullsize'], {width: '20px', height: '14px', display: 'inline-block', lineHeight: 'normal', verticalAlign: 'middle', marginLeft: '20px', cursor: 'pointer', boxSizing: 'content-box'});
		if (option['fullsize']) styleMyElement(player['buttonFullsize'], {border: '2px solid #CCCCCC'});
		else styleMyElement(player['buttonFullsize'], {border: '2px dashed #CCCCCC'});
		appendMyElement(player['playerPanel'], player['buttonFullsize']);
	}

	/* Definitions Option */
	if (player['videoDefinitions'].length < 2) feature['definition'] = false;

	/* Containers Option */
	if (player['videoContainers'].length < 2) feature['container'] = false;

	/* Subtitles */
	if (player['subtitlesList']) {
		player['subtitlesLanguages'] = [];
		for (var subtitlesLanguage in player['subtitlesList']) {
			player['subtitlesLanguages'].push(subtitlesLanguage);
		}
		if (player['subtitlesLanguages'].length > 0) {
			player['subtitlesLanguages'].unshift('None');
			feature['subtitles'] = true;
			if (!player['subtitlesList'][option['subtitles']]) {
				option['subtitles'] = 'None';
			}
		}
		else {
			feature['subtitles'] = false;
			option['subtitles'] = 'None';
		}
	}
	else {
		feature['subtitles'] = false;
		option['subtitles'] = 'None';
	}

	/* Resize My Player */
	if (option['widesize']) resizeMyPlayer('widesize');
	if (option['fullsize']) resizeMyPlayer('fullsize');

	/* Select The Video */
	if (feature['definition'] || feature['container'] || feature['openpagelink']) {
		if (!option['definition'] || player['videoDefinitions'].indexOf(option['definition']) == -1) option['definition'] = player['videoPlay'].replace(/Definition.*/, 'Definition');
		if (!option['container'] || player['videoContainers'].indexOf(option['container']) == -1) option['container'] = player['videoPlay'].replace(/.*\s/, '');
		selectMyVideo();
	}

	/* Play The Video */
	playMyVideo(option['autoplay']);
}

function resizeMyPlayer(size) {
	var playerWidth, playerHeight;

	/* Resize The Player */
	if (size == 'widesize') {
		var sidebarMargin;
		if (option['widesize']) {
			if (player['buttonWidesize']) styleMyElement(player['buttonWidesize'], {width: '16px', height: '8px'});
			playerWidth = player['playerWideWidth'];
			playerHeight= player['playerWideHeight'];
			sidebarMargin = player['sidebarMarginWide'];
		}
		else {
			if (player['buttonWidesize']) styleMyElement(player['buttonWidesize'], {width: '20px', height: '10px'});
			playerWidth = player['playerWidth'];
			playerHeight= player['playerHeight'];
			sidebarMargin = player['sidebarMarginNormal'];
		}
		if (player['sidebarWindow']) styleMyElement(player['sidebarWindow'], {marginTop: sidebarMargin + 'px'});
		styleMyElement(player['playerSocket'], {height: playerHeight + 'px'});
		styleMyElement(player['playerWindow'], {width: playerWidth + 'px', height: playerHeight + 'px'});
	}
	else if (size == 'fullsize') {
		var playerPosition, playerIndex;
		if (option['fullsize']) {
			playerPosition = 'fixed';
			playerIndex = '9999999999';
			playerWidth = page.win.innerWidth || page.doc.documentElement.clientWidth;
			playerHeight = page.win.innerHeight || page.doc.documentElement.clientHeight;
			if (!player['isFullsize']) {
				if (feature['widesize']) styleMyElement(player['buttonWidesize'], {display: 'none'});
				styleMyElement(player['buttonFullsize'], {border: '2px solid #CCCCCC'});
				appendMyElement(page.body, player['playerWindow']);
				styleMyElement(page.body, {overflow: 'hidden'});
				styleMyElement(page.body.parentNode, {overflow: 'hidden'});
				if (!player['resizeListener']) player['resizeListener'] = function() {resizeMyPlayer('fullsize')};
				page.win.addEventListener('resize', player['resizeListener'], false);
				player['isFullsize'] = true;
				if (player['isPlaying']) {
					if (player['contentVideo'] && player['contentVideo'].paused) player['contentVideo'].play();
				}
			}
		}
		else {
			playerPosition = 'relative';
			playerIndex = 'auto';
			playerWidth = (option['widesize']) ? player['playerWideWidth'] : player['playerWidth'];
			playerHeight = (option['widesize']) ? player['playerWideHeight'] : player['playerHeight'];
			if (feature['widesize']) styleMyElement(player['buttonWidesize'], {display: 'inline-block'});
			styleMyElement(player['buttonFullsize'], {border: '2px dashed #CCCCCC'});
			appendMyElement(player['playerSocket'], player['playerWindow']);
			styleMyElement(page.body, {overflow: 'auto'});
			styleMyElement(page.body.parentNode, {overflow: 'auto'});
			page.win.removeEventListener('resize', player['resizeListener'], false);
			player['isFullsize'] = false;
			if (player['isPlaying']) {
				if (player['contentVideo'] && player['contentVideo'].paused) player['contentVideo'].play();
			}
		}
		styleMyElement(player['playerWindow'], {position: playerPosition, top: '0px', left: '0px', width: playerWidth + 'px', height: playerHeight + 'px', zIndex: playerIndex});
	}

	/* Resize The Content */
	player['contentWidth'] = playerWidth;
	player['contentHeight'] = playerHeight - myPlayerPanelHeight;
	styleMyElement(player['playerContent'], {width: player['contentWidth'] + 'px', height: player['contentHeight'] + 'px'});
	if (player['isPlaying']) {
		player['contentVideo'].width = player['contentWidth'];
		player['contentVideo'].height = player['contentHeight'];
		styleMyElement(player['contentVideo'], {width: player['contentWidth'] + 'px', height: player['contentHeight'] + 'px'});
	}

	/* Resize The Panel */
	styleMyElement(player['playerPanel'], {width: playerWidth + 'px'});
}

function createMyOptions() {
	if (!player['optionsContent']) {
		/* Options Window */
		player['optionsContent'] = createMyElement('div');
		styleMyElement(player['optionsContent'], {width: '100%', height: '100%', position: 'relative', backgroundColor: 'rgba(0, 0, 0, 0.7)' , textAlign: 'center'});

		/* Options Object => option: [label, options, new line, change video] */
		var options = {
			'embed': ['Embed video with', embedtypes, true, false],
			'media': ['and play as/with', mediakeys, false, false],
			'definition': ['Select the definition', player['videoDefinitions'], true, true],
			'container': ['and the container', player['videoContainers'], false, true],
			'openpagelink': ['Open Page Link', ['On', 'Off'], true, true],
			'autoplay': ['Autoplay', ['On', 'Off'], true, false],
			'subtitles': ['Subtitles', player['subtitlesLanguages'], true, false],
			'playdash': ['Play DASH (Video With Audio)', ['On', 'Off'], true, false]
		};

		/* Options */
		var optionsBox, optionBox, optionLabel, optionMenu, optionMenuItem;
		for (var o in options) {
			if (feature[o] === false) continue;
			if (options[o][2]) {
				optionsBox = createMyElement('div');
				styleMyElement(optionsBox, {display: 'block', padding: '20px 0px 20px 0px'});
				appendMyElement(player['optionsContent'], optionsBox);
			}
			optionBox = createMyElement('div');
			styleMyElement(optionBox, {display: 'inline-block'});
			optionLabel = createMyElement('div', {textContent: options[o][0]});
			styleMyElement(optionLabel, {display: 'inline-block', color: '#CCCCCC', marginRight: '10px', verticalAlign: 'middle'});
			optionMenu = createMyElement('select', {id: 'viewtube-option-' + o}, 'change', function() {
				var id = this.id.replace('viewtube-option-', '');
				if (this.value == 'On' || this.value == 'Off') {
					option[id] = (this.value == 'On') ? true : false;
				}
				else {
					option[id] = this.value;
				}
				setMyOptions(id, option[id]);
				if (options[id][3]) {
					if (player['isSaving']) {
						cleanMyElement(player['buttonSaveLink'], false);
						player['isSaving'] = false;
					}
					selectMyVideo();
				}
			});
			styleMyElement(optionMenu, {display: 'inline-block', width: 'auto', height: '20px', color: '#CCCCCC', backgroundColor: '#000000', border: '1px solid #777777', fontFamily: 'inherit', fontSize: '14px', fontWeight: 'bold', marginRight: '10px', verticalAlign: 'middle'});
			appendMyElement(optionBox, optionLabel);
			appendMyElement(optionBox, optionMenu);
			appendMyElement(optionsBox, optionBox);
			for (var i = 0; i < options[o][1].length; i++) {
				optionMenuItem = createMyElement('option', {value: options[o][1][i], textContent: options[o][1][i]});
				styleMyElement(optionMenuItem, {fontSize: '14px', fontWeight: 'bold', cursor: 'pointer'});
				appendMyElement(optionMenu, optionMenuItem);
			}
			if (optionMenu.value == 'On' || optionMenu.value == 'Off') {
				if (option[o]) optionMenu.value = 'On';
				else optionMenu.value = 'Off';
			}
			else {
				optionMenu.value = option[o];
			}
		}
	}
	if (!player['contentImage']) cleanMyElement(player['playerContent'], false);
	appendMyElement(player['playerContent'], player['optionsContent']);
}

function setMyOptions(key, value) {
	key = page.site + '_' + userscript.toLowerCase() + '_' + key;
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

function getMyOptions() {
	for (var opt in option) {
		var key = page.site + '_' + userscript.toLowerCase() + '_' + opt;
		try {
			if (localStorage.getItem(key)) {
				option[opt] = localStorage.getItem(key);
				continue;
			}
			else throw false;
		}
		catch(e) {
			var cookies = page.doc.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var cookie = cookies[i];
				while (cookie.charAt(0) == ' ') cookie = cookie.substring(1, cookie.length);
				option[opt] = (cookie.indexOf(key) == 0) ? cookie.substring(key.length + 1, cookie.length) : option[opt];
			}
		}
	}
	if (!option['embed'] || embedtypes.indexOf(option['embed']) == -1) option['embed'] = embedtypes[0];
	if (!option['media'] || mediakeys.indexOf(option['media']) == -1) option['media'] = mediakeys[0];
	if (!option['subtitles']) option['subtitles'] = 'None';
	var boolOptions = ['openpagelink', 'autoplay', 'playdash', 'widesize', 'fullsize'];
	for (var i = 0; i < boolOptions.length; i++) {
		option[boolOptions[i]] = (option[boolOptions[i]] === true || option[boolOptions[i]] == 'true') ? true : false;
	}
}

function selectMyVideo() {
	if (option['openpagelink']) {
		player['videoPlay'] = 'Page Link';
	}
	else {
		var vdoCont = (option['container'] != 'Any') ? [option['container']] : player['videoContainers'];
		var vdoDef = player['videoDefinitions'];
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
		var vdoDef2 = [];
		var keepDef = false;
		for (var vD = 0; vD < vdoDef.length; vD++) {
			if (vdoDef[vD] == option['definition'] && keepDef == false) keepDef = true;
			if (keepDef == true) vdoDef2.push(vdoDef[vD])
		}
		for (var vD = 0; vD < vdoDef2.length; vD++) {
			if (vdoList[vdoDef2[vD]]) {
				player['videoPlay'] = vdoList[vdoDef2[vD]];
				break;
			}
		}
	}
	player['videoMenu'].value = player['videoPlay'];
}

function playDASHwithVLC() {
	var contentVideo = player['videoList'][player['videoPlay'].replace('Definition', 'Definition Video')];
	var contentAudio = player['videoList']['High Bitrate Audio WebM'] || player['videoList']['Medium Bitrate Audio WebM']
											|| player['videoList']['Medium Bitrate Audio MP4'] || player['videoList'][player['videoPlay'].replace('Definition', 'Definition Audio')];
	if (option['media'] == 'VLC*') {
		player['contentVideo'] = createMyElement('embed', {id: 'vtVideo', type: mediatypes[option['media']], target: contentVideo, innerHTML: embedcontent['Embed']});
		player['contentAudio'] = createMyElement('embed', {id: 'vtVideo', type: mediatypes[option['media']], target: contentAudio});
	}
	else {
		player['contentVideo'] = createMyElement('embed', {id: 'vtVideo', type: mediatypes[option['media']], src: contentVideo, innerHTML: embedcontent['Embed']});
		player['contentAudio'] = createMyElement('embed', {id: 'vtVideo', type: mediatypes[option['media']], src: contentAudio});
	}
	styleMyElement(player['contentAudio'], {position: 'absolute', zIndex: '-1', width: '1px', height: '1px'});
	appendMyElement(player['playerContent'], player['contentAudio']);
	player['contentVLCInit'] = page.win.setInterval(function() {
		if (player['contentAudio'].wrappedJSObject.playlist && player['contentVideo'].wrappedJSObject.playlist
			&& player['contentAudio'].wrappedJSObject.input && player['contentVideo'].wrappedJSObject.input) {
			player['contentVLCVideoPosition'] = 0;
			player['contentVLCSync'] = page.win.setInterval(function() {
				if (!player['contentVideo'] || !player['contentVideo'].wrappedJSObject || !player['contentVideo'].wrappedJSObject.input) {
					page.win.clearInterval(player['contentVLCSync']);
				}
				if (player['contentVideo'].wrappedJSObject.input.time != player['contentVLCVideoPosition']) {
					if (Math.abs(player['contentVideo'].wrappedJSObject.input.time - player['contentAudio'].wrappedJSObject.input.time) >= 500) {
						player['contentAudio'].wrappedJSObject.input.time = player['contentVideo'].wrappedJSObject.input.time;
					}
					player['contentVLCVideoPosition'] = player['contentVideo'].wrappedJSObject.input.time;
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

function playDASHwithHTML5() {
	var contentVideo = player['videoList'][player['videoPlay'].replace('Definition', 'Definition Video')];
	var contentAudio = player['videoList']['High Bitrate Audio WebM'] || player['videoList']['Medium Bitrate Audio WebM']
											|| player['videoList']['Medium Bitrate Audio MP4'] || player['videoList'][player['videoPlay'].replace('Definition', 'Definition Audio')];
	player['contentVideo'] = createMyElement('video', {id: 'vtVideo', type: mediatypes[player['videoPlay'].replace(/.*\s/, '')], src: contentVideo, controls: 'controls', autoplay: 'autoplay', innerHTML: embedcontent['Video']});
	player['contentAudio'] = createMyElement('audio', {id: 'vtAudio', type: mediatypes[player['videoPlay'].replace(/.*\s/, '')], src: contentAudio, autoplay: 'autoplay'});
	player['contentAudio'].pause();
	player['contentVideo'].addEventListener('play', function() {
		player['contentAudio'].play();
	}, false);
	player['contentVideo'].addEventListener('pause', function() {
		player['contentAudio'].pause();
	}, false);
	player['contentVideo'].addEventListener('ended', function() {
		player['contentVideo'].pause();
		player['contentAudio'].pause();
	}, false);
	player['contentVideo'].addEventListener('timeupdate', function() {
		if (player['contentAudio'].paused && !player['contentVideo'].paused) {
			player['contentAudio'].play();
		}
		if (Math.abs(player['contentVideo'].currentTime - player['contentAudio'].currentTime) >= 0.30) {
			player['contentAudio'].currentTime = player['contentVideo'].currentTime;
		}
	}, false);
	styleMyElement(player['contentAudio'], {display: 'none'});
	appendMyElement(player['contentVideo'], player['contentAudio']);
}

function playMyVideo(play) {
	if (play) {
		if (option['embed'] == 'Protocol') {
			var contentVideo = player['videoList'][player['videoPlay']];
			var contentAudio = '';
			var contentTrack = '';
			if (player['videoList'][player['videoPlay']] == 'DASH') {
				contentVideo = player['videoList'][player['videoPlay'].replace('Definition', 'Definition Video')];
				contentAudio = player['videoList']['High Bitrate Audio WebM'] || player['videoList']['Medium Bitrate Audio WebM']
														|| player['videoList']['Medium Bitrate Audio MP4'] || player['videoList'][player['videoPlay'].replace('Definition', 'Definition Audio')];
			}
			if (option['subtitles'] != 'None') {
				contentTrack = player['subtitlesList'][option['subtitles']];
			}
			page.win.location.href = 'viewtube:' + contentVideo + 'SEPARATOR' + contentAudio + 'SEPARATOR' + contentTrack;
			return;
		}
		player['isPlaying'] = true;
		styleMyElement(player['buttonPlay'], {width: '15px', height: '15px', backgroundColor: '#CCCCCC', border: '0px'});
		cleanMyElement(player['playerContent'], false);
		if (player['videoList'][player['videoPlay']] == 'DASH') {
			if (option['media'] == 'VLC' || option['media'] == 'VLC*') {
				playDASHwithVLC();
			}
			else {
				playDASHwithHTML5();
			}
		}
		else {
			var videoProperties, videoType;
			if (option['media'] == 'Auto') {
				videoType = mediatypes[player['videoPlay'].replace(/.*\s/, '')];
			}
			else {
				videoType = mediatypes[option['media']];
			}
			if (option['embed'] == 'Video') {
				videoProperties = {id: 'vtVideo', type: videoType, src: player['videoList'][player['videoPlay']], controls: 'controls', autoplay: 'autoplay', poster: player['videoThumb'], innerHTML: embedcontent[option['embed']]};
			}
			else if (option['embed'] == 'Object') {
				videoProperties = {id: 'vtVideo', type: videoType, data: player['videoList'][player['videoPlay']], innerHTML: embedcontent[option['embed']]};
			}
			else if (option['embed'] == 'Embed') {
				if (option['media'] == 'VLC*') {
					videoProperties = {id: 'vtVideo', type: videoType, target: player['videoList'][player['videoPlay']], innerHTML: embedcontent[option['embed']]};
				}
				else {
					videoProperties = {id: 'vtVideo', type: videoType, src: player['videoList'][player['videoPlay']], innerHTML: embedcontent[option['embed']]};
				}
			}
			player['contentVideo'] = createMyElement(option['embed'], videoProperties);
		}
		player['contentVideo'].width = player['contentWidth'];
		player['contentVideo'].height = player['contentHeight'];
		styleMyElement(player['contentVideo'], {position: 'relative', width: player['contentWidth'] + 'px', height: player['contentHeight'] + 'px', outline: 'none'});
		appendMyElement(player['playerContent'], player['contentVideo']);
		player['contentVideo'].focus();
		if (option['subtitles'] != 'None') {
			player['contentTrack'] = createMyElement('track', {id: 'vtTrack', default: 'default', src: player['subtitlesList'][option['subtitles']]});
			appendMyElement(player['contentVideo'], player['contentTrack']);
		}
	}
	else {
		player['isPlaying'] = false;
		styleMyElement(player['buttonPlay'], {width: '0px', height: '0px', borderTop: '8px solid transparent', borderBottom: '8px solid transparent', borderLeft: '15px solid #CCCCCC', backgroundColor: '#000000'});
		cleanMyElement(player['playerContent'], false);
		if (player['contentImage']) appendMyElement(player['playerContent'], player['contentImage']);
		else showMyMessage('!thumb');
	}
}

function saveMyVideo() {
	var vdoURL = player['videoList'][player['videoPlay']];
	if (vdoURL == 'DASH') return;
	if (vdoURL == page.url) return;
	var vdoDef = ' (' + player['videoPlay'].split(' ').slice(0, -1).join('').match(/[A-Z]/g).join('') + ')';
	var vdoExt = '.' + player['videoPlay'].split(' ').slice(-1).join('').toLowerCase();
	var vdoTle = (player['videoTitle']) ? player['videoTitle'] : page.url.replace(/https?:\/\//, '').replace(/[^0-9a-zA-Z]/g, '-');;
	if (page.site == 'youtube' && player['videoPlay'] == 'High Definition MP4') {
		page.win.location.href = vdoURL + '&title=' + vdoTle + vdoDef;
	}
	if (!player['isSaving']) {
		var vdoLnk = createMyElement('a', {href: vdoURL, target: '_blank', textContent: '[Link]'});
		styleMyElement(vdoLnk, {color: '#CCCCCC', textDecoration: 'underline'});
		appendMyElement(player['buttonSaveLink'], vdoLnk);
		player['isSaving'] = true;
	}
}

function showMyMessage(cause, content) {
	var myScriptLogo = createMyElement('div', {textContent: userscript});
	styleMyElement(myScriptLogo, {display: 'inline-block', margin: '10px auto', color: '#E24994', fontSize: '24px', fontWeight: 'bold', textAlign: 'center', border: '1px solid #E24994', borderRadius: '2px', padding: '0px 4px'});
	var myScriptMess = createMyElement('div');
	styleMyElement(myScriptMess, {fontSize: '20px', border: '1px solid #777777', margin: '5px auto 5px auto', padding: '10px', backgroundColor: '#000000', color: '#AD0000', textAlign: 'center'});
	if (cause == '!player') {
		var myScriptAlert = createMyElement('div');
		styleMyElement(myScriptAlert, {position: 'absolute', top: '30%', left: '35%', border: '1px solid #F4F4F4', borderRadius: '3px', padding: '10px', backgroundColor: '#FFFFFF', fontSize: '14px', textAlign: 'center', zIndex: '99999'});
		appendMyElement(myScriptAlert, myScriptLogo);
		modifyMyElement(myScriptMess, {innerHTML: 'Couldn\'t get the player element. Please report it <a href="' + contact + '" style="color:#00892C">here</a>.'});
		styleMyElement(myScriptMess, {border: '1px solid #EEEEEE', backgroundColor: '#FFFFFF'});
		appendMyElement(myScriptAlert, myScriptMess);
		var myScriptAlertButton = createMyElement('div', {textContent: 'OK'}, 'click', function() {
			removeMyElement(page.body, myScriptAlert);
		});
		styleMyElement(myScriptAlertButton, {width: '100px', border: '3px solid #EEEEEE', borderRadius: '5px', margin: '0px auto', backgroundColor: '#EEEEEE', color: '#666666', fontSize: '18px', textAlign: 'center', cursor: 'pointer'});
		appendMyElement(myScriptAlert, myScriptAlertButton);
		appendMyElement(page.body, myScriptAlert);
	}
	else if (cause == '!thumb') {
		modifyMyElement(player['playerContent'], {innerHTML: '<br><br>Couldn\'t get the thumbnail for this video. Please report it <a href="' + contact + '" style="color:#00892C">here</a>.'});
	}
	else {
		appendMyElement(myPlayerWindow, myScriptLogo);
		if (cause == '!content') {
			modifyMyElement(myScriptMess, {innerHTML: 'Couldn\'t get the videos content. Please report it <a href="' + contact + '" style="color:#00892C">here</a>.'});
		}
		else if (cause == '!videos') {
			modifyMyElement(myScriptMess, {innerHTML: 'Couldn\'t get any video. Please report it <a href="' + contact + '" style="color:#00892C">here</a>.'});
		}
		else if (cause == '!support') {
			modifyMyElement(myScriptMess, {textContent: 'This video uses the RTMP protocol and is not supported.'});
		}
		else if (cause == 'embed') {
			modifyMyElement(myScriptMess, {innerHTML: 'This is an embedded video. You can watch it <a href="' + content + '" style="color:#00892C">here</a>.'});
		}
		else if (cause == 'other') {
			modifyMyElement(myScriptMess, {innerHTML: content});
		}
		appendMyElement(myPlayerWindow, myScriptMess);
	}
}


// ==========Blocker========== //

var blockObject = page.doc;
var blockInterval = 50;

function blockVideos() {
	var elVideos = getMyElement(blockObject, 'video', 'tag', '', -1, false);
	if (elVideos.length > 0) {
		for (var v = 0; v < elVideos.length; v++) {
			var elVideo = elVideos[v];
			if (elVideo && elVideo.id != 'vtVideo' && elVideo.currentSrc) {
				if (!elVideo.paused) {
					elVideo.pause();
					if (page.url.indexOf('youtube.com/watch') == -1) elVideo.src = "#";
					elVideo.addEventListener('play', function() {
						this.pause();
						if (page.url.indexOf('youtube.com/watch') == -1) this.src = "#";
					});
					elVideo.addEventListener('keydown', function (event) {
						event.preventDefault();
						return false;
					});
				}
			}
		}
	}
	var elEmbeds = getMyElement(blockObject, 'embed', 'tag', '', -1, false) || getMyElement(blockObject, 'object', 'tag', '', -1, false);
	if (elEmbeds.length > 0) {
		for (var e = 0; e < elEmbeds.length; e++) {
			var elEmbed = elEmbeds[e];
			if (elEmbed && elEmbed.id != 'vtVideo' && elEmbed.parentNode) {
				removeMyElement(elEmbed.parentNode, elEmbed);
			}
		}
	}
	if (blockObject !== page.doc) {
		var elFrames = getMyElement(blockObject, 'iframe', 'tag', '', -1, false);
		if (elFrames.length > 0) {
			for (var e = 0; e < elFrames.length; e++) {
				var elFrame = elFrames[e];
				if (elFrame && elFrame.parentNode) {
					removeMyElement(elFrame.parentNode, elFrame);
				}
			}
		}
	}
}

blockVideos();


// ==========Websites========== //

function ViewTube() {

	// =====YouTube===== //

	if (page.url.indexOf('youtube.com/watch') != -1 && page.url.indexOf('m.youtube.com') == -1) {

		/* Video Availability */
		if (getMyContent(page.url, /"playabilityStatus":\{"status":"(ERROR|UNPLAYABLE)"/)) return;

		/* Get Video ID */
		var ytVideoId = parseMyContent(page.url, /(?:\?|&)v=(.*?)(&|$)/);

		/* Player/Sidebar */
		var ytPlayerWindow, ytSidebarWindow;

		/* Player Size */
		var ytPlayerWidth, ytPlayerHeight;
		var ytPlayerWideWidth, ytPlayerWideHeight;
		var ytSidebarMarginWide;
		function ytSizes() {
			if (ytPlayerWindow) {
				if (ytPlayerWindow.clientWidth) ytPlayerWidth = ytPlayerWindow.clientWidth;
				else ytPlayerWidth = ytPlayerWindow.parentNode.clientWidth;
				ytPlayerHeight = Math.ceil(ytPlayerWidth / (16 / 9)) + myPlayerPanelHeight;
				if (ytSidebarWindow && ytSidebarWindow.clientWidth) ytPlayerWideWidth = ytPlayerWidth + ytSidebarWindow.clientWidth;
				else ytPlayerWideWidth = ytPlayerWidth + 425;
				ytPlayerWideHeight = Math.ceil(ytPlayerWideWidth / (16 / 9)) + myPlayerPanelHeight;
				ytSidebarMarginWide = ytPlayerWideHeight + 20;
			}
		}

		/* Player Resize */
		page.win.addEventListener('resize', function() {
			ytSizes();
			if (player['playerSocket']) {
				player['playerWidth'] = ytPlayerWidth;
				player['playerHeight'] = ytPlayerHeight;
				player['playerWideWidth'] = ytPlayerWideWidth;
				player['playerWideHeight'] = ytPlayerWideHeight;
				player['sidebarMarginWide'] = ytSidebarMarginWide;
				resizeMyPlayer('widesize');
			}
		}, false);

		/* My Player */
		myPlayerWindow = createMyElement('div');
		styleMyElement(myPlayerWindow, {position: 'relative', width: ytPlayerWidth + 'px', height: ytPlayerHeight + 'px', textAlign: 'center'});

		/* Create Player */
		var ytVideoTitle, ytVideoAuthor;
		var ytVideoThumb;
		var ytVideoList = {};
		var ytDefaultVideo = 'Low Definition MP4';
		var ytSubtitlesList = {};
		var ytSubtitlesContent;
		function ytCreatePlayer() {
			/* Get Thumbnail */
			ytVideoThumb = (ytVideoId) ? 'https://img.youtube.com/vi/' + ytVideoId + '/maxresdefault.jpg' : null;
			/* Get Subtitles */
			if (ytSubtitlesContent) {
				var ytSubtitlesLink = ytSubtitlesContent[0]['baseUrl'];
				if (ytSubtitlesLink) {
					var ytSubtitlesLinkBase = cleanMyContent(ytSubtitlesLink, false, false);
					var ytSubtitlesLinkLang = ytSubtitlesLinkBase.replace(/lang=.*?(&|$)/, '').replace(/&$/, '');
					var ytSubtitlesLanguagePattern = /"languageCode":"(.*?)"/g;
					var ytSubtitlesLanguageMatches = [];
					var ytSubtitlesLanguage;
					while ((ytSubtitlesLanguageMatches = ytSubtitlesLanguagePattern.exec(ytSubtitlesContent)) !== null) {
						ytSubtitlesLanguage = ytSubtitlesLanguageMatches[1];
						if (!ytSubtitlesList[ytSubtitlesLanguage]) ytSubtitlesList[ytSubtitlesLanguage] = ytSubtitlesLinkLang + '&fmt=vtt&lang=' + ytSubtitlesLanguage;
					}
					var ytSubtitlesTranslationLanguages = getMyContent(page.url, /"translationLanguages":\[(.*?)\]/, false);
					if (ytSubtitlesTranslationLanguages) {
						while ((ytSubtitlesLanguageMatches = ytSubtitlesLanguagePattern.exec(ytSubtitlesTranslationLanguages)) !== null) {
							ytSubtitlesLanguage = ytSubtitlesLanguageMatches[1];
							if (!ytSubtitlesList[ytSubtitlesLanguage]) ytSubtitlesList[ytSubtitlesLanguage] = ytSubtitlesLinkBase + '&fmt=vtt&tlang=' + ytSubtitlesLanguage;
						}
					}
				}
			}
			/* Create Player */
			player = {
				'playerSocket': ytPlayerWindow,
				'playerWindow': myPlayerWindow,
				'videoList': ytVideoList,
				'videoDefinitions': ['Ultra High Definition', 'Quad High Definition', 'Full High Definition', 'High Definition', 'Standard Definition', 'Low Definition', 'Very Low Definition'],
				'videoContainers': ['MP4', 'WebM', 'M3U8', 'Any'],
				'videoPlay': ytDefaultVideo,
				'videoThumb': ytVideoThumb,
				'videoTitle': ytVideoTitle,
				'subtitlesList': ytSubtitlesList,
				'playerWidth': ytPlayerWidth,
				'playerHeight': ytPlayerHeight,
				'playerWideWidth': ytPlayerWideWidth,
				'playerWideHeight': ytPlayerWideHeight,
				'sidebarWindow': ytSidebarWindow,
				'sidebarMarginNormal': 0,
				'sidebarMarginWide': ytSidebarMarginWide
			};
			createMyPlayer();
		}

		/* Get Player/Sidebar */
		var ytVideosReady = false;
		var ytPlayerWindowTop, ytSidebarWindowTop, ytSidebarAds, ytSidebarSparkles;
		var ytWaitForObjects = 4;
		var ytWaitForLoops = 50;
		var ytWaitForObject = page.win.setInterval(function() {
			/* Player Window */
			if (!ytPlayerWindow) {
				ytPlayerWindowTop = getMyElement('', 'div', 'id', 'top', -1, false);
				if (!ytPlayerWindowTop) ytPlayerWindowTop = getMyElement('', 'div', 'id', 'primary-inner', -1, false);
				if (ytPlayerWindowTop) {
					for (var i = 0; i < ytPlayerWindowTop.children.length; i++) {
						ytPlayerWindow = ytPlayerWindowTop.children[i];
						if (ytPlayerWindow.id == 'player' || ytPlayerWindow.id == 'plaery') {
							if (ytPlayerWindow.id == 'player') ytPlayerWindow.id = 'plaery'
							cleanMyElement(ytPlayerWindow, true);
							styleMyElement(ytPlayerWindow, {position: 'relative', width: ytPlayerWidth + 'px', height: ytPlayerHeight + 'px'});
							appendMyElement(ytPlayerWindow, myPlayerWindow);
							blockObject = ytPlayerWindow;
							ytSizes();
							ytWaitForObjects--;
							if (ytVideosReady) ytCreatePlayer();
						}
					}
				}
			}
			/* Sidebar */
			if (!ytSidebarWindow) {
				if (page.url.indexOf('list=') != -1) {
					ytSidebarWindow = getMyElement('', 'div', 'id', 'playlist', -1, false);
				}
				else if (getMyContent(page.url, /"livestream":"(.*?)"/)) {
					ytSidebarWindow = getMyElement('', 'div', 'id', 'chat', -1, false);
				}
				else {
					ytSidebarWindowTop = getMyElement('', 'div', 'id', 'top', -1, false);
					if (!ytSidebarWindowTop) ytSidebarWindowTop = getMyElement('', 'div', 'id', 'secondary-inner', -1, false);
					if (ytSidebarWindowTop) {
						for (var i = 0; i < ytSidebarWindowTop.children.length; i++) {
							ytSidebarWindow = ytSidebarWindowTop.children[i];
							if (ytSidebarWindow.id == 'related') {
								break;
							}
						}
					}
				}
				if (ytSidebarWindow) {
					if (player['playerWindow'] && !player['sidebarWindow']) {
						player['sidebarWindow'] = ytSidebarWindow;
						ytSizes();
						if (!option['fullsize']) resizeMyPlayer('widesize');
					}
					ytWaitForObjects--;
				}
			}
			/* Sidebar Ads */
			if (ytSidebarWindow) {
				/* Sidebar Ads */
				if (!ytSidebarAds) {
					ytSidebarAds = getMyElement('', 'div', 'id', 'player-ads', -1, false);
					if (ytSidebarAds) {
						styleMyElement(ytSidebarAds, {display: 'none'});
						ytWaitForObjects--;
					}
				}
				/* Sidebar Sparkles */
				if (!ytSidebarSparkles) {
					ytSidebarSparkles = getMyElement('', '', 'class', 'sparkles-light-cta', 0, false);
					if (ytSidebarSparkles) {
						styleMyElement(ytSidebarSparkles, {display: 'none'});
						ytWaitForObjects--;
					}
				}
			}
			ytWaitForLoops--;
			if (ytWaitForLoops == 0 || ytWaitForObjects == 0) {
				if (!ytPlayerWindow) showMyMessage('!player');
				clearInterval(ytWaitForObject);
			}
		}, 500);
		intervals.push(ytWaitForObject);

		/* Script */
		var ytScriptUrl;
		function ytGetScriptUrl() {
			if (!ytScriptUrl) {
				ytScriptUrl = getMyContent(page.url, /"js(?:Url)?":\s*"(.*?)"/);
				if (!ytScriptUrl) {
					ytScriptUrl = getMyContent(page.url.replace(/watch.*?v=/, 'embed/').replace(/&.*$/, ''), /"js(?:Url)?":\s*"(.*?)"/);
				}
				if (ytScriptUrl && ytScriptUrl.indexOf('//') == -1) {
					ytScriptUrl = page.win.location.protocol + '//' + page.win.location.hostname + ytScriptUrl;
				}
				if (!ytScriptUrl) {
					showMyMessage('other', 'Couldn\'t get the script link. Please report it <a href="' + contact + '" style="color:#00892C">here</a>.');
				}
			}
		}

		/* Parameter Unscrambler */
		var ytUnscrambleParam = {};
		function ytGetUnscrambleParamFunc() {
			ytGetScriptUrl();
			var ytMainFuncName, ytMainFuncBody, ytExtraFuncName, ytExtraFuncBody;
			/* s */
			ytMainFuncName = getMyContent(ytScriptUrl, /c&&\([\w$]+=([\w$]+)\(decodeURIComponent/);
			if (ytMainFuncName) {
				ytMainFuncBody = getMyContent(ytScriptUrl, new RegExp('(?:^|;)' + ytMainFuncName.replace(/\$/, '\\$') + '\\s*=\\s*function\\s*' + '\\s*\\(\\w+\\)\\s*\\{(.*?\\))\\};'));
				if (ytMainFuncBody) {
					ytExtraFuncName = parseMyContent(ytMainFuncBody, /([\w$]+)\.[\w$]+\(\w,[0-9]+\)/);
					if (ytExtraFuncName) {
						ytExtraFuncBody = getMyContent(ytScriptUrl, new RegExp('var\\s+' + ytExtraFuncName.replace(/\$/, '\\$') + '=\\s*\\{(.*?)\\};'));
						if (ytExtraFuncBody) {
							ytMainFuncBody = 'var ' + ytExtraFuncName + '={' + ytExtraFuncBody + '};' + ytMainFuncBody;
							ytMainFuncBody = 'try {' + ytMainFuncBody + '} catch(e) {return null}';
							ytUnscrambleParam['s'] = new Function('a', ytMainFuncBody);
						}
					}
				}
			}
			/* n */
			ytMainFuncName = getMyContent(ytScriptUrl, /&&\([\w$]+=([\w$]+)\(\w+\),\w+\.set\("n"/);
			if (!ytMainFuncName) ytMainFuncName = getMyContent(ytScriptUrl, /set\("n".*?\|\|([\w$]+)\(/);
			if (ytMainFuncName) {
				ytMainFuncBody = getMyContent(ytScriptUrl, new RegExp('(?:^|;)' + ytMainFuncName.replace(/\$/, '\\$') + '\\s*=\\s*function\\s*' + '\\s*\\(\\w+\\)\\s*\\{(.*?\\))\\};'));
				if (ytMainFuncBody) {
					ytMainFuncBody = 'try {' + ytMainFuncBody + '} catch(e) {return null}';
					ytUnscrambleParam['n'] = new Function('a', ytMainFuncBody);
				}
			}
		}

		/* Get Videos Content */
		var ytVideosContent = {};
		var ytVideoInfoKey = 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8';
		var ytVideoInfoUrl = page.win.location.protocol + '//' + page.win.location.hostname + '/youtubei/v1/player?prettyPrint=false&key=';
		var ytVideoInfoClientVersion = {'WEB': '2.11111111', 'WEB_EMBEDDED_PLAYER': '1.11111111', 'ANDROID': '17.31.35', 'TVHTML5_SIMPLY_EMBEDDED_PLAYER': '2.0'};
		var ytVideoSignatureTimestamp = 19173;
		var ytVideoInfoDataRequest = {};
		function ytGetVideos(api, client, embed) {
			if (api) {
				ytVideoInfoDataRequest = {};
				ytVideoInfoDataRequest['context'] = {};
				ytVideoInfoDataRequest['context']['client'] = {};
				ytVideoInfoDataRequest['context']['client']['clientName'] = client;
				ytVideoInfoDataRequest['context']['client']['clientVersion'] = ytVideoInfoClientVersion[client];
				if (client == 'ANDROID') {
					ytVideoInfoDataRequest['context']['client']['androidSdkVersion'] = 30;
					ytVideoInfoDataRequest['params'] = 'CgIQBg==';
					ytVideoInfoKey = 'AIzaSyA8eiZmM1FaDVjRy-df2KTyQ_vz_yYM39w';
				}
				if (embed) {
					ytVideoInfoDataRequest['context']['client']['clientScreen'] = 'EMBED';
					ytVideoInfoDataRequest['context']['thirdParty'] = {};
					ytVideoInfoDataRequest['context']['thirdParty']['embedUrl'] = 'https://www.youtube.com';
					ytGetScriptUrl();
					ytVideoSignatureTimestamp = getMyContent(ytScriptUrl, /signatureTimestamp:(\d+)/);
					ytVideoInfoDataRequest['playbackContext'] = {};
					ytVideoInfoDataRequest['playbackContext']['contentPlaybackContext'] = {};
					ytVideoInfoDataRequest['playbackContext']['contentPlaybackContext']['signatureTimestamp'] = ytVideoSignatureTimestamp;
				}
				ytVideoInfoDataRequest['videoId'] = ytVideoId;
				ytVideosContent = getMyContent(ytVideoInfoUrl + ytVideoInfoKey + '|' + JSON.stringify(ytVideoInfoDataRequest));
			}
			else {
				ytVideosContent = getMyContent(page.url, /ytInitialPlayerResponse\s*=\s*({.*?});/);
			}
			try {
				ytVideosContent = JSON.parse(ytVideosContent);
				if (ytVideosContent['videoDetails'] && ytVideosContent['videoDetails']['videoId'] != ytVideoId) {
					ytVideosContent = {};
				}
				if (ytVideosContent['videoDetails']) {
					ytVideoTitle = ytVideosContent['videoDetails']['title'];
					ytVideoAuthor = ytVideosContent['videoDetails']['author'];
					ytVideoTitle = ytVideoTitle + ' by ' + ytVideoAuthor;
					ytVideoTitle = cleanMyContent(ytVideoTitle, false, true);
					if (ytVideosContent['captions'] && ytVideosContent['captions']['playerCaptionsTracklistRenderer']) {
						ytSubtitlesContent = ytVideosContent['captions']['playerCaptionsTracklistRenderer']['captionTracks'];
					}
				}
			}
			catch(e) {
				ytVideosContent = {};
			}
			ytVideosContent = (ytVideosContent['streamingData']) ? ytVideosContent['streamingData'] : {};
		}

		/* Get Videos */
		ytGetVideos(true, 'ANDROID', false);
		if (!ytVideosContent['formats'] && ytVideosContent['hlsManifestUrl']) {
			var ytHLSFormats = {
				'92': 'Very Low Definition M3U8',
				'93': 'Low Definition M3U8',
				'94': 'Standard Definition M3U8',
				'95': 'High Definition M3U8',
				'96': 'Full High Definition M3U8'
			};
			ytVideoList["Multi Definition M3U8"] = ytVideosContent['hlsManifestUrl'];
			var ytHLSVideos, ytHLSVideo, ytVideoCode, myVideoCode;
			ytHLSVideos = getMyContent(ytVideosContent['hlsManifestUrl'], /(http.*?m3u8)/g);
			if (ytHLSVideos) {
				for (var i = 0; i < ytHLSVideos.length; i++) {
					ytHLSVideo = ytHLSVideos[i];
					ytVideoCode = parseMyContent(ytHLSVideo, /\/itag\/(\d{1,3})\//);
					if (ytVideoCode) {
						myVideoCode = ytHLSFormats[ytVideoCode];
						if (myVideoCode) {
							ytVideoList[myVideoCode] = ytHLSVideo;
						}
					}
				}
			}
			ytDefaultVideo = 'Multi Definition M3U8';
			ytVideosReady = true;
			if (ytPlayerWindow) ytCreatePlayer();
		}
		else {
			if (!ytVideosContent['formats']) {
				ytGetVideos(true, 'ANDROID', true);
			}
			if (!ytVideosContent['formats']) {
				ytGetVideos(true, 'TVHTML5_SIMPLY_EMBEDDED_PLAYER', true);
			}
			if (!ytVideosContent['formats']) {
				ytGetVideos(false, 'WEB', false);
			}
			if (ytVideosContent['formats']) {
				var ytVideoFormats = {
					'18': 'Low Definition MP4',
					'22': 'High Definition MP4',
					'43': 'Low Definition WebM',
					'133': 'Very Low Definition Video MP4',
					'134': 'Low Definition Video MP4',
					'135': 'Standard Definition Video MP4',
					'136': 'High Definition Video MP4',
					'137': 'Full High Definition Video MP4',
					'140': 'Medium Bitrate Audio MP4',
					'242': 'Very Low Definition Video WebM',
					'243': 'Low Definition Video WebM',
					'244': 'Standard Definition Video WebM',
					'247': 'High Definition Video WebM',
					'248': 'Full High Definition Video WebM',
					'249': 'Low Bitrate Audio WebM',
					'250': 'Medium Bitrate Audio WebM',
					'251': 'High Bitrate Audio WebM',
					'264': 'Quad High Definition Video MP4',
					'271': 'Quad High Definition Video WebM',
					'272': 'Ultra High Definition Video WebM',
					'298': 'High Definition Video MP4',
					'299': 'Full High Definition Video MP4',
					'302': 'High Definition Video WebM',
					'303': 'Full High Definition Video WebM',
					'308': 'Quad High Definition Video WebM',
					'313': 'Ultra High Definition Video WebM',
					'315': 'Ultra High Definition Video WebM',
					'333': 'Standard Definition Video WebM',
					'334': 'High Definition Video WebM',
					'335': 'Full High Definition Video WebM',
					'337': 'Ultra High Definition Video WebM'
				};
				var ytVideoFound = false;
				var ytVideos = (ytVideosContent['adaptiveFormats']) ? ytVideosContent['formats'].concat(ytVideosContent['adaptiveFormats']) : ytVideosContent['formats']
				var ytVideoParse, ytVideoCodeParse, ytVideoCode, myVideoCode, ytVideo, ytSParam, ytSParamName, ytNParam;
				if (ytVideos[0]['signatureCipher'] || ytVideos[0]['cipher'] || (ytVideos[0]['url'] && parseMyContent(ytVideos[0]['url'], /(?:&|&amp;)n=(.*?)(&|&amp;|$)/))) {
					ytGetUnscrambleParamFunc();
				}
				for (var i = 0; i < ytVideos.length; i++) {
					if (ytVideos[i]['signatureCipher'] || ytVideos[i]['cipher']) {
						ytVideo = ytVideos[i]['signatureCipher'] || ytVideos[i]['cipher'];
						ytVideo = cleanMyContent(ytVideo, true);
						ytVideoParse = ytVideo.match(/(.*)(url=.*$)/);
						if (ytVideoParse) {
							ytVideo = ytVideoParse[2] + '&' + ytVideoParse[1];
							ytVideo = ytVideo.replace(/url=/, '').replace(/&$/, '');
						}
						ytSParam = parseMyContent(ytVideo, /&s=(.*?)(&|$)/);
						if (ytSParam && ytUnscrambleParam['s']) {
							ytSParam = ytUnscrambleParam['s'](ytSParam);
							if (ytSParam) {
								ytSParamName = parseMyContent(ytVideo, /&sp=(.*?)(&|$)/);
								ytSParamName = (ytSParamName) ? ytSParamName : ((/&lsig=/.test(ytVideo)) ? 'sig' : 'signature');
								ytVideo = ytVideo.replace(/&s=.*?(&|$)/, '&' + ytSParamName + '=' + ytSParam + '$1');
							}
							else ytVideo = '';
						}
						else ytVideo = '';
					}
					else {
						ytVideo = ytVideos[i]['url'];
						ytVideo = cleanMyContent(ytVideo, true);
						if (/&sig=/.test(ytVideo) && !/&lsig=/.test(ytVideo)) {
							ytVideo = ytVideo.replace(/&sig=/, '&signature=');
						}
					}
					ytVideoCode = ytVideos[i]['itag'];
					if (!ytVideoCode) continue;
					myVideoCode = ytVideoFormats[ytVideoCode];
					if (!myVideoCode) continue;
					if (myVideoCode.indexOf('Video') != -1) {
						if (ytVideo.indexOf('source=yt_otf') != -1) continue;
					}
					ytVideo = cleanMyContent(ytVideo, true);
					ytNParam = parseMyContent(ytVideo, /&n=(.*?)(&|$)/);
					if (ytNParam && ytUnscrambleParam['n']) {
						ytNParam = ytUnscrambleParam['n'](ytNParam);
						if (ytNParam) {
							ytVideo = ytVideo.replace(/&n=.*?(&|$)/, '&n=' + ytNParam + '$1');
						}
					}
					if (ytVideo.indexOf('ratebypass') == -1) ytVideo += '&ratebypass=yes';
					if (ytVideo && ytVideo.indexOf('http') == 0) {
						if (!ytVideoFound) ytVideoFound = true;
						ytVideoList[myVideoCode] = ytVideo;
					}
				}
				if (ytVideoFound) {
					/* DASH */
					if (ytVideoList['Medium Bitrate Audio MP4'] || ytVideoList['Medium Bitrate Audio WebM']) {
						for (var myVideoCode in ytVideoList) {
							if (myVideoCode.indexOf('Video') != -1) {
								if (!ytVideoList[myVideoCode.replace(' Video', '')]) {
									ytVideoList[myVideoCode.replace(' Video', '')] = 'DASH';
								}
							}
						}
					}
					ytVideosReady = true;
					if (ytPlayerWindow) ytCreatePlayer();
				}
				else {
					showMyMessage('!videos');
				}
			}
			else {
				showMyMessage('!content');
			}
		}

	}

	// =====YouTube Mobile===== //

	else if (page.url.indexOf('m.youtube.com/watch') != -1) {

		/* Video Availability */
		if (getMyContent(page.url, /"playabilityStatus":\{"status":"(ERROR|UNPLAYABLE)"/)) return;

		/* Get Video ID */
		var ytVideoId = parseMyContent(page.url, /(?:\?|&)v=(.*?)(&|$)/);

		/* Get Player Window */
		var ytPlayerWindow = getMyElement('', 'div', 'id', 'player-container-id', -1, false);
		if (!ytPlayerWindow) {
			showMyMessage('!player');
			return;
		}

		/* Player Size */
		var ytPlayerWidth, ytPlayerHeight;
		if (ytPlayerWindow.clientHeight) ytPlayerHeight = ytPlayerWindow.clientHeight;
		else ytPlayerHeight = ytPlayerWindow.parentNode.clientHeight;
		ytPlayerWidth = Math.ceil(ytPlayerHeight * (16 / 9));
		function ytSizes() {
			if (ytPlayerWindow) {
				var ytPlayerWindowSize = getMyElement('', 'div', 'class', 'player-placeholder', 0, false);
				if (ytPlayerWindowSize) {
					if (ytPlayerWindowSize.clientHeight) ytPlayerHeight = ytPlayerWindowSize.clientHeight;
					else ytPlayerHeight = ytPlayerWindowSize.parentNode.clientHeight;
					ytPlayerWidth = Math.ceil(ytPlayerHeight * (16 / 9));
				}
				else {
					page.win.setTimeout(function() {
						ytSizes();
						if (player['playerSocket']) {
							player['playerWidth'] = ytPlayerWidth;
							player['playerHeight'] = ytPlayerHeight;
							resizeMyPlayer('widesize');
						}
					}, 1000);
				}
			}
		}
		ytSizes();

		/* My Player Window */
		myPlayerWindow = createMyElement('div');
		styleMyElement(myPlayerWindow, {position: 'relative', width: ytPlayerWidth + 'px', height: ytPlayerHeight + 'px', textAlign: 'center', zIndex: '2'});
		styleMyElement(ytPlayerWindow, {position: 'absolute', width: ytPlayerWidth + 'px', height: ytPlayerHeight + 'px', textAlign: 'center', display: 'block', paddingBottom: '0px'});
		cleanMyElement(ytPlayerWindow, true);
		appendMyElement(ytPlayerWindow, myPlayerWindow);
		blockObject = ytPlayerWindow;

		/* Fix Player Window */
		page.win.setTimeout(function() {
			if (myPlayerWindow != ytPlayerWindow.lastElementChild) {
				cleanMyElement(ytPlayerWindow, true);
				appendMyElement(ytPlayerWindow, myPlayerWindow);
			}
		}, 1000);

		/* Live Videos */
		var ytPlayerControlOverlay = getMyElement('', 'div', 'id', 'player-control-overlay', -1, false);
		if (ytPlayerControlOverlay) {
			styleMyElement(ytPlayerControlOverlay, {display: 'none'});
		}

		/* Update Sizes */
		page.win.addEventListener('resize', function() {
			ytSizes();
			if (player['playerSocket']) {
				player['playerWidth'] = ytPlayerWidth;
				player['playerHeight'] = ytPlayerHeight;
				resizeMyPlayer('widesize');
			}
		}, false);

		/* Create Player */
		var ytVideoTitle, ytVideoAuthor;
		var ytVideoThumb;
		var ytVideoList = {};
		var ytDefaultVideo = 'Low Definition MP4';
		function ytCreatePlayer() {
			/* Get Thumbnail */
			ytVideoThumb = (ytVideoId) ? 'https://img.youtube.com/vi/' + ytVideoId + '/maxresdefault.jpg' : null;
			/* Create Player */
			player = {
				'playerSocket': ytPlayerWindow,
				'playerWindow': myPlayerWindow,
				'videoList': ytVideoList,
				'videoDefinitions': ['Ultra High Definition', 'Quad High Definition', 'Full High Definition', 'High Definition', 'Standard Definition', 'Low Definition', 'Very Low Definition'],
				'videoContainers': ['MP4', 'WebM', 'M3U8', 'Any'],
				'videoPlay': ytDefaultVideo,
				'videoThumb': ytVideoThumb,
				'videoTitle': ytVideoTitle,
				'playerWidth': ytPlayerWidth,
				'playerHeight': ytPlayerHeight
			};
			createMyPlayer();
		}

		/* Script */
		var ytScriptUrl;
		function ytGetScriptUrl() {
			if (!ytScriptUrl) {
				ytScriptUrl = getMyContent(page.url, /"js(?:Url)?":\s*"(.*?)"/);
				if (!ytScriptUrl) {
					ytScriptUrl = getMyContent(page.url.replace(/watch.*?v=/, 'embed/').replace(/&.*$/, ''), /"js(?:Url)?":\s*"(.*?)"/);
				}
				if (ytScriptUrl && ytScriptUrl.indexOf('//') == -1) {
					ytScriptUrl = page.win.location.protocol + '//' + page.win.location.hostname + ytScriptUrl;
				}
				if (!ytScriptUrl) {
					showMyMessage('other', 'Couldn\'t get the script link. Please report it <a href="' + contact + '" style="color:#00892C">here</a>.');
				}
			}
		}

		/* Parameter Unscrambler */
		var ytUnscrambleParam = {};
		function ytGetUnscrambleParamFunc() {
			ytGetScriptUrl();
			var ytMainFuncName, ytMainFuncBody, ytExtraFuncName, ytExtraFuncBody;
			/* s */
			ytMainFuncName = getMyContent(ytScriptUrl, /c&&\([\w$]+=([\w$]+)\(decodeURIComponent/);
			if (ytMainFuncName) {
				ytMainFuncBody = getMyContent(ytScriptUrl, new RegExp('(?:^|;)' + ytMainFuncName.replace(/\$/, '\\$') + '\\s*=\\s*function\\s*' + '\\s*\\(\\w+\\)\\s*\\{(.*?\\))\\};'));
				if (ytMainFuncBody) {
					ytExtraFuncName = parseMyContent(ytMainFuncBody, /([\w$]+)\.[\w$]+\(\w,[0-9]+\)/);
					if (ytExtraFuncName) {
						ytExtraFuncBody = getMyContent(ytScriptUrl, new RegExp('var\\s+' + ytExtraFuncName.replace(/\$/, '\\$') + '=\\s*\\{(.*?)\\};'));
						if (ytExtraFuncBody) {
							ytMainFuncBody = 'var ' + ytExtraFuncName + '={' + ytExtraFuncBody + '};' + ytMainFuncBody;
							ytMainFuncBody = 'try {' + ytMainFuncBody + '} catch(e) {return null}';
							ytUnscrambleParam['s'] = new Function('a', ytMainFuncBody);
						}
					}
				}
			}
			/* n */
			ytMainFuncName = getMyContent(ytScriptUrl, /&&\([\w$]+=([\w$]+)\(\w+\),\w+\.set\("n"/);
			if (!ytMainFuncName) ytMainFuncName = getMyContent(ytScriptUrl, /set\("n".*?\|\|([\w$]+)\(/);
			if (ytMainFuncName) {
				ytMainFuncBody = getMyContent(ytScriptUrl, new RegExp('(?:^|;)' + ytMainFuncName.replace(/\$/, '\\$') + '\\s*=\\s*function\\s*' + '\\s*\\(\\w+\\)\\s*\\{(.*?\\))\\};'));
				if (ytMainFuncBody) {
					ytMainFuncBody = 'try {' + ytMainFuncBody + '} catch(e) {return null}';
					ytUnscrambleParam['n'] = new Function('a', ytMainFuncBody);
				}
			}
		}

		/* Get Videos Content */
		var ytVideosContent = {};
		var ytVideoInfoKey = 'AIzaSyAO_FJ2SlqU8Q4STEHLGCilw_Y9_11qcW8';
		var ytVideoInfoUrl = page.win.location.protocol + '//' + page.win.location.hostname + '/youtubei/v1/player?prettyPrint=false&key=';
		var ytVideoInfoClientVersion = {'WEB': '2.11111111', 'WEB_EMBEDDED_PLAYER': '1.11111111', 'ANDROID': '17.31.35', 'TVHTML5_SIMPLY_EMBEDDED_PLAYER': '2.0'};
		var ytVideoSignatureTimestamp = 19173;
		var ytVideoInfoDataRequest = {};
		function ytGetVideos(api, client, embed) {
			if (api) {
				ytVideoInfoDataRequest = {};
				ytVideoInfoDataRequest['context'] = {};
				ytVideoInfoDataRequest['context']['client'] = {};
				ytVideoInfoDataRequest['context']['client']['clientName'] = client;
				ytVideoInfoDataRequest['context']['client']['clientVersion'] = ytVideoInfoClientVersion[client];
				if (client == 'ANDROID') {
					ytVideoInfoDataRequest['context']['client']['androidSdkVersion'] = 30;
					ytVideoInfoDataRequest['params'] = 'CgIQBg==';
					ytVideoInfoKey = 'AIzaSyA8eiZmM1FaDVjRy-df2KTyQ_vz_yYM39w';
				}
				if (embed) {
					ytVideoInfoDataRequest['context']['client']['clientScreen'] = 'EMBED';
					ytVideoInfoDataRequest['context']['thirdParty'] = {};
					ytVideoInfoDataRequest['context']['thirdParty']['embedUrl'] = 'https://www.youtube.com';
					ytGetScriptUrl();
					ytVideoSignatureTimestamp = getMyContent(ytScriptUrl, /signatureTimestamp:(\d+)/);
					ytVideoInfoDataRequest['playbackContext'] = {};
					ytVideoInfoDataRequest['playbackContext']['contentPlaybackContext'] = {};
					ytVideoInfoDataRequest['playbackContext']['contentPlaybackContext']['signatureTimestamp'] = ytVideoSignatureTimestamp;
				}
				ytVideoInfoDataRequest['videoId'] = ytVideoId;
				ytVideosContent = getMyContent(ytVideoInfoUrl + ytVideoInfoKey + '|' + JSON.stringify(ytVideoInfoDataRequest));
			}
			else {
				ytVideosContent = getMyContent(page.url, /ytInitialPlayerResponse\s*=\s*({.*?});/);
			}
			try {
				ytVideosContent = JSON.parse(ytVideosContent);
				if (ytVideosContent['videoDetails']) {
					ytVideoTitle = ytVideosContent['videoDetails']['title'];
					ytVideoAuthor = ytVideosContent['videoDetails']['author'];
					ytVideoTitle = ytVideoTitle + ' by ' + ytVideoAuthor;
					ytVideoTitle = cleanMyContent(ytVideoTitle, false, true);
				}
			}
			catch(e) {
				ytVideosContent = {};
			}
			ytVideosContent = (ytVideosContent['streamingData']) ? ytVideosContent['streamingData'] : {};
		}

		/* Get Videos */
		ytGetVideos(true, 'ANDROID', false);
		if (!ytVideosContent['formats'] && ytVideosContent['hlsManifestUrl']) {
			var ytHLSFormats = {
				'92': 'Very Low Definition M3U8',
				'93': 'Low Definition M3U8',
				'94': 'Standard Definition M3U8',
				'95': 'High Definition M3U8',
				'96': 'Full High Definition M3U8'
			};
			ytVideoList["Multi Definition M3U8"] = ytVideosContent['hlsManifestUrl'];
			var ytHLSVideos, ytHLSVideo, ytVideoCode, myVideoCode;
			ytHLSVideos = getMyContent(ytVideosContent['hlsManifestUrl'], /(http.*?m3u8)/g);
			if (ytHLSVideos) {
				for (var i = 0; i < ytHLSVideos.length; i++) {
					ytHLSVideo = ytHLSVideos[i];
					ytVideoCode = parseMyContent(ytHLSVideo, /\/itag\/(\d{1,3})\//);
					if (ytVideoCode) {
						myVideoCode = ytHLSFormats[ytVideoCode];
						if (myVideoCode) {
							ytVideoList[myVideoCode] = ytHLSVideo;
						}
					}
				}
			}
			ytDefaultVideo = 'Multi Definition M3U8';
			ytVideosReady = true;
			if (ytPlayerWindow) ytCreatePlayer();
		}
		else {
			if (!ytVideosContent['formats']) {
				ytGetVideos(true, 'ANDROID', true);
			}
			if (!ytVideosContent['formats']) {
				ytGetVideos(true, 'TVHTML5_SIMPLY_EMBEDDED_PLAYER', true);
			}
			if (!ytVideosContent['formats']) {
				ytGetVideos(false, 'WEB', false);
			}
			if (ytVideosContent['formats']) {
				var ytVideoFormats = {
					'18': 'Low Definition MP4',
					'22': 'High Definition MP4',
					'43': 'Low Definition WebM',
					'133': 'Very Low Definition Video MP4',
					'134': 'Low Definition Video MP4',
					'135': 'Standard Definition Video MP4',
					'136': 'High Definition Video MP4',
					'137': 'Full High Definition Video MP4',
					'140': 'Medium Bitrate Audio MP4',
					'242': 'Very Low Definition Video WebM',
					'243': 'Low Definition Video WebM',
					'244': 'Standard Definition Video WebM',
					'247': 'High Definition Video WebM',
					'248': 'Full High Definition Video WebM',
					'249': 'Low Bitrate Audio WebM',
					'250': 'Medium Bitrate Audio WebM',
					'251': 'High Bitrate Audio WebM',
					'264': 'Quad High Definition Video MP4',
					'271': 'Quad High Definition Video WebM',
					'272': 'Ultra High Definition Video WebM',
					'298': 'High Definition Video MP4',
					'299': 'Full High Definition Video MP4',
					'302': 'High Definition Video WebM',
					'303': 'Full High Definition Video WebM',
					'308': 'Quad High Definition Video WebM',
					'313': 'Ultra High Definition Video WebM',
					'315': 'Ultra High Definition Video WebM',
					'333': 'Standard Definition Video WebM',
					'334': 'High Definition Video WebM',
					'335': 'Full High Definition Video WebM',
					'337': 'Ultra High Definition Video WebM'
				};
				var ytVideoFound = false;
				var ytVideos = (ytVideosContent['adaptiveFormats']) ? ytVideosContent['formats'].concat(ytVideosContent['adaptiveFormats']) : ytVideosContent['formats']
				var ytVideoParse, ytVideoCodeParse, ytVideoCode, myVideoCode, ytVideo, ytSParam, ytSParamName, ytNParam;
				if (ytVideos[0]['signatureCipher'] || ytVideos[0]['cipher'] || (ytVideos[0]['url'] && parseMyContent(ytVideos[0]['url'], /(?:&|&amp;)n=(.*?)(&|&amp;|$)/))) {
					ytGetUnscrambleParamFunc();
				}
				for (var i = 0; i < ytVideos.length; i++) {
					if (ytVideos[i]['signatureCipher'] || ytVideos[i]['cipher']) {
						ytVideo = ytVideos[i]['signatureCipher'] || ytVideos[i]['cipher'];
						ytVideo = cleanMyContent(ytVideo, true);
						ytVideoParse = ytVideo.match(/(.*)(url=.*$)/);
						if (ytVideoParse) {
							ytVideo = ytVideoParse[2] + '&' + ytVideoParse[1];
							ytVideo = ytVideo.replace(/url=/, '').replace(/&$/, '');
						}
						ytSParam = parseMyContent(ytVideo, /&s=(.*?)(&|$)/);
						if (ytSParam && ytUnscrambleParam['s']) {
							ytSParam = ytUnscrambleParam['s'](ytSParam);
							if (ytSParam) {
								ytSParamName = parseMyContent(ytVideo, /&sp=(.*?)(&|$)/);
								ytSParamName = (ytSParamName) ? ytSParamName : ((/&lsig=/.test(ytVideo)) ? 'sig' : 'signature');
								ytVideo = ytVideo.replace(/&s=.*?(&|$)/, '&' + ytSParamName + '=' + ytSParam + '$1');
							}
							else ytVideo = '';
						}
						else ytVideo = '';
					}
					else {
						ytVideo = ytVideos[i]['url'];
						ytVideo = cleanMyContent(ytVideo, true);
						if (/&sig=/.test(ytVideo) && !/&lsig=/.test(ytVideo)) {
							ytVideo = ytVideo.replace(/&sig=/, '&signature=');
						}
					}
					ytVideoCode = ytVideos[i]['itag'];
					if (!ytVideoCode) continue;
					myVideoCode = ytVideoFormats[ytVideoCode];
					if (!myVideoCode) continue;
					if (myVideoCode.indexOf('Video') != -1) {
						if (ytVideo.indexOf('source=yt_otf') != -1) continue;
					}
					ytVideo = cleanMyContent(ytVideo, true);
					ytNParam = parseMyContent(ytVideo, /&n=(.*?)(&|$)/);
					if (ytNParam && ytUnscrambleParam['n']) {
						ytNParam = ytUnscrambleParam['n'](ytNParam);
						if (ytNParam) {
							ytVideo = ytVideo.replace(/&n=.*?(&|$)/, '&n=' + ytNParam + '$1');
						}
					}
					if (ytVideo.indexOf('ratebypass') == -1) ytVideo += '&ratebypass=yes';
					if (ytVideo && ytVideo.indexOf('http') == 0) {
						if (!ytVideoFound) ytVideoFound = true;
						ytVideoList[myVideoCode] = ytVideo;
					}
				}
				if (ytVideoFound) {
					/* DASH */
					if (ytVideoList['Medium Bitrate Audio MP4'] || ytVideoList['Medium Bitrate Audio WebM']) {
						for (var myVideoCode in ytVideoList) {
							if (myVideoCode.indexOf('Video') != -1) {
								if (!ytVideoList[myVideoCode.replace(' Video', '')]) {
									ytVideoList[myVideoCode.replace(' Video', '')] = 'DASH';
								}
							}
						}
					}
					ytVideosReady = true;
					if (ytPlayerWindow) ytCreatePlayer();
				}
				else {
					showMyMessage('!videos');
				}
			}
			else {
				showMyMessage('!content');
			}
		}

	}

	// =====Dailymotion===== //

	else if (page.url.indexOf('dailymotion.com/video') != -1) {

		/* Video Source */
		var dmMetadataUrl = page.url.replace(/\/video\//, "/player/metadata/video/");

		/* Video Availability */
		if (getMyContent(dmMetadataUrl, /"error":\{"title":"(.*?)"/)) return;
		if (getMyContent(dmMetadataUrl, /"error_title":"(.*?)"/)) return;

		/* Player Size */
		var dmPlayerWidth, dmPlayerHeight;
		function dmSizes() {
			if (dmPlayerWindow) dmPlayerWidth = dmPlayerWindow.clientWidth;
			if (dmPlayerWidth) dmPlayerHeight = Math.ceil(dmPlayerWidth / (16 / 9)) + myPlayerPanelHeight;
		}

		/* Player Resize */
		page.win.addEventListener('resize', function() {
			page.win.setTimeout(function() {
				dmSizes();
				if (player['playerSocket']) {
					player['playerWidth'] = dmPlayerWidth;
					player['playerHeight'] = dmPlayerHeight;
					resizeMyPlayer('widesize');
				}
			}, 300);
		}, false);

		/* My Player Window */
		myPlayerWindow = createMyElement('div');

		/* Get Objects */
		var dmVideosReady = false;
		var dmPlayerWindow;
		var dmWaitForLoops = 50;
		var dmWaitForObject = page.win.setInterval(function() {
			if (!dmPlayerWindow) dmPlayerWindow = getMyElement('', 'div', 'id', 'player-wrapper', -1, false);
			if (dmPlayerWindow && !myPlayerWindow.parentNode) {
				cleanMyElement(myPlayerWindow, false);
				cleanMyElement(dmPlayerWindow, true);
				appendMyElement(dmPlayerWindow, myPlayerWindow);
				//blockObject = dmPlayerWindow;
				dmPlayerFrame = getMyElement(dmPlayerWindow.firstChild, 'iframe', 'tag', '', 0, false);
				if (dmPlayerFrame) {
					dmPlayerFrame.addEventListener('load', function() {
						//dmPlayerFrame.src = '#';
						blockObject = dmPlayerFrame.contentWindow.document;
					}, false);
				}
				dmSizes();
				styleMyElement(myPlayerWindow, {position: 'relative', width: dmPlayerWidth + 'px', height: dmPlayerHeight + 'px', textAlign: 'center'});
				styleMyElement(dmPlayerWindow, {marginTop: '-15px'})
				if (dmVideosReady) dmPlayer();
			}
			dmWaitForLoops--;
			if (dmWaitForLoops == 0) {
				if (!dmPlayerWindow) showMyMessage('!player');
				clearInterval(dmWaitForObject);
			}
			/* Hide Ads */
			//var dmAdsRight = getMyElement('', 'div', 'query', '[class*="videoInfoAdContainer"]', -1, false);
			//if (dmAdsRight && dmAdsRight.parentNode) removeMyElement(dmAdsRight.parentNode, dmAdsRight);
			//if (dmAdsRight) styleMyElement(dmAdsRight, {position: 'absolute'});
			/*var dmAdsBottom = getMyElement('', 'div', 'query', '[class*="DisplayAd__adContainer"]', -1, false);
			//if (dmAdsBottom && dmAdsBottom.parentNode) removeMyElement(dmAdsBottom.parentNode, dmAdsBottom);
			if (dmAdsBottom) styleMyElement(dmAdsBottom, {position: 'absolute'});
			/* Hide Player Placeholder */
			/*var dmPlayerPlaceholder = getMyElement('', 'div', 'id', 'watching-player-placeholder', -1, false);
			if (dmPlayerPlaceholder) styleMyElement(dmPlayerPlaceholder, {background: 'none'});
			/* Continuous Player */
			/*var dmContinuousPlace = getMyElement('', 'div', 'id', 'continuous-player', -1, false);
			if (dmContinuousPlace) styleMyElement(dmContinuousPlace, {display: 'none'});*/
		}, 1000);
		intervals.push(dmWaitForObject);

		/* Create Player */
		var dmDefaultVideo = 'Low Definition MP4';
		function dmPlayer() {
			if (!dmVideoList[dmDefaultVideo]) dmDefaultVideo = 'Low Definition M3U8';
			player = {
				'playerSocket': dmPlayerWindow,
				'playerWindow': myPlayerWindow,
				'videoList': dmVideoList,
				'videoDefinitions': ['Full High Definition', 'High Definition', 'Standard Definition', 'Low Definition', 'Very Low Definition'],
				'videoContainers': ['MP4', 'M3U8', 'Any'],
				'videoPlay': dmDefaultVideo,
				'videoThumb': dmVideoThumb,
				'videoTitle': dmVideoTitle,
				'playerWidth': dmPlayerWidth,
				'playerHeight': dmPlayerHeight
			};
			createMyPlayer();
		}

		/* Get Video Thumbnail */
		var dmVideoThumb = getMyContent(dmMetadataUrl, /"posters":.*?"720":"(.*?)"/);
		if (dmVideoThumb) dmVideoThumb = cleanMyContent(dmVideoThumb, false);

		/* Get Video Title */
		var dmVideoTitle = getMyContent(dmMetadataUrl, /"title":"((\\"|[^"])*?)"/);
		if (dmVideoTitle) {
			var dmVideoAuthor = getMyContent(dmMetadataUrl, /"screenname":"((\\"|[^"])*?)"/);
			if (dmVideoAuthor) dmVideoTitle = dmVideoTitle + ' by ' + dmVideoAuthor;
			dmVideoTitle = cleanMyContent(dmVideoTitle, false, true);
		}

		/* Get Videos Content */
		var dmVideosContent = getMyContent(dmMetadataUrl, /"qualities":\{(.*?)\]\},/);

		/* Get Videos */
		var dmVideoList = {};
		if (dmVideosContent) {
			var dmVideoFormats = {'auto': 'Low Definition MP4', '240': 'Very Low Definition MP4', '380': 'Low Definition MP4',
														'480': 'Standard Definition MP4', '720': 'High Definition MP4', '1080': 'Full High Definition MP4'};
			var dmVideoFound = false;
			var myVideoCode, dmVideo;
			for (var dmVideoCode in dmVideoFormats) {
				dmVideo = parseMyContent(dmVideosContent, new RegExp('"' + dmVideoCode + '".*?"type":"video.*?mp4","url":"(.*?)"'));
				if (dmVideo) {
					if (!dmVideoFound) dmVideoFound = true;
					dmVideo = cleanMyContent(dmVideo, true);
					myVideoCode = dmVideoFormats[dmVideoCode];
					if (!dmVideoList[myVideoCode]) dmVideoList[myVideoCode] = dmVideo;
				}
			}
			if (!dmVideoFound) {
				var dmHLSManifest = parseMyContent(dmVideosContent, /"type":"application.*?mpegURL","url":"(.*?)"/);
				if (dmHLSManifest) {
					dmVideoFound = true;
					dmHLSManifest = cleanMyContent(dmHLSManifest, true);
					dmVideoList["Multi Definition M3U8"] = dmHLSManifest;
					for (var dmVideoCode in dmVideoFormats) {
						dmVideo = getMyContent(dmHLSManifest, new RegExp('NAME="' + dmVideoCode + '.*?",PROGRESSIVE-URI="(.*?)(#EXT|$)'));
						if (dmVideo) {
							myVideoCode = dmVideoFormats[dmVideoCode];
							if (!dmVideoList[myVideoCode] && dmVideo.split('"')[0]) {
								dmVideoList[myVideoCode] = dmVideo.split('"')[0];
							}
							myVideoCode = dmVideoFormats[dmVideoCode].replace('MP4', 'M3U8');
							if (!dmVideoList[myVideoCode] && dmVideo.split('"')[1]) {
								dmVideoList[myVideoCode] = dmVideo.split('"')[1];
							}
						}
					}
				}
			}

			if (dmVideoFound) {
				dmVideosReady = true;
				//if (dmPlayerWindow) dmPlayer();
			}
			else {
				showMyMessage('!videos');
			}
		}
		else {
			showMyMessage('!content');
		}

	}

	// =====Vimeo===== //

	else if (page.url.indexOf('vimeo.com/') != -1) {

		/* Page Type */
		var viPageType = getMyContent(page.url, /meta\s+property="og:type"\s+content="(.*?)"/);
		if (!viPageType || viPageType.indexOf('video') == -1) return;

		/* Get Player Window */
		var viPlayerWindow;
		if (viPageType.indexOf('video') != -1) {
			viPlayerWindow = getMyElement('', 'div', 'class', 'player_area', 0, false) || getMyElement('', 'div', 'class', 'player_container', 0, false) || getMyElement('', 'div', 'class', 'wrap_content', 0, false);
		}
		else {
			viPlayerWindow = getMyElement('', 'div', 'class', 'player_container', 1, false) || getMyElement('', 'div', 'class', 'player_container', 0, false);
		}
		if (!viPlayerWindow) {
			showMyMessage('!player');
			return;
		}

		/* Get Video Thumbnail */
		var viVideoThumb;
		if (viPageType.indexOf('video') != -1) {
			viVideoThumb = getMyContent(page.url, /meta\s+property="og:image"\s+content="(.*?)"/);
			if (!viVideoThumb) viVideoThumb = getMyContent(page.url, /meta\s+name="twitter:image"\s+content="(.*?)"/);
		}
		else {
			viVideoThumb = getMyContent(page.url, /"src_4x":"(.*?)"/);
			if (!viVideoThumb) viVideoThumb = getMyContent(page.url, /"src_2x":"(.*?)"/);
			if (viVideoThumb) viVideoThumb = cleanMyContent(viVideoThumb, false);
		}

		/* Get Video Title */
		var viVideoTitle;
		if (viPageType.indexOf('video') != -1) {
			viVideoTitle = getMyContent(page.url, /meta\s+property="og:title"\s+content="(.*?)"/);
		}
		else {
			viVideoTitle = getMyContent(page.url, /"title":"((\\"|[^"])*?)"/);
		}
		if (viVideoTitle) {
			viVideoTitle = viVideoTitle.replace(/\s*on\s*Vimeo$/, '');
			var viVideoAuthor = getMyContent(page.url, /"display_name":"((\\"|[^"])*?)"/);
			if (viVideoAuthor) viVideoTitle = viVideoTitle + ' by ' + viVideoAuthor;
			viVideoTitle = cleanMyContent(viVideoTitle, false, true);
		}

		/* Get Content Source */
		var viVideoSource = getMyContent(page.url, /config_url":"(.*?)"/);
		if (viVideoSource) viVideoSource = cleanMyContent(viVideoSource, false);
		else {
			viVideoSource = getMyContent(page.url, /data-config-url="(.*?)"'/);
			if (viVideoSource) viVideoSource = viVideoSource.replace(/&amp;/g, '&');
			else viVideoSource = getMyContent(page.url, /embedUrl":"(.*?)"/);
		}

		/* Get Videos Content */
		var viVideosContent;
		if (viVideoSource) {
			viVideosContent = getMyContent(viVideoSource);
			try {
				viVideosContent = JSON.parse(viVideosContent);
				if (viVideosContent['request'] && viVideosContent['request']['files']) {
					viVideosContent = viVideosContent['request']['files'];
				}
				else {
					viVideosContent = '';
				}
			}
			catch(e) {
				viVideosContent = '';
			}
			if (!viVideosContent) {
				viVideosContent = getMyContent(viVideoSource + '||' + JSON.stringify({'withCredentials':true}));
				try {
					viVideosContent = JSON.parse(viVideosContent);
					if (viVideosContent['request'] && viVideosContent['request']['files']) {
						viVideosContent = viVideosContent['request']['files'];
					}
					else {
						viVideosContent = '';
					}
				}
				catch(e) {
					viVideosContent = '';
				}
			}
			if (!viVideosContent) {
				var viAPIHeaders = {'X-Requested-With':'XMLHttpRequest'};
				var viAPIToken = getMyContent('https://vimeo.com/_next/jwt||' + JSON.stringify(viAPIHeaders), /"token":"((\\"|[^"])*?)"/);
				var viAPIUrl = '';
				if (page.url.replace(/\/$/, '').split('/').length > 4) {
					viAPIUrl = 'https://api.vimeo.com/videos/' + page.url.split('/')[3] + ':' + page.url.split('/')[4] + '?fields=config_url';
				}
				else {
					viAPIUrl = 'https://api.vimeo.com/videos/' + page.url.split('/')[3] + '?fields=config_url';
				}
				if (viAPIToken) {
					viAPIHeaders = {'Authorization':'jwt ' + viAPIToken};
					viVideoSource = getMyContent(viAPIUrl + '||' + JSON.stringify(viAPIHeaders), /config_url":\s*"(.*?)"/);
					if (viVideoSource) {
						viVideoSource = cleanMyContent(viVideoSource, false);
						viVideosContent = getMyContent(viVideoSource);
						try {
							viVideosContent = JSON.parse(viVideosContent);
							if (viVideosContent['request'] && viVideosContent['request']['files']) {
								viVideosContent = viVideosContent['request']['files'];
							}
							else {
								viVideosContent = '';
							}
						}
						catch(e) {
							viVideosContent = '';
						}
						if (!viVideosContent) {
							viVideosContent = getMyContent(viVideoSource + '||' + JSON.stringify({'withCredentials':true}));
							try {
								viVideosContent = JSON.parse(viVideosContent);
								if (viVideosContent['request'] && viVideosContent['request']['files']) {
									viVideosContent = viVideosContent['request']['files'];
								}
								else {
									viVideosContent = '';
								}
							}
							catch(e) {
								viVideosContent = '';
							}
						}
					}
				}
			}
		}

		/* My Player Window */
		myPlayerWindow = createMyElement('div');
		styleMyElement(myPlayerWindow, {position: 'relative', width: '906px', height: '540px', textAlign: 'center', margin: '0px auto'});
		styleMyElement(viPlayerWindow, {minHeight: '540px', position: 'static'});
		if (viPlayerWindow.parentNode) {
			styleMyElement(viPlayerWindow.parentNode, {minHeight: '540px', position: 'relative'});
			if (viPageType.indexOf('profile') != -1) {
				styleMyElement(viPlayerWindow.parentNode, {marginLeft: '-50px'});
			}
		}
		cleanMyElement(viPlayerWindow, true);
		appendMyElement(viPlayerWindow, myPlayerWindow);
		blockObject = viPlayerWindow;

		/* Get Videos */
		if (viVideosContent) {
			var viVideoFormats = {'1440p': 'Quad High Definition MP4', '1080p': 'Full High Definition MP4', '720p': 'High Definition MP4', '540p': 'Standard Definition MP4',
														'414': 'Standard Definition MP4', '480p': 'Standard Definition MP4', '360p': 'Low Definition MP4', '270p': 'Very Low Definition MP4', '240p': 'Very Low Definition MP4'};
			var viVideoList = {};
			var viVideoFound = false;
			var viVideo, myVideoCode;
			if (viVideosContent['progressive']) {
				var viVideos = viVideosContent['progressive'];
				for (var i = 0; i < viVideos.length; i++) {
					for (var viVideoCode in viVideoFormats) {
						if (viVideos[i]['quality'] == viVideoCode || viVideos[i]['height'] == viVideoCode) {
							viVideo = viVideos[i]['url'];
							if (viVideo) {
								if (!viVideoFound) viVideoFound = true;
								myVideoCode = viVideoFormats[viVideoCode];
								viVideoList[myVideoCode] = viVideo;
							}
						}
					}
				}
			}
			if (viVideosContent['hls']) {
				if (viVideosContent['hls']['cdns']) {
					if (viVideosContent['hls']['cdns']['akfire_interconnect_quic']) {
						viVideoList["Multi Definition M3U8"] = viVideosContent['hls']['cdns']['akfire_interconnect_quic']['url'];
						if (!viVideoFound) viVideoFound = true;
					}
					else if (viVideosContent['hls']['cdns']['fastly_skyfire']) {
						viVideoList["Multi Definition M3U8"] = viVideosContent['hls']['cdns']['fastly_skyfire']['url'];
						if (!viVideoFound) viVideoFound = true;
					}
				}
			}

			if (viVideoFound) {
				/* Hide Autoplay Button */
				var viContextClip = getMyElement('', 'div', 'class', 'context-clip', 0, false);
				if (viContextClip) {
					var viAutoplayElem = viContextClip.getElementsByTagName('div')[1];
					if (viAutoplayElem && viAutoplayElem.textContent.indexOf('Autoplay') != -1) {
						styleMyElement(viAutoplayElem, {display: 'none'});
					}
				}

				/* Create Player */
				var viDefaultVideo = 'Low Definition MP4';
				if (!viVideoList[viDefaultVideo]) {
					viDefaultVideo = 'Multi Definition M3U8';
				}
				player = {
					'playerSocket': viPlayerWindow,
					'playerWindow': myPlayerWindow,
					'videoList': viVideoList,
					'videoDefinitions': ['Quad High Definition', 'Full High Definition', 'High Definition', 'Standard Definition', 'Low Definition', 'Very Low Definition'],
					'videoContainers': ['MP4', 'M3U8', 'Any'],
					'videoPlay': viDefaultVideo,
					'videoThumb': viVideoThumb,
					'videoTitle' : viVideoTitle,
					'playerWidth': 906,
					'playerHeight': 540
				};
				createMyPlayer();
			}
			else {
				showMyMessage('!videos');
			}
		}
		else {
			showMyMessage('!content');
		}

	}

	// =====Veoh===== //

	else if (page.url.indexOf('veoh.com/watch') != -1) {

		page.win.setTimeout(function() {

			/* Video Info */
			var veVideoInfoUrl = page.url.replace(/\/watch\//, '/watch/getVideo/');

			/* Get Video Availability */
			if (getMyElement('', 'div', 'class', 'veoh-video-player-error', 0, false)) return;

			/* Get Player Window */
			var vePlayerWindow = getMyElement('', 'div', 'class', 'veoh-player', 0, false);
			if (!vePlayerWindow) {
				showMyMessage('!player');
				return;
			}

			/* Get Video Thumbnail */
			var veVideoThumb = getMyContent(veVideoInfoUrl, /"poster":"(.*?)"/);

			/* Get Video Title */
			var veVideoTitle = getMyContent(veVideoInfoUrl, /"title":"((\\"|[^"])*?)"/);
			if (!veVideoTitle) {
				veVideoTitle = getMyContent(page.url, /meta\s+name="og:title"\s+content="(.*?)"/);
			}
			if (veVideoTitle) veVideoTitle = cleanMyContent(veVideoTitle, false, true);

			/* Get Videos Content */
			var veVideosContent = getMyContent(veVideoInfoUrl, /"src"\s*:\s*\{(.*?)\}/);

			/* My Player Window */
			myPlayerWindow = createMyElement('div');
			styleMyElement(myPlayerWindow, {position: 'relative', width: '640px', height: '390px', textAlign: 'center'});
			cleanMyElement(vePlayerWindow, false);
			styleMyElement(vePlayerWindow, {height: '100%'});
			appendMyElement(vePlayerWindow, myPlayerWindow);

			/* Hide Ads */
			var veBannersRight = getMyElement('', 'div', 'class', 'banners-right-container', 0, false);
			if (veBannersRight) styleMyElement(veBannersRight, {display: 'none'});

			/* Get Videos */
			if (veVideosContent) {
				var veVideoFormats = {'Regular': 'Low Definition MP4', 'HQ': 'Standard Definition MP4'};
				var veVideoList = {};
				var veVideoFound = false;
				var veVideo, myVideoCode;
				for (var veVideoCode in veVideoFormats) {
					veVideo = parseMyContent(veVideosContent, new RegExp(veVideoCode + '":"(.*?)"'));
					if (veVideo) {
						if (!veVideoFound) veVideoFound = true;
						myVideoCode = veVideoFormats[veVideoCode];
						veVideoList[myVideoCode] = cleanMyContent(veVideo, false);
					}
				}

				if (veVideoFound) {
					/* Create Player */
					var veDefaultVideo = 'Low Definition MP4';
					player = {
						'playerSocket': vePlayerWindow,
						'playerWindow': myPlayerWindow,
						'videoList': veVideoList,
						'videoDefinitions': ['Standard Definition', 'Low Definition'],
						'videoContainers': ['MP4'],
						'videoPlay': veDefaultVideo,
						'videoThumb': veVideoThumb,
						'videoTitle' : veVideoTitle,
						'playerWidth': 640,
						'playerHeight': 390
					};
					createMyPlayer();
				}
				else {
					var ytVideoId = getMyContent(page.url, /youtube.com\/embed\/(.*?)("|\?)/);
					if (!ytVideoId) ytVideoId = getMyContent(page.url, /"videoId":"yapi-(.*?)"/);
					if (ytVideoId) {
						var ytVideoLink = 'http://youtube.com/watch?v=' + ytVideoId;
						showMyMessage('embed', ytVideoLink);
					}
					else {
						showMyMessage('!videos');
					}
				}
			}
			else {
				showMyMessage('!content');
			}

		}, 1000);

	}

	// =====IMDB===== //

	else if (page.url.indexOf('imdb.com') != -1) {

		/* Redirect To Video Page */
		if (page.url.indexOf('/video/') == -1 && page.url.indexOf('/videoplayer/') == -1) {
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

		/* Player Size */
		var imdbPlayerWidth, imdbPlayerHeight;
		function imdbSizes() {
			if (imdbPlayerWindow) imdbPlayerWidth = imdbPlayerWindow.clientWidth;
			if (imdbPlayerWidth) imdbPlayerHeight = Math.ceil(imdbPlayerWidth / (16 / 9)) + myPlayerPanelHeight;
		}

		/* Player Resize */
		page.win.addEventListener('resize', function() {
			imdbSizes();
			if (player['playerSocket']) {
				player['playerWidth'] = imdbPlayerWidth;
				player['playerHeight'] = imdbPlayerHeight;
				resizeMyPlayer('widesize');
			}
		}, false);

		/* My Player Window */
		myPlayerWindow = createMyElement('div');

		/* Get Objects */
		var imdbVideosReady = false;
		var imdbPlayerWindow;
		var imdbWaitForLoops = 50;
		var imdbWaitForObject = page.win.setInterval(function() {
			if (!imdbPlayerWindow) {
				imdbPlayerWindow = getMyElement('', 'div', 'class', 'jwplayer', 0, false);
				if (imdbPlayerWindow) {
					imdbPlayerWindow = (imdbPlayerWindow.parentNode) ? imdbPlayerWindow.parentNode : null;
				}
				else {
					imdbPlayerWindow = getMyElement('', 'div', 'class', 'webPlayerSDKContainer', 0, false);
				}
				if (imdbPlayerWindow) {
					cleanMyElement(imdbPlayerWindow, true);
					appendMyElement(imdbPlayerWindow, myPlayerWindow);
					blockObject = imdbPlayerWindow;
					imdbSizes();
					styleMyElement(imdbPlayerWindow, {width: imdbPlayerWidth + 'px', height: imdbPlayerHeight + 'px'});
					styleMyElement(myPlayerWindow, {width: imdbPlayerWidth + 'px', height: imdbPlayerHeight + 'px', textAlign: 'center'});
					if (imdbVideosReady) imdbPlayer();
					// Hide Arrows
					var imdbArrowLeft = getMyElement('', 'div', 'class', 'ipc-shoveler__arrow--left', 0, false);
					if (imdbArrowLeft) styleMyElement(imdbArrowLeft, {display: 'none'});
					var imdbArrowRight = getMyElement('', 'div', 'class', 'ipc-shoveler__arrow--right', 0, false);
					if (imdbArrowRight) styleMyElement(imdbArrowRight, {display: 'none'});
				}
			}
			ytWaitForLoops--;
			if (ytWaitForLoops == 0) {
				if (!imdbPlayerWindow) showMyMessage('!player');
				clearInterval(imdbWaitForObject);
			}
		}, 500);
		intervals.push(imdbWaitForObject);

		/* Create Player */
		var imdbDefaultVideo = 'Low Definition MP4';
		function imdbPlayer() {
			player = {
			'playerSocket': imdbPlayerWindow,
			'playerWindow': myPlayerWindow,
			'videoList': imdbVideoList,
			'videoDefinitions': ['Full High Definition', 'High Definition', 'Standard Definition', 'Low Definition', 'Very Low Definition'],
			'videoContainers': ['MP4', 'M3U8', 'Any'],
			'videoPlay': imdbDefaultVideo,
			'videoThumb': imdbVideoThumb,
			'videoTitle' : imdbVideoTitle,
			'playerWidth': imdbPlayerWidth,
			'playerHeight': imdbPlayerHeight
			};
			createMyPlayer();
		}

		/* Get Video Thumbnail */
		var imdbVideoThumb = getMyContent(page.url, /meta\s+property="og:image"\s+content="(.*?)"/);

		/* Get Video Title */
		var imdbVideoTitle = getMyContent(page.url, /meta\s+property="og:title"\s+content="(.*?)"/);
		if (imdbVideoTitle) imdbVideoTitle = cleanMyContent(imdbVideoTitle, false, true);

		/* Get Videos Content */
		var imdbVideosContent = getMyContent(page.url, /"playbackURLs":(\[.*?\])/);
		try {
			imdbVideosContent = JSON.parse(imdbVideosContent);
		}
		catch(e) {
			imdbVideosContent = {};
		}

		/* Get Videos */
		var imdbVideoList = {};
		if (imdbVideosContent) {
			var imdbVideoFormats = {'1080p': 'Full High Definition MP4', '720p': 'High Definition MP4', '480p': 'Standard Definition MP4',
															'360p': 'Low Definition MP4', 'SD': 'Low Definition MP4', '240p': 'Very Low Definition MP4', 'AUTO': 'Multi Definition M3U8'};
			var imdbVideoFound = false;
			var myVideoCode, imdbVideo;
			for (var imdbVideoCode in imdbVideoFormats) {
				for (var i = 0; i < imdbVideosContent.length; i++) {
					imdbVideo = parseMyContent(JSON.stringify(imdbVideosContent[i]), new RegExp('"url":"(.*?)".*?"value":"' + imdbVideoCode + '"'));
					if (imdbVideo) {
						imdbVideo = cleanMyContent(imdbVideo, false);
						if (!imdbVideoFound) imdbVideoFound = true;
						myVideoCode = imdbVideoFormats[imdbVideoCode];
						if (!imdbVideoList[myVideoCode]) imdbVideoList[myVideoCode] = imdbVideo;
					}
				}
			}
			if (imdbVideoFound) {
				imdbVideosReady = true;
				if (imdbPlayerWindow) imdbPlayer();
			}
			else {
				showMyMessage('!videos');
			}
		}
		else {
			showMyMessage('!content');
		}

	}

}


// ==========Run========== //

getMyOptions();
ViewTube();

page.win.setInterval(function() {
	if (page.url != page.win.location.href.replace(page.win.location.hash, '')) {
		for (var i = 0; i < intervals.length; i++){
			clearInterval(intervals[i]);
		}
		intervals = [];
		if (player['playerWindow'] && player['playerWindow'].parentNode) {
			removeMyElement(player['playerWindow'].parentNode, player['playerWindow']);
		}
		page.doc = page.win.document;
		page.body = page.doc.body;
		page.url = page.win.location.href.replace(page.win.location.hash, '');
		blockInterval = 50;
		if (player['playerSocket']) blockObject = player['playerSocket'];
		blockVideos();
		ViewTube();
	}
	// Block videos
	if (blockObject && blockInterval > 0) {
		blockVideos();
		if (blockInterval > 0) blockInterval--;
	}
}, 500);


})();
