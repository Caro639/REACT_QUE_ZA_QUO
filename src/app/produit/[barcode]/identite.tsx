"use client";

import Image from "next/image";
import styles from "./page.module.css";

// exporter les photos de l'article de l api 
export function Photo({ src, h, w }) {
  return (
    <div>
      <Image src={src} alt="" className={styles.photo} width={w} height={h} />
  
    </div>
  );
}

// composant identité de la fiche du produit demandé retourne reponse data 
export default function Identify({ data: { product } }) {
  return (
    <div>
      {/* retourne la marque  */}
      <h2 className={styles.marque}>{product.brands}</h2>
      {/* retourne le nom  */}
      <h3 className={styles.titre_article}>{product.generic_name}</h3>
      {/* retourne le code barre  */}
      <h4 className={styles.iban}><strong className={styles.codeb}>Code-barre : </strong>{product.code}</h4>
      {/* retourne le nom generic en fr  */}
      <h4 className={styles.description}>{product.generic_name_fr}</h4>

      <Photo
        src={product.image_front_url}
        h={product.images[1].sizes[400].h}
        w={product.images[1].sizes[400].w}
      />

      <h5 className={styles.nova_score}><strong>Score NOVA : </strong>{product.nova_groups}</h5>
      {/* retourne les ingredients en fr   */}
      <p className={styles.ingredient}>
        <strong className={styles.ingr}>Ingrédients : </strong>{product.ingredients_text_fr}
      </p>
      
    </div>
  );
}
