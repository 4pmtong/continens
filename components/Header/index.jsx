import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';

import AvatarDefault from './icons/avatar';



// Campaign Header
/**
 * {
 *   style,
 *   title,
 *   user: {
 *     userName
 *   },
 *   avatarMenus,
 *   onClickAvatarItem
 * }
 */
export default class CampaignHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarMenuAnchorEl: null
    };
  }

  handleClickAvatar(e) {
    this.setState({
      avatarMenuAnchorEl: e.currentTarget
    });
  }

  handleCloseAvatarMenu(e, index) {
    this.setState({
      avatarMenuAnchorEl: null
    });

    this.props.onClickAvatarItem && this.props.onClickAvatarItem(index);
  }

  render() {
    const { title, user: { userName, Avatar }, avatarMenus, style } = this.props;

    return (<div style={{
      height: '3.75rem',
      width: '100%',
      // position: 'fixed',
      flexGrow: 1,
      boxSizing: 'border-box',
      ...style
    }}>
      <AppBar style={{
        height: '100%',
        position: 'relative'
      }}>
        <Toolbar style={{height: '100%', minHeight: 0}}>
          <IconButton>
            <MenuIcon style={{
              color: 'white',
              fontWeight: 'bold'
            }}/>
          </IconButton>

          <Typography style={{fontSize: '1.2rem'}} color="inherit">
             {title}
          </Typography>

          <div style={{flexGrow: 1, paddingLeft: '2.5rem'}}>
            {this.props.children}
          </div>

          <div style={{lineHeight: '3.75rem', marginRight: '0.625rem'}}>
            Welcome, {userName}
          </div>

          <IconButton onClick={this.handleClickAvatar.bind(this)}>
            {Avatar ? <Avatar/> : <AvatarDefault style={{width: '2rem'}}/>}
          </IconButton>
          <Menu
            anchorEl={this.state.avatarMenuAnchorEl}
            open={Boolean(this.state.avatarMenuAnchorEl)}
            onClose={this.handleCloseAvatarMenu.bind(this)}
          >
            {avatarMenus.map((item) => {
              return (<MenuItem
                key={item.id}
                style={{width: '10rem'}}
                onClick={(e) => this.handleCloseAvatarMenu(e, item.id)}>{item.name}</MenuItem>);
            })}
          </Menu>
        </Toolbar>
      </AppBar>
    </div>);
  }
}
