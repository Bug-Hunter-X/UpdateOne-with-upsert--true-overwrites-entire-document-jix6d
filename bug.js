```javascript
const query = { name: 'John Doe' };
const update = { $set: { age: 30 } };

db.collection('users').updateOne(query, update, { upsert: true }).then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
});
```