import 'raf/polyfill';
import '@babel/polyfill';
import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { JSDOM } from 'jsdom';
import { ApiMockUtil } from './utils';

configure({ adapter: new Adapter() });

const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;
global.location = global.window.location;
global.navigator = dom.window.navigator;
global.screen = dom.window.screen;

global.ApiMockUtil = ApiMockUtil;
global.shallow = shallow;
global.mount = mount;
global.React = React;
