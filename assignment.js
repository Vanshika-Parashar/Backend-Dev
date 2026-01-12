//DAY1
//question 1:
// const rawUsers = [
// { id: 1, name: "Rahul", password: "fb_password", role: "admin" },
// { id: 2, name: "Sanya", password: "123_password", role: "user" },
// { id: 3, name: "Amit", password: "secret_password", role: "user" }
// ];
// // TASK:
// // 1. Use .map() and the Rest operator (...) to create a new array
// // called 'safeUsers' that contains everything EXCEPT the password.

// const safeUsers = rawUsers.map(({password, ...rest}) => rest);
// console.log(safeUsers);
// // 2. Use .filter() to create an array of 'admins' only.

// const admins = safeUsers.filter(user => user.role === "admin");
// console.log(admins);

//question 2:

// const cart = [
// { item: "Laptop", price: 50000, quantity: 1, inStock: true },
// { item: "Mouse", price: 1500, quantity: 2, inStock: true },
// { item: "Keyboard", price: 3000, quantity: 1, inStock: false }
// ];

// TASK:
// 1. Check if "every" item is inStock. Print "Ready to Ship" or "Wait".
// const allInStock = cart.every(product => product.inStock);
// if (allInStock) {
//     console.log("Ready to Ship");
// } else {
//     console.log("Wait");
// }
// 2. Filter out the items that are NOT in stock.");
// const inStockItems = cart.filter(product => product.inStock);
// console.log(inStockItems);
// 3. Use .reduce() on the filtered list to find the final 'Total Bill'.
// const totalBill = inStockItems.reduce((total, product) => total + (product.price * product.quantity), 0);
// console.log(totalBill);


//DAY2
// Task 1: The "Order Status"
// The Scenario: Create a function checkOrderStatus(orderId).
// ● The Logic: * If the orderId is a number, resolve after 1 second with
// "Order Shipped".
// ○ If the orderId is not a number (e.g., a string or null), reject with
// "Invalid Order ID".

// function check(orderId) {
//   return new Promise((resolve, reject) => {
//     if (typeof orderId === "number") {
//       setTimeout(() => {
//         resolve("Order Shipped");
//       }, 1000);
//     } else {
//       reject("Invalid Order ID");
//     }
//   });
// }

// async function order(orderId) {
//   try {
//     const result = await check(orderId);
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }
// order(4567);

// Question 2:The "Multi-Step" Authentication
// The Scenario: A user logs in. You need to find the user first, then check their
// subscription.
// ● The Functions:
// 1. getUser(username): Resolves with { name: "Rahul", type:
// "Premium" } after 1.5s.
// 2. checkSubscription(user): Takes the user object. If type is "Premium",
// resolve with "Access Granted to Netflix". Otherwise, reject with
// "Please Subscribe".


// function getUser(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({ name: "Rahul", type: "Premium" });
//     }, 1500);
//   });
// }

// function checkSubscription(user) {
//   return new Promise((resolve, reject) => {
//     if (user.type === "Premium") {
//       resolve("Access Granted ");
//     } else {
//       reject("Please Subscribe");
//     }
//   });
// }

// // Async/Await Implementation
// async function login() {
//   try {
//     const user = await getUser(username);
//     const result = await checkSubscription(user);
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }
// login();
var x = 10;
if (true) {
  var x = 20;
  console.log(x);
}
console.log(x);

let y = 10;
if (true) {
  let y = 20;
  console.log(y);
}
console.log(y);









