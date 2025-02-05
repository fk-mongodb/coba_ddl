@echo off

mongosh "mongodb://fkadmin:%MONGOSH_PASSWORD%@13.212.62.149:27017/?retryWrites=true&w=majority&appName=coba" --file index\area.js
mongosh "mongodb://fkadmin:%MONGOSH_PASSWORD%@13.212.62.149:27017/?retryWrites=true&w=majority&appName=coba" --file index\twenty_hr_forecast_general.js
mongosh "mongodb://fkadmin:%MONGOSH_PASSWORD%@13.212.62.149:27017/?retryWrites=true&w=majority&appName=coba" --file index\twenty_hr_forecast_region.js
mongosh "mongodb://fkadmin:%MONGOSH_PASSWORD%@13.212.62.149:27017/?retryWrites=true&w=majority&appName=coba" --file index\two_hr_forecast_by_area.js