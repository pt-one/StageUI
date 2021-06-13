/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="CornerLeftUpIcon/Fill/corner-left-up">
          <path
            id="CornerLeftUpMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 17H13C12.449 17 12 16.551 12 16V7.081L15.375 9.781C15.56 9.928 15.78 10 16 10C16.292 10 16.583 9.872 16.781 9.625C17.126 9.193 17.056 8.564 16.625 8.219L11.625 4.219C11.259 3.927 10.741 3.927 10.375 4.219L5.37503 8.219C4.94403 8.564 4.87403 9.193 5.21903 9.625C5.56303 10.056 6.19403 10.125 6.62503 9.781L10 7.081V16C10 17.654 11.346 19 13 19H18C18.552 19 19 18.552 19 18C19 17.448 18.552 17 18 17Z"
          />
          <mask
            id="CornerLeftUpmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="4"
            y="4"
            width="15"
            height="15"
          >
            <path
              id="CornerLeftUpMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 17H13C12.449 17 12 16.551 12 16V7.081L15.375 9.781C15.56 9.928 15.78 10 16 10C16.292 10 16.583 9.872 16.781 9.625C17.126 9.193 17.056 8.564 16.625 8.219L11.625 4.219C11.259 3.927 10.741 3.927 10.375 4.219L5.37503 8.219C4.94403 8.564 4.87403 9.193 5.21903 9.625C5.56303 10.056 6.19403 10.125 6.62503 9.781L10 7.081V16C10 17.654 11.346 19 13 19H18C18.552 19 19 18.552 19 18C19 17.448 18.552 17 18 17Z"
            />
          </mask>
          <g mask="url(#CornerLeftUpmask0)">
            <g id="CornerLeftUp&#CornerLeftUp240;&#CornerLeftUp159;&#CornerLeftUp142;&#CornerLeftUp168; Color">
              <rect id="CornerLeftUpBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="CornerLeftUp-oIcon/Outline/corner-left-up">
          <path
            id="CornerLeftUp-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 17H13C12.449 17 12 16.551 12 16V7.081L15.375 9.781C15.56 9.928 15.78 10 16 10C16.292 10 16.583 9.872 16.781 9.625C17.126 9.193 17.056 8.564 16.625 8.219L11.625 4.219C11.259 3.927 10.741 3.927 10.375 4.219L5.37503 8.219C4.94403 8.564 4.87403 9.193 5.21903 9.625C5.56303 10.056 6.19403 10.125 6.62503 9.781L10 7.081V16C10 17.654 11.346 19 13 19H18C18.552 19 19 18.552 19 18C19 17.448 18.552 17 18 17Z"
          />
          <mask
            id="CornerLeftUp-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="4"
            y="4"
            width="15"
            height="15"
          >
            <path
              id="CornerLeftUp-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 17H13C12.449 17 12 16.551 12 16V7.081L15.375 9.781C15.56 9.928 15.78 10 16 10C16.292 10 16.583 9.872 16.781 9.625C17.126 9.193 17.056 8.564 16.625 8.219L11.625 4.219C11.259 3.927 10.741 3.927 10.375 4.219L5.37503 8.219C4.94403 8.564 4.87403 9.193 5.21903 9.625C5.56303 10.056 6.19403 10.125 6.62503 9.781L10 7.081V16C10 17.654 11.346 19 13 19H18C18.552 19 19 18.552 19 18C19 17.448 18.552 17 18 17Z"
            />
          </mask>
          <g mask="url(#CornerLeftUp-omask0)">
            <g id="CornerLeftUp-o&#CornerLeftUp-o240;&#CornerLeftUp-o159;&#CornerLeftUp-o142;&#CornerLeftUp-o168; Color">
              <rect id="CornerLeftUp-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
