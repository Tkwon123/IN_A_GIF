class CardsController < ApplicationController



	def index
		$list = []
		@data = Giphy::API.new('cats')
		@images, @ids = @data.get_data(2)
		@ids[0] == @ids[1] ? index : $list = @ids
	end

	def new_search
		$list = []
		@search = params[:search] || 'cats'
		@data = Giphy::API.new(@search)
		@images, @ids = @data.get_data(2)
		@ids[0] == @ids[1] ? index : $list = @ids
	end

	def new_image
		@search = params[:search] || 'cats'
		@data = Giphy::API.new(@search)
		@images, @ids = @data.get_data(1)
		@ids.each do |id|
			imaged_used?(id)
		end
	end

	def search	
		redirect_to new_search(search: (params[:search].blank? ? "cats" : params[:search]))
	end

private 

	def imaged_used?(id)
		if $list.include? id
			new_image
		else
			$list << id
		end
	end


end
