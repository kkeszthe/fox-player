const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/playlist-tracks', (req, res) => {
	console.log('GET playlist-tracks');
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
	res.json({ playListTracks: mockList });
});
app.listen(3000, () => {
	console.log('Listening to port 3000');
});

module.exports = app;
