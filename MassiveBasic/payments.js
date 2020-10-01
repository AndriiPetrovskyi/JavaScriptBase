/*
 * Порахувати загальну суму покупок в корзині
 */

 const cart = [54, 48, 18, 62, 73, 165, 115, 38];
 // Створити змінну тотал перед початком цикла
 let total = 0;

//  for (let i = 0; i < cart.length; i += 1) {
//     //  console.log(cart[i])
//      total += cart[i];    
//      console.log(total)
//  }

 for (const value of cart) {
     total += value;
 }

 console.log(`Total = ${total}`)

 for (let i = 0; i < cart.length; i += 1) {
     cart[i] = Math.round(cart[i] * 1.1);
 }

 console.log(cart)