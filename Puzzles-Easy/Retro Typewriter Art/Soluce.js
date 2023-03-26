var T = readline();
var arrayT = T.split(' ');

for (i=0; i < arrayT.length; i++){

    arrayT[i] = arrayT[i].replace("sp", " ");
    arrayT[i] = arrayT[i].replace("bS", "\\");
    arrayT[i] = arrayT[i].replace("sQ", "'");

    var nbLettre = arrayT[i].replace(/[0-9]/g,'').length;

        if (nbLettre == 0){
            var longueurNombre = arrayT[i].length;
            var chiffreDupliquer = arrayT[i].substr(-1);
            var nbDuplication = arrayT[i].substr(0,(longueurNombre - 1));
            arrayT[i] = chiffreDupliquer;

            for (j=1; j < nbDuplication; j++){                
                arrayT[i] = arrayT[i].concat(chiffreDupliquer);
            }

        }else{
            var nbDuplication2 = arrayT[i].replace(/[^\d]/g, "");
                if (nbDuplication2 < 1){
                    arrayT[i] = arrayT[i].replace("nl", "\n");
                }else if (nbDuplication2 > 1){
                    var resteApresChiffre = arrayT[i].replace(/[0-9]/g, "");
                    arrayT[i] = resteApresChiffre;
                    for (h=1; h < nbDuplication2; h++){
                        arrayT[i] = arrayT[i].concat(resteApresChiffre);
                    }
                }else{
                    arrayT[i]= arrayT[i].replace("1", "");
                }
        }

}
console.log(arrayT.join(''));