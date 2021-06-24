function roundnum(num, round){
    return Math.round(num / round)*round;
    }

const structureCreator = (smallestChip, nbPlayer, startingStack, stageTime) => {

    const totalChips = nbPlayer * startingStack;
    let stage = 1;
    let currentSB = smallestChip;
    let currentBB = currentSB*2;
    const structure = [{
        stage: stage,
        smallBlind: currentSB,
        bigBlind: currentBB,
    }];


    while(currentSB < totalChips/20){
        currentSB = roundnum(currentSB*1.5, smallestChip);
        currentBB = currentSB*2;

        structure.push({
            stage: stage+=1,
            smallBlind: currentSB,
            bigBlind: currentBB,
        })
    }

    const duration = (stageTime * structure.length) / 60;
    durationInHour = Math.round(duration*2)/2;

    return structure,
}

console.log(structureCreator(25, 5, 10000, 20));