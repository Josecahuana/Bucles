
//Pagar mensualidad

// let monthAct = '19/03/2024';
// let month = '19/03/2024';


// if ( monthAct === month ) {
//     console.log('Es hora de pagar');
// } else {
//     console.log('Aun no es tiempo :)');
// }



// Pagar mensualidad

// let monthAct = '19/03/2024';

// switch (monthAct) {
//     case '19/03/2024':
//         console.log('Es hora de pagar');
//         break;
//     case '18/03/2024':
//         console.log('Aún no es tiempo de pagar');
//         break;
//     case '17/03/2024':
//         console.log('Aún no es tiempo de pagar');
//         break;
//     case '20/03/2024':
//         console.log('Te pasaste de la fecha de pago');
//         break;
//     default:
//         console.log('Salirse del curso');
//         break;
// }



for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        console.log(`Valores pares ${i}`);
    }
}

for(let i = 1; i <= 100; i++){
    if(i % 2 !== 0){
        console.log(`Valores impares ${i}`);
    }
}

let total = 0;
for(let i = 1; i <= 100; i++){
    total += i; 
}


console.log(total);
