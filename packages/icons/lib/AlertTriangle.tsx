/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="AlertTriangleIcon/Fill/alert-triangle">
          <path
            id="AlertTriangleMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13 13C13 13.552 12.552 14 12 14C11.448 14 11 13.552 11 13V9C11 8.448 11.448 8 12 8C12.552 8 13 8.448 13 9V13ZM12 17C11.448 17 11 16.552 11 16C11 15.448 11.448 15 12 15C12.552 15 13 15.448 13 16C13 16.552 12.552 17 12 17ZM22.561 16.303L14.889 3.584C14.29 2.592 13.21 2 12 2C10.79 2 9.71 2.592 9.111 3.584L1.439 16.303C0.870997 17.246 0.853997 18.38 1.394 19.336C1.973 20.363 3.098 21 4.328 21H19.672C20.902 21 22.027 20.363 22.606 19.336C23.146 18.38 23.129 17.246 22.561 16.303Z"
          />
          <mask
            id="AlertTrianglemask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="1"
            y="2"
            width="22"
            height="19"
          >
            <path
              id="AlertTriangleMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13 13C13 13.552 12.552 14 12 14C11.448 14 11 13.552 11 13V9C11 8.448 11.448 8 12 8C12.552 8 13 8.448 13 9V13ZM12 17C11.448 17 11 16.552 11 16C11 15.448 11.448 15 12 15C12.552 15 13 15.448 13 16C13 16.552 12.552 17 12 17ZM22.561 16.303L14.889 3.584C14.29 2.592 13.21 2 12 2C10.79 2 9.71 2.592 9.111 3.584L1.439 16.303C0.870997 17.246 0.853997 18.38 1.394 19.336C1.973 20.363 3.098 21 4.328 21H19.672C20.902 21 22.027 20.363 22.606 19.336C23.146 18.38 23.129 17.246 22.561 16.303Z"
            />
          </mask>
          <g mask="url(#AlertTrianglemask0)">
            <g id="AlertTriangle&#AlertTriangle240;&#AlertTriangle159;&#AlertTriangle142;&#AlertTriangle168; Color">
              <rect id="AlertTriangleBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="AlertTriangle-oIcon/Outline/alert-triangle">
          <path
            id="AlertTriangle-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 9C11 8.448 11.448 8 12 8C12.552 8 13 8.448 13 9V13C13 13.552 12.552 14 12 14C11.448 14 11 13.552 11 13V9ZM11 16C11 15.448 11.448 15 12 15C12.552 15 13 15.448 13 16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16ZM20.8647 18.353C20.6357 18.758 20.1897 19 19.6717 19H4.3277C3.8097 19 3.3637 18.758 3.1357 18.353C3.0277 18.163 2.8857 17.776 3.1527 17.336L10.8237 4.618C11.2907 3.844 12.7087 3.844 13.1757 4.618L20.8477 17.336C21.1137 17.776 20.9727 18.163 20.8647 18.353ZM22.5607 16.303L14.8887 3.584C14.2897 2.592 13.2097 2 11.9997 2C10.7897 2 9.7097 2.592 9.1117 3.584L1.4397 16.303C0.870699 17.246 0.853699 18.38 1.3937 19.336C1.9727 20.363 3.0977 21 4.3277 21H19.6717C20.9027 21 22.0267 20.363 22.6067 19.336C23.1467 18.38 23.1297 17.246 22.5607 16.303Z"
          />
          <mask
            id="AlertTriangle-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="1"
            y="2"
            width="22"
            height="19"
          >
            <path
              id="AlertTriangle-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11 9C11 8.448 11.448 8 12 8C12.552 8 13 8.448 13 9V13C13 13.552 12.552 14 12 14C11.448 14 11 13.552 11 13V9ZM11 16C11 15.448 11.448 15 12 15C12.552 15 13 15.448 13 16C13 16.552 12.552 17 12 17C11.448 17 11 16.552 11 16ZM20.8647 18.353C20.6357 18.758 20.1897 19 19.6717 19H4.3277C3.8097 19 3.3637 18.758 3.1357 18.353C3.0277 18.163 2.8857 17.776 3.1527 17.336L10.8237 4.618C11.2907 3.844 12.7087 3.844 13.1757 4.618L20.8477 17.336C21.1137 17.776 20.9727 18.163 20.8647 18.353ZM22.5607 16.303L14.8887 3.584C14.2897 2.592 13.2097 2 11.9997 2C10.7897 2 9.7097 2.592 9.1117 3.584L1.4397 16.303C0.870699 17.246 0.853699 18.38 1.3937 19.336C1.9727 20.363 3.0977 21 4.3277 21H19.6717C20.9027 21 22.0267 20.363 22.6067 19.336C23.1467 18.38 23.1297 17.246 22.5607 16.303Z"
            />
          </mask>
          <g mask="url(#AlertTriangle-omask0)">
            <g id="AlertTriangle-o&#AlertTriangle-o240;&#AlertTriangle-o159;&#AlertTriangle-o142;&#AlertTriangle-o168; Color">
              <rect id="AlertTriangle-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
