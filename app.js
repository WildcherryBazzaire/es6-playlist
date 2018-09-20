const music = [
    /* all for alblums */
    {
        arist: 'Tonyetta',
        genre: 'Experimental',
        song: 'Pressure Zone',
        image: 'images/tonetta.jpg',
        file: 'sounds/Pressure Zone.mp3'
    },
    {
        artist: 'Death Grips',
        genre: 'Experimental',
        song: 'Three Neighbors in a Good NeighborHood',
        image: 'images/MCride.jpg',
        file: 'sounds/Bank Account.mp3'
    },
    {
        artist: 'Rolling Stones',
        genre: 'experimental',
        song: '2000 light years away',
        image: 'images/pink.jpg',
        file: 'sounds/Bank Account.mp3'
    },
    {
        artist: 'Tangerine Dream',
        genre: 'experimental',
        song: 'Brain Damage',
        image: 'images/pink.jpg',
        file: 'sounds/Bank Account.mp3'
    },
    {
        artist: 'Atom Heart Mother',
        genre: 'experimental',
        song: 'Pink Floyd',
        image: 'images/pink.jpg',
        file: 'sounds/Bank Account.mp3'
    },
    {
        artist: 'Death Grips',
        genre: 'Experimental',
        song: 'Flies',
        image: 'images/MCride.jpg',
        file: 'sounds/Bank Account.mp3'
    },
    /* --------------------------*/
    {
        artist: 'King Geedorah',
        genre: 'rap',
        song:'Fazers',
        image: 'images/king.jpeg',
        file: 'sounds/Bank Account.mp3'
    },
    {
        artist: 'King Geedorah',
        genre: 'rap',
        song:'Fastlane',
        image: 'images/king.jpeg',
        file: 'sounds/Bank Account.mp3'
    },
    {
        artist: 'King Geedorah',
        genre: 'rap',
        song:'Krazy World',
        image: 'images/king.jpeg',
        file: 'sounds/Bank Account.mp3'
    },
    {
        artist: 'King Geedorah',
        genre: 'rap',
        song:'The Final Hour',
        image: 'images/king.jpeg',
        file: 'sounds/Bank Account.mp3'
    },
    {
        artist: 'King Geedorah',
        genre: 'rap',
        song:'Monster Zero',
        image: 'images/king.jpeg',
        file: 'sounds/Bank Account.mp3'
    },
    {
        artist: 'King Geedorah',
        genre: 'rap',
        song:'Next Level',
        image: 'images/king.jpeg',
        file: 'sounds/Bank Account.mp3'
    },
    /* --------------------------*/
    {
        artist: 'Kraftwerk',
        genre: 'electronic',
        song: 'Autobahn',
        image: 'images/kraftwerk.jpg',
        file: 'sounds/Bank Account.mp3'
    },
    {
        artist: 'Kraftwerk',
        genre: 'electronic',
        song: 'Kometenmelodie 1',
        image: 'images/kraftwerk.jpg',
        file: 'sounds/Bank Account.mp3'
    },
    {
        artist: 'Kraftwerk',
        genre: 'electronic',
        song: 'Kometenmelodie 2',
        image: 'images/kraftwerk.jpg',
        file: 'sounds/Bank Account.mp3'
    },
    {
        artist: 'Kraftwerk',
        genre: 'electronic',
        song: 'Mitternact',
        image: 'images/kraftwerk.jpg',
        file: 'sounds/Bank Account.mp3'
    },
    {
        artist: 'Kraftwerk',
        genre: 'electronic',
        song: 'Morgenspaziergang',
        image: 'images/kraftwerk.jpg',
        file: 'sounds/Bank Account.mp3'
    },
    {
        artist: 'Kraftwerk',
        genre: 'electronic',
        song: 'Showroom Dummies',
        image: 'images/kraftwerk.jpg',
        file: 'sounds/Bank Account.mp3'
    },
    /* ------------------- */
    {
        artist: 'Tangerine Dream',
        genre: 'new age',
        song: 'The Big Sleep in Search Of Hades',
        image: 'images/tangerine.jpg',
        file: 'sounds/Bank Account.mp3'
    },
    {
        artist: 'Tangerine Dream',
        genre: 'new age',
        song: '3AM At The Border Of The Marsh',
        image: 'images/tangerine.jpg',
        file: 'sounds/Bank Account.mp3'
    }
    ,    {
        artist: 'Tangerine Dream',
        genre: 'new age',
        song: 'Invisible Limits',
        image: 'images/tangerine.jpg',
        file: 'sounds/Bank Account.mp3'
    },
    {
        artist: 'Tangerine Dream',
        genre: 'new age',
        song: 'Stratofear',
        image: 'images/tangerine.jpg',
        file: 'sounds/Bank Account.mp3'
    },
    {
        artist: 'Tangerine Dream',
        genre: 'new age',
        song: 'Love On A Real Train',
        image: 'images/tangerine.jpg',
        file: 'sounds/Bank Account.mp3'
    },
    {
        artist: 'Tangerine Dream',
        genre: 'new age',
        song: 'One Night in Space',
        image: 'images/tangerine.jpg',
        file: 'sounds/Bank Account.mp3'
    }
]

function FilterCat(genre,data) {
    return data.filter(element => {
        
        return element.genre.toLowerCase() === genre;
    
    });
};

var dublicateToHTML = [];