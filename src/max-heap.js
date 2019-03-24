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
			this.heapLength -= 1;
			const { data } = this.root;
			const detached = this.detachRoot();
			this.restoreRootFromLastInsertedNode(detached);
			if (this.root) {
			  this.shiftNodeDown(this.root);
			}
			return data;
		  }
	}

	detachRoot() {
		const index = this.parentNodes.indexOf(this.root);
		if(index !== -1) {
			this.parentNodes.splice(index, 1);
		}
		const detached = this.root;
		this.root = null;
		return detached;
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
		if (!this.root) {
			this.root = node;
			this.parentNodes.push(node);
		} else {
			this.parentNodes[0].appendChild(node);
			this.parentNodes.push(node);
			if(this.parentNodes[0].right){
				this.parentNodes.shift();
			}
		}
	}

	shiftNodeUp(node) {
		if(node.parent) {
			
		}
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
