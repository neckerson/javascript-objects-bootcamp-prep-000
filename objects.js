var playlist = {
  coldplay: 'clocks'
};

function updatePlaylist(playlist, artistName, songTitle) {
  //return Object.assign({}, playlist, { [artistName]: songTitle })
  return playlist[artistName] = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  playlist.delete(artistName)
}