import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import { withStyles } from '@material-ui/core/styles';

interface Props {
  className?: string,
  style?: React.CSSProperties,
  mode?: string,
  children?: React.ReactNode,
  paddingTop?: string,
  width?: string
}

interface State {
  count: number;
};

class Card extends React.Component<Props, State> {
  static defaultProps: Props = {
    mode: 'date'
  }

  state: State = {
    count: 0
  };

  render() {
    const styles = {
      whiteCard: {
        backgroundColor: 'white',
        overflow: 'auto',
        display: 'inline-flex',
        boxSizing: 'border-box'
      },
      container: {
        boxSizing: 'border-box',
        overflow: 'auto',
        margin: 0,
        padding: '0.5rem',
        width: '100%'
      }
    };

    const mode = this.props.mode || 'whiteCard';

    return (
      <div style={Object.assign(styles[mode], this.props.style || {})}>
        {this.props.children}
      </div>
    );
  }
}

// Sidebar
/**
 * TODO implement switch module function
 * state = {
 *   modules: [
 *     {
 *        title,
 *        subModules: [{
 *          title
 *        }]
 *     }
 *   ],
 *   activeModule: module > submodule, eg: '0.0'
 * }
 */
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderSideList() {
    const {
      classes
    } = this.props;
    return (<div>
      <List style={{width: '100%'}}>
        {['Campaign Station'].map((text) => (
          <ListItem button key={text}>
            <ListItemIcon><InboxIcon/></ListItemIcon>
            <ListItemText primary={text}/>
          </ListItem>
        ))}

        {['Real-time Performance'].map((text) => (
          <ListItem
            classes={{root: classes.activeModule}}
            button
            key={text}>
            <ListItemText
              primary={text}
              classes={{primary: classes.activeLabel}}
            />
          </ListItem>
        ))}
      </List>
    </div>);
  }

  getPaddingTop() {
    return this.props.paddingTop || '3.75rem';
  }

  getWidth() {
    return this.props.width || '15.625rem';
  }

  render() {
    return (<Card
      style={{
        position: 'absolute',
        width: this.props.width,
        height: '100%',
        borderRight: '0.125rem solid rgba(0, 0, 0, 0.12)'
      }}
    >
      <div style={{paddingTop: this.getPaddingTop(), width: '100%'}}>
        {this.renderSideList()}
      </div>
    </Card>);
  }
}

export default withStyles((theme) => {
  return {
    activeModule: {
      paddingLeft: '5rem',
      backgroundColor: theme.palette.primary.main,
      '&:focus': {
        backgroundColor: theme.palette.primary.main,
      },
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
      }
    },
    activeLabel: {
      color: 'white'
    }
  };
})(Sidebar);
