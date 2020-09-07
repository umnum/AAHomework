class User < ApplicationRecord
    attr_reader :password

    validates :username, :session_token, presence: true
    validates :password_digest, presence: { message: 'Password can\'t be blank' }
    validates :password, length: { minimum: 6, allow_nil: true }
    before_validation :ensure_session_token

    def find_by_credentials(username, password)
        User.find_by(username: name)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    # I'm not sure why it's called this instead of 'generate_session_token'
    def generate_unique_secure_token
        SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = self.class.generate_unique_secure_token
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= self.class.generate_unique_secure_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
end
