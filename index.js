function distanceFromHqInBlocks(number) {
   if (number >= 42) {
    return number - 42;
}   else return 42 - number;
   } 
function distanceFromHqInFeet(number) {
   return distanceFromHqInBlocks(number) * 264;
}
function distanceTravelledInFeet(number, number2) {
    if (number >= number2){
        return (number - number2) * 264;     
         }
         else {return (number2 - number) * 264;}
}
function calculatesFarePrice(start, destination) {

    if (start >= destination) {
       const number = (start - destination) * 264;
        if (number < 400) {
        return 0;}
    else if (number > 2500) {
        return "cannot travel that far";}
   else if (number > 2000) {
        return 25;}
   else if (number < 2000) {
        return (number - 400) * .02;}
   }

   if (start < destination) {
    const number = (destination - start) * 264;
     if (number < 400) {
     return 0;}
 else if (number > 2500) {
     return "cannot travel that far";}
else if (number > 2000) {
     return 25;}
else if (number < 2000) {
     return (number - 400) * .02;}
}}