var filterArray = require('./filterArray');

let array = [1, 2, 3, 4];
let testNull = null;
let arrayContainsLargerNums = [1, 2, 3, 150];

let results = filterArray(arrayContainsLargerNums);
let results2 = filterArray(array);

describe('filterArray', ()=> {
    it("if it's null return null ", () => {
        expect(filterArray(testNull)).toBeNull()
    })

    it('check if the numbers are equal', () => {
        expect(results2).toEqual(array)
    })


    it("find if there's a  number larger than 100 and make sure the array doesnt contain that number", () => {
        expect(results).not.toContain(125)
    })
})