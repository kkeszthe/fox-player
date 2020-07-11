const selectedTracklist = [];

fetch('http://localhost:3000/playlist-tracks')
	.then((res) => res.json())
	.then((res) => {
		res.playListTracks.forEach((track) => {
			selectedTracklist.push(track);
		});
	})
	.catch(console.log);

function displayPlaylist() {
	const tracklist = document.querySelector('.right');
	tracklist.innerHTML = '';
	displayPlaylistTracks(selectedTracklist, tracklist);
}
function displaySelectedTrack(track) {
	const actual = document.querySelector('#actual');
	actual.innerHTML = '';
	const trackDetails = document.createElement('div');
	const h2 = document.createElement('h2');
	const p = document.createElement('p');
	const buttons = document.createElement('div');
	const favouriteBTN = document.createElement('img');
	const addBTN = document.createElement('button');
	h2.textContent = track.title;
	p.textContent = track.artist;
	favouriteBTN.setAttribute('src', 'assets/star.svg');
	addBTN.textContent = '+';
	trackDetails.appendChild(h2);
	trackDetails.appendChild(p);
	buttons.appendChild(addBTN);
	buttons.appendChild(favouriteBTN);
	actual.appendChild(trackDetails);
	actual.appendChild(buttons);
	const audio = document.querySelector('audio');
	audio.setAttribute('src', track.source);
}
function displayPlaylistTracks(tracks, htmlElement) {
	tracks.forEach((track, index) => {
		const li = document.createElement('li');
		// const songTitle = document.createElement('p');
		// const songDuration = document.createElement('p');
		li.textContent = track.title;
		li.addEventListener('click', (event) => {
			const selectedItem = document.querySelector('.right .selected');
			if (selectedItem) {
				selectedItem.classList.toggle('selected');
			}
			li.classList.toggle('selected');
			displaySelectedTrack(track);
		});
		if (index === 0) {
			li.click();
		}
		htmlElement.appendChild(li);
	});
}

const playlists = document.querySelectorAll('.left li');

playlists.forEach((playlist) => {
	playlist.addEventListener('click', (event) => {
		const selectedItem = document.querySelector('.left .selected');
		if (selectedItem) {
			selectedItem.classList.toggle('selected');
		}
		playlist.classList.toggle('selected');
		displayPlaylist();
	});
});

//Audio controllers
const playBTN = document.querySelector('#play');
const muteBTN = document.querySelector('#mute');
const forwardBTN = document.querySelector('#forward');
const rewinddBTN = document.querySelector('#rewind');
const player = document.querySelector('audio');
const volume = document.querySelector('#volume');
const seekbar = document.querySelector('#seekbar');

playBTN.addEventListener('click', (event) => {
	if (player.getAttribute('src') === '') {
		alert('Select playlist and track');
	} else if (play.classList.contains('pause')) {
		player.pause();
		play.setAttribute('src', './assets/play.svg');
		console.log('I pause music');
		play.classList.toggle('pause');
	} else {
		player.play();
		play.setAttribute('src', './assets/pause.svg');
		console.log('I play music');
		play.classList.toggle('pause');
	}
});
muteBTN.addEventListener('click', (event) => {
	if (player.volume > 0) {
		volume.setAttribute('value', 0);
		player.volume = 0;
	} else {
		volume.setAttribute('value', 100);
		player.volume = 1;
	}
});
player.addEventListener('timeupdate', (event) => {
	seekbar.setAttribute('value', (player.currentTime / player.duration) * 300);
});

seekbar.addEventListener('click', (event) => {
	seekbar.setAttribute('value', event.offsetX);
	player.currentTime = (event.offsetX / 300) * player.duration;
});

volume.addEventListener('click', (event) => {
	volume.setAttribute('value', event.offsetX);
	player.volume = event.offsetX / 100;
});
