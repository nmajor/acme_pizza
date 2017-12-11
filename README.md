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

### Run rails tests
    rspec spec/models

### Run react tests
    npm test
