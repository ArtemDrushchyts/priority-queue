const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.heapLength = 0; 
	}

	push(data, priority) {
		const node = new Node (data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
		this.heapLength += 1;
	}

	pop() {
		if (this.root) {
			this.removeChild(node);
		}
	}

	detachRoot() {
		
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		return this.heapLength;
	}

	isEmpty() {
		return this.heapLength === 0;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.heapLength = 0;
	}

	insertNode(node) {
		if (this.root == null && this.parentNodes.length === 0) {
			this.root = node;
			this.parentNodes.push(node);
		} else {
			this.parentNodes[0].appendChild(node);
			this.parentNodes.push(node);
		}
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
