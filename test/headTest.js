const assertEqual = require("../assertEqual");
const head = require("../head");
// this file has access to only assertEqual because that is what's imported

assertEqual(head([5, 6, 7]), 5);
