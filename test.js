const double = (a) => a*3;
console.log(double(2));
const fruitsRouges=["fraise","framboise","cerise"];
fruitsRouges.forEach(fruit => console.log('La ',fruit,'c est bon'));
const nombres=[12,3,4,10];
let doubles=nombres.map(n => n*2);//map contrairement à foreach a l'accès sur les cases du tableaux pour faire un changement et non pas seulement afficher et l'affichage est sous forme de tableau
console.log(doubles);
let paire = nombres.filter(n => n%2 ==0);
console.log(paire);