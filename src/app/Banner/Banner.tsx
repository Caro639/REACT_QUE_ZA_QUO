"use client";
import Link from "next/link";
import styles from "../produit/[barcode]/page.module.css";
import Image from "next/image";

// lien de navigation 
export function Nav() {
  return (
    <h4 className={styles.title}>
      <Link href="/a-propos">a-propos</Link>
    </h4>
  );
}

// composant banniere du site 
export default function Banner() {
  // const title = "Qué'Za'Quo?";

  return (
    <div>
      <Image
        src="/logo_white.svg"
        alt="Logo Qué'Za'Quo?"
        className={styles.logowhite}
        width={201}
        height={91}
      />
      <Nav />
    </div>
  );
}
