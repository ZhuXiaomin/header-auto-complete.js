# header-auto-complete.js

## Setup

First, include jQuery and the script located on the `dist` folder.

```html
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="dist/header-auto-complete.min.js"></script>
```

# Usage

A pretty common use case is to pass two selectors (mainTag and subTag input as a 'key-value pair') to HeaderAutoComplete plugin.


PS: it also supports serveral key-value pairs in the same html file.

```html
<div class="ui-widget">
  <!-- Target -->
  <label for="mtg1">MainTags1: </label>
  <input id="mtg1" v-model="mainTag1">
  <label for="stg1">SubTags1: </label>
  <input id="stg1" v-model="subTag1">
</div>
```

```js
<script type="text/javascript">
HeaderAutoComplete('#mtg1', '#stg1');
</script>
```

## License

[MIT License](http://nickzhu.mit-license.org/) © Nik Zhu
