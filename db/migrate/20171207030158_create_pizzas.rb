class CreatePizzas < ActiveRecord::Migration
  def change
    create_table :pizzas do |t|
      t.references :pizza_kind, index: true, foreign_key: true
      t.integer :size

      t.timestamps null: false
    end
  end
end
