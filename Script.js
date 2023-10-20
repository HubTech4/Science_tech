var count = 0;
var time = 0;
var timer = 0;
const PAUSE = 1;
var timerControl = 0;

//start timer
function startTimer(){
	time = 0;

	if (timerControl == 0) {
		timer = setInterval(incrementTimer, PAUSE * 1000);
	}
	timerControl++;
}



//increment timer every second
function incrementTimer() {
	time = time + 1;
	totalTime.innerHTML = "Time:" + time + " seconds";

}


function swapTiles(cell1, cell2) {
	var temp = document.getElementById(cell1).className;
	document.getElementById(cell1).className = document.getElementById(cell2).className;
	document.getElementById(cell2).className = temp;
}


function newGame() {

	startTimer();

	//Use nested loops to access each cell of the 4x4 grid
	for (var row = 1; row <= 4; row++) //foreach row of the 4x4 grid
	{
		//foreach column in this row
		for (var column=1; column <= 4; column++) {
			//pick a random row from 1 to 4

			var row2 = Math.floor(Math.random()*4+1);

			//pick a random column from 1 to 4
			var column2 = Math.floor(Math.random()*4+1);

			swapTiles("cell"+row+column, "cell"+row2+column2); //swap the look & feel of both cells

		}

	}
	count = 0;
}




function simpleGame() 
{
   
	complete();
	//Use nested loops to access each cell of the 4x4 grid
	
	var option= Math.floor(Math.random()*2+1);
	if (document.getElementById("cell11").className == "tile1" && document.getElementById("cell12").className == "tile2" && document.getElementById("cell13").className == "tile3" && document.getElementById("cell14").className == "tile4" && document.getElementById("cell21").className == "tile5" && document.getElementById("cell22").className == "tile6" && document.getElementById("cell23").className == "tile7" && document.getElementById("cell24").className == "tile8" && document.getElementById("cell31").className == "tile9" && document.getElementById("cell32").className == "tile10" && document.getElementById("cell33").className == "tile11" && document.getElementById("cell34").className == "tile12" && document.getElementById("cell41").className == "tile13" && document.getElementById("cell42").className == "tile14" && document.getElementById("cell43").className == "tile15" && document.getElementById("cell44").className == "tile16") 
	{
	
	
    if(option==1){
       swapTiles("cell34", "cell44");
    }


    if(option==2){
      swapTiles("cell43", "cell44");

	
	}
	
	}

}

function complete()
{
	document.getElementById("cell11").className = "tile1";
	document.getElementById("cell12").className = "tile2";
    document.getElementById("cell13").className = "tile3";
    document.getElementById("cell14").className = "tile4";
    document.getElementById("cell21").className = "tile5";
    document.getElementById("cell22").className = "tile6";
    document.getElementById("cell23").className = "tile7";
    document.getElementById("cell24").className = "tile8";
    document.getElementById("cell31").className = "tile9"; 
    document.getElementById("cell32").className = "tile10"; 
    document.getElementById("cell33").className = "tile11";
    document.getElementById("cell34").className = "tile12";
    document.getElementById("cell41").className = "tile13";
    document.getElementById("cell42").className = "tile14";
    document.getElementById("cell43").className = "tile15";	
	document.getElementById("cell44").className = "tile16";	
    count=0;
	textMoves.innerHTML="Number of moves thus far:" +count;
	startTimer();
	
}	
	

function clickTile(row, column) {
	var cell = document.getElementById("cell" + row + column);
	var tile = cell.className;

	if (tile != "tile16") {
		//check if the white tile is on the right
		if (column < 4) {
			if (document.getElementById("cell" + row + (column + 1)).className == "tile16") {
				swapTiles("cell" + row + column, "cell" + row + (column + 1));
				count = count + 1;
				textMoves.innerHTML = "Number of moves thus far:" +count;
				setTimeout(() => {Win()}, 1000);
				
				return;
			}
		}
		//check if the white tile is on the left
		if (column > 1) {
			if (document.getElementById("cell" + row + (column - 1)).className == "tile16") {
				swapTiles("cell" + row + column, "cell" + row + (column - 1));
				count = count + 1;
                textMoves.innerHTML = " Number of moves thus far:" +count;
				setTimeout(() => {Win()}, 1000);
				
				return;
			}
		}
		//check if the white tile is above
		if (row > 1) {
			if (document.getElementById("cell" + (row - 1) + column).className == "tile16") {
				swapTiles("cell" + row + column, "cell" + (row - 1) + column);
				count = count + 1;
				textMoves.innerHTML = "Number of moves thus far:" + count;
				setTimeout(() => {Win()}, 1000);
				return;
			}
		}

		//check if the white tile is below
		if (row < 4) {
			if (document.getElementById("cell" + (row + 1) + column).className == "tile16") {
				swapTiles("cell" + row + column, "cell" + (row + 1) + column);
				count = count + 1;
				textMoves.innerHTML = "Number of moves thus far:" + count;
				setTimeout(() => {Win()}, 1000);
				
				return;
			}

		}

	}

}

function Win() 
{
	
if (document.getElementById("cell11").className == "tile1" && document.getElementById("cell12").className == "tile2" && document.getElementById("cell13").className == "tile3" && document.getElementById("cell14").className == "tile4" && document.getElementById("cell21").className == "tile5" && document.getElementById("cell22").className == "tile6" && document.getElementById("cell23").className == "tile7" && document.getElementById("cell24").className == "tile8" && document.getElementById("cell31").className == "tile9" && document.getElementById("cell32").className == "tile10" && document.getElementById("cell33").className == "tile11" && document.getElementById("cell34").className == "tile12" && document.getElementById("cell41").className == "tile13" && document.getElementById("cell42").className == "tile14" && document.getElementById("cell43").className == "tile15" && document.getElementById("cell44").className == "tile16") 
   
{
	setTimeout(function() { Win(); }, 5000);

	var playAgain= confirm("Congratulations!!\n\n You've successfully reordered the puzzle numbers in sequential order!\n\n Number of moves it took to complete: " +count+" \n Time spent to complete it: " +time+" seconds! \n\n\n To play again, click ok.");
        
	if(playAgain==true)
		
	{
        newGame();
    }

    window.location.reload();		


}


}





