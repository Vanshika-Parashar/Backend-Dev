// Scenario: Imagine you are building the backend for a small shopping site. You
// need to create a server that can find a product and calculate its final price after a
// discount.

const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    if (pathname === "/product") {

    
        const { name, price, discount } = parsedUrl.query;
        const productPrice = Number(price);
        const productDiscount = Number(discount);
        const discountAmount = (productPrice * productDiscount) / 100;
        const finalPrice = productPrice - discountAmount;
