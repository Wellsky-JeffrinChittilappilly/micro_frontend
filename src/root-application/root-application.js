import * as singleSpa from 'single-spa';

singleSpa.registerApplication('app-1', () =>
  import ('../app1/app1.js'), pathPrefix('/react'));
singleSpa.registerApplication('app-2', () =>
  import ('../app2/app2.js'), pathPrefix('/angular'));
singleSpa.registerApplication('app-3', () =>
  import ('../app3/home.js'),(location)=> location.pathname=="/" || location.pathname.startsWith(`/home`) );

singleSpa.start();

function pathPrefix(prefix) {
  return function(location) {
    return location.pathname.startsWith(`${prefix}`);
  }
}