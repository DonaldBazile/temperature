function sum(arr) {
    return arr.reduce(function(a,b) {
      return a + b
    });
}
console.log(sum([1,2,3,4]))
