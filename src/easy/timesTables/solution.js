function timesTables(num) {
  const table = [];
  for (let i = 1; i <= 12; i++) {
    const value = num * i;
    table.push(value);
  }
  return table;
}

console.log(timesTables(7));
