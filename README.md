ionic-fab button with ionic
=======================================

## fab button for ionic framework as similar animation like Linkedin fab button

![alt tag](https://raw.githubusercontent.com/PraveenJP/ionic-fab/master/www/img/SS.PNG)

## Using this project

ionic fab directory

```bash
CSS file : ionic-fab/www/lib/ionic-fab/ion-fabButton.css
JS file : ionic-fab/www/lib/ionic-fab/ion-fabButton.js
```

First step to clone the project 

```bash
$ git clone https://github.com/PraveenJP/ionic-fab.git
```

Test the app in browser

```bash
$ ionic serve
````

Check the app in real device

iOS:

``` bash
$ ionic platform add ios
$ ionic run ios
```

Android:

``` bash
$ ionic platform add android
$ ionic run android
```

## Using fab button

Add css and js file into the index.html file

``` bash
  <link href="lib/ionic-fab/ion-fabButton.css" rel="stylesheet">
  <script src="lib/ionic-fab/ion-fabButton.js"></script>
```

Then add ionic-fab-button dependency into the app.js file

``` bash
angular.module('starter', ['ionic','ion-fab-button'])
```

finally place fab button after the ion-content as you want

Right fab button

``` bash
<fab-button-right target-id="content">
    <i class="icon ion ion-plus-round"></i>
</fab-button-right>
```
Left fab button

``` bash
<fab-button-left target-id="content">
    <i class="icon ion ion-plus-round"></i>
</fab-button-left>
```

Thats it :)

## Happy Coding.. :)

