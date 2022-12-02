class Movie < ApplicationRecord

    validates :title, uniqueness: true
    # validates :title, :image1, :image2, :image3, :image4, :image5, :image6, presence: true
end
