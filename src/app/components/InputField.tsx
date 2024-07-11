import React from 'react';


export type InputFieldProps = {
  id: string;
  name: string;
  type: string;
  label: string;
  placeholder: string;
};

export const InputField: React.FC<InputFieldProps> = ({
  id, name, type, label, placeholder
}) => {
  return (
    <div className='flex flex-col space-y-1'>
      <label htmlFor={id} className='font-semibold text-gray-500'>{label}</label>
      <input id={id} type={type} name={name} placeholder={placeholder}
        className='rounded-lg border-gray-600 bg-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent' />
    </div>
  );
};
