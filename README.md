### To start the server
    foreman start -f Procfile.dev

### Deploy
    heroku buildpacks:set heroku/ruby
    heroku buildpacks:add --index 1 heroku/nodejs

### Debugging webpack
rm ./bin/webpack ./bin/webpack-dev-server && bundle binstub webpacker --standalone
rake webpacker:install
rake webpacker:install:react

## Testing

### Run only model specs
bundle exec rspec spec/models

### Run only specs for AccountsController
bundle exec rspec spec/controllers/accounts_controller_spec.rb

### Run only spec on line 8 of AccountsController
bundle exec rspec spec/controllers/accounts_controller_spec.rb:8
