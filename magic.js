console.log(music);

const songBox = document.querySelector('#SongBoxContainer'); //For the songs to be stored
const profileMusic = document.querySelector('#AudioProfile'); //
const profileName = document.querySelector('#ProfileSongName');
const profilePic = document.querySelector('#ProfileImage')
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
    });

    arrayPickup.push(musicContainer);

    songBox.appendChild(musicContainer);
}
