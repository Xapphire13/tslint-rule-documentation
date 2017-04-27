"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plugins = require("./plugins.json"); // tslint:disable-line:no-require-imports no-var-requires
function getRuleUri(ruleId) {
    const ruleParts = ruleId.split("/");
    if (ruleParts.length === 1) {
        return {
            found: true,
            uri: `https://palantir.github.io/tslint/rules/${ruleId}`
        };
    }
    const pluginName = ruleParts[0];
    const ruleName = ruleParts[1];
    const uri = plugins[pluginName];
    if (!uri) {
        return {
            found: false,
            uri: "https://github.com/Xapphire13/tslint-rule-documentation/blob/master/CONTRIBUTING.md"
        };
    }
    return {
        found: true,
        uri: uri.replace("RULENAME", ruleName)
    };
}
exports.getRuleUri = getRuleUri;
