var getUserById = require('./getUserById');

describe("getUserById", () =>  {
    it('check whether the user id exists', async() => {
        var userId = 1;  
        var result = await getUserById(userId); 
       expect(result.id).toEqual(userId);
       expect(result.firstName).toEqual("Kevin");
       expect(result.lastName).toEqual("Chung");
    });

    it("results with an error if the id doesn't exist", async() => {
        const randomID = 48;
        await expect(getUserById(randomID)).rejects.toEqual('User with ID ' + randomID + ' not found.')
    })

});