const N = [...Array(+readline())]
          .map(() => +readline())
          .sort((a,b) => a-b)
          .reduce((p,c,i,a) => c - a[i - 1] < p ? c - a[i - 1] : p);
console.log(N);