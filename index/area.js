let cobaDb = db.getSiblingDB("coba");
console.log("Creating index for collection::area");
cobaDb.area.createIndex({ name: 1 }, { unique: true });