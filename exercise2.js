// esercizio 1

// ciclo for che parta da 0 fino a 100
// ad ogni giro stampare il valore di i
//e stampare FIZZ se i divisibile per 3, BUZZ se divisibile per 5, FIZZBUZZ se divisibile per 3 e per 5

// for (let i = 0; i < 101; i++) {
//   const isDivisibilePerCinque = i % 5 === 0;
//   const isDivisibilePerThree = i % 3 === 0;

//   let result = "";

// if (isDivisibilePerThree && isDivisibilePerCinque) {
//         result = result + 'FIZZBUZZ'; 
//         console.log(i + ',' + result)
//     } else if (isDivisibilePerCinque){
//         result += "BUZZ"; 
//         console.log(i + ',' + result);
//     } else if (isDivisibilePerThree){
//         result += "FIZZ"; 
//         console.log(i + ',' + result)
//     } 
// else {
//       console.log(i); 
// } 
// }



// esercizio2

// console.log("# # #  #\n # # # #");

// const teacher ='giorgio';
// const age='52'

// console.log("il docente" + teacher + "ha" + "age" + "anni");

// for(let i = 0; i < 8; i++){
//     if(i % 2 === 0){
//         console.log("# # # #")
//     }else{
//         console.log("# # # #")
//     }
// }



// versione per far scacchiera
// for( let r = 0; r < 8; r++){
//     let stringaDiRiga = "";
//     for(let c = 0 ; c < 8; c++){

//    const isRigaPari = r % 2 === 0;
//    const isColonnaDispari = c % 2 === 0;
   
//    if(isRigaPari && isColonnaDispari){
//     stringaDiRiga = stringaDiRiga + "#";
//    }else if(!isRigaPari && !isColonnaDispari){
//     stringaDiRiga = stringaDiRiga + "#";
//    }else{
//     stringaDiRiga = stringaDiRiga + " ";
//    }
//  }
//     console.log(stringaDiRiga);
// }

// versione semplice per scacchiera
// for( let r = 0; r < 8; r++){
//      let stringaDiRiga = "";
// for( let c = 0; c < 8; c++) {
//     const sommaDiRigaEColonna = r + c;
//     const isSommaPari = sommaDiRigaEColonna % 2 === 0;

//     if(isSommaPari){
//         stringaDiRiga = stringaDiRiga + "#"
//     }else{
//         stringaDiRiga = stringaDiRiga + ' '
//     }
// }
//  console.log(stringaDiRiga)
// }



