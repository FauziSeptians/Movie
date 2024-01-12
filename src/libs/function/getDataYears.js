export function getDataYears(String) {
   console.log(String);
   let idx = null;
   for (let index = 0; index < String.length; index++) {
      if (String[index] == "-") {
         idx = index;
         break;
      }
   }

   return String.substring(0, idx);
}
