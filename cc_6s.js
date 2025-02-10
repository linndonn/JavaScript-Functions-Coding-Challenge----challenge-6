// Task 1 - Business Profit Calculation
// Write a function calculateProfit(costPrice, sellingPrice, unitsSold) that calculates total profit.
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    const profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);//} 
/// (Test Data) - Testing the function
calculateProfit(20, 30, 100);
calculateProfit(50, 70, 200);

//Task 2 - Sales Tax Computation
//Declare a function expression calculateSalesTax(amount, taxRate) that calculates sales tax.
const calculateSalesTax = function(amount, taxRate) {
    let tax = Math.round(amount * taxRate);
    console.log(`Sales Tax: $${tax}`);};
    /// (Test Data) - Testing the function
    calculateSalesTax(100, 0.07); // Expected output: "Sales Tax: $7"
calculateSalesTax(500, 0.1);  // Expected output: "Sales Tax: $50"