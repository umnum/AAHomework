class Queue
    def initialize(ivar)
        # initialize a queue with ivar
        @queue = [ivar]
    end

    def enqueue(el)
        # adds the element to the queue
        @queue.push(el)
    end

    def dequeue
        # remove the element at the front of the queue
        @queue.shift
    end

    def peek
        # return the element at the front of the queue without removing
        @queue[0]
    end
end