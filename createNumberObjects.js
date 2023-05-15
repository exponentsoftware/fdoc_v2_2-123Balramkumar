
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function createNumberObjects(numbers) {
    const objects = numbers.map(number => ({
      number: number,
      isEven: number % 2 === 0,
      double: number * 2
    }));
  
    return objects.map(object => `Number: ${object.number}, isEven: ${object.isEven}, double: ${object.double}`);
  }
  
  const result = createNumberObjects(numbers);
  
  console.log(result);
  