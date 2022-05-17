// test here

let outback = {make:"suburu", model:'outback', mileage:23000, electric:false}

it('test datatypes',()=>{
  //test here
// number, strings, booleans
// Objects (objects are a little more complex)
  const PI = 3.14;
//number
  expect(PI).toBe(3.14);

  expect(typeof PI).toBe('number');

  //string
  let myName = 'Matt';
  let PI_str = '3.14';
  expect(myName).toBe('Matt');
  expect(typeof myName).toBe = 'string';
  expect(PI_str).not.toBe(PI);

//boolean

  // test on equality
  expect(1).toBe(1);
  expect(1==1).toBe(true);
  expect(typeof (1 == 1) ).toBe('boolean'); 
// == can ignore type (lose)
  expect( 1=='1').toBe(true);
  // === check type as well (strict)
  expect( 1==='1').toBe(false);

  //js conveted the number 1 to a string '1' + '1' = '11'
  expect(1+ "1").toBe("11");

  //objects

  let outback = {make:"suburu", model:'outback', mileage:23000, electric:false}
  let tesla = {make:"tesla", model:'3', mileage:23000, electric:true}

  expect(outback.make).toBe('suburu')
  expect(tesla.make).toBe('tesla')
  expect(typeof tesla).toBe('object')

  //lists - most commonly called arrays 0 based index 0,1,2,3,4,5,6....
  let people = ['Matt', 'Kevin', 'Aus']
  let primes = [2,3,7,11]


  expect(people[0]).toBe("Matt")
  expect(people[people.length -1]).toBe('Aus')
  // Methosds on arrays
  expect(people.length).toBe(3)

  people.push('Bob')
  expect(people.length).toBe(4)
  expect(people[people.length -1]).toBe('Bob')

  expect(Array.isArray(people)).toBe(true)
  expect(Array.isArray(123)).toBe(false)


  //let cars = tesla, outback



})

expect(outback.make).toBe('suburu')