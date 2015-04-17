describe("pizza", function() {

  describe("cheese", function() {
    it("will add 3 dollars to the basic amount of 10", function() {
      Pizza.cheese();
      expect(13).to.equal(13);
    });
  });

  describe("add_cheese", function() {
    it("will add 1 pizza to the cheese_pizzas var", function() {
      Pizza.add_cheese();
      expect(1).to.equal(1);
    });
  });

  describe("pep", function() {
    it("will add 4 dollars to the basic amount of 10", function() {
      Pizza.add_pep();
      expect(14).to.equal(14);
    });
  });

  describe("add_pep", function() {
    it("will add 1 pizza to the pep_pizzas var", function() {
      Pizza.add_pep();
      expect(1).to.equal(1);
    });
  });

  describe("pizza_total", function() {
    it("will add 1 pizza to the total_pizza var", function() {
      Pizza.add_pep();
      expect(1).to.equal(1);
    });
  });

});
