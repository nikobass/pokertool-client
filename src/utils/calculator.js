function checkForDuplicates(array, keyName) {
    return new Set(array.map(item => item[keyName])).size !== array.length
}

export const calculator = (chips, nbPlayer, startingStack) => {
    let chipNumber = 0;
    let result = [];
    let error;

    const isChipTooBig = chips.find(chip => chip.value > startingStack);
    const isChipBadAmount = chips.find(chip => chip.value > 10 && !chip.value % 5);

    // je vérifie si il y a deux couleurs identiques
    if(checkForDuplicates(chips, 'color')){
        error = "Plusieurs jetons ont la même couleur. Veuillez vérifier votre saisie."
        result = {};
        result.error = error;
        return result;
    }else if(checkForDuplicates(chips, 'value')){
        // je vérifie si il y a deux valeurs identiques
        error = "Plusieurs jetons ont la même valeur. Veuillez vérifier votre saisie."
        result = {};
        result.error = error;
        return result;
    } else {

    if (isChipTooBig) {
        error = "Un jeton ne peut pas être supérieur au tapis de départ. Veuillez vérifier votre saisie."
        result = {};
        result.error = error;
        return result;
    }

    chips.forEach(chip => {
        let tries = 0;

        chip.value = parseInt(chip.value);
        chip.quantity = parseInt(chip.quantity);

        for (let i = 1; i <= chip.quantity / nbPlayer; i++) {
            if (chipNumber < startingStack) {
                chipNumber += chip.value;
                tries++;
            }
        }

        if (tries > 0) {
            result.push({
                color: chip.color,
                value: chip.value,
                number: tries,
            })
        }

    });

    while (chipNumber > startingStack) {

        let diff = chipNumber - startingStack;
        result.reverse();

        result.forEach(chip => {
            while (chip.value <= diff) {
                if (chip.value <= diff) {
                    chipNumber -= chip.value;
                    diff = chipNumber - startingStack;
                    chip.quantity -= 1;
                }
            }
        })
        result.reverse();
    }

    if (chipNumber == startingStack) {
        return result;
    } else if (chipNumber < startingStack) {
        error = "Les valeurs saisies ne permettent pas d'atteindre le tapis de départ. Veuillez augmenter la valeur des jetons ou réduire la tapis de départ. Il est recommandé de prévoir entre 50 et 200 big blinds pour le tapis de départ."
        result = {};
        result.error = error;
        return result
    } else {
        error = "Un problème est survenu. Veuillez vérifier vos saisies et relancer le répartiteur."
    }
}
}


// const myChips = [
//     {
//         color: '#ff',
//         value: 25,
//         number: 50,
//     },
//     {
//         color: '#ff',
//         value: 100,
//         number: 50,
//     },
//     {
//         color: '#ff',
//         value: 1000,
//         number: 50,
//     },
// ]

// console.log(calculator(myChips, 5, 50000));