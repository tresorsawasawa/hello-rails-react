class Api::V1::HelloworldController < ApplicationController
  def index
    @hellos = Helloworld.all

    render json: @hellos
  end
end
