"use strict";
exports.__esModule = true;
var TestDrawer = /** @class */ (function () {
    function TestDrawer() {
    }
    TestDrawer.prototype.draw = function () {
        var body = $('body');
        body.append($.mustache(window.TemplateJS.test, { "name": "Олег Яровиков" }));
    };
    TestDrawer.prototype.loadData = function () {
        /*
        $.ajax({

        });

        */
    };
    return TestDrawer;
}());
exports.TestDrawer = TestDrawer;
