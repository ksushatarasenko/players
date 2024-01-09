// Изучите данный https://www.figma.com/file/RwhPrXc5977XHgLbocvfhH/Precourse-%2F-Sprint-%231-%2F-Week-%231-(Copy)?type=design&node-id=1-12&mode=design&t=WKxdBbXIdkXfWeE7-0
// Мы создаём переменные и “записываем в них” данные, на основе которых был создан “контент”, кторый мы видим на UI.
// Нужно различать “статический” контент и динамический. Именно для динамического контента у нас и существуют данные.

// Данамика подразумевает, что

// данных в какой-то момент не было
// потом они были созданы программой
// затем могут модифицироваться программой
// или вовсе быть удалёнными программой​


// Вся эта динамика изменений данных должна по итогу упривести к изменениям на UI/API

// ===================================

const playList = {
    playListId: '1',
    title: 'Hip-hop Hits',
    coverImageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhoEEbGRiKmHyaqcbmthHQS_c5EbRo422U-A&usqp=CAU',
    totalInfo: {
        totalCountTrack: 4,
        totalLongTrack: 733,
    },
    tracks:[
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
    ]

}

renderPlayList(playList);
// render trackImg

function renderPlayList(playListForRendering){
    renderPlayListHeader(playListForRendering)
    // === render traksTitle
    
    renderTrack(playListForRendering.tracks[0]);
    renderTrack(playListForRendering.tracks[1]);
    renderTrack(playListForRendering.tracks[2]);
    renderTrack(playListForRendering.tracks[3]);
    renderTrack(playListForRendering.tracks[4]);
    renderTrack(playListForRendering.tracks[5]);
    renderTrack(playListForRendering.tracks[6]);
    renderTrack(playListForRendering.tracks[7]);
 
}

function renderPlayListHeader(playListforRendering){
    const divElement = document.createElement('div')
    const titlePlayListEl = document.createElement('h1');
    titlePlayListEl.innerText = playListforRendering.title;

    const coverImgEl = document.createElement('img');
    coverImgEl.src = playListforRendering.coverImageUrl;

    divElement.append(titlePlayListEl, coverImgEl)
    document.body.append(divElement);

};

function renderTrack(inputTrackForRendering){
    const traksElement = document.createElement('div');
    traksElement.append(inputTrackForRendering.artistName + '-'+ inputTrackForRendering.trackTitle);
   


    let playerElement = document.createElement('audio');
    playerElement.src = inputTrackForRendering.trackAudio.trackUrl;
    playerElement.controls = true;

    let trackImg = document.createElement('img');
    trackImg.src = inputTrackForRendering.trackImgUrl;
    trackImg.style.width = '150px'

    traksElement.append(trackImg,playerElement)
    document.body.append(traksElement)
};









