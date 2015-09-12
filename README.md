# HTTP Loading Interceptor Module for Angular 1.4+

This will :
 - intercept all the requests done in the app
 - displays a spinner (you have to add some html to your main template)
 - makes you successful obviously


#### Usage


Register this module in your app:

```javascript
var app = angular.module('app', [ 'HttpLoadingInterceptor' ]);
```

Include the css:
```javascript
import 'httpLoadingInterceptor/interceptor.css';
```

Add the directive to your template:
```html
<!-- #httpLoadingSpinner -->
<div id="httpLoadingSpinner" httpLoadingInterceptorSpinner></div>
```