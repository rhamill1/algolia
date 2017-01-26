class CreateTweets < ActiveRecord::Migration[5.0]
  def change
    create_table :tweets do |t|
      t.bigint :tweet_source_id
      t.text :text
      t.string :source
      t.datetime :created_at

      t.timestamps
    end
  end
end
