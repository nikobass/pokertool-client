function checkForDuplicates(array, keyName) {
    return new Set(array.map(item => item[keyName])).size !== array.length
}

export const calculator = (chips, nbPlayer, startingStack) => {
    let chipNumber = 0;
    let result = [];
    let error;

    const isChipTooBig = chips.find(chip => chip.value > startingStack);



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
    } else if (isChipTooBig) {
        error = "Un jeton ne peut pas être supérieur au tapis de départ. Veuillez vérifier votre saisie."
        result = {};
        result.error = error;
        return result;
    } else {

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
                quantity: tries,
            })
        }

    });

    if(chipNumber > startingStack) {

        let diff = chipNumber - startingStack;
        result.reverse();

        result.forEach((chip, i) => {
            while (chip.value <= diff && chip.quantity > 0){              
                    chipNumber -= chip.value;
                    diff = chipNumber - startingStack;
                    chip.quantity -= 1;                  
            }
            if(chip.quantity == 0){
                result.splice(i, 1);
            }
        })

        

        result.reverse();
    }

    if (chipNumber === startingStack) {
        return result;
    } else if (chipNumber < startingStack) {
        error = "Les valeurs saisies ne permettent pas d'atteindre le tapis de départ. Veuillez augmenter la valeur des jetons ou réduire la tapis de départ. Il est recommandé de prévoir entre 50 et 200 big blinds pour le tapis de départ."
        result = {};
        result.error = error;
        return result
    } else {
        error = "Impossible d'atteindre le montant du tapis de départ avec la valeur actuelle des jetons. Vérifiez la valeur des jetons et/ou le tapis de départ."
        result = {};
        result.error = error;
        return result
    }
}
}
