// const maxProfit = (arr) => {
//     let globalProfit = 0;
//     for(let i=0; i< arr.length-1; i++){
//         for( let j=i+1;j< arr.length; j++){
//             const currentProfit = arr[j]-arr[i];
//             if(currentProfit > globalProfit){
//                 globalProfit = currentProfit;
//             }
//         }
//     }
//     return globalProfit;
// }

const maxProfit = (arr) => {
    let minVal = arr[0];
    let profit = 0;

    for( let i=0;i< arr.length; i++){
        if( arr[i] < minVal){
            minVal = arr[i];
        }
        profit = Math.max(profit, arr[i]-minVal);
    }
    return profit;
}


console.log(maxProfit([7,1,4,5,6]));
