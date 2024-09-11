const songData = [
  {
    name: 'Hero',
    artist: 'Leonardo',
    src: '01-Hero.mp3'
  },
  {
    name: 'Believe',
    artist: 'The Walshes',
    src: '02-Believe.mp3'
  },
  {
    name: 'Hide',
    artist: 'Fear No Evil',
    src: '03-Hide.mp3'
  },
  {
    name: 'Voyage Through Infinity',
    artist: 'Leonardo',
    src: '04-Voyage-Through-Infinity.mp3'
  },
  {
    name: 'Treading the Boards',
    artist: 'Xenon',
    src: '05-Treading-The-Boards.mp3'
  },
  {
    name: 'Midnight',
    artist: 'The Rivermen',
    src: '06-Midnight.mp3'
  },
  {
    name: 'Coming After You',
    artist: 'Marsha Davis',
    src: '07-Coming-After-You.mp3'
  },
  {
    name: 'Flow',
    artist: 'The Tides',
    src: '08-Flow.mp3'
  },
  {
    name: 'Confidence',
    artist: 'Karl Franks',
    src: '09-Confidence.mp3'
  },
  {
    name: 'Past',
    artist: 'Nimira',
    src: '10-Past.mp3'
  },
  {
    name: 'Present',
    artist: 'Nimira',
    src: '11-Present.mp3'
  },
  {
    name: 'Future',
    artist: 'Nimira',
    src: '12-Future.mp3'
  },
  {
    name: 'Travel the Ocean',
    artist: 'The Falcons',
    src: '13-Travel-The-Ocean.mp3'
  },
]

const container = document.querySelector('.container')
const songName = document.querySelector('.song-name')
const songArtist = document.querySelector('.song-artist')
const cover = document.querySelector('.cover')
const playPauseBtn = document.querySelector('.play-pause')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const audio = document.querySelector('.audio')
const songTime = document.querySelector('.song-time')
const songProgress = document.querySelector('.song-progress')
const coverName = document.querySelector('cover span:nth-child(2)')
const coverArtist = document.querySelector('cover span:nth-child(1)')