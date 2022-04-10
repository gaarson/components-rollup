/* eslint-disable */
require('jsdom-global/register');
require('reflect-metadata');
const Enzyme = require('enzyme');
const Adapter  = require('@wojtekmaj/enzyme-adapter-react-17');
require('jest-localstorage-mock');
/* eslint-disable */

Enzyme.configure({ adapter: new Adapter() });
