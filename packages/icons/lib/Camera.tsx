/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="CameraIcon/Fill/camera">
          <path
            id="CameraMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 12.5C11.173 12.5 10.5 13.173 10.5 14C10.5 14.827 11.173 15.5 12 15.5C12.827 15.5 13.5 14.827 13.5 14C13.5 13.173 12.827 12.5 12 12.5ZM12 17.5C10.07 17.5 8.5 15.93 8.5 14C8.5 12.07 10.07 10.5 12 10.5C13.93 10.5 15.5 12.07 15.5 14C15.5 15.93 13.93 17.5 12 17.5ZM10 5.5C10 5.224 10.225 5 10.5 5H13.5C13.775 5 14 5.224 14 5.5V7H10V5.5ZM19 7H16V5.5C16 4.122 14.879 3 13.5 3H10.5C9.121 3 8 4.122 8 5.5V7H5C3.346 7 2 8.346 2 10V18C2 19.654 3.346 21 5 21H19C20.654 21 22 19.654 22 18V10C22 8.346 20.654 7 19 7Z"
          />
          <mask
            id="Cameramask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="3"
            width="20"
            height="18"
          >
            <path
              id="CameraMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 12.5C11.173 12.5 10.5 13.173 10.5 14C10.5 14.827 11.173 15.5 12 15.5C12.827 15.5 13.5 14.827 13.5 14C13.5 13.173 12.827 12.5 12 12.5ZM12 17.5C10.07 17.5 8.5 15.93 8.5 14C8.5 12.07 10.07 10.5 12 10.5C13.93 10.5 15.5 12.07 15.5 14C15.5 15.93 13.93 17.5 12 17.5ZM10 5.5C10 5.224 10.225 5 10.5 5H13.5C13.775 5 14 5.224 14 5.5V7H10V5.5ZM19 7H16V5.5C16 4.122 14.879 3 13.5 3H10.5C9.121 3 8 4.122 8 5.5V7H5C3.346 7 2 8.346 2 10V18C2 19.654 3.346 21 5 21H19C20.654 21 22 19.654 22 18V10C22 8.346 20.654 7 19 7Z"
            />
          </mask>
          <g mask="url(#Cameramask0)">
            <g id="Camera&#Camera240;&#Camera159;&#Camera142;&#Camera168; Color">
              <rect id="CameraBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Camera-oIcon/Outline/camera">
          <path
            id="Camera-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 15.5C11.173 15.5 10.5 14.827 10.5 14C10.5 13.173 11.173 12.5 12 12.5C12.827 12.5 13.5 13.173 13.5 14C13.5 14.827 12.827 15.5 12 15.5ZM12 10.5C10.07 10.5 8.5 12.07 8.5 14C8.5 15.93 10.07 17.5 12 17.5C13.93 17.5 15.5 15.93 15.5 14C15.5 12.07 13.93 10.5 12 10.5ZM20 18C20 18.551 19.552 19 19 19H5C4.448 19 4 18.551 4 18V10C4 9.449 4.448 9 5 9H19C19.552 9 20 9.449 20 10V18ZM10 5.5C10 5.224 10.225 5 10.5 5H13.5C13.775 5 14 5.224 14 5.5V7H10V5.5ZM19 7H16V5.5C16 4.122 14.879 3 13.5 3H10.5C9.121 3 8 4.122 8 5.5V7H5C3.346 7 2 8.346 2 10V18C2 19.654 3.346 21 5 21H19C20.654 21 22 19.654 22 18V10C22 8.346 20.654 7 19 7Z"
          />
          <mask
            id="Camera-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="3"
            width="20"
            height="18"
          >
            <path
              id="Camera-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 15.5C11.173 15.5 10.5 14.827 10.5 14C10.5 13.173 11.173 12.5 12 12.5C12.827 12.5 13.5 13.173 13.5 14C13.5 14.827 12.827 15.5 12 15.5ZM12 10.5C10.07 10.5 8.5 12.07 8.5 14C8.5 15.93 10.07 17.5 12 17.5C13.93 17.5 15.5 15.93 15.5 14C15.5 12.07 13.93 10.5 12 10.5ZM20 18C20 18.551 19.552 19 19 19H5C4.448 19 4 18.551 4 18V10C4 9.449 4.448 9 5 9H19C19.552 9 20 9.449 20 10V18ZM10 5.5C10 5.224 10.225 5 10.5 5H13.5C13.775 5 14 5.224 14 5.5V7H10V5.5ZM19 7H16V5.5C16 4.122 14.879 3 13.5 3H10.5C9.121 3 8 4.122 8 5.5V7H5C3.346 7 2 8.346 2 10V18C2 19.654 3.346 21 5 21H19C20.654 21 22 19.654 22 18V10C22 8.346 20.654 7 19 7Z"
            />
          </mask>
          <g mask="url(#Camera-omask0)">
            <g id="Camera-o&#Camera-o240;&#Camera-o159;&#Camera-o142;&#Camera-o168; Color">
              <rect id="Camera-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
