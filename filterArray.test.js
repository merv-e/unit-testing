var filterArray = require('./filterArray');

describe('filterArray', ()=> {
    it("if it's null return null ", () => {
        expect(filterArray(null)).toBeNull(),
        expect(filterArray([5,6,105])).toEqual([5,6,100])
    })
})

describe('filterArray', ()=> {
    it('find if theres a number in the array, and if there is, filter numbers below 100', () => {
        expect(filterArray([5,6,85])).toEqual([5,6,85])
    })
})

describe('filterArray', ()=> {
    it('find if theres a number in the array, and if there is, filter numbers below 100', () => {
        expect(filterArray([5,6,125])).not.toContain(125)
    })
})