function competition_rank(results, person) {
	let arrScore = [];
	let arrName = [];
	
	for(let person in results){
		arrScore.push(results[person]);
		arrName.push(person);
    }
    

    for(let i=0; i<arrScore.length; i++){
        for(let j=0; j<arrScore.length-i; j++){
            if(arrScore[j] < arrScore[j+1]){
                let temp = arrScore[j];
                arrScore[j] = arrScore[j+1];
                arrScore[j+1] = temp;

                temp = arrName[j];
                arrName[j] =  arrName[j+1];
                arrName[j+1] = temp;
            }
        }
        
    }
    
    for(let i=0; i<arrName.length; i++){
        if(arrName[i] === person){
            for(let j=0; j<arrScore.length; j++){
                if(arrScore[i] === arrScore[j]){
                    return j+1;
                }
            }
        }
    }

    
    
}

console.log(competition_rank({
    Kate: 92,
    Carol: 92,
    Jess: 87,
    Bruce: 87,
    Scott: 84
    }, "Scott"))
	