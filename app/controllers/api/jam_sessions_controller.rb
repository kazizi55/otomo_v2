class Api::JamSessionsController < ApplicationController
  before_action :set_jam_session, only: [:show]
  def index
    jam_sessions = JamSession.all
    render json: jam_sessions
  end

  def show
    render json: @jam_session
  end

  private

    def set_jam_session
      @jam_session = JamSession.find(params[:id])
    end
end