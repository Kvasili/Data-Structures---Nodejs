/**
 * @Author Konstantinos Vasili
 * @Date November 2021
 * 
 * Implementation of a Binary Tree
 * Every parent node has at most two children
 * 
 * Every node to the left of a parent node is always less than the parent
 * Evey node to the right of a parent node is always greater than the parent
 * 
 * USAGE
 * node BinaryTree.js
 * 
 */


class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null; 
    }
}


class BinarySearchTree{
    constructor(){
        this.root = null;    
    }
}



let tree = new BinarySearchTree();
tree.root = new Node(45); 
tree.root.right = new Node(34);
tree.root.left = new Node(56); 
tree.root.left.left = new Node(89);


console.log(tree); 




/**
 * USAGE
 * node BinaryTree.js
 * 
 */
