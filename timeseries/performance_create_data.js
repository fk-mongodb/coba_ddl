db = db.getSiblingDB("coba");


db.ticksSeconds.drop();
db.createCollection(
    "ticksSeconds",
    {
       timeseries: {
          timeField: "timestamp",
          metaField: "metadata",
          granularity: "seconds"
       }
    }
);


db.ticksMinutes.drop();
db.createCollection(
    "ticksMinutes",
    {
       timeseries: {
          timeField: "timestamp",
          metaField: "metadata",
          granularity: "minutes"
       }
    }
);


db.ticksHours.drop();
db.createCollection(
    "ticksHours",
    {
       timeseries: {
          timeField: "timestamp",
          metaField: "metadata",
          granularity: "hours"
       }
    }
);






var ts = new Date().setDate(new Date().getDate()-3650);
var now = new Date();


var c = 0;
var bulk = [];


while (ts < now) {
    var doc = {
        timestamp: new Date(ts),
        price: 200 + Math.floor(Math.random()*400),
        ticksize: 10 + Math.floor(Math.random()*10000),
        metadata: { symbol: "mdb" }
    };
    bulk.push(doc);
    c++;
    if (c > 999) {
        db.ticksSeconds.insertMany(bulk, {ordered: false});
        db.ticksMinutes.insertMany(bulk, {ordered: false});
        db.ticksHours.insertMany(bulk, {ordered: false});
        bulk = [];
        c = 0;
    }
    // Advance ts by at least one hour
    ts = ts + 3600 * 1000 + Math.floor(Math.random()*60*1000);
}
if (c > 0) {
    db.ticksSeconds.insertMany(bulk, {ordered: false});
    db.ticksMinutes.insertMany(bulk, {ordered: false});
    db.ticksHours.insertMany(bulk, {ordered: false});
    bulk = [];
    c = 0;
}
