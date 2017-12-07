### To start the server
    foreman start -f Procfile.dev

### Deploy
    heroku buildpacks:set heroku/ruby
    heroku buildpacks:add --index 1 heroku/nodejs
