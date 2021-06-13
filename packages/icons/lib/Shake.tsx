/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="ShakeIcon/Fill/shake">
          <path
            id="ShakeMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 7.1422C12.679 7.0592 12.347 7.0002 12 7.0002C11.653 7.0002 11.321 7.0592 11 7.1422V3.0002C11 2.4472 11.448 2.0002 12 2.0002C12.552 2.0002 13 2.4472 13 3.0002V7.1422ZM5.49951 18.0002C5.27151 18.0002 5.04351 17.9232 4.85551 17.7652C2.69151 15.9432 1.49951 13.5412 1.49951 11.0002C1.49951 8.4592 2.69151 6.0572 4.85551 4.2352C5.27751 3.8782 5.90851 3.9332 6.26551 4.3562C6.62051 4.7782 6.56651 5.4092 6.14451 5.7652C4.43851 7.2002 3.49951 9.0602 3.49951 11.0002C3.49951 12.9402 4.43851 14.8002 6.14451 16.2352C6.56651 16.5912 6.62051 17.2222 6.26551 17.6442C6.06751 17.8792 5.78451 18.0002 5.49951 18.0002ZM12 12.0002C11.449 12.0002 11 11.5522 11 11.0002C11 10.4482 11.449 10.0002 12 10.0002C12.551 10.0002 13 10.4482 13 11.0002C13 11.5522 12.551 12.0002 12 12.0002ZM12 15.0002C11.653 15.0002 11.321 14.9412 11 14.8582V20.0002C11 20.5532 11.448 21.0002 12 21.0002C12.552 21.0002 13 20.5532 13 20.0002V14.8582C12.679 14.9412 12.347 15.0002 12 15.0002ZM15.2345 15.6452C15.4335 15.8792 15.7155 16.0002 16.0005 16.0002C16.2285 16.0002 16.4565 15.9232 16.6445 15.7652C18.1635 14.4852 19.0005 12.7932 19.0005 11.0002C19.0005 9.2072 18.1635 7.5152 16.6445 6.2352C16.2225 5.8792 15.5905 5.9342 15.2345 6.3552C14.8795 6.7782 14.9335 7.4092 15.3555 7.7652C16.4165 8.6572 17.0005 9.8072 17.0005 11.0002C17.0005 12.1932 16.4165 13.3432 15.3555 14.2352C14.9335 14.5912 14.8795 15.2222 15.2345 15.6452ZM7.99951 16.0002C7.77151 16.0002 7.54351 15.9232 7.35551 15.7652C5.83651 14.4852 4.99951 12.7932 4.99951 11.0002C4.99951 9.2072 5.83651 7.5152 7.35551 6.2352C7.77751 5.8792 8.40851 5.9332 8.76551 6.3552C9.12051 6.7782 9.06651 7.4092 8.64451 7.7652C7.58351 8.6572 6.99951 9.8072 6.99951 11.0002C6.99951 12.1932 7.58351 13.3432 8.64451 14.2352C9.06651 14.5912 9.12051 15.2222 8.76551 15.6452C8.56751 15.8792 8.28451 16.0002 7.99951 16.0002ZM17.7345 17.6442C17.9325 17.8792 18.2155 18.0002 18.5005 18.0002C18.7285 18.0002 18.9565 17.9232 19.1445 17.7652C21.3085 15.9432 22.5005 13.5412 22.5005 11.0002C22.5005 8.4592 21.3085 6.0572 19.1445 4.2352C18.7215 3.8792 18.0905 3.9332 17.7345 4.3562C17.3795 4.7782 17.4335 5.4092 17.8555 5.7652C19.5615 7.2002 20.5005 9.0602 20.5005 11.0002C20.5005 12.9402 19.5615 14.8002 17.8555 16.2352C17.4335 16.5912 17.3795 17.2222 17.7345 17.6442Z"
          />
          <mask
            id="Shakemask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="1"
            y="2"
            width="22"
            height="20"
          >
            <path
              id="ShakeMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 7.1422C12.679 7.0592 12.347 7.0002 12 7.0002C11.653 7.0002 11.321 7.0592 11 7.1422V3.0002C11 2.4472 11.448 2.0002 12 2.0002C12.552 2.0002 13 2.4472 13 3.0002V7.1422ZM5.49951 18.0002C5.27151 18.0002 5.04351 17.9232 4.85551 17.7652C2.69151 15.9432 1.49951 13.5412 1.49951 11.0002C1.49951 8.4592 2.69151 6.0572 4.85551 4.2352C5.27751 3.8782 5.90851 3.9332 6.26551 4.3562C6.62051 4.7782 6.56651 5.4092 6.14451 5.7652C4.43851 7.2002 3.49951 9.0602 3.49951 11.0002C3.49951 12.9402 4.43851 14.8002 6.14451 16.2352C6.56651 16.5912 6.62051 17.2222 6.26551 17.6442C6.06751 17.8792 5.78451 18.0002 5.49951 18.0002ZM12 12.0002C11.449 12.0002 11 11.5522 11 11.0002C11 10.4482 11.449 10.0002 12 10.0002C12.551 10.0002 13 10.4482 13 11.0002C13 11.5522 12.551 12.0002 12 12.0002ZM12 15.0002C11.653 15.0002 11.321 14.9412 11 14.8582V20.0002C11 20.5532 11.448 21.0002 12 21.0002C12.552 21.0002 13 20.5532 13 20.0002V14.8582C12.679 14.9412 12.347 15.0002 12 15.0002ZM15.2345 15.6452C15.4335 15.8792 15.7155 16.0002 16.0005 16.0002C16.2285 16.0002 16.4565 15.9232 16.6445 15.7652C18.1635 14.4852 19.0005 12.7932 19.0005 11.0002C19.0005 9.2072 18.1635 7.5152 16.6445 6.2352C16.2225 5.8792 15.5905 5.9342 15.2345 6.3552C14.8795 6.7782 14.9335 7.4092 15.3555 7.7652C16.4165 8.6572 17.0005 9.8072 17.0005 11.0002C17.0005 12.1932 16.4165 13.3432 15.3555 14.2352C14.9335 14.5912 14.8795 15.2222 15.2345 15.6452ZM7.99951 16.0002C7.77151 16.0002 7.54351 15.9232 7.35551 15.7652C5.83651 14.4852 4.99951 12.7932 4.99951 11.0002C4.99951 9.2072 5.83651 7.5152 7.35551 6.2352C7.77751 5.8792 8.40851 5.9332 8.76551 6.3552C9.12051 6.7782 9.06651 7.4092 8.64451 7.7652C7.58351 8.6572 6.99951 9.8072 6.99951 11.0002C6.99951 12.1932 7.58351 13.3432 8.64451 14.2352C9.06651 14.5912 9.12051 15.2222 8.76551 15.6452C8.56751 15.8792 8.28451 16.0002 7.99951 16.0002ZM17.7345 17.6442C17.9325 17.8792 18.2155 18.0002 18.5005 18.0002C18.7285 18.0002 18.9565 17.9232 19.1445 17.7652C21.3085 15.9432 22.5005 13.5412 22.5005 11.0002C22.5005 8.4592 21.3085 6.0572 19.1445 4.2352C18.7215 3.8792 18.0905 3.9332 17.7345 4.3562C17.3795 4.7782 17.4335 5.4092 17.8555 5.7652C19.5615 7.2002 20.5005 9.0602 20.5005 11.0002C20.5005 12.9402 19.5615 14.8002 17.8555 16.2352C17.4335 16.5912 17.3795 17.2222 17.7345 17.6442Z"
            />
          </mask>
          <g mask="url(#Shakemask0)">
            <g id="Shake&#Shake240;&#Shake159;&#Shake142;&#Shake168; Color">
              <rect id="ShakeBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Shake-oIcon/Outline/shake">
          <path
            id="Shake-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 7.1422C12.679 7.0592 12.347 7.0002 12 7.0002C11.653 7.0002 11.321 7.0592 11 7.1422V3.0002C11 2.4472 11.448 2.0002 12 2.0002C12.552 2.0002 13 2.4472 13 3.0002V7.1422ZM5.49951 18.0002C5.27151 18.0002 5.04351 17.9232 4.85551 17.7652C2.69151 15.9432 1.49951 13.5412 1.49951 11.0002C1.49951 8.4592 2.69151 6.0572 4.85551 4.2352C5.27751 3.8782 5.90851 3.9332 6.26551 4.3562C6.62051 4.7782 6.56651 5.4092 6.14451 5.7652C4.43851 7.2002 3.49951 9.0602 3.49951 11.0002C3.49951 12.9402 4.43851 14.8002 6.14451 16.2352C6.56651 16.5912 6.62051 17.2222 6.26551 17.6442C6.06751 17.8792 5.78451 18.0002 5.49951 18.0002ZM12 12.0002C11.449 12.0002 11 11.5522 11 11.0002C11 10.4482 11.449 10.0002 12 10.0002C12.551 10.0002 13 10.4482 13 11.0002C13 11.5522 12.551 12.0002 12 12.0002ZM12 15.0002C11.653 15.0002 11.321 14.9412 11 14.8582V20.0002C11 20.5532 11.448 21.0002 12 21.0002C12.552 21.0002 13 20.5532 13 20.0002V14.8582C12.679 14.9412 12.347 15.0002 12 15.0002ZM15.2345 15.6452C15.4335 15.8792 15.7155 16.0002 16.0005 16.0002C16.2285 16.0002 16.4565 15.9232 16.6445 15.7652C18.1635 14.4852 19.0005 12.7932 19.0005 11.0002C19.0005 9.2072 18.1635 7.5152 16.6445 6.2352C16.2225 5.8792 15.5905 5.9342 15.2345 6.3552C14.8795 6.7782 14.9335 7.4092 15.3555 7.7652C16.4165 8.6572 17.0005 9.8072 17.0005 11.0002C17.0005 12.1932 16.4165 13.3432 15.3555 14.2352C14.9335 14.5912 14.8795 15.2222 15.2345 15.6452ZM7.99951 16.0002C7.77151 16.0002 7.54351 15.9232 7.35551 15.7652C5.83651 14.4852 4.99951 12.7932 4.99951 11.0002C4.99951 9.2072 5.83651 7.5152 7.35551 6.2352C7.77751 5.8792 8.40851 5.9332 8.76551 6.3552C9.12051 6.7782 9.06651 7.4092 8.64451 7.7652C7.58351 8.6572 6.99951 9.8072 6.99951 11.0002C6.99951 12.1932 7.58351 13.3432 8.64451 14.2352C9.06651 14.5912 9.12051 15.2222 8.76551 15.6452C8.56751 15.8792 8.28451 16.0002 7.99951 16.0002ZM17.7345 17.6442C17.9325 17.8792 18.2155 18.0002 18.5005 18.0002C18.7285 18.0002 18.9565 17.9232 19.1445 17.7652C21.3085 15.9432 22.5005 13.5412 22.5005 11.0002C22.5005 8.4592 21.3085 6.0572 19.1445 4.2352C18.7215 3.8792 18.0905 3.9332 17.7345 4.3562C17.3795 4.7782 17.4335 5.4092 17.8555 5.7652C19.5615 7.2002 20.5005 9.0602 20.5005 11.0002C20.5005 12.9402 19.5615 14.8002 17.8555 16.2352C17.4335 16.5912 17.3795 17.2222 17.7345 17.6442Z"
          />
          <mask
            id="Shake-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="1"
            y="2"
            width="22"
            height="20"
          >
            <path
              id="Shake-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 7.1422C12.679 7.0592 12.347 7.0002 12 7.0002C11.653 7.0002 11.321 7.0592 11 7.1422V3.0002C11 2.4472 11.448 2.0002 12 2.0002C12.552 2.0002 13 2.4472 13 3.0002V7.1422ZM5.49951 18.0002C5.27151 18.0002 5.04351 17.9232 4.85551 17.7652C2.69151 15.9432 1.49951 13.5412 1.49951 11.0002C1.49951 8.4592 2.69151 6.0572 4.85551 4.2352C5.27751 3.8782 5.90851 3.9332 6.26551 4.3562C6.62051 4.7782 6.56651 5.4092 6.14451 5.7652C4.43851 7.2002 3.49951 9.0602 3.49951 11.0002C3.49951 12.9402 4.43851 14.8002 6.14451 16.2352C6.56651 16.5912 6.62051 17.2222 6.26551 17.6442C6.06751 17.8792 5.78451 18.0002 5.49951 18.0002ZM12 12.0002C11.449 12.0002 11 11.5522 11 11.0002C11 10.4482 11.449 10.0002 12 10.0002C12.551 10.0002 13 10.4482 13 11.0002C13 11.5522 12.551 12.0002 12 12.0002ZM12 15.0002C11.653 15.0002 11.321 14.9412 11 14.8582V20.0002C11 20.5532 11.448 21.0002 12 21.0002C12.552 21.0002 13 20.5532 13 20.0002V14.8582C12.679 14.9412 12.347 15.0002 12 15.0002ZM15.2345 15.6452C15.4335 15.8792 15.7155 16.0002 16.0005 16.0002C16.2285 16.0002 16.4565 15.9232 16.6445 15.7652C18.1635 14.4852 19.0005 12.7932 19.0005 11.0002C19.0005 9.2072 18.1635 7.5152 16.6445 6.2352C16.2225 5.8792 15.5905 5.9342 15.2345 6.3552C14.8795 6.7782 14.9335 7.4092 15.3555 7.7652C16.4165 8.6572 17.0005 9.8072 17.0005 11.0002C17.0005 12.1932 16.4165 13.3432 15.3555 14.2352C14.9335 14.5912 14.8795 15.2222 15.2345 15.6452ZM7.99951 16.0002C7.77151 16.0002 7.54351 15.9232 7.35551 15.7652C5.83651 14.4852 4.99951 12.7932 4.99951 11.0002C4.99951 9.2072 5.83651 7.5152 7.35551 6.2352C7.77751 5.8792 8.40851 5.9332 8.76551 6.3552C9.12051 6.7782 9.06651 7.4092 8.64451 7.7652C7.58351 8.6572 6.99951 9.8072 6.99951 11.0002C6.99951 12.1932 7.58351 13.3432 8.64451 14.2352C9.06651 14.5912 9.12051 15.2222 8.76551 15.6452C8.56751 15.8792 8.28451 16.0002 7.99951 16.0002ZM17.7345 17.6442C17.9325 17.8792 18.2155 18.0002 18.5005 18.0002C18.7285 18.0002 18.9565 17.9232 19.1445 17.7652C21.3085 15.9432 22.5005 13.5412 22.5005 11.0002C22.5005 8.4592 21.3085 6.0572 19.1445 4.2352C18.7215 3.8792 18.0905 3.9332 17.7345 4.3562C17.3795 4.7782 17.4335 5.4092 17.8555 5.7652C19.5615 7.2002 20.5005 9.0602 20.5005 11.0002C20.5005 12.9402 19.5615 14.8002 17.8555 16.2352C17.4335 16.5912 17.3795 17.2222 17.7345 17.6442Z"
            />
          </mask>
          <g mask="url(#Shake-omask0)">
            <g id="Shake-o&#Shake-o240;&#Shake-o159;&#Shake-o142;&#Shake-o168; Color">
              <rect id="Shake-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
