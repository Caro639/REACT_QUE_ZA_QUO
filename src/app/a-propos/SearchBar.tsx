"use client";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

//  creer une const router useRouter avec la prochaine navig page produit avec router.push du $barcode demandé 
// composant de la barre de recherche de code barre  form input value search type number et name barcode 
export default function SearchBar() {
  const router = useRouter();

  // function evenement sur le submit et prevent default pas d'envoi de formulaire et router.push
  function handleSubmit(e) {
    e.preventDefault();
    const barcode = e.target.barcode.value;
    router.push(`/produit/${barcode}`);
  }

  return (
    <form className={styles.Barre} action="/produit" onSubmit={handleSubmit}>
      <label htmlFor="searchInput"></label>
      <input
        type="number"
        name="barcode"
        className={styles.Article}
        placeholder="Entrez votre code-barre !"
      />
      <input
        type="submit"
        name="submit"
        className={styles.submit}
        value="search"
      />
    </form>
  );
}

