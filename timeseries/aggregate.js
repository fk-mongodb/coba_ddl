// db = db.getSiblingDB("coba");

db.getCollection('sensor').aggregate(
   [
     {
       $project: {
         date: {
           $dateToParts: { date: '$timestamp' }
         },
         measure: 1
       }
     },
     {
       $group: {
         _id: {
           date: {
             year: '$date.year',
             month: '$date.month',
             day: '$date.day'
           }
         },
         avgTmp: { $avg: '$measure' },
         minTmp: { $min: '$measure' },
         maxTmp: { $max: '$measure' }
       }
     },
     { $sort: { _id: 1 } }
   ],
   { maxTimeMS: 60000, allowDiskUse: true }
 );