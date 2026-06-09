function BruteBestTimeToBuyAndSell(prices){
let length = prices.length;
let maxProfit = 0;

for(let i=0;i<length-1;i++){
  for(let j=i+1;j<length;j++){
      if(prices[j] > prices[i]){
        let currProfit = prices[j] - prices[i];
        maxProfit = Math.max(currProfit,maxProfit);
      }
    }
  }
  return maxProfit;
}



const prices = [7,1,5,3,6,4];

let result = BruteBestTimeToBuyAndSell(prices);
console.log(result);



function optimalBestTimeToBuyAndSell(prices){

}
