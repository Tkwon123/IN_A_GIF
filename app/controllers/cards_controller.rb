class CardsController < ApplicationController

	def index
		@data = Giphy::API.new
		@images = @data.get_data(2)
	end

	def new_image
		@data = Giphy::API.new
		@images = @data.get_data(1)
	end

end
