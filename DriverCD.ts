import { CD } from "./CD";
import { SpecialEditionCD } from "./SpecialEditionCD";
import { InternationalCD } from "./InternationCD";

let cds: CD[] = [];

let myCd = new CD("cd01", "Avengers", "Movie");

cds.push(myCd);
//creating a special cd
let spCd = new SpecialEditionCD("cd101", "Jumanji", "Movie", true);
cds.push(spCd);

let intlCd = new InternationalCD("cd102", "Thor", "Movie", [
  "English",
  "Hindi",
]);
cds.push(intlCd);

for (let index of cds) {
  console.log(index.getDetail());
}
