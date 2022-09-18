# README

config/initializers/devise

# The "*/*" below is required to match Internet Explorer requests.
config.navigational_formats = ['*/*', :html, :turbostream]

# The default HTTP method used to sign out a resource. Default is :delete.
config.sign_out_via = :get

##After cloning this repository

-bundle install
-rails stimulus:install
-fix js controller index, overwritten by stimulus:install
-db:create db:migrate