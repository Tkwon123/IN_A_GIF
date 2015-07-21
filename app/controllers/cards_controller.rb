class CardsController < ApplicationController

	def index
		@data = Giphy::API.new
		@images = @data.get_data(2)
	end

end
