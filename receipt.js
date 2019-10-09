const inventory = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];

function generateReceipt(barcodeList){
    let header = "Receipts\n"+
    "------------------------------------------------------------\n";

    let total=0;
    let productList = getProductWithQuantity(barcodeList);
    let receiptBody = "";
    productList.forEach(productItem => {
        total += productItem.quantity * productItem.price; 
    
        receiptBody += String(productItem.name) 
        +"\t\t\t"+ String(productItem.price) 
        +"\t\t\t"+ String(productItem.quantity)+"\n";
    });
    let footer = "------------------------------------------------------------\n"+
    "Price: "+ total;
    return header+receiptBody+footer;
}

function isBarcodeListNotNull(barcodeList){
    if (barcodeList == null) {
        return false;
    }
    return true;
}

function getProductFromInventory(barcodeList){
    let itemList = [];
    barcodeList.forEach(barcode =>{
       itemList.push(inventory.find(item => item.id === barcode));
    });
    return itemList;
}

function getProductWithQuantity(barcodeList) {
    let distinctProductList = [];
    let inventoryProducts = getProductFromInventory(barcodeList);
    inventoryProducts.forEach(product => {
        let isExisting = distinctProductList.find(inventoryItem => inventoryItem.id == product.id);
        if(isExisting){
            isExisting.quantity++;
        }else{
            product.quantity=1;
            distinctProductList.push(product);
        }
    });
    return distinctProductList;
}

module.exports = {
    getProductWithQuantity : getProductWithQuantity,
    isBarcodeListNotNull : isBarcodeListNotNull,
    getProductFromInventory : getProductFromInventory,
    generateReceipt : generateReceipt
};