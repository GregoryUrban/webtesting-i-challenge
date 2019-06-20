const { repair, succeed, fail } = require('./enhancer.js')
// test away!


describe('enhancer.js', () => {
    // describe is a function tht takes in 2 args
    describe('repair()', () => {

            it('restores item durability to 100', () => {
                const item = {
                    name: 'Morning Star',
                    durability: 50,
                    enhancement: 20
                };
                //arrange
                const expected = {
                    name: 'Morning Star',
                    durability: 100,
                    enhancement: 20
                }

                // act
                const repairedItem = repair(item);

                //assert
                expect(repairedItem).toEqual(expected)

            })
            // it.todo('should have a max of 100 durability') // this is to comment in console what is being tested

            describe("succeed()", () => {
                // The item's enhancement increases by 1.
                it("should increase enhancement by 1 without changing durability", () => {
                  const item = {
                    name: "Greg",
                    durability: 20,
                    enhancement: 15
                  };
                  const expected = {
                    name: "Greg",
                    durability: 20,
                    enhancement: 16
                  };
            
                  const enhancedItem = succeed(item);
                  expect(enhancedItem).toEqual(expected);
                });

                //If the item enhancement level is 20, the enhancement level is not changed
                it("should NOT increase enhancement NOR durability", () => {
                    const item = {
                      name: "Shota",
                      durability: 10,
                      enhancement: 20
                    };
                    const expected = {
                      name: "Shota",
                      durability: 10,
                      enhancement: 20
                    };
              
                    const enhancedItem = succeed(item);
                    expect(enhancedItem).toEqual(expected);
                  });

              });


describe("fail()", () => {
// - If the item's enhancement is less than 15, the durability of the item is decreased by 5.
    it("decrease durability by 5 if enhancement is less than 15", () => {
      const item = {
        name: "Greg",
        durability: 50,
        enhancement: 14
      };

      const expected = {
        name: "Greg",
        durability: 45,
        enhancement: 14
      };

      const failItem = fail(item);
      expect(failItem).toEqual(expected);
    });
// - If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
    it("decrease durability by 10 if enhancement is 15 or more", () => {
      const item = {
        name: "Greg",
        durability: 50,
        enhancement: 16
      };

      const expected = {
        name: "Greg",
        durability: 40,
        enhancement: 16
      };

      const failItem = fail(item);
      expect(failItem).toEqual(expected);
    });
// - If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).
    it("decrease enhancement by 1 if enhancement is greater than 16", () => {
      const item = {
        name: "Greg",
        durability: 50,
        enhancement: 18
      };

      const expected = {
        name: "Greg",
        durability: 50,
        enhancement: 17
      };

      const failItem = fail(item);
      expect(failItem).toEqual(expected);
    });
  });


    })
})