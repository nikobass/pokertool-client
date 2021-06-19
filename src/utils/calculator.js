export const calculator = (chips, nbPlayer, startingStack) => {
    let chipNumber = 0
    let result = [];

    chips.forEach(chip => {

        let tries = 0;

        for (i = 1; i <= chip.number / nbPlayer; i++) {
            if (chipNumber < startingStack) {
                chipNumber += chip.value
                tries++
                console.log(chipNumber)
            }
        }

        if (tries > 0) {
            result.push({
                color: chip.color,
                value: chip.value,
                number: tries
            })
        }

    });

    while (chipNumber > startingStack) {

            let diff = chipNumber - startingStack;
            result.reverse();

            result.forEach(chip => {
                while(chip.value <= diff){
                    if (chip.value <= diff) {
                    chipNumber -= chip.value;
                    diff = chipNumber - startingStack;
                    chip.number -= 1;
                    console.log(chipNumber)
                }}
            })
    }
    result.reverse();
    return result;
}


