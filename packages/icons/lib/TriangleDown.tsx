/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="TriangleDownIcon/Fill/triangle-down">
          <path
            id="TriangleDownMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 17C11.494 17 11.01 16.767 10.674 16.358L6.46103 11.26C5.95703 10.649 5.85603 9.782 6.20203 9.049C6.50703 8.402 7.11403 8 7.78703 8H16.213C16.886 8 17.493 8.402 17.798 9.049C18.144 9.782 18.043 10.649 17.54 11.259L13.326 16.358C12.99 16.767 12.506 17 12 17Z"
          />
          <mask
            id="TriangleDownmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="5"
            y="8"
            width="14"
            height="9"
          >
            <path
              id="TriangleDownMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 17C11.494 17 11.01 16.767 10.674 16.358L6.46103 11.26C5.95703 10.649 5.85603 9.782 6.20203 9.049C6.50703 8.402 7.11403 8 7.78703 8H16.213C16.886 8 17.493 8.402 17.798 9.049C18.144 9.782 18.043 10.649 17.54 11.259L13.326 16.358C12.99 16.767 12.506 17 12 17Z"
            />
          </mask>
          <g mask="url(#TriangleDownmask0)">
            <g id="TriangleDown&#TriangleDown240;&#TriangleDown159;&#TriangleDown142;&#TriangleDown168; Color">
              <rect id="TriangleDownBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="TriangleDown-oIcon/Outline/triangle-down">
          <path
            id="TriangleDown-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.09178 10L12.0018 14.822L15.9868 10H8.09178ZM11.9998 17C11.4938 17 11.0098 16.767 10.6738 16.358L6.46078 11.26C5.95678 10.649 5.85678 9.782 6.20178 9.049C6.50678 8.402 7.11378 8 7.78678 8H16.2128C16.8858 8 17.4928 8.402 17.7978 9.049C18.1438 9.782 18.0428 10.649 17.5398 11.259L13.3258 16.358C12.9898 16.767 12.5058 17 11.9998 17Z"
          />
          <mask
            id="TriangleDown-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="5"
            y="8"
            width="14"
            height="9"
          >
            <path
              id="TriangleDown-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.09178 10L12.0018 14.822L15.9868 10H8.09178ZM11.9998 17C11.4938 17 11.0098 16.767 10.6738 16.358L6.46078 11.26C5.95678 10.649 5.85678 9.782 6.20178 9.049C6.50678 8.402 7.11378 8 7.78678 8H16.2128C16.8858 8 17.4928 8.402 17.7978 9.049C18.1438 9.782 18.0428 10.649 17.5398 11.259L13.3258 16.358C12.9898 16.767 12.5058 17 11.9998 17Z"
            />
          </mask>
          <g mask="url(#TriangleDown-omask0)">
            <g id="TriangleDown-o&#TriangleDown-o240;&#TriangleDown-o159;&#TriangleDown-o142;&#TriangleDown-o168; Color">
              <rect id="TriangleDown-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
