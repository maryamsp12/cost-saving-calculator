export function calculateCount(product, count) {
    
    if (product === 'bottle') {

        var bottle = 0; var pack = 0; var box = 0;

        if (count >= 264) {

            let quotient = Math.floor(count / 264);
            let remainder = count % 264;


            if (remainder >= 11) {
                var quotient2 = Math.floor(remainder / 11);
                pack = quotient2;
                var remainder2 = remainder % 11;
                bottle = remainder2;
            }

            console.log(bottle + ' bottle', pack + ' packs', quotient + ' boxes')
            return (bottle + " bottles (€4.1 each), " + pack + " packs (€40 each), " +  quotient + ' (€950 each)')
        }


        else if (count >= 11 && count < 264) {
            let quotient3 = Math.floor(count / 11);
            pack = quotient3;
            let remainder3 = count % 11;
            bottle = remainder3;

            console.log(bottle + 'bottle' + pack + ' pack' + 0)
            return ( bottle + " pieces (€4.1 each), " +  pack + ' packs (€40 each), ' + 0 + ' boxes (€950 each)')
        }

        else if (count < 11) {

            console.log(count + ' bottle', 0 + ' pack', 0 + ' box');
            return (count + " pieces (€4.1 each), " + 0 + " packs (€40 each), " + 0 + ' boxes (€950 each)');

        }
        else return ('No values')
        

    }

    else if (product === "chocolate") {
        let piece = 0; let pack = 0;

        if (count >= 5) {
            let quotient = Math.floor(count / 5);
            let remainder = count % 5;

            console.log(remainder + " pieces," + quotient + ' packs');
            return (remainder + " pieces (3€ each), " + quotient + " packs (14.5€ each), " ); 

        }
        else if (count < 5) 
        
        console.log(count + ' pieces');
        return (count + " pieces (3€ each)");

        let remainder = count % 5;

        return ("No of pieces: " + remainder + "  (3€ each)")
        console.log(remainder + "  pieces (3€ each)")

    }
    else if (product === 'biscuit') {
        var pack = 0;

        if (count >= 3) {
            let quotient = Math.floor(count / 3);

            console.log(quotient + ' packs')
            return(quotient + ' packs (€4.5 each)')

        }
        else if (count < 3) {

            console.log("You can't buy any pack")
            return("You can't buy any pack")
        }

    } else console.log('no value')
        
}

