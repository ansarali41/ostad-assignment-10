function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var mergeTrees = function (root1, root2) {
    if (root1 === null) return root2;
    if (root2 === null) return root1;

    let merged = new TreeNode(root1.val + root2.val);
    merged.left = mergeTrees(root1.left, root2.left);
    merged.right = mergeTrees(root1.right, root2.right);

    return merged;
};

// Build Tree 1
const root1 = new TreeNode(1);
root1.left = new TreeNode(3);
root1.right = new TreeNode(2);
root1.left.left = new TreeNode(5);

// Build Tree 2
const root2 = new TreeNode(2);
root2.left = new TreeNode(1);
root2.right = new TreeNode(3);
root2.left.right = new TreeNode(4);
root2.right.right = new TreeNode(7);

// Merge trees
const mergedTree = mergeTrees(root1, root2);

// Function to convert the tree to array
function treeToArray(root) {
    if (!root) return []; // Return empty array if the root is null

    let result = [root.val];
    let leftArr = treeToArray(root.left);
    let rightArr = treeToArray(root.right);

    return result.concat(leftArr, rightArr);
}

// Convert merged tree to array
const output = treeToArray(mergedTree);

console.log(output);

// **  The time complexity is O(n),
// **  The space complexity is O(n),
