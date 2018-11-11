
window.onload = function(){
	let squares = $("#puzzlearea").children();
	var count = 0;
	var x = 0;
	var y = 0;
	let empty = ["300px","300px"]
	var toporiginal;
	var leftoriginal;
	var place;

	//function createGrid(){
	//creates the grid and sets the background image
	
	
	//};
	for (var i = 0; i<squares.length; i++) {
		$(squares[i]).first().addClass("puzzlepiece");
				
		squares[i].style.left = x + "px";
		squares[i].style.top = y + "px";
		squares[i].style.backgroundPosition = "-"+squares[i].style.left+" "+"-"+squares[i].style.top;
		squares[i].onmouseover = movable;
		//squares[i].onclick = move;
		x+=100;
		count ++;
		if(count%4 == 0){
			y += 100;
			x = 0;			
		};
		//console.log(squares[i].style.top);
		//console.log(squares[i].style.left);
	};
	
	function move(){
		for(var i = 0;i<squares.length; i++)
			squares[i].onclick = function(){
				if(movable(squares[i]) == true){
					toporiginal = parseInt(squares[i].style.top);
					leftoriginal = parseInt(squares[i].style.left);

					squares[i].style.top = empty[0];
					squares[i].style.left = empty[1];
					empty[0] = toporiginal;
					empty[1] = leftoriginal;
			}
		
		
		
		};
		
	};
	function movable(piece){
		
		// toporiginal = parseInt(piece.style.top);
		// leftoriginal = parseInt(piece.style.left);
		if (toporiginal == empty[0] && leftoriginal == (empty[1]-100) || toporiginal == empty[0] && leftoriginal == (empty[1]+100) || toporiginal == (empty[0]-100) && leftoriginal == empty[1] || toporiginal == (empty+100) && leftoriginal == empty[1]){
			
			return true;
		}
		
	}
	
// createGrid();
move();

};
	
	

