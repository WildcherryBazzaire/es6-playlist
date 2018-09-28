console.log(music);

const songBox = document.querySelector('#SongBoxContainer'); //For the songs to be stored
const profileMusic = document.querySelector('#AudioProfile'); //
const profileName = document.querySelector('#ProfileSongName');
const profilePic = document.querySelector('#ProfileImage')
const visualizer = document.querySelector('#Visualizer')
var arrayPickup = [];

var FilterCat = (genre,data) => { //filters by genre
    return data.filter(element => {
        
        return element.genre.toLowerCase() === genre;
    
    });
};

dublicateToHTML = music.map(element => (
    `
        <img src=${element.image} />
        <h2>${element.song}</h2>
        <h3>${element.artist}</h3>
        <h4>${element.genre}</h4>
        <h6>${element.file}</h6>
    `
    ) 
);

function Categorize(category) {
    console.log(category);
    if(category !== 'All') {
        arrayPickup.filter(cur => {
            if(cur.childNodes[7].innerHTML.toLowerCase() === category.toLowerCase()) {
                return cur.style.display = 'inline-block';
            } 
            else {
                return cur.style.display = 'none';
            }
        });
    } else {
        arrayPickup.forEach(cur => {
            cur.style.display = 'inline-block';
        })
    }

} 

for(var i=0; i < dublicateToHTML.length; i++) {
    
    let musicContainer = document.createElement('div');
    musicContainer.classList.add('musicContainer');
    musicContainer.innerHTML = dublicateToHTML[i];

    musicContainer.addEventListener('click',() => {
        profilePic.src = musicContainer.getElementsByTagName('img')[0].src;
        profileName.innerHTML = musicContainer.getElementsByTagName('h2')[0].innerHTML;
        profileMusic.src = musicContainer.getElementsByTagName('h6')[0].innerHTML;
        profileMusic.play();
        context.resume()
    });

    arrayPickup.push(musicContainer);

    songBox.appendChild(musicContainer);
}

window.onload = () => {
    profileMusic.load();
    profileMusic.play();

    var context = new AudioContext();
    var src = context.createMediaElementSource(profileMusic);
    var analyser = context.createAnalyser();

    visualizer.width = window.innerWidth;
    visualizer.height = window.innerHeight;
    var ctx = visualizer.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = visualizer.width;
    var HEIGHT = visualizer.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    function renderFrame() {
        window.requestAnimationFrame(renderFrame);

      x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      for (var i = 0; i < bufferLength; i++) {
        barHeight = dataArray[i];
        
        var r = barHeight + (25 * (i/bufferLength));
        var g = 250 * (i/bufferLength);
        var b = 50;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }
    renderFrame();
        profileMusic.play();z
};