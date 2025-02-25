// Task 1 - Business Profit Calculation
// Write a function calculateProfit(costPrice, sellingPrice, unitsSold) that calculates total profit.
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    const profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);} 
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

// Task 3 - Employee Bonus Calculation
//Write an arrow funciton calculateBonus(salary, performanceRating) that calculates bonus based on performance rating.
const calculateBonus = (salary, performanceRating) => {
    const bonusPercentage = {  "Excellent": 0.2, "Good": 0.1, "Average": 0.05
    };//Calcualtes the 20%, 10% and 5% bonus based on the performance rating
    //Logging the bonus amount
const bonus = salary * (bonusPercentage[performanceRating]);
console.log(`Bonus: $${bonus}`);};
/// (Test Data) - Testing the function
calculateBonus(5000, "Excellent"); // Expected output: "Bonus: $1000"
calculateBonus(7000, "Good");      // Expected output: "Bonus: $700"

//Task 4 - Subscription Pricing Model
//Write a function calculateSubscriptionCost(plan, months, discount = 0) that calculates cost.
function calculateSubscriptionCost(plan, months, discount = 0) {
    //"Basic" = $10/month, "Premium" = $20/month, "Enterprise" = $50/month
    const rate = { "Basic": 10, "Premium": 20, "Enterprise": 50 };
    const totalCost = (rate[plan] * months) - discount;
    console.log(`Total Cost: $${totalCost}`);
};
calculateSubscriptionCost("Basic", 6, 10); // Expected output: "Total Cost: $50"
calculateSubscriptionCost("Premium", 12, 0); // Expected output: "Total Cost: $240"

//Task 5 - Currency Conversion
//Write a function convertCurrency(amount, exchangeRate) that returns the converted amount.
function convertCurrency(amount, exchangeRate) {
    const conversion = (amount * exchangeRate).toFixed(2);
    console.log(`The Converted amount is: $${conversion}`);
}
/// (Test Data) - Testing the function
convertCurrency(100, 1.1); // Expected output: "Converted Amount: $110.00"
convertCurrency(250, 0.85); // Expected output: "Converted Amount: $212.50"

//Task 6: Higher-Order Functions
//Write a function applyBulkDiscount(orders, discountFunction) that applies a 10% discount on orders above $500.
function applyBulkDiscount(orders, discountFunction) {
let discountOrders = orders.map(discountFunction);
console.log(discountOrders);}
/// (Test Data) - Testing the function
let orders = [200, 600, 1200, 450, 800];
applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);
// Expected output: [200, 540, 1080, 450, 720]

//Task 7 - Business Expense Tracker
//Write a funciton createExpenseTracker() that returns another function to add expenses and keep a running total.
function createExpenseTracker() {
    let Expenses = 0;
 return function(charge) {
 Expenses += charge;
 return `Total Expenses: $${Expenses}`;
};
}; 
/// (Test Data) - Testing the function
let tracker = createExpenseTracker();
console.log(tracker(200)); // Expected output: "Total Expenses: $200"
console.log(tracker(150)); // Expected output: "Total Expenses: $350"

//Task 8 - Employee Promotion Evaluation
//Write a recursive function calculateYearsToPromotion(employeeLevel) that determines years to reach level 10
function calculateYearsToPromotion(employeeLevel)
 {  if (employeeLevel >= 10) { return "Years to Level 10: 0"; }
else return `Years to Level 10: ${(10 - employeeLevel) * 2}`;
};
/// (Test Data) - Testing the function
console.log(calculateYearsToPromotion(7)); // Expected output: "Years to Level 10: 6"
console.log(calculateYearsToPromotion(5)); // Expected output: "Years to Level 10: 10"