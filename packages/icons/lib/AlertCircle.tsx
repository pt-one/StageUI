/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="AlertCircleIcon/Fill/alert-circle">
          <path
            id="AlertCircleMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 13C13 13.552 12.552 14 12 14C11.448 14 11 13.552 11 13V8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8V13ZM12 17C11.448 17 11 16.552 11 16C11 15.448 11.448 15 12 15C12.552 15 13 15.448 13 16C13 16.552 12.552 17 12 17ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
          />
          <mask
            id="AlertCirclemask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="20"
            height="20"
          >
            <path
              id="AlertCircleMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 13C13 13.552 12.552 14 12 14C11.448 14 11 13.552 11 13V8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8V13ZM12 17C11.448 17 11 16.552 11 16C11 15.448 11.448 15 12 15C12.552 15 13 15.448 13 16C13 16.552 12.552 17 12 17ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
            />
          </mask>
          <g mask="url(#AlertCirclemask0)">
            <g id="AlertCircle&#AlertCircle240;&#AlertCircle159;&#AlertCircle142;&#AlertCircle168; Color">
              <rect id="AlertCircleBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="AlertCircle-oIcon/Outline/alert-circle">
          <path
            id="AlertCircle-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8V13C13 13.552 12.552 14 12 14C11.448 14 11 13.552 11 13V8ZM11 16C11 15.448 11.448 15 12 15C12.552 15 13 15.448 13 16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
          />
          <mask
            id="AlertCircle-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="20"
            height="20"
          >
            <path
              id="AlertCircle-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 8C11 7.448 11.448 7 12 7C12.552 7 13 7.448 13 8V13C13 13.552 12.552 14 12 14C11.448 14 11 13.552 11 13V8ZM11 16C11 15.448 11.448 15 12 15C12.552 15 13 15.448 13 16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2Z"
            />
          </mask>
          <g mask="url(#AlertCircle-omask0)">
            <g id="AlertCircle-o&#AlertCircle-o240;&#AlertCircle-o159;&#AlertCircle-o142;&#AlertCircle-o168; Color">
              <rect id="AlertCircle-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
