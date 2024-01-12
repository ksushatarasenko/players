const playList = {
 playListId: '1',
 playListTitel:'Пилатес для начинающих.',
 
 video:[
    {
        videoId: '11',
        videoTitle: 'Пилатес для начинающих.Урок 1.',
        lessonTitle: 'Базовый набор упражнений',
        playListautor:'Фитнес Онлайн',
        videoUrl: 'https://www.youtube.com/embed/hQVYrUIQBos?si=Dii8W8Kbf3lOGmaF&amp;start=90',
    },
    {
        videoId: '12',
        videoTitle: 'Пилатес для начинающих.Урок 2.',
        lessonTitle: 'Базовый набор упражнений',
        playListautor:'Фитнес Онлайн',
        videoUrl: 'https://www.youtube.com/embed/qAQB3HdJQ5Y?si=xK6J1zXaEojSq5ah',
    },
    {
        videoId: '13',
        videoTitle: 'Пилатес для начинающих.Урок 3.',
        lessonTitle: 'Базовый набор упражнений',
        playListautor:'Фитнес Онлайн',
        videoUrl: 'https://www.youtube.com/embed/N20LvJB6qWg?si=zMTFE7BKLgB5ZGdY',
    },
    {
        videoId: '14',
        videoTitle: 'Пилатес для начинающих.Урок 4.',
        lessonTitle: 'Упражнения с упором на стену.',
        playListautor:'Фитнес Онлайн',
        videoUrl: 'https://www.youtube.com/embed/UlI-rWUejR4?si=PSuGvgBFZf3DjjO5',
    },
    {
        videoId: '15',
        videoTitle: 'Пилатес для начинающих.Урок 2.',
        lessonTitle: 'Растяжка.',
        playListautor:'Фитнес Онлайн',
        videoUrl: 'https://www.youtube.com/embed/LcVpA2qm6WE?si=sx8G79BTyvrP3oA-',
    },
 ]
}

renderPlayList(playList);

function renderPlayList (playListForRendering){
    renderPlayListHeader(playListForRendering);
    

    for(let i = 0; i < playListForRendering.video.length; i ++){
        renderVideoItem(playListForRendering.video[i])
    }
   
};

function renderPlayListHeader(inputPlayList){
    const playList = document.querySelector('.titlePlaylist')
    const playListTitleEl = document.createElement('h2');
    playListTitleEl.innerText = inputPlayList.playListTitel;

    playList.appendChild(playListTitleEl);
};


function renderVideoItem(videoForRendering){
    const playList = document.querySelector('.item')

    const divItemEl = document.createElement('div')
    divItemEl.classList.add('videoItem');
    const iframeVideoEl = document.createElement('iframe');
    iframeVideoEl.src = videoForRendering.videoUrl;

    const videoTitle = document.createElement('p');
    videoTitle.append(videoForRendering.videoTitle + ' ' + videoForRendering.lessonTitle);

    const videoAutor = document.createElement('a');
    videoAutor.href = 'https://www.youtube.com/@PilatesOnline';
    videoAutor.target = '_blank';
    videoAutor.append(videoForRendering.playListautor);

    
    divItemEl.append(iframeVideoEl, videoTitle, videoAutor);
    playList.append(divItemEl);
}
