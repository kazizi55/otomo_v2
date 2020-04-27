class CreateLives < ActiveRecord::Migration[6.0]
  def change
    create_table :lives do |t|
      t.string :name, null: false, default: ""
      t.text :explanation, null: false, default: ""
      t.timestamps
    end
  end
end
