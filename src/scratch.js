// const PICS = (function() {
//   let descriptions = {
//     finger:3,
//     frown:1,
//     fun:1,
//     smirk:2,
//     salute:1,
//     shake:1,
//     stare:1,
//     wave:2
//   };
//   let pics = [];
//   let keys = Object.keys(descriptions);
//   for (let i=1; i <= 3; i++) {
//     keys.reduce((acc, nxt) => {
//       if (descriptions[nxt] >= i) {
//         let url = `../../../assets/dt_${nxt}${i}.jpeg`;
//         acc.push(require(url));
//         return acc;
//       }
//     }, pics);
//   }
//   return pics;
// })();
// let assets = '../../../assets';
// const PICS = [
//   require(`../../../assets/dt_finger1.jpeg`),
//   require(`../../../assets/dt_frown1.jpeg`),
//   require(`../../../assets/dt_fun1.jpeg`),
//   require(`../../../assets/dt_hands1.jpeg`),
//   require(`../../../assets/dt_salute1.jpeg`),
//   require(`../../../assets/dt_shake1.jpeg`),
//   require(`../../../assets/dt_smirk1.jpeg`),
//   require(`../../../assets/dt_stare1.jpeg`),
//   require(`../../../assets/dt_wave1.jpeg`),
//   require(`../../../assets/dt_finger2.jpeg`),
//   require(`../../../assets/dt_smirk2.jpeg`),
//   require(`../../../assets/dt_wave2.jpeg`),
//   require(`../../../assets/dt_finger3.jpeg`),
// ];
// PICS[0];
