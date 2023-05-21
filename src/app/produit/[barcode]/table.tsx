import styles from "./page.module.css";

export default function Tableau({data: {product}}) {
  return (
    <section className={styles.tableau}>
      <table className={styles.Table}>
        <caption className={styles.caption}>
          Tableau nutritionnel pour une portion de 100g
        </caption>
        <tbody>
          <tr>
            <th className={styles.tr} scope="col">
              Tableau nutritionnel
            </th>
            <th className={styles.tr} scope="col">
              Pour 100 g / 100 ml
            </th>
            <th className={styles.tr} scope="col">
              Par portion (100g)
            </th>
          </tr>
          <tr>
            <th className={styles.tr} scope="row">
              Energie
            </th>
            <td className={styles.energie1}>(kj) {product?.nutriments["energy-kj"]}</td>
            <td className={styles.energie3}>(kcal) {product?.nutriments["energy-kcal"]} </td>
          </tr>
          <tr>
            <th className={styles.tr} scope="row">
              Matières grasses
            </th>
            <td className={styles.gras1}>(g) {product?.nutriments["fat_value"]}</td>
            <td className={styles.gras3}>(g) {product?.nutriments["fat_100g"]}</td>
          </tr>
          <tr>
            <th className={styles.tr} scope="row">
              Acides gras saturés
            </th>
            <td className={styles.Acides1}>(g) {product?.nutriments["saturated-fat"]}</td>
            <td className={styles.Acides3}>
              <strong>(g) {product?.nutriments["saturated-fat_value"]}</strong>
            </td>
          </tr>
          <tr>
            <th className={styles.tr} scope="row">
              Sucres
            </th>
            <td className={styles.Glucides1}>(g) {product?.nutriments["sugars_100g"]}</td>
            <td className={styles.Glucides3}>(g) {product?.nutriments["sugars_value"]}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
