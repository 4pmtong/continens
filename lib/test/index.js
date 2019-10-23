var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from 'react';
;
var CampaignHeader = /** @class */ (function (_super) {
    __extends(CampaignHeader, _super);
    function CampaignHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            avatarMenuAnchorEl: null
        };
        return _this;
    }
    CampaignHeader.prototype.render = function () {
        return (React.createElement("div", { className: 'header' },
            React.createElement("p", null, "only this paragraph will get the style :"),
            React.createElement("style", { jsx: true }, "\n            p {\n              color: red;\n            }\n          ")));
    };
    CampaignHeader.defaultProps = {};
    return CampaignHeader;
}(React.Component));
export default CampaignHeader;
