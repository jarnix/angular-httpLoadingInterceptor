# HTTP Loading Interceptor Module for Angular 1.4+

This will :
 - intercept all the requests done in the app
 - display a spinner (you have to add the directive's html to your main template)
 - make you successful, obviously
 
 You should customize the css by overwriting #httpLoadingSpinner in your app's stylesheet.


#### Usage


Register this module in your app:

```javascript
import httpLoadingInterceptor from 'vendor/angular-http-loading-interceptor';
```

```javascript
var app = angular.module('app', [ 'HttpLoadingInterceptor' ]);
```

Include the css:
```javascript
import 'angular-http-loading-interceptor/spinner.css';
```

Add the directive to your template:
```html
<!-- #httpLoadingSpinner -->
<div id="httpLoadingSpinner" http-loading-interceptor-spinner></div>
```