class Api::BandsController < ApplicationController
  before_action :set_band, only: [:show]
  def index
    bands = Band.all
    render json: bands
  end

  def show
    render json: @band
  end

  private

    def set_band
      @band = Band.find(params[:id])
    end
end