# SorcererKillerBot 

Sorcerer Killer Mb – A Discord Bot for Playing Music in a Voice Channel

This bot accepts a query and scours YouTube to find the most applicable video or playlist. It extracts the audio from the videos it finds and then plays it back in the voice channel of the user that queried it, so discord users can enjoy their favorite videos while calling their friends! This bot is written entirely in JavaScript, and makes use of the dependencies yt-search, ytdl-core, and ytpl to find the YouTube videos based on the query. It then uses ffmpeg and opus to extract the audio and play it back in the call.

COMMANDS

`play URL (p) - Add video or playlist from the given URL to the queue.

`play words (p) - Search for a track on YouTube.

`queue (q) - Display the queue of the current tracks (up to 25).

`nowplaying (np) - Display the currently playing track.

`skip (s) - Remove the currently playing track from the queue.

`voteskip (v) - Vote to skip the current track. Must have at least 50% of the votes.

`stop (st) - Stop the player and clear the queue.

`pause - Pause the player.

`resume - Resume the player.

`join (j) - Make EuterpeBot join your current voice channel.

`leave (lv) - Make EuterpeBot leave the current voice channel.

`repeat (rep) - Change to repeat mode.

`restart - Restart the currently playing track.

`help - Show bot commands.
