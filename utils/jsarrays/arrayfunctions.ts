const My_Array = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 22 },
  { id: 3, name: "Doe", age: 30 },
  { id: 4, name: "Smith", age: 27 },
  { id: 5, name: "Alex", age: 33 },
  { id: 6, name: "Doe", age: 35 },
  { id: 7, name: "Smith", age: 29 },
  { id: 8, name: "Alex", age: 36 },
  { id: 9, name: "John", age: 28 },
  { id: 10, name: "Jane", age: 23 },
];

export function ArrayForEach() {
  My_Array.forEach((item) => {
    item.id = item.id + 10;
  });
  return My_Array;
}
export function ArrayMap() {
  return My_Array.map((item) => {
    if (item.age > 25) {
      return true;
    }
  }).filter((item)=>item);
}

export function ArrayFilter() {
  return My_Array.filter((item) => {
    if (item.age > 30) {
      item.age = 30;
    }
    return true;
  });
}
