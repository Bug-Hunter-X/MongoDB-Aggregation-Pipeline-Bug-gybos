```javascript
//Incorrect aggregation pipeline causing unexpected results
db.collection('myCollection').aggregate([
  {$match: { /* some criteria */ }},
  {$group: {_id: '$fieldName', count: {$sum: 1}}},
  {$sort: {count: -1}},
  {$limit: 10}
]);
```