function roundnum(num){
    return Math.round(num / 50)*50;
    }

const structureCreator = (smallestChip, nbPlayer, startingStack, stageTime) => {

    const totalChips = nbPlayer * startingStack;
    let stage = 1;
    let currentSB = smallestChip*2;
    let currentBB = currentSB*2;
    const structure = [{
        stage: stage,
        smallBlind: currentSB,
        bigBlind: currentBB,
    }];


    while(currentSB < totalChips/20){
        currentSB = roundnum(currentSB*1.33);
        currentBB = currentSB*2;

        structure.push({
            stage: stage+=1,
            smallBlind: currentSB,
            bigBlind: currentBB,
        })
    }
    return {
        structure,
        'durée aproximative': `Durée aproximative :${Math.round((stageTime * structure.length)/60)} heures`
    };
}

console.log(structureCreator(100, 5, 10000, 20));