const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.maxSize = maxSize;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if(this.heap.size() >= this.maxSize){
			throw new Error ('maximum size 30');
		}
		else {
			this.heap.push(data, priority);
		}
	}

	shift() {
		if(this.heap.isEmpty()){
			throw new Error('heap is empty');
		} else {
			const result = this.heap.pop();
			return result;
		}
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		if (this.heap.isEmpty()) {
			return true;
		}
		else {
			return false;
		}
	}
}

module.exports = PriorityQueue;
