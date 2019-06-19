const { repair } = require('./enhancer.js')
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

    })
    it.todo('should have a max of 100 durability') // this is to comment in console what is being tested
})