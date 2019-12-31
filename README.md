# camelize

stupid simple camelize implementation, dates back to the mootools era

```js
const { camelize, hyphenate } = require('@kamicane/camelize')
```

```js
const camelize = require('@kamicane/camelize/camelize')
const hyphenate = require('@kamicane/camelize/hypenate')
```

```js
camelize("the-quick-brown-fox")
// 'theQuickBrownFox'
camelize("the-quick-brown--fox.jumps---over..the-lazy_dog")
// 'theQuickBrownFoxJumpsOverTheLazyDog'
camelize("-the-quick")
// 'TheQuick'
```

```js
> hyphenate('theQuickBrownFox')
// 'the-quick-brown-fox'
> hyphenate('TheQuickBrownFox')
// '-the-quick-brown-fox'
> hyphenate('theQuickBrownFox', '.')
// 'the.quick.brown.fox'
```
