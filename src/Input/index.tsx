import React, { type FC } from 'react';

export interface InputProps {
  type: 'text' | 'email' | 'password';
  label: string;
  name: string;
  placeholder?: string;
  areaDescription?: string;
  status?: 'valid' | 'invalid';
}

const Input: FC<InputProps> = (props: InputProps) => {
  return (
    <div>
      {!!props.label && (
        <label
          htmlFor={props.name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {props.label}
        </label>
      )}
      <div className="mt-2">
        <input
          type={props.type}
          name={props.name}
          id={props.name}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={props.placeholder}
          aria-describedby={props.areaDescription}
        />
      </div>
      {!!props.areaDescription && (
        <p className="mt-2 text-sm text-gray-500">{props.areaDescription}</p>
      )}
    </div>
  );
};

export default Input;
