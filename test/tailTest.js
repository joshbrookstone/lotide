const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(tail([1,'sweet','cool',4]), ['sweet','cool',4]);