import React from 'react';

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


  render() {

    return (
      <div className='header'>
        <p>only this paragraph will get the style :</p>

        <style jsx>
          {`
            p {
              color: red;
            }
          `}
        </style>
      </div>
    );
  }
}
