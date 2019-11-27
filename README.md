
ViewTube is a browser user script for watching videos from video websites with a video plugin, an external video player or the HTML5 video player.

![](https://gitlab.com/sebaro/ViewTube/raw/master/Images/screenshot.png)


## Installation

#### Mozilla (Firefox, Seamonkey, IceWeasel, IceCat, TenFourFox etc):
   - with Greasemonkey add-on:
   > https://addons.mozilla.org/firefox/addon/greasemonkey
   - with Scriptish add-on:
   > https://addons.mozilla.org/firefox/addon/scriptish
   - WebExtensions add-on:
   > https://addons.mozilla.org/firefox/addon/viewtube

#### Chromium (or based on: Chrome, Iron etc):
   - save the script and drag & drop it on the extensions page
   - with Tampermonkey add-on:
   > https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
   - with Violentmonkey add-on:
   > https://chrome.google.com/webstore/detail/violentmonkey/jinjaccalgkegednnccohejagnlnfdag
   - WebExtensions add-on:
   > https://chrome.google.com/webstore/detail/viewtube/hfkkgpcjliaiakfgljddganibplpohgn

#### Opera:
   - for versions <= 12 no add-on needed, just place the script in the JavaScript files directory and allow "User JavaScript on HTTPS" in opera:config.
   - with Violentmonkey extension:
   > https://violentmonkey.github.io/get-it/
   - with Tampermonkey extension:
   > https://addons.opera.com/en/extensions/details/tampermonkey-beta

#### Safari:
   - for versions < 5.1 with GreaseKit add-on:
   > http://safariaddons.com/en-US/safari/addon/43
   - for all versions (?) with NinjaKit add-on:
   > http://d.hatena.ne.jp/os0x/20100612/1276330696
   - as bookmarklet with Geekmonkey add-on:
   > http://surber.us/2006/04/14/geekmonkey

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
   - Maxthon extension:
   > http://extension.maxthon.com/detail/index.php?view_id=2967

#### Internet Explorer:
   - with IE7Pro extension:
   > http://ie7pro.com
   - IE11:
   > https://sourceforge.net/projects/trixiewpf45


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

If no video plugin is installed the browser will use the HTML5 video player for video playback. If it doesn't work, select "Video" from the embedding type menu in options frame.


## Options

#### Embed video with:
Chooses how to play the video:
   - Use HTML5 player in browser
   - Use OBJECT tag to start external player plugin
   - Use EMBED tag to start external player plugin
   - Use external player started via associated viewtube: PROTOCOL. Read here for more info: http://sebaro.pro/viewtube

#### Play as/with:
You can choose player plugin used to play this video:
   - Default MP4 player plugin
   - Default WebM player plugin
   - Default M3U8 player plugin
   - VLC plugin
   - Windows Media Player plugin (Windows only)
   - QuickTime plugin (Windows and Mac)
   - Totem plugin (Linux)
   - Xine plugin (Linux)

This setting does not matter if use external protocol-based player.

#### Definition (SD, HD etc) and container (MP4, WebM etc):
   - Use these menus to change the default video definition and format suitable for your browser/player and computer perfomance.

#### Autoplay:
   - If it's on, the video starts to play when the video page is loaded or when a new video format is selected. If it's off, a video thumbnail and a 'Play' button are shown.

#### DASH support:
   - Use the menu to enable/disable MPEG-DASH streams (video with audio) playback. Available options are VLC and HTML5. The default option is HTML5. Select "VLC" in the plugins menu to use it instead. This is experimental and it may not work as expected

#### Direct Video Link (DVL):
   - Use this menu to enable/disable auto selection of DVL as the default option in the videos menu. With DVL been enabled only the video link is used so the video streams are fetched by the video plugin, directly or using an external application. The plugins that support this are MPV (mozplugger + mpv + youtube-dl) and VLC. Other players are need their plugins to use DVL.

#### Play/Stop
   - Click to switch play/stop mode.

#### Get
   - Click to download video file (when DVL is off) or copy the link to it.

#### Widesize:
   - Click the rectangle button to enter widesize. Click it again to go back to normal size.

#### Fullsize:
   - Click the dotted rectangle button to enter fullsize. Click it again to go back to normal size.
