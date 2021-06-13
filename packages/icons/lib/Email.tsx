/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="EmailIcon/Fill/email">
          <path
            id="EmailMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.0063 6L12.5013 10.468C12.1943 10.643 11.8183 10.643 11.5113 10.468L5.00635 6H19.0063ZM19.0063 4H5.00635C3.35235 4 2.00635 5.346 2.00635 7V17C2.00635 18.654 3.35235 20 5.00635 20H19.0063C20.6603 20 22.0063 18.654 22.0063 17V7C22.0063 5.346 20.6603 4 19.0063 4Z"
          />
          <mask
            id="Emailmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="4"
            width="21"
            height="16"
          >
            <path
              id="EmailMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.0063 6L12.5013 10.468C12.1943 10.643 11.8183 10.643 11.5113 10.468L5.00635 6H19.0063ZM19.0063 4H5.00635C3.35235 4 2.00635 5.346 2.00635 7V17C2.00635 18.654 3.35235 20 5.00635 20H19.0063C20.6603 20 22.0063 18.654 22.0063 17V7C22.0063 5.346 20.6603 4 19.0063 4Z"
            />
          </mask>
          <g mask="url(#Emailmask0)">
            <g id="Email&#Email240;&#Email159;&#Email142;&#Email168; Color">
              <rect id="EmailBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Email-oIcon/Outline/email">
          <path
            id="Email-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19 18H5C4.449 18 4 17.552 4 17V7.25L11.4 12.8C11.578 12.934 11.789 13 12 13C12.211 13 12.422 12.934 12.6 12.8L20 7.25V17C20 17.552 19.551 18 19 18ZM18.333 6L12 10.75L5.667 6H18.333ZM19 4H5C3.346 4 2 5.346 2 7V17C2 18.654 3.346 20 5 20H19C20.654 20 22 18.654 22 17V7C22 5.346 20.654 4 19 4Z"
          />
          <mask
            id="Email-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="4"
            width="20"
            height="16"
          >
            <path
              id="Email-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 18H5C4.449 18 4 17.552 4 17V7.25L11.4 12.8C11.578 12.934 11.789 13 12 13C12.211 13 12.422 12.934 12.6 12.8L20 7.25V17C20 17.552 19.551 18 19 18ZM18.333 6L12 10.75L5.667 6H18.333ZM19 4H5C3.346 4 2 5.346 2 7V17C2 18.654 3.346 20 5 20H19C20.654 20 22 18.654 22 17V7C22 5.346 20.654 4 19 4Z"
            />
          </mask>
          <g mask="url(#Email-omask0)">
            <g id="Email-o&#Email-o240;&#Email-o159;&#Email-o142;&#Email-o168; Color">
              <rect id="Email-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
