import React, { ReactElement, type FC } from 'react';

export type MessageType = 'info' | 'success' | 'danger' | 'warning';

export interface MessageProps {
  text: string;
  type: MessageType;
  title?: string;
}

const Message: FC<MessageProps> = (props: MessageProps) => {
  const { text, title, type } = props;

  const renderIcon = (messageType: MessageType): ReactElement => {
    let messageIcon: string;
    let fillColor: string;

    switch (messageType) {
      case 'success':
        // messageIcon = faCircleCheck;
        messageIcon = 'check-circle';
        fillColor = 'text-green-400';
        break;
      case 'danger':
        // messageIcon = faCircleXmark;
        messageIcon = 'x-circle';
        fillColor = 'text-red-400';
        break;
      case 'warning':
        // messageIcon = faTriangleExclamation;
        messageIcon = 'exclamation-triangle';
        fillColor = 'text-yellow-400';
        break;
      case 'info':
        // messageIcon = faCircleInfo;
        messageIcon = 'info-circle';
        fillColor = 'text-sky-400';
        break;
      default:
        // messageIcon = faCircleInfo;
        messageIcon = 'info-circle';
        fillColor = 'text-sky-400';
        break;
    }

    // return <FontAwesomeIcon icon={messageIcon} className={`fa-regular ${fillColor}`} />
    return <i className={`bi bi-${messageIcon} ${fillColor}`}></i>;
  };

  return (
    <div className="pointer-events-autow w-fit max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
      {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
      <div className="p-4 w-80">
        <div className="flex items-start">
          <div className="">{renderIcon(type)}</div>
          <div className="ml-3 flex-1 pt-0.5">
            {title && (
              <p className="text-sm font-medium text-gray-900 mb-1">{title}</p>
            )}

            <p className="text-sm text-gray-500">{text}</p>
          </div>
          <div className="ml-4 flex flex-shrink-0">
            <button
              type="button"
              className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => {}}
            >
              <span className="sr-only">Close</span>
              {/* <XMarkIcon className="h-5 w-5" aria-hidden="true" /> */}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
