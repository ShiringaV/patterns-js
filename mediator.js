class OfficialDealer {
    constructor() {
      this.customers = [];
    }
    
    orderAuto(customer, auto, info) {
      const name = customer.getName();
      console.log(`Order name: ${name}. Order auto is ${auto}`);
      console.log(`Additional info: ${info}`);
      this.addToCustomersList(name);
    }
    
    addToCustomersList(name) {
      this.customers.push(name);
    }
    
    getCustomerList() {
      return this.customers;
    }
  };
  
  class Customer {
    constructor(name, dealerMediator) {
      this.name = name;
      this.dealerMediator = dealerMediator;
    }
       
    getName() {
      return this.name;
    }
       
    makeOrder(auto, info) {
      this.dealerMediator.orderAuto(this, auto, info)
    }
  };

  const mediator = new OfficialDealer();

  const lala = new Customer('SomeOne', mediator);
  const blabla = new Customer('Bla', mediator);

  lala.makeOrder('Tesla', 'S 3.0');
  blabla.makeOrder('Tesla', '1.8');
  
  console.log(mediator.getCustomerList());