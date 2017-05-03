var express         = require('express'),
    mongoose        = require('mongoose'),
    port            = process.env.PORT || 3000,
    methodOverride  = require('method-override'),
    bodyParser      = require('body-parser'),
    hbs             = require('hbs'),
    passport        = require('passport'),
    LocalStrategy   = require('passport-local').Strategy,

    app             = express();

    mongoose.Promise = global.Promise;

var serviceId       = 'GncUbyqPyvc';


var User            = require('./models/user.js'),
    Character       = require('./models/character.js'),
