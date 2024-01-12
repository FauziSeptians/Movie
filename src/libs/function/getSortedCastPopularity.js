export function getsortCastPopularity(arr, parameter) {
   return arr.slice().sort((a, b) => {
      if (a[parameter] < b[parameter]) {
         return 1;
      }
      if (a[parameter] > b[parameter]) {
         return -1;
      }
      return 0;
   });
}
