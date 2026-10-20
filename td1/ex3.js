/*const pays = ["Italie", "Japon", "Grèce", "Espagne", "Canada"];
const [p1 , p2] = pays;
const [p0,...px]=pays;
console.log(p1);
console.log(p2);
console.log(p0);
console.log(px);
const [,,p3]=pays;
console.log(p3);
px[0]="tunisie";
console.log(px);
console.log(pays);
const pm=pays.map(p => p);
pm[0]="tunisie";
console.log(pm);
console.log(pays);*/
const personne=[{nom:"ahmed",ville:"bizerte",age:20},
    {nom:"samir",ville:"tunisie",age:15},
    {nom:"nermine",ville:"nabeul",age:25}];
/*const {nom}=personne[0];
const {nom:identifiant}=personne[0];
console.log(nom);
console.log(identifiant);*/

/*const noms = personne.map(({nom}) => nom);
console.log(noms);*/

/*const nom_age=personne.map(({nom,age}) => ({nom,age}));
console.log(nom_age);*/

const nvPersonne={nom:'hela',ville:'bizerte',age:43};
const personne2=[...personne,nvPersonne];
console.log(personne2);







