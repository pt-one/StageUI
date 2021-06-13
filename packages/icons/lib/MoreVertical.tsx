/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="MoreVerticalIcon/Fill/more-vertical">
          <path
            id="MoreVerticalMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 7C13.104 7 14 6.104 14 5C14 3.896 13.104 3 12 3C10.896 3 10 3.896 10 5C10 6.104 10.896 7 12 7ZM12 10C10.896 10 10 10.896 10 12C10 13.104 10.896 14 12 14C13.104 14 14 13.104 14 12C14 10.896 13.104 10 12 10ZM10 19C10 17.896 10.896 17 12 17C13.104 17 14 17.896 14 19C14 20.104 13.104 21 12 21C10.896 21 10 20.104 10 19Z"
          />
          <mask
            id="MoreVerticalmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="10"
            y="3"
            width="4"
            height="18"
          >
            <path
              id="MoreVerticalMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 7C13.104 7 14 6.104 14 5C14 3.896 13.104 3 12 3C10.896 3 10 3.896 10 5C10 6.104 10.896 7 12 7ZM12 10C10.896 10 10 10.896 10 12C10 13.104 10.896 14 12 14C13.104 14 14 13.104 14 12C14 10.896 13.104 10 12 10ZM10 19C10 17.896 10.896 17 12 17C13.104 17 14 17.896 14 19C14 20.104 13.104 21 12 21C10.896 21 10 20.104 10 19Z"
            />
          </mask>
          <g mask="url(#MoreVerticalmask0)" />
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="MoreVertical-oIcon/Outline/more-vertical">
          <path
            id="MoreVertical-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 7C13.104 7 14 6.104 14 5C14 3.896 13.104 3 12 3C10.896 3 10 3.896 10 5C10 6.104 10.896 7 12 7ZM12 10C10.896 10 10 10.896 10 12C10 13.104 10.896 14 12 14C13.104 14 14 13.104 14 12C14 10.896 13.104 10 12 10ZM10 19C10 17.896 10.896 17 12 17C13.104 17 14 17.896 14 19C14 20.104 13.104 21 12 21C10.896 21 10 20.104 10 19Z"
          />
          <mask
            id="MoreVertical-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="10"
            y="3"
            width="4"
            height="18"
          >
            <path
              id="MoreVertical-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 7C13.104 7 14 6.104 14 5C14 3.896 13.104 3 12 3C10.896 3 10 3.896 10 5C10 6.104 10.896 7 12 7ZM12 10C10.896 10 10 10.896 10 12C10 13.104 10.896 14 12 14C13.104 14 14 13.104 14 12C14 10.896 13.104 10 12 10ZM10 19C10 17.896 10.896 17 12 17C13.104 17 14 17.896 14 19C14 20.104 13.104 21 12 21C10.896 21 10 20.104 10 19Z"
            />
          </mask>
          <g mask="url(#MoreVertical-omask0)">
            <g id="MoreVertical-o&#MoreVertical-o240;&#MoreVertical-o159;&#MoreVertical-o142;&#MoreVertical-o168; Color">
              <rect id="MoreVertical-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
