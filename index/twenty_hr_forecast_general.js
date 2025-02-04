let cobaDb = db.getSiblingDB("coba");
console.log("Creating index for collection::twenty_hr_forecast_general");
cobaDb.twenty_hr_forecast_general.createIndex({ period: 1 }, { unique: true });