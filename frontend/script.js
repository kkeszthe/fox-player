const mockList = [
	{
		source:
			'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Ziklibrenbib/Peculate/st/Peculate_-_03_-_Existence_Through_Negation.mp3',
		artist: 'Peculate',
		title: 'Existence Through Negation',
	},
	{
		source:
			'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Ziklibrenbib/Peculate/st/Peculate_-_07_-_Vale_of_Tears.mp3',
		artist: 'Peculate',
		title: 'Vale of Tears',
	},
	{
		source:
			'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Ziklibrenbib/Peculate/st/Peculate_-_09_-_The_Immediate_Task.mp3',
		artist: 'Peculate',
		title: 'The Immediate Task',
	},
	{
		source:
			'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Ziklibrenbib/Peculate/st/Peculate_-_04_-_Opium_of_the_People.mp3',
		artist: 'Peculate',
		title: 'Opium of the People',
	},
	{
		source:
			'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/Ziklibrenbib/Don_Aman/Starving/Don_Aman_-_05_-_Kraken.mp3',
		artist: 'Don Aman',
		title: 'Kraken',
	},
	{
		source:
			'https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/So_Far_As_I_Know/Fragments_Disclosure/So_Far_As_I_Know_-_05_-_Grimwood.mp3',
		artist: 'So Far As I Know',
		title: 'Grimwood',
	},
];

function displayPlaylist() {
	const songlist = document.querySelector('.right');
	songlist.innerHTML = '';
	mockList.forEach((song, index) => {
		const li = document.createElement('li');
		li.textContent = song.title;
		li.addEventListener('click', (event) => {
			const selectedItem = document.querySelector('.right .selected');
			if (selectedItem) {
				selectedItem.classList.toggle('selected');
			}
			li.classList.toggle('selected');
			displaySelectedSong(song);
		});
		if (index === 0) {
			li.click();
		}
		songlist.appendChild(li);
	});
}
function displaySelectedSong(song) {
	const actual = document.querySelector('#actual');
	actual.innerHTML = '';
	const h2 = document.createElement('h2');
	h2.textContent = song.title;
	const p = document.createElement('p');
	p.textContent = song.artist;
	actual.appendChild(h2);
	actual.appendChild(p);
	const audio = document.querySelector('audio');
	audio.setAttribute('src', song.source);
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

const play = document.querySelector('#play');

const player = document.querySelector('audio');

play.addEventListener('click', (event) => {
	if (player.getAttribute('src') === '') {
		alert('Select playlist and song');
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

player.addEventListener('timeupdate', (event) => {
	document
		.querySelector('#seekbar')
		.setAttribute('value', player.currentTime / player.duration);
});
