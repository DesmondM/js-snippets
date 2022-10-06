let nums1 = [1, 2, 3, 4, 5];
let nums2 = [3, 4, 5, 6, 7];

let setNums1 = new Set(nums1);
let setNums2 = new Set(nums2);

let intersection = nums1.filter((num) => {
  setNums2.has(num);
});

console.log("The inter is", intersection);
