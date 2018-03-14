var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  // Implement your code here
  var total = {};

  for (var i = 0; i < companySalesData.length; i++) {
    var totalsales = 0;
    var totaltaxes = 0;
    var moretax = 0;
    for (var j = 0; j < companySalesData[i].sales.length; j++) {
      if (total[companySalesData[i].name] === undefined) {
        totalsales += companySalesData[i].sales[j];
        totaltaxes += salesTaxRates[companySalesData[i].province]* totalsales;
        total[companySalesData[i].name]= {'totalSales': totalsales,'totalTaxes': totaltaxes};
      } else {
        totalsales = total[companySalesData[i].name].totalSales + companySalesData[i].sales[j];
        totaltaxes = total[companySalesData[i].name].totalTaxes + salesTaxRates[companySalesData[i].province]*companySalesData[i].sales[j];
        total[companySalesData[i].name]= {'totalSales': totalsales, 'totalTaxes': totaltaxes};
      }
    }

  }return total;
}




console.log(calculateSalesTax(companySalesData, salesTaxRates));








var results = calculateSalesTax(companySalesData, salesTaxRates);