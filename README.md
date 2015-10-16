
ViewTube is a browser user script for watching videos from video websites with a video plugin or the HTML5 video player.  

![](https://raw.github.com/sebaro/ViewTube/master/screenshot.png)  

### Installation  

Mozilla (Firefox, Seamonkey, IceWeasel, IceCat, TenFourFox etc):  
== with Greasemonkey add-on:  
-> https://addons.mozilla.org/firefox/addon/greasemonkey  
== or with Scriptish add-on:  
-> https://addons.mozilla.org/firefox/addon/scriptish  

Chromium (or based on: Chrome, Iron etc):  
== no add-on needed, save the script and drag & drop it on the extensions page  
== or with Tampermonkey add-on:  
-> https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo  

Opera:
== for versions <= 12 no add-on needed, just place the script in the JavaScript files directory
== or with Violentmonkey extension:
-> https://addons.opera.com/en/extensions/details/violent-monkey
== or with Tampermonkey extension:
-> https://addons.opera.com/en/extensions/details/tampermonkey-beta

Safari:
== for versions < 5.1 with GreaseKit add-on:
-> http://safariaddons.com/en-US/safari/addon/43
== for all versions (?) with NinjaKit add-on:
-> http://d.hatena.ne.jp/os0x/20100612/1276330696
== as bookmarklet with Geekmonkey add-on:
-> http://surber.us/2006/04/14/geekmonkey

Konqueror:
== with KHTML-Userscript extension:
-> http://kde-apps.org/content/show.php?content=140676

Epiphany:
== with the Greasemonkey extension from Epiphany extensions

Midori:
== with "User Addons" extension

QupZilla:
== with the Greasemonkey plugin

Maxthon:
== with Violentmonkey extension:
-> http://extension.maxthon.com/detail/index.php?view_id=1680
== or with Tampermonkey Chrome extension:
-> https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo

Internet Explorer:
== with IE7Pro extension:
-> http://ie7pro.com

### Plugins

Linux:
-> MPlayerPlug-In: http://mplayerplug-in.sourceforge.net
-> Gecko-MediaPlayer: http://code.google.com/p/gecko-mediaplayer
-> MozPlugger: http://mozplugger.mozdev.org
-> Totem: http://projects.gnome.org/totem
-> VLC: http://videolan.org/vlc
-> Kaffeine: http://kaffeine.kde.org
-> Dragon Player: http://kde.org/applications/multimedia/dragonplayer
-> KMPlayer: http://kmplayer.kde.org
-> MPlayer (with MozPlugger): http://mplayerhq.hu
-> mpv (with MozPlugger): http://mpv.io

 Windows:
 -> Windows Media Player: http://www.interoperabilitybridges.com/windows-media-player-firefox-plugin-download
-> QuickTime: http://apple.com/quicktime
-> VLC: http://videolan.org/vlc

Mac:
-> QuickTime: http://apple.com/quicktime
-> VLC: http://videolan.org/vlc

### Options

Plugin (second menu):
-> You can choose from: Auto, Alt, HTML5, MPEG, MP4, FLV, VLC, MPV, WMP, WMP2, QT, Totem, Xine
-> Auto: videos are embedded with the OBJECT element and played by the plugin associated with the video's mimetype
-> Alt: videos are embedded with the EMBED element and played by the plugin associated with the video's mimetype
-> HTML5: videos are embedded with the VIDEO element and played by the HTML5 video plugin
-> MPEG|MP4|FLV: videos are played by the video plugin associated with these file types
-> MPV: videos are played by mpv if this is the default video plugin associated with video/mp4 (see DVL)
-> VLC: videos are played by the VLC video plugin
-> WMP|WMP2: videos are played by the Windows Media Player video plugin (Windows only)
-> QT: videos are played by the QuickTime video plugin (Windows and Mac)
-> Totem: videos are played by the Totem video plugin (Linux)
-> Xine: videos are played by the Xine video plugin (Linux)

Autoplay (AP):
-> Click 'Autoplay' button to turn autoplay on/off. If it's on, the video starts to play when the video page is loaded or when a new video format is selected. If it's off, a video thumbnail and a 'Play' button are shown.

Definition (SD, HD etc):
-> Click this button to change the default video definition.

Container (MP4, WebM etc):
-> Click this button to change the default video container.

MPEG-DASH (MD):
-> Click this button to enable/disable MPEG-DASH streams (video with audio) playback. Available options are VLC and HTML5. The default option is HTML5. Select "VLC" in the plugins menu to use it instead. This is experimental and it may not work as expected

Direct Video Link (DVL):
-> Click to enable/disable auto selection of DVL as the default option in the videos menu. With DVL only the video link is embedded so the video streams are fetched by the video plugin, directly or using an external application. The plugins that support this are MPV (mozplugger + mpv + youtube-dl) and VLC.

Widesize (>|<):
-> Click the right arrow button to enter widesize. Click the left arrow button to go back to normal size.

Fullsize (+|-):
-> Click the plus button to enter fullsize. Click the minus button to go back to normal size.
