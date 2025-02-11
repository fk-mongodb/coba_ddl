@echo off

mongosh "mongodb+srv://fkadmin:%MONGOSH_PASSWORD%@prd.hixjx.mongodb.net/?retryWrites=true&w=majority&appName=coba" --file timeseries\bigsensors.js