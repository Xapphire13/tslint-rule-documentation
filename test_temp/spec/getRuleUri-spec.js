"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jasmine");
const index_1 = require("../src/index");
describe("getRuleUri", () => {
    it("returns built-in rules", () => {
        const result = index_1.getRuleUri("semicolon");
        expect(result.found).toBeTruthy();
        expect(result.uri).toBe("https://palantir.github.io/tslint/rules/semicolon");
    });
    it("returns contrib page when plugin not found", () => {
        const result = index_1.getRuleUri("unknown-plugin/foo");
        expect(result.found).toBeFalsy();
        expect(result.uri).toBe("https://github.com/Xapphire13/tslint-rule-documentation/blob/master/CONTRIBUTING.md");
    });
    it("returns example plugin uri", () => {
        const result = index_1.getRuleUri("__example/foo");
        expect(result.found).toBeTruthy();
        expect(result.uri).toBe("https://github.com/<user>/<repo>/blob/master/docs/foo.md");
    });
});
