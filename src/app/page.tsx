import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { Nav } from "./Banner/Banner";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Commencez à manger mieux !&nbsp;
          {/* <code className={styles.code}>Mangez mieux !</code> */}
        </p>
        <div>
          <a
            href="http://localhost:3000/a-propos"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/logo_white.svg"
              alt="Que za quo Logo"
              className={styles.vercelLogo}
              width={180}
              height={140}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/logo_white.svg"
          alt="que za quo Logo"
          width={310}
          height={157}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="http://localhost:3000/a-propos"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Page Accueil <span>-&gt;</span>
          </h2>
          <p>Recherchez les informations alimentaires.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
                    className={styles.card}
                    src="/appStore.svg"
                    alt="que za quo Logo"
                    width={310}
                    height={357}
                    priority
                  />
          {/* <h2>
            Learn <span>-&gt;</span>
          </h2> */}
          {/* <p>Téléchargez l'appli !</p> */}
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.card}
            src="/googleplay.svg"
            alt="que za quo Logo"
            width={310}
            height={357}
            priority
          />
          {/* <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p> */}
        </a>

        <a
          href="http://localhost:3000/a-propos"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Entrez un code-barre <span>-&gt;</span>
          </h2>
          <p>Recherchez avec Que Za Quo.</p>
        </a>
      </div>
    </main>
  );
}
