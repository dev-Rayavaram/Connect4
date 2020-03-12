/*
a  ← Player 1
 b ← Computer
gameStatus ← true
	
	On gameStart ← Board is empty

	WHILE  (gameStatus)
	   Player1 selects position AND drops one piece in empty slot
	THEN
	 Computer randomly position one  piece on the board
		gameStatus ← checkGame
	END WHILE

	Procedure checkGame
	IF Player 1 gets 4 elements in a row
		Player 1 WINS
		gameStatus ← false
		Game ENDS
	ELSE IF Computer gets 4 elements in a row
		Computer WINS
		gameStatus ← false
		GAME Ends	
*/