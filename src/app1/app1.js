import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Root from './root.component.tsx';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  domElementGetter,
});

export function bootstrap(props) {
  return reactLifecycles.bootstrap(props);
}

export function mount(props) {
  return reactLifecycles.mount(props).then(()=>{
    var head = document.getElementsByTagName('head')[0];
    let el = document.getElementById('frameworkPoll');
  if (!el) {
    el = document.createElement('script');
    el.id = 'frameworkPoll';
    el.src = "./src/app2/web-components.js";
    head.appendChild(el);
  }
  });
}

export function unmount(props) {
  return reactLifecycles.unmount(props).then(()=>{
    var head = document.getElementsByTagName('head')[0];
    let el = document.getElementById('frameworkPoll');
    head.removeChild(el);
  });
}

function domElementGetter() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('react');
  if (!el) {
    el = document.createElement('div');
    el.id = 'react';
    document.body.appendChild(el);
  }

  return el;
}
