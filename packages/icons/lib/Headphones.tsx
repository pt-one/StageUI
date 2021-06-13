/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="HeadphonesIcon/Fill/headphones">
          <path
            id="HeadphonesMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.486 2 2 6.65 2 12.366V17C2 19.206 3.794 21 6 21C8.206 21 10 19.206 10 17C10 14.794 8.206 13 6 13C5.268 13 4.591 13.212 4 13.557V12.366C4 7.753 7.589 4 12 4C16.411 4 20 7.753 20 12.366V13.557C19.409 13.212 18.732 13 18 13C15.794 13 14 14.794 14 17C14 19.206 15.794 21 18 21C20.206 21 22 19.206 22 17V12.366C22 6.65 17.514 2 12 2Z"
          />
          <mask
            id="Headphonesmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="20"
            height="19"
          >
            <path
              id="HeadphonesMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.486 2 2 6.65 2 12.366V17C2 19.206 3.794 21 6 21C8.206 21 10 19.206 10 17C10 14.794 8.206 13 6 13C5.268 13 4.591 13.212 4 13.557V12.366C4 7.753 7.589 4 12 4C16.411 4 20 7.753 20 12.366V13.557C19.409 13.212 18.732 13 18 13C15.794 13 14 14.794 14 17C14 19.206 15.794 21 18 21C20.206 21 22 19.206 22 17V12.366C22 6.65 17.514 2 12 2Z"
            />
          </mask>
          <g mask="url(#Headphonesmask0)">
            <g id="Headphones&#Headphones240;&#Headphones159;&#Headphones142;&#Headphones168; Color">
              <rect id="HeadphonesBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Headphones-oIcon/Outline/headphones">
          <path
            id="Headphones-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 19C16.897 19 16 18.103 16 17C16 15.897 16.897 15 18 15C19.103 15 20 15.897 20 17C20 18.103 19.103 19 18 19ZM6 15C7.103 15 8 15.897 8 17C8 18.103 7.103 19 6 19C4.897 19 4 18.103 4 17C4 15.897 4.897 15 6 15ZM12 2C6.486 2 2 6.65 2 12.366V17C2 19.206 3.794 21 6 21C8.206 21 10 19.206 10 17C10 14.794 8.206 13 6 13C5.268 13 4.591 13.212 4 13.557V12.366C4 7.753 7.589 4 12 4C16.411 4 20 7.753 20 12.366V13.557C19.409 13.212 18.732 13 18 13C15.794 13 14 14.794 14 17C14 19.206 15.794 21 18 21C20.206 21 22 19.206 22 17V12.366C22 6.65 17.514 2 12 2Z"
          />
          <mask
            id="Headphones-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="20"
            height="19"
          >
            <path
              id="Headphones-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 19C16.897 19 16 18.103 16 17C16 15.897 16.897 15 18 15C19.103 15 20 15.897 20 17C20 18.103 19.103 19 18 19ZM6 15C7.103 15 8 15.897 8 17C8 18.103 7.103 19 6 19C4.897 19 4 18.103 4 17C4 15.897 4.897 15 6 15ZM12 2C6.486 2 2 6.65 2 12.366V17C2 19.206 3.794 21 6 21C8.206 21 10 19.206 10 17C10 14.794 8.206 13 6 13C5.268 13 4.591 13.212 4 13.557V12.366C4 7.753 7.589 4 12 4C16.411 4 20 7.753 20 12.366V13.557C19.409 13.212 18.732 13 18 13C15.794 13 14 14.794 14 17C14 19.206 15.794 21 18 21C20.206 21 22 19.206 22 17V12.366C22 6.65 17.514 2 12 2Z"
            />
          </mask>
          <g mask="url(#Headphones-omask0)">
            <g id="Headphones-o&#Headphones-o240;&#Headphones-o159;&#Headphones-o142;&#Headphones-o168; Color">
              <rect id="Headphones-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
