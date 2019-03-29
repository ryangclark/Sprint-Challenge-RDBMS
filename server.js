const express = require('express');
const helmet = require('helmet');

const server = express();

server.use(helmet);
server.use(express.json());

// @TODO: Routes go here

module.exports = server;
