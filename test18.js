const buildWord = (str) => {
  let root = {};
  str.forEach((stringyy) => {
    let base = root;
    stringyy.split(" ").forEach((word) => {
      if (base[word] === undefined) {
        base[word] = {};
      }
      base = base[word];
    });
  });
  return root;
};

let tree = buildWord(["Hello world", "Hello there"]);
console.log(tree);
