[![Build Status](https://travis-ci.org/Xapphire13/tslint-rule-documentation.svg?branch=master)](https://travis-ci.org/Xapphire13/tslint-rule-documentation)
# tslint-rule-documentation
Find the url for the documentation of a [TSLint](https://palantir.github.io/tslint/) rule

# Install
```
npm install --save tslint-rule-documentation
```

# Usage
```js
const getRuleUri = require("tslint-rule-documentation").getRuleUri;

// find uri for core rules
getRuleUri("no-var-keyword");
// => { found: true, uri: "https://palantir.github.io/tslint/rules/no-var-keyword"}

// find uri for known plugins
getRuleUri("__example/foo");
// => { found: true, uri: "https://github.com/<user>/<repo>/blob/master/docs/foo.md"}

// If the plugin is not known, get a link to help improve this
getRuleUri("unknown-plugin/foo");
// => { found: true, uri: "https://github.com/Xapphire13/tslint-rule-documentation/blob/master/CONTRIBUTING.md"}
```

# Contributing
If a plugin you use is _not_ in the [list of supported plugins](https://github.com/Xapphire13/tslint-rule-documentation/blob/master/src/plugins.json),
please consider adding it to the project by following the instructions [here](https://github.com/Xapphire13/tslint-rule-documentation/blob/master/CONTRIBUTING.md).

# API
Coming soon

# Credit
This is based on [eslint-rules-documentation](https://github.com/jfmengels/eslint-rule-documentation), so I would like to thank the authors of that for the inspiration and code to base this on.

# License
MIT
