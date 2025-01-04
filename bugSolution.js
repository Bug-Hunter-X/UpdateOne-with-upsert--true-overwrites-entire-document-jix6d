```javascript
db.collection('users').findOne(query).then((doc) => {
  if (doc) {
    // Document exists, perform update
    db.collection('users').updateOne(query, update).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.error(error);
    });
  } else {
    // Document doesn't exist, perform insert
    const newDoc = { ...query, ...update.$set };
    db.collection('users').insertOne(newDoc).then((result) => {
      console.log(result);
    }).catch((error) => {
      console.error(error);
    });
  }
}).catch((error) => {
  console.error(error);
});
```