import SearchBar from "../../a-propos/SearchBar";
import Banner from "../../Banner/Banner";
import Identify from "./identite";
import Tableau from "./table";
import Nutriscore from "./nutriscore";
import styles from "./page.module.css";
// import Animation from "./animation";

//  declare les champs demandes a l api open food fact const fields 
const fields = [
  "barcode",
  "generic_name",
  "image_front_url",
  "images",
  "code",
  "brands",
  "ingredients_text_fr",
  "nutriments",
  "selected_images",
  "nutrition_fr",
  "generic_name_fr",
  "nova_groups",
];

// requete api avec async function 
async function getRequest(barcode: any) {
  const apiURL = `https://world.openfoodfacts.org/api/v2/product/${barcode}.json?fields=${fields.join(
    ","
  )}`;
  const response = await fetch(apiURL);

  return response.json();
}

// composant page produit retourne reponse api 
export default async function Page({ params: { barcode } }) {
  const data = await getRequest(barcode);

  // si le barcode est inconnu affiche error page 404 
  if (data.status_verbose == "product not found") {
    return (
      <div>
        <Banner />
        <SearchBar />
        <main className={styles.erreur}>404 <br /> Code-barre inconnu ! </main>
      </div>
    );
  }

  // retourne elements plus data product sur les composants qui retourne la reponse de l api 
  return (
    <div>
      <Banner />
      {/* <Animation /> */}
      <SearchBar />
      <Identify data={data} />
      <Tableau data={data} />
      <Nutriscore />
    </div>
  );
}
