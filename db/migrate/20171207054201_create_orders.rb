class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.references :customer, index: true, foreign_key: true
      t.references :pizza, index: true, foreign_key: true
      t.datetime :pickup_at
      t.string :status, default: 'new'

      t.timestamps null: false
    end
    add_index :orders, :pickup_at
    add_index :orders, :status
  end
end
