require 'set'
class GraphNode
    attr_accessor :neighbors, :value, :visited

    def initialize(value)
        self.value = value
        self.neighbors = []
        self.visited = Set.new
    end

    def bfs(target_value)
        return nil if (self.visited.include?(target_value))
        return self if self.value == target_value
        self.visited.add(target_value)
         
        self.neighbors.each do |neighbor|
            result_node = neighbor.bfs(target_value)
            return result_node if result_node
        end
        nil
    end
end

a = GraphNode.new('a')
b = GraphNode.new('b')
c = GraphNode.new('c')
d = GraphNode.new('d')
e = GraphNode.new('e')
f = GraphNode.new('f')
a.neighbors = [b, c, e]
c.neighbors = [b, d]
e.neighbors = [a]
f.neighbors = [e]
node = a.bfs('f')
node_value = node ? node.value : nil
p node_value