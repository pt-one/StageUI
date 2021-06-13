/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="MoreHorizontalIcon/Fill/more-horizontal">
          <path
            id="MoreHorizontalMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 12C3 10.896 3.896 10 5 10C6.104 10 7 10.896 7 12C7 13.104 6.104 14 5 14C3.896 14 3 13.104 3 12ZM12 10C10.896 10 10 10.896 10 12C10 13.104 10.896 14 12 14C13.104 14 14 13.104 14 12C14 10.896 13.104 10 12 10ZM19 10C17.896 10 17 10.896 17 12C17 13.104 17.896 14 19 14C20.104 14 21 13.104 21 12C21 10.896 20.104 10 19 10Z"
          />
          <mask
            id="MoreHorizontalmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="10"
            width="18"
            height="4"
          >
            <path
              id="MoreHorizontalMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 12C3 10.896 3.896 10 5 10C6.104 10 7 10.896 7 12C7 13.104 6.104 14 5 14C3.896 14 3 13.104 3 12ZM12 10C10.896 10 10 10.896 10 12C10 13.104 10.896 14 12 14C13.104 14 14 13.104 14 12C14 10.896 13.104 10 12 10ZM19 10C17.896 10 17 10.896 17 12C17 13.104 17.896 14 19 14C20.104 14 21 13.104 21 12C21 10.896 20.104 10 19 10Z"
            />
          </mask>
          <g mask="url(#MoreHorizontalmask0)">
            <g id="MoreHorizontal&#MoreHorizontal240;&#MoreHorizontal159;&#MoreHorizontal142;&#MoreHorizontal168; Color">
              <rect id="MoreHorizontalBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="MoreHorizontal-oIcon/Outline/more-horizontal">
          <path
            id="MoreHorizontal-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 12C3 10.896 3.896 10 5 10C6.104 10 7 10.896 7 12C7 13.104 6.104 14 5 14C3.896 14 3 13.104 3 12ZM12 10C10.896 10 10 10.896 10 12C10 13.104 10.896 14 12 14C13.104 14 14 13.104 14 12C14 10.896 13.104 10 12 10ZM19 10C17.896 10 17 10.896 17 12C17 13.104 17.896 14 19 14C20.104 14 21 13.104 21 12C21 10.896 20.104 10 19 10Z"
          />
          <mask
            id="MoreHorizontal-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="10"
            width="18"
            height="4"
          >
            <path
              id="MoreHorizontal-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3 12C3 10.896 3.896 10 5 10C6.104 10 7 10.896 7 12C7 13.104 6.104 14 5 14C3.896 14 3 13.104 3 12ZM12 10C10.896 10 10 10.896 10 12C10 13.104 10.896 14 12 14C13.104 14 14 13.104 14 12C14 10.896 13.104 10 12 10ZM19 10C17.896 10 17 10.896 17 12C17 13.104 17.896 14 19 14C20.104 14 21 13.104 21 12C21 10.896 20.104 10 19 10Z"
            />
          </mask>
          <g mask="url(#MoreHorizontal-omask0)">
            <g id="MoreHorizontal-o&#MoreHorizontal-o240;&#MoreHorizontal-o159;&#MoreHorizontal-o142;&#MoreHorizontal-o168; Color">
              <rect id="MoreHorizontal-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
