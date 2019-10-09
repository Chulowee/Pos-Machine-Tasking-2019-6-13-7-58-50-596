const add = require('../receipt');

it ('should barcode not be null', () => {
    let expected = add.isBarcodeListNotNull(null);
    expect(expected).toBe(false);
});

it ('should retrieve one product from inventory', () => {
    let expected = add.getProductFromInventory(['0002']);
    expect(expected).toEqual([{"id": "0002", "name": "Diet Coke", "price": 4}]);
});

it ('should retrieve 2 products from inventory', () => {
    let expected = add.getProductFromInventory(['0002', '0001']);
    expect(expected).toEqual([{"id": "0002", "name": "Diet Coke", "price": 4},
    {"id": "0001", "name": "Coca Cola", "price": 3}]);
});

it ('should get product quantity', () => {
    let expected = add.getProductWithQuantity(['0002', '0002']);
    expect(expected).toEqual([{"id": "0002", "name": "Diet Coke", "price": 4, "quantity": 2}]);
});

it ('should generate receipt', () => {
    let expected = add.generateReceipt(['0002', '0002']);
    expect(expected).toEqual("Receipts\n"+
    "------------------------------------------------------------\n"+
    "Diet Coke\t\t\t4\t\t\t2\n"+
    "------------------------------------------------------------\n"+
    "Price: 8");
});