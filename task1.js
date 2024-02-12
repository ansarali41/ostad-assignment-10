function maximumUnits(boxTypes, truckSize) {
    // Sort boxTypes based on the number of units per box in descending order
    boxTypes.sort((a, b) => b[1] - a[1]);

    let totalUnits = 0;

    for (let i = 0; i < boxTypes.length && truckSize > 0; i++) {
        const [numBoxes, unitsPerBox] = boxTypes[i];
        const boxesToAdd = Math.min(numBoxes, truckSize); // Add as many boxes as possible
        totalUnits += boxesToAdd * unitsPerBox;
        truckSize -= boxesToAdd;
    }

    return totalUnits;
}

// Example usage:
const boxTypes1 = [
    [1, 3],
    [2, 2],
    [3, 1],
];
const truckSize1 = 4;
console.log(maximumUnits(boxTypes1, truckSize1)); // Output: 8

const boxTypes2 = [
    [5, 10],
    [2, 5],
    [4, 7],
    [3, 9],
];
const truckSize2 = 10;
console.log(maximumUnits(boxTypes2, truckSize2)); // Output: 91

//**  Time complexity is O(n log n).
//**  Space complexity is O(1)
