class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    take_turn until game_over 
    game_over_message
    reset_game
  end

  def take_turn
    show_sequence
    if require_sequence
      round_success_message
      self.sequence_length += 1
    else
      game_over_message
      reset_game
    end
  end

  def show_sequence
    add_random_color
    sleep(2)
    self.seq.each do |color|
      system("clear")
      puts color
      sleep(1)
      system("clear")
      sleep(1)
    end
    system("clear")
  end

  def require_sequence
    puts "Repeat the color sequence:"
    input_sequence = gets.chomp.split(" ")
    input_sequence == self.seq
  end

  def add_random_color
    self.seq << COLORS.sample
  end

  def round_success_message
    puts "You got it! Next sequence..."
  end

  def game_over_message
    puts "Wrong sequence...try again."
  end

  def reset_game
    self.sequence_length = 1
    self.game_over = false
    self.seq = []
  end
end
