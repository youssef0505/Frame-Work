import styles from "./resultat.module.css";

function Resultat() {
  const moyenne = 14; 

  const estAdmis = moyenne >= 10;

  return (
    <div className={moyenne >= 10 ? styles.admis : styles.refuse}>
      <h2>{estAdmis ? "Admis" : "Refusé"}</h2>   
      <p>Moyenne : {moyenne}</p>                  
    </div>
  );
}

export default Resultat;