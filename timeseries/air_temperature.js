let cobaDb = db.getSiblingDB("coba");
console.log("Creating timeseries collection for temparature reading");
cobaDb.createCollection(
    "air_temperature",
    {
        timeseries: {
            timeField: "timestamp",
            metaField: "stationId",
            granularity: "seconds",
            bucketMaxSpanSeconds: 3600
        }
    })