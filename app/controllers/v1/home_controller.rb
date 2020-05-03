class V1::HomeController < ApplicationController

  def index
    render json: { message: "Hello" }
  end

end

