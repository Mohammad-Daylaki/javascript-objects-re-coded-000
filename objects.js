var playlist ={
	'Slowdive': 'Alison',
	'My Bloody Valentine': 'Sometimes'
};

function updatePlaylist(playlist, artistName, songTitle) {
    playlist[artistName]= songTitle;
}

function removeFromPlaylist(playlist, artistName) {
	delete playlist[artistName];
}