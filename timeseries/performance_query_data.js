db = db.getSiblingDB("coba");


var colls = ["ticksSeconds", "ticksMinutes", "ticksHours"];


var s = new Date().setDate(new Date().getDate() - 100);
var e = new Date().setDate(new Date().getDate() - 70);


colls.forEach(function (coll) {
    var start = new Date();
    db[coll].find({ "timestamp": { $gte: s, $lte: e } }).itcount();
    var end = new Date();
    console.log(`30 days find all: ${coll} - ${end - start} ms`);
});
/**
 * 30 days find all: ticksSeconds - 221 ms
 * 30 days find all: ticksMinutes - 108 ms
 * 30 days find all: ticksHours - 76 ms
 */


// 1 second query
var s = new Date().setDate(new Date().getDate() - 200);
var e = s + 1 * 1000;


colls.forEach(function (coll) {
    var start = new Date();
    db[coll].find({ "timestamp": { $gte: s, $lte: e } }).itcount();
    var end = new Date();
    console.log(`1 second find all: ${coll} - ${end - start} ms`);
});
/**
 * 1 second find all: ticksSeconds - 200 ms
 * 1 second find all: ticksMinutes - 80 ms
 * 1 second find all: ticksHours - 72 ms
 */




colls.forEach(function (coll) {
    var start = new Date();
    db[coll].find({ "metadata.symbol": "mdb" }).itcount();
    var end = new Date();
    console.log(`Unindexed find all: ${coll} - ${end - start} ms`);
});
/**
 * Unindexed find all: ticksSeconds - 6644 ms
 * Unindexed find all: ticksMinutes - 6159 ms
 * Unindexed find all: ticksHours - 6090 ms
 */