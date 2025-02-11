db = db.getSiblingDB("coba");


db.sensorBig.drop();


db.createCollection(
   "sensorBig",
   {
      timeseries: {
         timeField: "timestamp",
         metaField: "metadata",
         granularity: "minutes"
      }
   }
);


// insert data chronologically over the past 30 days
var past = new Date().setDate(new Date().getDate()-30);
var ts = new Date();
var c = 0;
var bulk = [];


// use wrong order
while (past < ts) {
   // pretend inserting temp between -20 and 80 degree Celsius
   var doc = {timestamp: new Date(ts), measure: -20 + Math.floor(Math.random()*100), metadata: {unit: "Celsius"} };
   bulk.push(doc);
   if (c > 999) {
       db.sensorBig.insertMany(bulk, {ordered: false});
       bulk = [];
       c = 0;
   }
   // backward timestamp by a minute
   ts = ts - 60 * 1000;
   c++;
}