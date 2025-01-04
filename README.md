# MongoDB updateOne with upsert Unexpected Behavior

This repository demonstrates a potential issue with MongoDB's `updateOne` method when using `upsert: true`.  In certain scenarios, instead of inserting a new document if one doesn't exist (as expected), `updateOne` may unexpectedly overwrite the entire existing document.

## Problem Description
The provided code attempts to update a document in a MongoDB collection. If the document doesn't exist, it should create a new one with the provided data. However, the `upsert: true` option seems to overwrite the whole document, not just the fields specified in the update operation.

## Setup
1. Install MongoDB.
2. Clone this repository.
3. Run `bug.js` to execute the code and observe the unexpected behavior.
4. Run `bugSolution.js` to see the solution.

## Solution
The solution involves using the `insertOne` method to handle new documents separately, or using a more specific approach when upserting to only change specific fields.

## Contact
If you have any questions or encounter similar issues, please feel free to contact me.