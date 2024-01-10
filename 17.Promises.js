const cart = ["shoes", "pants", "kurta"];

createOrder(cart)
        .then(function (orderId) {
                return orderId;
        })
        .then(function (orderId) {
                return proceedToPayment(orderId);
        })
        .then(function (paymentInfo){
                console.log(paymentInfo);
        })
        .catch(function (err) {
                console.log(err.message);
        })


function createOrder(cart) {
        const pr = new Promise(function (resolve, reject) {
                if (!validateCart(cart)) {
                        const err = new Error("Cart is not valid");
                        reject(err);
                }

                const orderId = "12345";
                if (orderId) {
                        resolve(orderId);
                }
        })

        return pr;
}

function proceedToPayment(orderId) {
        const pr = new Promise(function (resolve, reject) {
                const paymentInfo = 5000;
                resolve(paymentInfo);
        })

        return pr;
}

function validateCart(cart) {
        return true;
}


// =======================================


// fetch('https://fakestoreapi.com/products')
//     .then(res => res.json())
//     .then(json => console.log(json))
//    // .then((data) => {
//    //   console.log(data);
//    // })
//     .catch((error) => {
//         console.error(`Could not get products: ${error}`);
//     });

// ========================================