let cobaDb = db.getSiblingDB("coba");
console.log("Creating index for collection::two_hr_forecast_by_area");
cobaDb.two_hr_forecast_by_area.createIndex({ area: 1, period: 1 }, { unique: true });