### NodeJs/Express CRUD 

#### REST API for /records:
   
>- /api/records’ – GET all records
>- /api/records/:id’ – GET a records by Id
>- /api/records’ – POST a record
>- /api/records/update/:id’ – UPDATE a record by Id
>- /api/records/delete/:id’ – DELETE a record by Id

1) **Install Packages** 
 
    `$ npm install`

2) **Start the Server** 
  
    `$ npm run dev`
    

#### Example for Testing CRUD operations   
**Read All**
```
curl -X GET \
  http://localhost:8080/api/records
```

**Read by id**
```
curl -X GET \
  http://localhost:8080/api/records/:id
```

**Create**
```
curl -X POST \
  http://localhost:8080/api/records \
  -H "Content-Type: application/json" \
  -d '{"key1": "val1", "key2": "val2", "id": numb}'
```

**Update by id**
```
curl -X PUT \
  http://localhost:8080/api/records/:id \
  -H "Content-Type: application/json" \
  -d '{"key1": "val1", "key2": "val2"}'
```

**Delete by id**
```
curl -X DELETE \
  http://localhost:8080/api/records/:id \
```
