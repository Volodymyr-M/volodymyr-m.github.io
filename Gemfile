# frozen_string_literal: true

source "https://rubygems.org"

gem "jekyll", "~> 4.4.1"

# logger stopped being a default gem on Ruby 4.0+, and Jekyll 4.4.1 requires it.
# Safe to keep for older Rubies (3.x) — it's a no-op there.
gem "logger"

group :jekyll_plugins do
  gem "jekyll-polyglot"
  gem 'jekyll-email-protect'
end