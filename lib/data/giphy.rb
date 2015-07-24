require 'open-uri'


module Giphy

	class API
		attr_accessor :json

		def initialize
			@request_url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=funny'
		end

		def get_data(num_requests)
			@images = []
			num_requests.to_i.times do |request|
				data = open(@request_url).read
				@json = JSON.parse(data)
				@images << @json['data']["image_url"]
			end
			return @images
		end


	end

end
