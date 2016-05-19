import Application from "./app/index";

require('expose?$!expose?jQuery!jquery/dist/jquery.js');
require('bootstrap/dist/js/bootstrap.js');

require('./styles/main.scss');
require('bootstrap/dist/css/bootstrap.css');

Application.start();