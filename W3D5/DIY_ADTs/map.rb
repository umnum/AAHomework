class Map
    def initialize
        @map = []
    end

    def set(key, value)
        @map.each do |pair|
            if pair[0] == key
                pair[1] = value
                return [key, value]
            end
        end
        @map << [key, value]
        [key, value]
    end

    def get(key)
        @map.each {|pair| return pair if pair[0] == key}
        nil
    end

    def delete(key)
        @map.each_with_index do |pair, index| 
            if pair[0] == key
                @map = @map[0...index] + @map[index+1..-1]
                return true
            end
        end
        false
    end

    def show
        @map
    end
end