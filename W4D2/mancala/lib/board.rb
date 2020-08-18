class Board
  attr_accessor :cups

  def initialize(name1, name2)
    @name1 = name1
    @name2 = name2
    @cups = Array.new(14) {Array.new}
    self.place_stones
  end

  def place_stones
    # helper method to #initialize every non-store cup with four stones each
    (0...self.cups.length).each do |i|
      unless i == 6 || i == 13
        4.times {self.cups[i] << :stone}
      end
    end
  end

  def valid_move?(start_pos)
    unless start_pos >=0 && start_pos < 13 && start_pos != 6
      raise "Invalid starting cup"
    end
    if self.cups[start_pos].empty?
      raise "Starting cup is empty"
    end
  end

  def make_move(start_pos, current_player_name)
    current_pos = start_pos + 1
    until self.cups[start_pos].empty?
      current_pos = 0 if current_pos == 13 && current_player_name == @name1
      current_pos += 1 if current_pos == 6 && current_player_name == @name2
      self.cups[current_pos] << self.cups[start_pos].pop
      if current_player_name == @name1
        current_pos = (current_pos + 1) % 13
      else
        current_pos = (current_pos + 1) % 14
      end
    end
    if current_player_name == @name1
      current_pos = (current_pos - 1) % 13
    elsif current_pos == 7
      current_pos = 5
    else
      current_pos = (current_pos - 1) % 14
    end
    self.render
    self.next_turn(current_pos)
  end

  def next_turn(ending_cup_idx)
    # helper method to determine whether #make_move returns :switch, :prompt, or ending_cup_idx
    if ending_cup_idx == 6 || ending_cup_idx == 13
      :prompt
    elsif self.cups[ending_cup_idx].one?
      :switch
    else
      ending_cup_idx
    end

  end

  def render
    print "      #{@cups[7..12].reverse.map { |cup| cup.count }}      \n"
    puts "#{@cups[13].count} -------------------------- #{@cups[6].count}"
    print "      #{@cups.take(6).map { |cup| cup.count }}      \n"
    puts ""
    puts ""
  end

  def one_side_empty?
    self.cups[0..5].all? {|cup| cup.empty?} ||
    self.cups[7..12].all? {|cup| cup.empty?}
  end

  def winner
    if self.cups[6].length > self.cups[13].length
      @name1
    elsif self.cups[6].length < self.cups[13].length
      @name2
    else
      :draw
    end
  end
end
