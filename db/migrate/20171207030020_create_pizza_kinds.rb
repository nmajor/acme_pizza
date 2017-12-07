class CreatePizzaKinds < ActiveRecord::Migration
  def change
    create_table :pizza_kinds do |t|
      t.string :name

      t.timestamps null: false
    end
  end
end
