// Exercise #1: Food Order

const foodOrder = {
  orderNumber: "A0234",
  address: "bangkok",
  paymentType: "Cash",
  totalPrice: 4500,
  restaurantName: "MK",
};
foodOrder.totalPrice = 5000;
foodOrder.paymentType = "Credit Card";

console.log(foodOrder); //{ orderNumber: 'A0234',  address: 'bangkok',paymentType: 'Credit Card',totalPrice: 5000,restaurantName: 'MK'}
