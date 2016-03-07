;(function(){
  "use strict";

  describe("exchange.home module", function(){



    beforeEach(module("exchange.home"));

    describe("home controller", function () {

      var testCtrl;

      beforeEach(inject(function($controller){
        testCtrl = $controller("HomeCtrl");
      }));

      it("should be initialized", inject(function(){

        expect(testCtrl).toBeDefined();
        expect(testCtrl.title).toBeDefined();
        expect(testCtrl.name).toBe("LoftSchool");
      }));

      it("should contain valuables", inject(function(){
        expect(testCtrl.valuables).toBeDefined();
        expect(testCtrl.valuables.length).toBeGreaterThan(0);
        expect(testCtrl.valuables[0]).toBe("We are the best");
      }));

      it("should contain valuables", inject(function(){
        var testVal = "Some text valuables",
            length = testCtrl.valuables.length;

        testCtrl.addValuables(testVal);

        expect(testCtrl.valuables.length).toBe(length+1);
        expect(testCtrl.valuables[testCtrl.valuables.length-1]).toBe(testVal);
      }));

    })
  })

})();
