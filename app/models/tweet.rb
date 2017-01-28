class Tweet < ApplicationRecord

  include AlgoliaSearch

  algoliasearch do
  end

end
