import "jasmine";

import {getRuleUri} from "../src/index";

describe("getRuleUri", () => {
    it("returns built-in rules", () => {
        const result = getRuleUri("semicolon");

        expect(result.found).toBeTruthy();
        expect(result.uri).toBe("https://palantir.github.io/tslint/rules/semicolon");
    });

    it("returns contrib page when plugin not found", () => {
        const result = getRuleUri("unknown-plugin/foo");

        expect(result.found).toBeFalsy();
        expect(result.uri).toBe("https://github.com/Xapphire13/tslint-rule-documentation/blob/master/CONTRIBUTING.md");
    });

    it("returns example plugin uri", () => {
        const result = getRuleUri("__example/foo");

        expect(result.found).toBeTruthy();
        expect(result.uri).toBe("https://github.com/<user>/<repo>/blob/master/docs/foo.md");
    });
});
