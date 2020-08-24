require "byebug"

class LRUCache
  def initialize(size)
    @cache_size = size
    @cache = []
  end

  def count
    # returns number of elements currently in cache
    @cache.length
  end

  def add(el)
    # adds element to cache according to LRU principle
    if @cache.include?(el)
        el_index = @cache.index(el)
        @cache = @cache[0...el_index] + @cache[el_index+1..-1]
        @cache.push(el)
        return nil
    end
    if count < @cache_size
        @cache.push(el)
    else
        @cache.shift
        @cache.push(el)
    end
    nil
  end

  def show
    # shows the items in the cache, with the LRU item first
    @cache
  end

  private
  # helper methods go here!
end