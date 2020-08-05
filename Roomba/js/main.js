let room = "";
let tileNumber = 0;

for (let i = 0; i < 64; i++) {
        tileNumber++;
    
        if (tileNumber == 3  || tileNumber == 6  || tileNumber == 9 ||
            tileNumber == 12 || tileNumber == 15 || tileNumber == 19 ||
            tileNumber == 21 || tileNumber == 26 || tileNumber == 30 ||
            tileNumber == 32 || tileNumber == 33 || tileNumber == 36 ||
            tileNumber == 42 || tileNumber == 45 || tileNumber == 48 ||
            tileNumber == 52 || tileNumber == 54 || tileNumber == 63 
            ) {

            room += `<div class="tile ${tileNumber} dirty">${tileNumber}</div>`;
        } else {

            room += `<div class="tile ${tileNumber}">${tileNumber}</div>`;
        }                
}

cleanTiles = () => {

    let totalScore = 0;
    let moveRoombaPoint = 10;
    let cleanDirtyTilePoint = 250;
    let numOfDirtyTiles = room.match(/dirty/g); //use regex to match

    for (let j = 0; j < numOfDirtyTiles.length; j++) {
        if (numOfDirtyTiles) { 
            room = room.replace(numOfDirtyTiles[j], "");
        }
    }
    
    totalScore = (numOfDirtyTiles.length * cleanDirtyTilePoint) - (tileNumber * moveRoombaPoint);
    document.querySelector(".score").innerText = totalScore;
    
    let moves = tileNumber + 7;
    document.querySelector(".moves").innerText = moves;
    
    document.getElementById("room").innerHTML = room;
};

document.getElementById("room").innerHTML = room;