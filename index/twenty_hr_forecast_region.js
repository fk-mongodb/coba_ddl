let cobaDb = db.getSiblingDB("coba");
console.log("Creating index for collection::twenty_hr_forecast_region");
cobaDb.twenty_hr_forecast_region.createIndex({ period: 1 }, { unique: true });