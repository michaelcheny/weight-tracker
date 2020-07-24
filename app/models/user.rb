class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :email, presence: true, uniqueness: true
  validates :password_confirmation, presence: true, on: :create
  # validates_presence_of :password_confirmation, if: :password_changed?
  validates :password, presence: true, length: { in: 6..30 }, confirmation: true, unless: ->(u){ u.password.blank? }
  validates :first_name, length: { minimum: 2 }
  validates :last_name, length: { minimum: 2 }
  
  has_many :meals       
  has_many :weight_histories
  has_many :macros
end
