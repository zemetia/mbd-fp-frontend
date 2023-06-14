import clsx from 'clsx';
import * as React from 'react';

import Typography, {
  TypographyColor,
} from '@/components/typography/Typography';
import clsxm from '@/lib/clsxm';

enum NonFormCheckboxSize {
  'sm',
  'base',
}

export type NonFormCheckboxProps = {
  /** Input label */
  label: string;
  name: string;
  /** Add value only if you're using grouped NonFormcheckbox, omit value if using a single NonFormcheckbox */
  value?: string | number;
  /** Small text below input, useful for additional information */
  helperText?: string;
  /** Disables the input and shows defaultValue (can be set from React Hook Form) */
  readOnly?: boolean;
  /** Disable error style (not disabling error validation) */
  hideError?: boolean;
  /** Manual validation using RHF, it is encouraged to use yup resolver instead */
  size?: keyof typeof NonFormCheckboxSize;
  color?: keyof typeof TypographyColor;
} & Omit<React.ComponentPropsWithoutRef<'input'>, 'size'>;

export default function NonFormCheckbox({
  label,
  name,
  value,
  placeholder = '',
  helperText,
  readOnly = false,
  hideError = false,
  size = 'base',
  color = 'primary',

  ...rest
}: NonFormCheckboxProps) {
  return (
    <div>
      <div className='flex items-start gap-2'>
        <input
          {...rest}
          type='checkbox'
          name={name}
          id={`${name}_${value}`}
          value={value}
          disabled={readOnly}
          className={clsxm(
            // add top margin so the checkbox align with the text
            'mt-[0.25em]',
            'shrink-0',
            'border-typo rounded-sm border-2 focus:ring-0',
            'checked:bg-lightBlue-400 checked:hover:bg-lightBlue-600 checked:focus:bg-lightBlue-400 checked:active:bg-lightBlue-700',
            readOnly &&
              'cursor-not-allowed bg-gray-100 disabled:checked:bg-lightBlue-300',
            size === 'sm' && 'h-3.5 w-3.5'
          )}
          placeholder={placeholder}
          aria-describedby={name}
        />
        <Typography
          color={color}
          className={clsx(readOnly && 'cursor-not-allowed')}
          as='label'
          htmlFor={`${name}_${value}`}
          variant={clsx({ b2: size === 'base', b3: size === 'sm' })}
        >
          {label}
        </Typography>
      </div>
      <div className='mt-1'>
        {!!hideError && helperText && <p>{helperText}</p>}
      </div>
    </div>
  );
}
