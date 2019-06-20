const { repair, succeed } = require('./enhancer.js')
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

    })
})