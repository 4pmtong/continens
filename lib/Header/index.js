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
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import theme from '../_util/theme';
import AvatarDefault from './icons/avatar';
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
    CampaignHeader.prototype.handleClickAvatar = function (e) {
        this.setState({
            avatarMenuAnchorEl: e.currentTarget
        });
    };
    CampaignHeader.prototype.handleCloseAvatarMenu = function (e, id) {
        this.setState({
            avatarMenuAnchorEl: null
        });
        this.props.onClickAvatarItem && this.props.onClickAvatarItem(id);
    };
    CampaignHeader.prototype.render = function () {
        var _this = this;
        var _a = this.props, title = _a.title, user = _a.user, avatarMenus = _a.avatarMenus, style = _a.style, onClickMenuIcon = _a.onClickMenuIcon;
        return (React.createElement("div", { className: 'header', style: style },
            React.createElement(AppBar, { position: 'static', style: { height: '100%' } },
                React.createElement(Toolbar, { style: { height: '100%', minHeight: '100%' } },
                    React.createElement(IconButton, { color: "inherit" },
                        React.createElement(MenuIcon, { onClick: onClickMenuIcon })),
                    React.createElement(Typography, { variant: "h6", color: "inherit" }, title),
                    React.createElement("div", { style: { flexGrow: 1, paddingLeft: '2.5rem' } }, this.props.children),
                    user && (React.createElement("div", { style: { lineHeight: '3.75rem', marginRight: '0.625rem' } },
                        "Welcome, ",
                        user.userName)),
                    user && (React.createElement(IconButton, { onClick: this.handleClickAvatar.bind(this) }, !!user.Avatar ? user.Avatar : React.createElement(AvatarDefault, { style: { width: '2rem', height: '2rem' } }))),
                    !user && (React.createElement(Typography, { color: "inherit", style: { cursor: 'pointer' }, onClick: this.handleClickAvatar.bind(this) }, "Login")),
                    avatarMenus && !!avatarMenus.length &&
                        React.createElement(Menu, { anchorEl: this.state.avatarMenuAnchorEl, open: Boolean(this.state.avatarMenuAnchorEl), onClose: this.handleCloseAvatarMenu.bind(this) }, avatarMenus.map(function (item) {
                            return (React.createElement(MenuItem, { key: item.id, style: { width: '10rem' }, onClick: function (e) { return _this.handleCloseAvatarMenu(e, item.id); } }, item.name));
                        })))),
            React.createElement("style", { jsx: true }, "\n          .header {\n            height: " + theme.headerHeight + ";\n            width: 100%;\n            flex-grow: 1;\n            box-sizing: border-box;\n          }\n        ")));
    };
    CampaignHeader.defaultProps = {};
    return CampaignHeader;
}(React.Component));
export default CampaignHeader;
