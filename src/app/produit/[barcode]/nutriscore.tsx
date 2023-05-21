import styles from "./page.module.css";
import Image from 'next/image'
  
// composant des logos reseaux sociaux 
export default function Nutriscore () {
    return (
        <div className={styles.nutriscore}>
            <p>Retrouvez-nous sur les réseaux sociaux ! </p>

            <Image 
            src="/twiter.svg"
            alt="nutriscore"
            className="nutriscore"
            width={100}
            height={80}
            />

            <Image
            src="/fb.svg"
            alt="score nova"
            className={styles.nova}
            width={80}
            height={60}
            />
        </div>

    );
}