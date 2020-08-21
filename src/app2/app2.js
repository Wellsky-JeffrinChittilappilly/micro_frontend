import 'reflect-metadata';
import singleSpaAngular from 'single-spa-angular';
import { ApplicationRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import  mainModule from './main-module.ts';
import { Router } from '@angular/router';

const ngLifecycles = singleSpaAngular({
  domElementGetter,
  mainModule,
  angularPlatform: platformBrowserDynamic(),
  template: `<app2 />`,
  Router,
  ApplicationRef,
})

export function bootstrap(props) {
  return ngLifecycles.bootstrap(props);
}

export function mount(props) {
  return ngLifecycles.mount(props).then(()=>{
    var head = document.getElementsByTagName('head')[0];
    let el = document.getElementById('frameworkPoll');
    if (!el) {
      el = document.createElement('script');
      el.id = 'frameworkPoll';
      el.src = "./src/app2/framework-poll.js";
      head.appendChild(el);
    }
    
    let el1 = document.getElementById('patientInfo');
    if (!el1) {
      el1 = document.createElement('script');
      el1.id = 'patientInfo';
      el1.src = "./src/app2/patient-info.js";
      head.appendChild(el1);
    }
  });
}
export function unmount(props) {
  return ngLifecycles.unmount(props).then(()=>{
    var head = document.getElementsByTagName('head')[0];
    let el = document.getElementById('frameworkPoll');
    let el1 = document.getElementById('patientInfo');
    el && head.removeChild(el);
    el1 && head.removeChild(el1);
  });
}

function domElementGetter() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('app2');
  if (!el) {
    el = document.createElement('div');
    el.id = 'app2';
    document.body.appendChild(el);
  }

  return el;
}