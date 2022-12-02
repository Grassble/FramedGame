class MoviesController < ApplicationController

    def index
        render json: Movie.all, status: :ok
    end

    def show
        movie = Movie.find(params[:id])
        render json: movie, status: :ok
    end

    def create 
        movie = Movie.create!(movie_params)
        render json: movie, status: :created
    end

    private

    def movie_params
        params.permit(:title, :image1, :image2, :image3, :image4, :image5, :image6)
    end

end
