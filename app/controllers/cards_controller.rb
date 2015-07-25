class CardsController < ApplicationController

	def index
		@data = Giphy::API.new('cats')
		@images = @data.get_data(2)
	end

	def new_search
		@search = params[:search] || 'cats'
		@data = Giphy::API.new(@search)
		@images = @data.get_data(2)
	end

	def new_image
		@search = params[:search]
		@data = Giphy::API.new(@search)
		@images = @data.get_data(1)
	end

	def search	
		redirect_to new_search(search: (params[:search].blank? ? "cats" : params[:search]))
	end

end
