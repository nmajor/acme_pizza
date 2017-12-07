class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.references :customer, index: true, foreign_key: true
      t.date :pickupAt
      t.string :status

      t.timestamps null: false
    end
    add_index :orders, :pickupAt
    add_index :orders, :status
  end
end
