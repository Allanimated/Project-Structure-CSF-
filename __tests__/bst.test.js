import BST from "../src/bst";
import BSTNode from "../src/bst-node";

describe('binarySearchTree', () => {

 const pbst = new BST();

  beforeEach(() => {
    pbst.insert(new BSTNode(4));
    pbst.insert(new BSTNode(2));
    pbst.insert(new BSTNode(6));
    pbst.insert(new BSTNode(1));
    pbst.insert(new BSTNode(3));
    pbst.insert(new BSTNode(5));
    pbst.insert(new BSTNode(7));  
  });

  test('it should return true if the root node is equal to 4', () => {
    expect(pbst.search(4)).toEqual(true);
  });
//   test('it should return false if the root node is not equal to 31', () => {
//     expect(pbst.search(31)).toEqual(false);
//   });

  test('it should return false if the value 0 is not in the tree', () => {
    expect(pbst.checkForValue(0)).toEqual(false);
  });

  test('it should return true if the tree includes 7', () => {
    expect(pbst.search(7)).toEqual(true);
  });

  test('it should return true if the tree includes 5', () => {
    expect(pbst.search(5)).toEqual(true);
  });
});