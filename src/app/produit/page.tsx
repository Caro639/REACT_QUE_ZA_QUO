"use client";
import SearchBar from "../a-propos/SearchBar";
import Banner from "../Banner/Banner";
import Identify from "./[barcode]/identite";
import Tableau from "./[barcode]/table";
import Nutriscore from "./[barcode]/nutriscore";


// const params = new URLSearchParams(location.search).get("barcode");

const fields = [
  "barcode",
  "generic_name",
  "image_front_url",
  "code",
  "brands",
  "ingredients_text",
];

async function getRequest(barcode: any) {
  const apiURL = `https://world.openfoodfacts.org/api/v2/product/${barcode}.json?fields=${fields.join(
    ","
  )}`;
  console.log(apiURL);
  const response = await fetch(apiURL);

  return response.json();
}

export default async function Page({ params: { barcode } }) {
  const data = await getRequest(barcode);
  console.log(data);

  if (!data) {
    return (
      <div>
        <Banner />
        <SearchBar />
        <main>404</main>
      </div>
    );
  }

  return (
    <div>
      <Banner />

      <SearchBar />
      <Animation />

      {/* <main> */}
      <Identify data={data} />
      <Tableau data={data} />
      <Nutriscore />
      {/* </main> */}
    </div>
  );
}
