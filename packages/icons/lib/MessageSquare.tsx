/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="MessageSquareIcon/Fill/message-square">
          <path
            id="MessageSquareMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 12C15.448 12 15 11.552 15 11C15 10.448 15.448 10 16 10C16.552 10 17 10.448 17 11C17 11.552 16.552 12 16 12ZM12 12C11.448 12 11 11.552 11 11C11 10.448 11.448 10 12 10C12.552 10 13 10.448 13 11C13 11.552 12.552 12 12 12ZM8 12C7.448 12 7 11.552 7 11C7 10.448 7.448 10 8 10C8.552 10 9 10.448 9 11C9 11.552 8.552 12 8 12ZM19 3H5C3.346 3 2 4.346 2 6V21C2 21.36 2.194 21.693 2.507 21.87C2.66 21.957 2.83 22 3 22C3.178 22 3.356 21.953 3.515 21.857L8.039 19.143C8.195 19.049 8.373 19 8.554 19H19C20.654 19 22 17.654 22 16V6C22 4.346 20.654 3 19 3Z"
          />
          <mask
            id="MessageSquaremask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="3"
            width="20"
            height="19"
          >
            <path
              id="MessageSquareMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 12C15.448 12 15 11.552 15 11C15 10.448 15.448 10 16 10C16.552 10 17 10.448 17 11C17 11.552 16.552 12 16 12ZM12 12C11.448 12 11 11.552 11 11C11 10.448 11.448 10 12 10C12.552 10 13 10.448 13 11C13 11.552 12.552 12 12 12ZM8 12C7.448 12 7 11.552 7 11C7 10.448 7.448 10 8 10C8.552 10 9 10.448 9 11C9 11.552 8.552 12 8 12ZM19 3H5C3.346 3 2 4.346 2 6V21C2 21.36 2.194 21.693 2.507 21.87C2.66 21.957 2.83 22 3 22C3.178 22 3.356 21.953 3.515 21.857L8.039 19.143C8.195 19.049 8.373 19 8.554 19H19C20.654 19 22 17.654 22 16V6C22 4.346 20.654 3 19 3Z"
            />
          </mask>
          <g mask="url(#MessageSquaremask0)">
            <g id="MessageSquare&#MessageSquare240;&#MessageSquare159;&#MessageSquare142;&#MessageSquare168; Color">
              <rect id="MessageSquareBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="MessageSquare-oIcon/Outline/message-square">
          <path
            id="MessageSquare-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 10C7 9.448 7.448 9 8 9C8.552 9 9 9.448 9 10C9 10.552 8.552 11 8 11C7.448 11 7 10.552 7 10ZM12 9C11.448 9 11 9.448 11 10C11 10.552 11.448 11 12 11C12.552 11 13 10.552 13 10C13 9.448 12.552 9 12 9ZM16 9C15.448 9 15 9.448 15 10C15 10.552 15.448 11 16 11C16.552 11 17 10.552 17 10C17 9.448 16.552 9 16 9ZM20 15C20 15.551 19.551 16 19 16H8.554C8.011 16 7.477 16.148 7.01 16.428L4 18.234V5C4 4.449 4.449 4 5 4H19C19.551 4 20 4.449 20 5V15ZM19 2H5C3.346 2 2 3.346 2 5V20C2 20.36 2.194 20.693 2.507 20.87C2.66 20.957 2.83 21 3 21C3.178 21 3.356 20.953 3.515 20.857L8.039 18.143C8.195 18.049 8.373 18 8.554 18H19C20.654 18 22 16.654 22 15V5C22 3.346 20.654 2 19 2Z"
          />
          <mask
            id="MessageSquare-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="20"
            height="19"
          >
            <path
              id="MessageSquare-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 10C7 9.448 7.448 9 8 9C8.552 9 9 9.448 9 10C9 10.552 8.552 11 8 11C7.448 11 7 10.552 7 10ZM12 9C11.448 9 11 9.448 11 10C11 10.552 11.448 11 12 11C12.552 11 13 10.552 13 10C13 9.448 12.552 9 12 9ZM16 9C15.448 9 15 9.448 15 10C15 10.552 15.448 11 16 11C16.552 11 17 10.552 17 10C17 9.448 16.552 9 16 9ZM20 15C20 15.551 19.551 16 19 16H8.554C8.011 16 7.477 16.148 7.01 16.428L4 18.234V5C4 4.449 4.449 4 5 4H19C19.551 4 20 4.449 20 5V15ZM19 2H5C3.346 2 2 3.346 2 5V20C2 20.36 2.194 20.693 2.507 20.87C2.66 20.957 2.83 21 3 21C3.178 21 3.356 20.953 3.515 20.857L8.039 18.143C8.195 18.049 8.373 18 8.554 18H19C20.654 18 22 16.654 22 15V5C22 3.346 20.654 2 19 2Z"
            />
          </mask>
          <g mask="url(#MessageSquare-omask0)">
            <g id="MessageSquare-o&#MessageSquare-o240;&#MessageSquare-o159;&#MessageSquare-o142;&#MessageSquare-o168; Color">
              <rect id="MessageSquare-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
