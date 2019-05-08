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

interface Props {
  style?: React.CSSProperties,
  children?: React.ReactNode,
  title?: string,
  user?: userItem | null,
  avatarMenus?: Array<avatarMenusItem> | null,
  onClickMenuIcon?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void,
  onClickAvatarItem?: Function
}

interface State {
  avatarMenuAnchorEl: EventTarget & HTMLElement | null
};

declare type userItem = {
  userName: string
  Avatar: React.ReactNode
};

declare type avatarMenusItem = {
  name: string
  id: string
};


export default class CampaignHeader extends React.Component<Props, State> {
  static defaultProps: Props = {}

  state: State = {
    avatarMenuAnchorEl: null
  };

  handleClickAvatar(e: React.MouseEvent<HTMLElement>) {
    this.setState({
      avatarMenuAnchorEl: e.currentTarget
    });
  }

  handleCloseAvatarMenu(e: React.MouseEvent<HTMLElement>, id: string) {
    this.setState({
      avatarMenuAnchorEl: null
    });

    this.props.onClickAvatarItem && this.props.onClickAvatarItem(id);
  }

  render() {
    const { title, user, avatarMenus, style, onClickMenuIcon } = this.props;

    return (
      <div className='header' style={style}>
        <AppBar position='static' style={{height: '100%'}}>
          <Toolbar style={{ height: '100%', minHeight: '100%' }}>
            <IconButton color="inherit">
              <MenuIcon onClick={onClickMenuIcon} />
            </IconButton>

            <Typography variant="h6" color="inherit">
              {title}
            </Typography>

            <div style={{flexGrow: 1, paddingLeft: '2.5rem'}}>
              {this.props.children}
            </div>

            {user && (
              <div style={{lineHeight: '3.75rem', marginRight: '0.625rem'}}>
                Welcome, {user.userName}
              </div>
            )}

            {user && (
              <IconButton onClick={this.handleClickAvatar.bind(this)}>
                {!!user.Avatar ? user.Avatar : <AvatarDefault style={{width: '2rem', height: '2rem'}}/>}
              </IconButton>
            )}

            {!user && (
              <Typography 
                color="inherit"
                style={{ cursor: 'pointer' }}
                onClick={this.handleClickAvatar.bind(this)}
              >
                Login
              </Typography>
            )}

            {
              avatarMenus && !!avatarMenus.length &&
              <Menu
                anchorEl={this.state.avatarMenuAnchorEl}
                open={Boolean(this.state.avatarMenuAnchorEl)}
                onClose={this.handleCloseAvatarMenu.bind(this)}
              >
                {avatarMenus.map((item) => {
                  return (
                    <MenuItem
                      key={item.id}
                      style={{width: '10rem'}}
                      onClick={(e) => this.handleCloseAvatarMenu(e, item.id)}>{item.name}
                    </MenuItem>
                  );
                })}
              </Menu>
            }
            
          </Toolbar>
        </AppBar>

        <style jsx>{`
          .header {
            height: ${theme.headerHeight};
            width: 100%;
            flex-grow: 1;
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
  }
}
