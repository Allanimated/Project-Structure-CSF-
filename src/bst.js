export default class BST {
    constructor(data) {
        this.data = data
    };

    insertNode(node) {
        if (this.root === null) {
            this.root = node;
        } else if (this.root.data > node.data) {
            this.root.left = node;
        } else if (this.root.data < node.data) {
            this.root.right = node;
        } 
    };

    search(value) {
        if (this.root.data === value) {
        return true;
        } else {
        let currentNode = this.root;
        while (true) {
            if (currentNode.data === value) {
            return true;
            } else if (currentNode.data > value) {
            currentNode = currentNode.left;
            } else if (currentNode.data < value) {
            currentNode = currentNode.right;
            }
            if (currentNode === null) {
            return false;
            }
        }
        }
    }
};