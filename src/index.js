module.exports = function reverse (n) {
    if (n<0) {
    n =-n;
  }

  let strN = n.toString();
  let resultRev = '';
  for (let i=0; i<strN.length; i++) {
    if ((strN[i]=== 0) && (i === strN.length - 1)) {
        resultRev = resultRev;
    } else {
        resultRev = `${strN[i]}${resultRev}`;
    }
  }

  return +resultRev;
}
