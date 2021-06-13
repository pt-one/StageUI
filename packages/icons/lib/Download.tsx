/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="DownloadIcon/Fill/download">
          <path
            id="DownloadMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.0028 12.0759C11.001 12.0508 11 12.0255 11 12V4C11 3.448 11.447 3 12 3C12.553 3 13 3.448 13 4V11.9998L15.4 10.2C15.842 9.867 16.469 9.958 16.8 10.4C17.132 10.842 17.042 11.469 16.6 11.8L12.6 14.8C12.423 14.933 12.211 15 12 15C11.799 15 11.598 14.939 11.425 14.818L7.425 12.004C6.973 11.686 6.864 11.062 7.182 10.611C7.5 10.159 8.123 10.05 8.575 10.368L11.0028 12.0759ZM6 17V18H18V17C18 16.45 18.45 16 19 16C19.55 16 20 16.45 20 17V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V17C4 16.45 4.45 16 5 16C5.55 16 6 16.45 6 17Z"
          />
          <mask
            id="Downloadmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="4"
            y="3"
            width="16"
            height="17"
          >
            <path
              id="DownloadMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.0028 12.0759C11.001 12.0508 11 12.0255 11 12V4C11 3.448 11.447 3 12 3C12.553 3 13 3.448 13 4V11.9998L15.4 10.2C15.842 9.867 16.469 9.958 16.8 10.4C17.132 10.842 17.042 11.469 16.6 11.8L12.6 14.8C12.423 14.933 12.211 15 12 15C11.799 15 11.598 14.939 11.425 14.818L7.425 12.004C6.973 11.686 6.864 11.062 7.182 10.611C7.5 10.159 8.123 10.05 8.575 10.368L11.0028 12.0759ZM6 17V18H18V17C18 16.45 18.45 16 19 16C19.55 16 20 16.45 20 17V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V17C4 16.45 4.45 16 5 16C5.55 16 6 16.45 6 17Z"
            />
          </mask>
          <g mask="url(#Downloadmask0)">
            <g id="Download&#Download240;&#Download159;&#Download142;&#Download168; Color">
              <rect id="DownloadBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Download-oIcon/Outline/download">
          <path
            id="Download-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.0028 12.0759C11.001 12.0508 11 12.0255 11 12V4C11 3.448 11.447 3 12 3C12.553 3 13 3.448 13 4V11.9998L15.4 10.2C15.842 9.867 16.469 9.958 16.8 10.4C17.132 10.842 17.042 11.469 16.6 11.8L12.6 14.8C12.423 14.933 12.211 15 12 15C11.799 15 11.598 14.939 11.425 14.818L7.425 12.004C6.973 11.686 6.864 11.062 7.182 10.611C7.5 10.159 8.123 10.05 8.575 10.368L11.0028 12.0759ZM6 17V18H18V17C18 16.45 18.45 16 19 16C19.55 16 20 16.45 20 17V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V17C4 16.45 4.45 16 5 16C5.55 16 6 16.45 6 17Z"
          />
          <mask
            id="Download-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="4"
            y="3"
            width="16"
            height="17"
          >
            <path
              id="Download-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.0028 12.0759C11.001 12.0508 11 12.0255 11 12V4C11 3.448 11.447 3 12 3C12.553 3 13 3.448 13 4V11.9998L15.4 10.2C15.842 9.867 16.469 9.958 16.8 10.4C17.132 10.842 17.042 11.469 16.6 11.8L12.6 14.8C12.423 14.933 12.211 15 12 15C11.799 15 11.598 14.939 11.425 14.818L7.425 12.004C6.973 11.686 6.864 11.062 7.182 10.611C7.5 10.159 8.123 10.05 8.575 10.368L11.0028 12.0759ZM6 17V18H18V17C18 16.45 18.45 16 19 16C19.55 16 20 16.45 20 17V19C20 19.55 19.55 20 19 20H5C4.45 20 4 19.55 4 19V17C4 16.45 4.45 16 5 16C5.55 16 6 16.45 6 17Z"
            />
          </mask>
          <g mask="url(#Download-omask0)">
            <g id="Download-o&#Download-o240;&#Download-o159;&#Download-o142;&#Download-o168; Color">
              <rect id="Download-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
