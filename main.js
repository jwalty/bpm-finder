let sum = 0;
let beatsCounted = 0;
let currentBPM = 0;
let lastTime = 0;
let msBetween = [];

addEventListener('keydown', (e) => {
    if (e.code = 'Space') {
        beatsCounted++;
        let timeOfKeypress = new Date().getTime();
        if (lastTime == 0) {
            lastTime = timeOfKeypress;
            return;
        }
        let timeSinceLast = timeOfKeypress - lastTime;
        msBetween.push(timeSinceLast);
        sum += timeSinceLast;
        lastTime = timeOfKeypress;


        let beatsToTrack = document.getElementById('beatsToTrack').value;

        let tempSum = 0;
        let tempArray = [];
        for (let i=-1; i > - beatsToTrack - 1; i--) {
            tempSum += msBetween.at(i);
            tempArray.push(msBetween.at(i));
        }
        let tempAvg = tempSum / beatsToTrack;
        currentBPM = Math.round(60 / ((tempAvg) / 1000));
        document.getElementById('currentBPM').textContent = currentBPM;

    }
});

let songs = [
    [95, "Just the Two of Us - Bill Withers"],
    [85, "What You Won't Do For Love - Bobby Caldwell"],
    [125, "Flyday Chinatown - Yasuha"],
    [115, "Get Lucky - Daft Punk feat. Pharrell Williams"],
    [120, "My Type - Saint Motel"],
    [120, "American Boy - Estelle, Kanye West"],
    [115, "D.A.N.C.E - Justice"],
    [102, "Suit and Tie (feat. Jay-Z) - Justin Timberlake, JAY-Z"],
    [160, "Hey Ya - Outkast"],
    [118, "Baby I'm Yours feat. Irfrane - Breakbot"],
    [120, "Move Your Feet - Junior Senior"],
    [108, "Can't Feel MY Face - The Weeknd"],
    [116, "Treasure - Bruno Mars"],
    [112, "Crazy - Gnarls Barkley"],
    [123, "Counting Stars - OneRepublic"],
    [154, "Pump It - Black Eyed Peas"],
    [125, "September - Earth, Wind & Fire"],
    [120, "Blurred Lines - Robin Thicke, Pharrel Williams"],
    [115, "Uptown Funk - Mark Ronson, Bruno Mars"],
    [120, "The Sweet Escape"],
    [130, "Good Feeling - Flo Rida"],
    [118, "I Don't Like It, I Love It - Flo Rida, Robin Thicke"],
    [120, "Don't Stop 'Til You Get Enough"],
    [160, "Happy - Pharrell Williams"],
    [119, "I Wanna Dance with Somebody (Who Loves Me) - Whitney Houston"],
    [120, "Celebration - Kool & The Gang"],
    [120, "Call Me Maybe - Carly Rae Jepsen"],
    [103, "Levitating - Dua Lipa, DaBaby"],
    [125, "Y.M.C.A. - Village People"],
    [128, "Push It - Salt-N-Pepa"],
    [170, "Stay (with Justin Bieber) - The Kid LAROI"],
    [112, "Poison - Bell Biv DeVoe"],
    [130, "Party Rock Anthem - LMFAO"],
    [115, "Rock with You - Michael Jackson"],
    [103, "Life Is A Highway - Tom Cochrane"],
    [128, "Shut Up and Dance - WALK THE MOON"],
    [120, "Dynamite - Taio Cruz"],
    [135, "U Can't Touch This - MC Hammer"],
    [120, "PLACEHOLDER"],
    [120, "PLACEHOLDER"],
    [120, "PLACEHOLDER"],
    [120, "PLACEHOLDER"],



];


function lookForSong() {
    let songsAdded = 0;
    const guessContainer = document.getElementById('guessContainer');
    guessContainer.innerHTML = "";
    for (let i=0; i < songs.length; i++) {
        let bpmDifference = Math.abs(currentBPM - songs[i][0]);
        if (bpmDifference < 3) {
            if (songsAdded >= 5) {
                return;
            }
            document.getElementById('guessContainer').appendChild(createSongCard(songs[i][1]));
            songsAdded++;
        }
    }
}

function createSongCard(songName) {
    let guess = document.createElement('li');
    guess.classList = 'list-group-item';
    guess.textContent = songName;
    return guess;
}

window.setInterval(function(){
	
	lookForSong();
	
}, 5000);