
ViewTube is a browser user script for watching videos from video websites with a video plugin, an external video player or the HTML5 video player.

![](https://gitlab.com/sebaro/ViewTube/raw/master/Images/screenshot.png)


## Installation

#### Mozilla (Firefox, Seamonkey, IceWeasel, IceCat, TenFourFox etc):
   - with Greasemonkey add-on:
   > https://addons.mozilla.org/firefox/addon/greasemonkey
   - with Tampermonkey add-on:
   > https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/
   > https://www.tampermonkey.net/?browser=firefox
   - with Violentmonkey add-on:
   > https://addons.mozilla.org/firefox/addon/violentmonkey/
   > https://violentmonkey.github.io/get-it/
   - with Scriptish add-on:
   > https://github.com/scriptish/scriptish
   - WebExtensions add-on:
   > https://addons.mozilla.org/firefox/addon/viewtube

#### Chromium (or based on: Chrome, Iron etc):
   - save the script and drag & drop it on the extensions page
   - with Tampermonkey add-on:
   > https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
   > https://www.tampermonkey.net/?browser=chrome
   - with Violentmonkey add-on:
   > https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag
   > https://violentmonkey.github.io/get-it/
   - WebExtensions add-on:
   > https://chrome.google.com/webstore/detail/viewtube/hfkkgpcjliaiakfgljddganibplpohgn

#### Opera:
   - for versions <= 12 download and save the script in the JavaScript files directory (Settings/Preferences/Advanced/Content/JavaScript Options.../User JavaScript folder) and enable "User JavaScript on HTTPS" in "opera:config".
   - with Violentmonkey extension:
   > https://violentmonkey.github.io/get-it/
   - with Tampermonkey extension:
   > https://addons.opera.com/en/extensions/details/tampermonkey-beta
   > https://www.tampermonkey.net/?browser=opera

#### Safari:
   - for versions < 5.1 with GreaseKit add-on:
   > http://safariaddons.com/en-US/safari/addon/43
   - for versions < 5.0.1 with NinjaKit add-on:
   > http://os0x.hatenablog.com/entry/20100612/1276330696
   - for versions >= 6 with Tampermonkey add-on:
   > https://www.tampermonkey.net/?browser=safari

#### Epiphany:
   - with the Greasemonkey extension from Epiphany extensions

#### Midori:
   - with "User Addons" extension

#### Falkon/QupZilla:
   - with the Greasemonkey plugin

#### Maxthon:
   - with Violentmonkey extension:
   > http://extension.maxthon.com/detail/index.php?view_id=1680
   - with Tampermonkey Chrome extension:
   > https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
   > https://www.tampermonkey.net/?browser=chrome
   - Maxthon extension:
   > http://extension.maxthon.com/detail/index.php?view_id=2967


### Usage
   - Select the video from the menu or use the options window to select the preferred video definition and container.

#### Play/Stop
   - Use play/stop icons to play/stop the video playback. Clicking the video thumbnail will also start the video playback.

#### Download [Link]
   - Click download icon to get the video stream link. If the download doesn't start, click "Link". The browser will show the open popup window. Some browsers don't have this feature and will open/play the video, for these right click 'Link' and 'Save link as'.

#### DASH
   - Some sites use DASH streams, which are audio only and video only. These are shown in the videos menu as "Video Only" and "Audio Only". Enable DASH playback support in the options window and the videos menu will show new videos as "Video With Audio". You can play these using the browser player, a plugin or an external player, read below for more details.

#### Widesize
   - Click the wide rectangular to enter/exit widesize mode.

#### Fullsize
   - Click the dashed rectangular to enter/exit fullsize mode.


## Players

### Plugins

#### Linux:
   - MPlayerPlug-In:
   > http://mplayerplug-in.sourceforge.net
   - Gecko-MediaPlayer:
   > http://code.google.com/p/gecko-mediaplayer
   - MozPlugger:
   > http://mozplugger.mozdev.org
   - Totem:
   > http://projects.gnome.org/totem
   - VLC:
   > http://videolan.org/vlc
   - Kaffeine:
   > http://kaffeine.kde.org
   - Dragon Player:
   > http://kde.org/applications/multimedia/dragonplayer
   - KMPlayer:
   > http://kmplayer.kde.org
   - MPlayer (with MozPlugger):
   > http://mplayerhq.hu
   - mpv (with MozPlugger):
   > http://mpv.io

#### Windows:
   - Windows Media Player:
   > http://www.interoperabilitybridges.com/windows-media-player-firefox-plugin-download
   - QuickTime:
   > http://apple.com/quicktime
   - VLC:
   > http://videolan.org/vlc

#### Mac:
   - QuickTime:
   > http://apple.com/quicktime
   - VLC:
   > http://videolan.org/vlc

### External

If no video plugin is installed it's possible to use an external player for video playback. This requires the use of a browser protocol and a script that has to be associated with it. Read here for more info: http://sebaro.pro/viewtube

### Internal

If no video plugin is installed the browser will use the HTML5 video player for video playback. It is the defaut, the 'Video' option in the embed menu from the options window.


## Options

#### Embed (Video, Object, Embed, Protocol)
    Select which type of embed option to use when playing the videos. Choose "Video" if you want to use the browser video player (HTML5), "Object" or "Embed" if you want to use a plugin (NPAPI, not supported anymore by most browsers) or "Protocol" if you want to use an external player. :

#### Media
    Select which type of media or plugin to use when embeding the video. Choose "Auto" so the video is embedded using its own media/mime type, choose other option for embedding the video with a different media type or with a plugin.

#### Definition (SD, HD etc)
   - Select the default (highest) video definition.

#### Container (MP4, WebM etc)
   - Select the default video container.

#### Autoplay
   - Enable/disable video autoplay. If it's on the video starts to play when the video page is loaded or when a new video format is selected. If it's off a video thumbnail is shown.

#### DASH
   - Enable/disable DASH streams (video with audio) playback. Available options are "HTML5/Video" and "Embed+VLC". The default option is "HTML5/Video". Select "Embed" and "VLC" in the embed and media menus to use VLC instead. This is experimental and it may not work as expected. An external player can also be used.

#### DVL
   - Enable/disable auto selection of DVL as the default option in the videos menu. With DVL only the video link is embedded so the video streams are fetched by the video plugin, directly or using an external application. The plugins that support this are MPV (mozplugger + mpv + youtube-dl) and VLC.
