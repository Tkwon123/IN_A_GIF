require 'open-uri'


module Giphy

	class API
		attr_accessor :json

		def initialize
			@request_url = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC'
		end

		def get_data
			data = open(@request_url).read
			@json = JSON.parse(data)
			@images = @json['data'][1]["images"]["original"]['url']
			get_images
		end

		def get_images
			items = @json['data'].count
			@images = []
			items.times do |item|
				@images << @json['data'][item]["images"]["original"]['url']
			end
			return @images
		end

	end

end
