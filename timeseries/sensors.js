db = db.getSiblingDB("coba");
db.sensor.drop();


db.createCollection(
   "sensor",
   {
      timeseries: {
         timeField: "timestamp",
         metaField: "metadata",
         granularity: "minutes"
      }
   }
);


// insert data chronologically over the past 30 days
var ts = new Date().setDate(new Date().getDate()-30);
var now = new Date();
var c = 0;
var bulk = [];


while (ts < now) {
   // pretend inserting temp between -20 and 80 degree Celsius
   var doc = {timestamp: new Date(ts), measure: -20 + Math.floor(Math.random()*100), metadata: {unit: "Celsius"} };
   bulk.push(doc);
   if (c > 999) {
       db.sensor.insertMany(bulk, {ordered: false});
       bulk = [];
       c = 0;
   }
   // advance timestamp by a minute
   ts = ts + 60 * 1000;
   c++;
}