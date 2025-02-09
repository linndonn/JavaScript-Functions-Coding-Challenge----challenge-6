// Task 1 - Business Profit Calculation
// Write a function calculateProfit(costPrice, sellingPrice, unitsSold) that calculates total profit.
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    const profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
} 
/// (Test Data) - Testing the function
calculateProfit(20, 30, 100);
calculateProfit(50, 70, 200);

Task 1 - Business Profit Calculation