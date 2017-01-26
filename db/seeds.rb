# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'csv'

csv_text = File.read(Rails.root.join('lib', 'seeds', 'womensmarchtweets.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
  t = Tweet.new
  t.tweet_source_id = row['id']
  t.text = row['text']
  t.source = row['source']
  t.created_at = row['created_at']
  t.save
  puts "#{t.tweet_source_id} saved"
end

puts "There are now #{Tweet.count} rows in the tweets table"
