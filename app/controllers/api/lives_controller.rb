class Api::LivesController < ApplicationController
  before_action :set_lives, only: [:show]
  def index
    lives = Live.all
    render json: lives
  end

  def show
    render json: @live
  end

  private

    def set_lives
      @live = Live.find(params[:id])
    end
end