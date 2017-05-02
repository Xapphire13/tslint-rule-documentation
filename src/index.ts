const plugins = require("./plugins.json"); // tslint:disable-line:no-require-imports no-var-requires

export interface IRuleResult {
    /** true if the rule is a TSLint core rule, or a known plugin rule, false otherwise */
    found: boolean;
    /** If found is true, uri of the documentation of the rule. If found is false, uri of the contribution guidelines */
    uri: string;
}

/**
 * Get the documentation URI for the given rule ID
 *
 * @param ruleId {string} The ID of a TSLint rule
 * @return {IRuleResult} with details on whether or not the rule was found,
 * and the URI to its documentation.
 */
export function getRuleUri(ruleId: string): IRuleResult {
    const ruleParts = ruleId.split("/");

    if (ruleParts.length === 1) {
        return {
            found: true,
            uri: `https://palantir.github.io/tslint/rules/${ruleId}`
        };
    }

    const pluginName = ruleParts[0];
    const ruleName = ruleParts[1];
    const uri: string = plugins[pluginName];

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
