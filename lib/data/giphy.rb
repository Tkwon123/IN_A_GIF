require 'open-uri'


module Giphy

	class API
		attr_accessor :json, :ids

		def initialize(search)
			@request_url = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=#{search}"
		end

		def get_data(num_requests)
			@images = []
			@ids = []
			num_requests.to_i.times do |request|
				data = open(@request_url).read
				@json = JSON.parse(data)
				@images << @json['data']["image_url"]
				#@ids << @json['data']["id"]
			end
			return @images
		end

		def return_dupes(ary)
			ary = ary.group_by{ |e| e }.select { |k, v| v.size > 1 }.map(&:first)
		end


	end

end
