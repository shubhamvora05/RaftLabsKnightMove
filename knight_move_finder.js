
    // function to calculate possible moves
    function findPossibleMoves( p, q)
    {
        // All possible moves of a knight
        let X = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
        let Y = [ 1, 2, 2, 1, -1, -2, -2, -1 ];
   
        let count = 0;

        let res = [];
   
        // TO chcek  possible move is valid or not
        for (let i = 0; i < 8; i++) {
   
            // Position of knight after move
            let x = p + X[i];
            let y = q + Y[i];
   
            // count valid moves
            if (x >= 0 && y >= 0 && x < 8 && y < 8 ){
                count++;
                res.push([x,y]);
            }
        }
   
        // Return number of possible moves
        return res;
    }
     

    let p = 8, q = 8;
 
    console.log(findPossibleMoves(p, q));