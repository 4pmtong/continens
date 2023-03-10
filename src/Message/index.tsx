import { Transition } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Message, { MessageType } from './message';

export interface MessageApi {
  info: (text: string, title?: string) => void;
  success: (text: string, title?: string) => void;
  warning: (text: string, title?: string) => void;
  error: (text: string, title?: string) => void;
}

export interface Notice {
  text: string;
  key: string;
  type: MessageType;
  title?: string;
}

let seed = 0;
const now = Date.now();
const getUuid = (): string => {
  const id = seed;
  seed += 1;
  return `MESSAGE_${now}_${id}`;
};

let add: (notice: Notice) => void;

export const MessageContainer = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [show, setShow] = useState<boolean>(true);

  const timeout = 3 * 1000;
  const maxCount = 10;

  const remove = (notice: Notice) => {
    const { key } = notice;

    setNotices((prevNotices) =>
      prevNotices.filter(({ key: itemKey }) => key !== itemKey),
    );
  };

  add = (notice: Notice) => {
    setNotices((prevNotices) => [...prevNotices, notice]);
    setShow(true);

    setTimeout(() => {
      remove(notice);
    }, timeout);
  };

  useEffect(() => {
    if (notices.length > maxCount) {
      const [firstNotice] = notices;
      remove(firstNotice);
    }
  }, [notices]);

  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-50"
    >
      {/* Global notification live region, render this permanently at the end of the document */}
      <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
        <Transition show={show} unmount={false}>
          {notices.map(({ text, key, type, title }) => (
            <Transition.Child
              key={key}
              enter="transform ease-out duration-300 transition"
              enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
              enterTo="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              className="mb-1"
            >
              <Message type={type} text={text} title={title} />
            </Transition.Child>
          ))}
          {/* keep transition no to be set to hidden */}
          <Transition.Child key="always-visible">
            <div></div>
          </Transition.Child>
        </Transition>
      </div>
    </div>
  );
};

// init container
let el = document.querySelector('#message-wrapper');
if (!el) {
  el = document.createElement('div');
  el.className = 'message-wrapper';
  el.id = 'message-wrapper';
  document.body.append(el);
}

ReactDOM.render(<MessageContainer />, el);

const messageApi: MessageApi = {
  info: (text, title) => {
    add({
      text,
      title,
      key: getUuid(),
      type: 'info',
    });
  },
  success: (text, title) => {
    add({
      text,
      title,
      key: getUuid(),
      type: 'success',
    });
  },
  warning: (text, title) => {
    add({
      text,
      title,
      key: getUuid(),
      type: 'warning',
    });
  },
  error: (text, title) => {
    add({
      text,
      title,
      key: getUuid(),
      type: 'danger',
    });
  },
};

export default messageApi;
