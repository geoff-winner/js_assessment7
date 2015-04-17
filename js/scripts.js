var pizzaType = " ";
var total_cheese = 0;
var total_pep = 0;
var cheese_pizzas = 0;
var pep_pizzas = 0;
var total_pizzas = 0;
var total_cost = 0;

var Pizza = {
  basic: 10,

  cheese: function() {
    total_cheese += this.basic + 3;
    return total_cheese;
  },

  add_cheese: function() {
    cheese_pizzas ++;
    return cheese_pizzas;
  },

  pep: function() {
    total_pep += this.basic + 4;
    return total_pep;
  },

  add_pep: function() {
    pep_pizzas ++;
    return pep_pizzas;
  },

  pizza_total: function() {
    total_pizzas = pep_pizzas + cheese_pizzas;
    return total_pizzas;
  },

  cost_total: function() {
    total_cost = total_cheese + total_pep;
    return total_cost;
  }
};

var cheesePizza = Object.create(Pizza);
var pepPizza = Object.create(Pizza);

$(document).ready(function(){
    $(".cheese").click(function(event){
      pizzaType = "cheese";
      if (pizzaType = "cheese") {
        $("#results").show().html("<h1>" + "Your total for the cheese pizza is " + cheesePizza.cheese() + "$" + "</h1>");
        $("#results1").show().html("<h1>" + "Cheese Pizzas Ordered: " + cheesePizza.add_cheese() + "</h1>");
        $("#results2").show().html("<h1>" + "Total Pizzas Ordered: " + cheesePizza.pizza_total() + "</h1>");
      }
      event.preventDefault();
    });

  $(function() {
    $(".pep").click(function(event){
      pizzaType = "pep";
      if (pizzaType = "pep") {
        $("#results").show().html("<h1>" + "Your total for the pepperoni pizza is " + pepPizza.pep() + "$" + "</h1>");
        $("#results1").show().html("<h1>" + "Pepperoni Pizzas Ordered: " + pepPizza.add_pep() + "</h1>");
        $("#results2").show().html("<h1>" + "Total Pizzas Ordered: " + pepPizza.pizza_total() + "</h1>");
      }
      event.preventDefault();
    });
  });

  $(function() {
    $("#cheesebutton").click(function(event) {
      pizzaType = "cheese";
      $("#results").show().html("<h1>" + "Your total for the cheese pizza is " + total_cheese + "$" + "</h1>");
      $("#results1").show().html("<h1>" + "Cheese Pizzas Ordered: " + cheese_pizzas + "</h1>");
      event.preventDefault();
    });
  });

  $(function() {
    $("#pepbutton").click(function(event) {
      pizzaType = "pep";
      $("#results").show().html("<h1>" + "Your total for the pepperoni pizza is " + total_pep + "$" + "</h1>");
      $("#results1").show().html("<h1>" + "Pepperoni Pizzas Ordered: " + pep_pizzas + "</h1>");
      event.preventDefault();
    });
  });

  $(function() {
    $("#totalbutton").click(function(event) {
      $('#results3').show().html("<h2>" + "Your order total is " + Pizza.cost_total() + "$" + "</h2>");
      event.preventDefault();
    });
  });

});
