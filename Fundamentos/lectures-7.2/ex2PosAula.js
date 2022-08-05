const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
//   const customerInfo = (order) => {
//       console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, telefone ${order.phoneNumber}, endereço: R.${order.address.street}, Nº${order.address.number}, AP:${order.address.apartment}.`);
//   }
  
//   customerInfo(order);
  
  const orderModifier = (order) => {
    order.name = "Luiz Silva";
    order.payment.total = 50;
    // console.log(Object.keys(order.order.pizza)[0]);

    console.log(`Olá ${order.name}, o total do seu pedido de ${order.order.pizza.marguerita.amount} ${Object.keys(order.order.pizza)[0]}, ${order.order.pizza.pepperoni.amount} ${Object.keys(order.order.pizza)[1]}, e ${order.order.drinks.coke.amount} ${order.order.drinks.coke.type} é R$ ${order.payment.total},00 `);
  
  };
  
  orderModifier(order);