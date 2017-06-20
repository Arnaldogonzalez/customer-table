var customers = [
    {first_name: "John", last_name: "Doe", email: "thugnificent@fvi.edu", id: 12345},
    {first_name: "Jane", last_name: "McGall", email: "jane@fvi.edu", id: 12346},
    {first_name: "Adam", last_name: "Smith", email: "asmith@fvi.edu", id: 12347}
  ];

  var orders = [
    {order_id: 123, customer_id:12345, items: [1,2] },
    {order_id: 124, customer_id:12345, items: [2,3] },
    {order_id: 125, customer_id:12346, items: [1] },
    {order_id: 126, customer_id:12346, items: [2] },
    {order_id: 127, customer_id:12347, items: [1,2,3]},
  ];

  var inventory = [
    {item_id: 1, name: "Alligator Mask", price: 55 },
    {item_id: 2, name: "Japanese Weird Video Game", price: 77 },
    {item_id: 3, name: "Dragon Ball Z full body tattoo", price: 99 },
  ]

function buildDS(customers, orders, inventory){
    var inventoryHash = {};
    inventory.forEach(item=>inventoryHash[item.item_id] = item);
    var filledOrders = orders.map(orderObj=>{
        var filledItems = orderObj.items.map(itemid=>inventoryHash[itemid]);
        orderObj.items = filledItems;
        return orderObj;
    });
    return customers.map(cust=>{
        cust.orders = filledOrders.filter(order=> order.customer_id === cust.id);
        return cust;
    });
}




// function buildDS(customers, orders, inventory){
//   var inventoryHash = {};
//   inventory.forEach(item=>inventoryHash[item.item_id]=item);
//   var ordersByCustomer = {};
//
//  orders.forEach(order=>{
//     if (!ordersByCustomer[order.customer_id]){
//       ordersByCustomer[order.customer_id] = []
//     }
//     order.items = order.items.map(itemid=>inventoryHash[itemid]);
//     ordersByCustomer[order.customer_id].push(order);
//   });
//
//  return customers.map(cust=>{
//     if (ordersByCustomer[cust.id]){
//       cust.orders = ordersByCustomer[cust.id];
//     }
//     else {
//       cust.orders = [];
//     }
//     return cust;
//   })
// }
