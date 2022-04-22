//scrivere un ciclo for che scriva a console i numeri da 10 a 50

//1)
// for (let i = 10 ; i <= 50; i++){
//     console.log(i)
// }



//scrivere un ciclo for che scriva a console i numeri pari da 8 a 128

// for( let i = 8; i <= 128 ; i++){
//  const isPariNumeri = i % 2 === 0;   %=modulo

//  let result="";

// if(isPariNumeri){
//     console.log(i + result)
// }
// }
 

//scrivere un ciclo for che scriva a console i numeri da 100 a 0
                           //i = i - 1
// for ( let i=100; i >= 0 ; i--){
//     console.log(i)
// }
 

// let quaderno = 0
// for ( let i=0; i <= 100; i++){

//     quaderno = quaderno + i
//     console.log(quaderno)
//  }
     
// somma di 30 a ogni giro
//  for ( let i=0; i <= 100; i++){

//     let somma  =  i + 30
//     console.log(somma)
//  }
 
//while 1

// let counter =10;
// while (counter <= 50) {
//     console.log("numeri da 10 a: " + counter);
//     counter = counter + 1;
// }

  
//  do while
// let counter1 =8;
//  do {
// console.log(counter1);
//   counter1++
// } while (counter <= 128);


// while 2
// let counter=8;
// while (counter < 129) {
//   console.log(counter);
//    counter = counter + 2;
//  }
//
//do while
//  let counter1 =8;
//  //  do {
//  // console.log(counter1);
//  //   counter1 = counter1 +2
//  // } while (counter < 129);


// while 3
// let counter =100;
// while (counter > 0) {
//   console.log(counter);
//     counter--;
// } 
// do while
//  let counter2 =100;
//  //  do {
//  // console.log(counter2);
//  //   counter2 = counter2 -2
//  // } while (counter2 > -1);
// }

// let counter1= 0;
// let counter2 =1;

    // while (counter <= 100) {
    //    counter1 = counter1 + counter2;
    // console.log(counter);
    // } 
    // do while
    //  let counter1= 0;
    //  let counter2 =1;
    //  //  do {
    //  // console.log(counter2);
    //  //   counter1 = counter1;
    //  // } while (counter1 <= 100);
    // } console.log(counter2)


    // ultimo esercizio

    // let i = 0;

    // const uscita ="esci";

    // while(prompt('scrivi "esci" per uscire dl ciclo')!== uscita){
    //     console.log('scrivi "esci" per uscire dl ciclo' + i);
    //     i++;
    // }

    
//     modo corretto:

//     while(prompt('srivi "esci" per uscire dal ciclo')!== 'esci'){}


// while ultimo compito

//     while(true){
//         let exit = prompt ('inserire "esci":');
//         if (exit === 'esci') {
//          break=;
//       }
//      }