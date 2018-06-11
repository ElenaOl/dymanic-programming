var maxProfit2 = function(prices, priceBought, day) {
    if(day === prices.length-1){
      if(priceBought === -1){
        return 0;
      }
      return prices[day] - priceBought; 
    }

    if(priceBought === -1){
      var profit1 = maxProfit2(prices, prices[day], day+1); //returns max profit
      var profit2 = maxProfit2(prices, -1, day+1); //returns max profit
      return Math.max(profit1, profit2);
    }
    // if I am here I already have a stock (priceBought > 0)
    var profit1 = prices[day] - priceBought; //returns max profit
    var profit2 = maxProfit2(prices, priceBought, day+1); //returns max profit
    return Math.max(profit1, profit2);
};
var maxProfit = function(prices) {
    return maxProfit2 (prices, -1, 0);
};

maxProfit ([2,1,2,1,0,1,2]);
