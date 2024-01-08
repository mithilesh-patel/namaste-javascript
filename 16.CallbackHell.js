// Sample asynchronous functions (simulating API calls or async operations)
function createOrder(cart, callback) {

    console.log(`Order "${cart}" created`);
    callback({ orderId: 123 }); // Simulating order creation result

}
function proceedToPayment(order, callback) {

    console.log("Payment processed for order ID " + order.orderId);
    callback({ paymentId: 456 }); // Simulating payment result

}
function showOrderSummary(payment, callback) {

    console.log(`Order summary for payment ID ${payment.paymentId} shown`);
    callback({ summaryId: 789 }); // Simulating summary result
}
function updateWallet(summary, callback) {

    console.log(`Wallet updated with summary ID ${summary.summaryId}`);
    callback(); // No result to pass

}
// Using the asynchronous functions with callbacks
const cart = "phone";

createOrder(cart, function (orderResult) {
    proceedToPayment(orderResult, function (paymentResult) {
        console.log("Inside proceed to payment");
        showOrderSummary(paymentResult, function (summaryResult) {
            updateWallet(summaryResult, function () {
                console.log("Order placed successfully");
            });
        });
    });
});
