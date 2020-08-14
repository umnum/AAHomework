class Stack
    def initialize(ivar)
        # create ivar to store stack here!
        @stack = [ivar]
    end

    def push(e1)
        # adds an element to the stack
        @stack.push(e1)
    end

    def pop
        # removes one element from the stack
        @stack.pop
    end

    def peek
        # returns, but doesn't remove, the top element in the stack
        @stack[-1]
    end
end