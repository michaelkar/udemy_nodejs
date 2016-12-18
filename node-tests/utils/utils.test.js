const expect = require('expect');

const utils = require('./utils');

it('it should add two numbers', () => {
    let res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');
    // if (res !== 44) {
    //     throw new Error(`expected 44 but got ${res}`);
    // }
});

it('it should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
    })
});

it('it should square a number', () => {
    let res = utils.square(4);
    expect(res).toBeA('number').toBe(16);
});

it('it should async square a number', (done) => {
    utils.asyncSquare(4, (square) => {
        expect(square).toBe(16).toBeA('number');
        done();
    })
});

it('it should verify that first and last names are set', () => {
    let user = {
        age: 31,
        location: 'hrz'
    }
    result = utils.setName(user, 'Leonid Sivak');

    expect(user).toEqual(result); //object is passed by reference
    expect(result)
        .toInclude({ age: 31 })
        .toInclude({ firstName: 'Leonid', lastName: 'Sivak' });
});

// it('it expects some values', () => {
//     expect(12).toNotBe(11);
//     expect({ name: 'leo' }).toNotEqual({ name: 'Leo' });
//     expect([2, 3, 4]).toInclude(3).toExclude(55);
//     expect({
//         name: 'leo',
//         age: 31,
//         location: 'hrz'
//     }).toInclude({
//         age: 31
//     }).toExclude({
//         location: 'hfa'
//     })
// });