console.log("Place order");

function placeOrder(drink) {
    return new Promise(function(resolve, reject){
        if (drink === "coffee") {
            resolve("Order of cofee was placed");
        } else {
            reject("Order has been rejected");
        }
    })    
}

function processOrder() {
    console.log("Process Block Starts")
    return new Promise(function(resolve) {
        console.log("setTImeout Block Ends")
        setTimeout(()=>{
            resolve("Order Processed Successfully!");        
        },4000)
    })    
}

async function orderDetails(){
    try {
        let orderCofee = await placeOrder("coffee");
        console.log(orderCofee);
        let orderPlaced = await processOrder();
        console.log(orderPlaced);        
    } catch (error) {
        console.log(error);        
    }

}

orderDetails();