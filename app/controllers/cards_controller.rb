class CardsController < ApplicationController

	def index
		@data = Giphy::API.new
		@images = @data.get_data
	end

end
