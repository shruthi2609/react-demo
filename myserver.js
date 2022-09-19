const express=require('express')
const server=express()
const path=require('path')
const cors=require('cors')
server.use(cors())

const favicon = require("serve-favicon");
server.use(favicon(path.join(__dirname,'client', "build", "favicon.ico")));
server.use(express.static(path.join(__dirname,'/client', "build")));

const SearchMgr=require('./controllers/SearchMgr')
const DeleteMgr=require('./controllers/DeleteMgr')
const CreateMgr=require('./controllers/CreateMgr')

const bp=require('body-parser')
server.use(bp.json())

server.use('/',SearchMgr) 
server.use('/',DeleteMgr)
server.use('/',CreateMgr)

server.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname,'client', "build", "favicon.ico"));
});
const port=3001
const host = '0.0.0.0';
server.listen(process.env.PORT||port,host, () => console.log('server started'))