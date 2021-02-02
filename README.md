# node-js-convert-video
Convert video using handbrake-js module

It aspires to provide a lean and stable foundation for building video transcoding software in node.js.

HandBrake is a tool for converting video from nearly any format to a selection of modern, widely supported codecs. It can process most common multimedia files and any DVD or BluRay sources that do not contain any copy protection.
Outputs:

File Containers: .MP4(.M4V) and .MKV

Video Encoders: H.264(x264), H.265(x265) MPEG-4 and MPEG-2 (libav), VP8 (libvpx) and Theora(libtheora)
Audio Encoders: AAC, CoreAudio AAC/HE-AAC (OS X Only), MP3, Flac, AC3, or Vorbis
Audio Pass-thru: AC-3, DTS, DTS-HD, AAC and MP3 tracks

Compatible Platforms

Tested on Mac OSX, Ubuntu 14, Windows XP, Windows 7 and Windows 8.1.

Ubuntu 14.04 notice: Transcoding to MP4 fails on Ubuntu since 14.04 for this reason.

Ubuntu PPAs

The following instructions are for Ubuntu. They may also work on other deb-compatible distributions. For other Linux, please compile from the official source code.

From the command line, add the official releases PPA to your system.

sudo add-apt-repository ppa:stebbins/handbrake-releases
sudo apt-get update

If you prefer HandBrake’s nightly builds, add the official git-snapshots PPA.:

sudo add-apt-repository ppa:stebbins/handbrake-git-snapshots
sudo apt-get update

Install HandBrake::
sudo apt-get install handbrake-cli handbrake-gtk

