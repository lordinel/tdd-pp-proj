const chai = require('chai');

chai.config.includeStack = false;
chai.config.showDiff = true;

global.expect = chai.expect;
