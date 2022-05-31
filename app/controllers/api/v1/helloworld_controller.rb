class Api::V1::HelloworldController < ApplicationController
  def index
    @hello = Helloworld.find(rand(1..5))

    render json: @hello
  end
end
