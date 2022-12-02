const { newEmployees } = require('./employees-emails.js')

describe('Testing newEmployees functionality', () => {
    it('tests if is it a function', () => {
        expect(typeof newEmployees).toEqual('function');
    })

    it('tests if the function, with no parameters, returns an object with the following scructure: {}', () => {
        expect(newEmployees()).toEqual({})
    })

    it('tests if the function returns { Mario: mario@trybe.com } when called newEmployees([`mario`])', () => {
        expect(newEmployees(['mario'])).toEqual({Mario: 'mario@trybe.com'})
    })
});