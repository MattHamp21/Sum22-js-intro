// basic test
//it('string',()=>){

//})
it('testing operators', ()=>{
  // +,-,*,/.%
  expect(1 + 1).toBe(2)
  expect(1 - 1).toBe(0)
  expect(3 / 2).toBe(1.5)
  expect(3 * 2).toBe(6)
  
  // % modular - gives reminder of division
  expect(3 % 2).toBe(1)
  expect(2 % 2).toBe(0)
  expect(5 % 2).toBe(1)


// ++
let num = 0
num ++
expect(num).toBe(1)

// adds 10
num = num + 10
// adds 10
num+= 10
expect(num).toBe(21)
// -= *= /=

//logic operators
// && and --- || or --- ! not 0 1
expect(true && true).toBe(true)
expect(true && false).toBe(false)

expect(true || false).toBe(true)

expect( !false).toBe(true)

expect(false && (true || false && !false || (true && true))).toBe(false)
expect(true && (true || false && !false || (true && true))).toBe(true)

// 





})