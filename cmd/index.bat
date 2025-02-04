@echo off

mongosh "mongodb+srv://fkadmin:%MONGOSH_PASSWORD%@dev.i8i3h.mongodb.net/?retryWrites=true&w=majority&appName=coba" --file index\area.js
mongosh "mongodb+srv://fkadmin:%MONGOSH_PASSWORD%@dev.i8i3h.mongodb.net/?retryWrites=true&w=majority&appName=coba" --file index\twenty_hr_forecast_general.js
mongosh "mongodb+srv://fkadmin:%MONGOSH_PASSWORD%@dev.i8i3h.mongodb.net/?retryWrites=true&w=majority&appName=coba" --file index\twenty_hr_forecast_region.js
mongosh "mongodb+srv://fkadmin:%MONGOSH_PASSWORD%@dev.i8i3h.mongodb.net/?retryWrites=true&w=majority&appName=coba" --file index\two_hr_forecast_by_area.js