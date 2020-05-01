class Api::V1::MealsController < ApplicationController
  before_filter :authenticate_user!
end
