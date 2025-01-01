const playList = {
    playListId: '1',
    title: 'HIP-HOP music MIX',
    coverImageUrl: './image/hip_hop.png',
    totalInfo: {
        totalCountTrack: 4,
        totalLongTrack: 733,
    },
    tracks1:[
        {
            trackId: '11',
            trackImgUrl: './image/lonely.webp',
            artistName: 'ONEIL, ORGAN, KANVISE ',
            trackTitle: ' Lonely',
            trackAudio:{
                trackUrl:'./mp3/ONEIL, ORGAN, KANVISE, Calem OG – Lonely.mp3',
                isHot: false,
            }
        },
        {
            trackId: '12',
            trackImgUrl: './image/sweetDreams.webp',
            artistName: 'ORGAN, ONEIL, FAVIA',
            trackTitle: ' Sweet Dreams',
            trackAudio:{
                trackUrl:'./mp3/ORGAN, ONEIL, FAVIA – Sweet Dreams.mp3',
                isHot: true,
            }
        },
        {
            trackId: '13',
            trackImgUrl: './image/stereoLove.webp',
            artistName: 'Edward Maya, Vika Jigulina',
            trackTitle: 'Stereo Love (Edit)',
            trackAudio:{
                trackUrl:'./mp3/Edward Maya, Vika Jigulina – Stereo Love Edit.mp3',
                isHot: true,
            }
        },
        {
            trackId: '14',
            trackImgUrl: './image/eminam.webp',
            artistName: 'Eminem ',
            trackTitle: " Mockingbird",
            trackAudio:{
                trackUrl:'./mp3/Eminem – Mockingbird.mp3',
                isHot: false,
            }
        },
        {
            trackId: '15',
            trackImgUrl: './image/eminam.webp',
            artistName: 'Crystal',
            trackTitle: " ONEIL FEAT. ORGAN & FAVIA",
            trackAudio:{
                trackUrl:'./mp3/oneil-feat-organ-amp-favia-crystal.mp3',
                isHot: false,
            }
        },
        {
            trackId: '16',
            trackImgUrl: './image/loboda.jpeg',
            artistName: 'СВЕТЛАНА ЛОБОДА',
            trackTitle: "РОДНОЙ",
            trackAudio:{
                trackUrl:'./mp3/Лобода - Родной_muzrecord.com.mp3',
                isHot: false,
            }
        },
        {
            trackId: '17',
            trackImgUrl: './image/zivert.webp',
            artistName: 'ZIVERT',
            trackTitle: "CREDO",
            trackAudio:{
                trackUrl:'./mp3/zivert_credo.mp3',
                isHot: false,
            }
        },
        {
            trackId: '18',
            trackImgUrl: './image/body.webp',
            artistName: 'ALIONA MOON',
            trackTitle: "BODY",
            trackAudio:{
                trackUrl:'./mp3/aliona-moon-body.mp3',
                isHot: false,
            }
        },
        {
            trackId: '19',
            trackImgUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/67/f5/29/67f529f9-041a-4b29-447d-69630bf8662f/cover.jpg/1200x1200bb.jpg',
            artistName: 'Ласковый зверь',
            trackTitle: "9 Грамм",
            trackAudio:{
                trackUrl:'./mp3/9 Грамм - Ласковый зверь (при уч.Alina Orlova).mp3',
                isHot: false,
            }
        },
        {
            trackId: '20',
            trackImgUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a3/4e/45/a34e4559-11b2-c6e0-b9d8-46a846ee6578/cover.jpg/160x160bb.webp',
            artistName: 'Misha Miller, Alex Velea',
            trackTitle: "Bam Bam",
            trackAudio:{
                trackUrl:'./mp3/Misha Miller, Alex Velea – Bam Bam.mp3',
                isHot: false,
            }
        },
    ]

}

renderPlayList(playList);
// render trackImg

function renderPlayList(playListForRendering){
    renderPlayListHeader(playListForRendering)
    // === render traksTitle
    
    
    for(let i = 0; i < playListForRendering.tracks1.length; i++){
        renderTrack(playListForRendering.tracks1[i])
    }
}

function renderPlayListHeader(playListforRendering){
    const imgHeaderAudio = document.querySelector('.imgHeaderAudio');
    const titleHeaderAudio = document.querySelector('.titleHeaderAudio');
   
    const titlePlayListEl = document.createElement('h1');
    titlePlayListEl.innerText = playListforRendering.title;

    const coverImgEl = document.createElement('img');
    coverImgEl.src = playListforRendering.coverImageUrl;
    coverImgEl.style.width = '100%'

    imgHeaderAudio.append(coverImgEl);
    titleHeaderAudio.append(titlePlayListEl)
};

let currentIndex = 0;
let currentAudioPlayer = null;
function renderTrack(inputTrackForRendering){
    const playList = document.querySelector('.playList');

    // Создаем контейнер для трека
    const trackContainer = document.createElement('div');
    trackContainer.classList.add('playListItem');

    // Создаем элемент для изображения трека
    const trackImg = document.createElement('div');
    trackImg.classList.add('trackImg');
    let trackImgElement = document.createElement('img');
    trackImgElement.src = inputTrackForRendering.trackImgUrl;
    trackImgElement.style.width = '150px';
    trackImg.append(trackImgElement)

    // Создаем элемент для данных трека
    const track = document.createElement('div');
    track.classList.add('track');
    let playerElement = document.createElement('audio');
    playerElement.src = inputTrackForRendering.trackAudio.trackUrl;
    playerElement.controls = true;
    track.append(inputTrackForRendering.artistName + ' - '+ inputTrackForRendering.trackTitle.toLowerCase(), playerElement); 

playerElement.addEventListener('ended', function(){playNextTrack()});

playerElement.addEventListener('play', function () {
        if (currentAudioPlayer && currentAudioPlayer !== playerElement) {
            currentAudioPlayer.pause();
        }
        currentAudioPlayer = playerElement;
    });


    trackContainer.append(trackImg, track);
    playList.append(trackContainer);
};



function playNextTrack(){
    const audioPlayers = document.querySelectorAll('.track audio');
    if(currentIndex < audioPlayers.length - 1) {
        currentIndex ++;
        audioPlayers[currentIndex].play();
    } else {
        currentIndex = 0;
        audioPlayers[currentIndex].play();
    }
    audioPlayers[currentIndex].play();
}








