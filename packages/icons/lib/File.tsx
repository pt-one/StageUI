/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="FileIcon/Fill/file">
          <path
            id="FileMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 3.978L17.742 8H14.714C14.32 8 14 7.619 14 7.15V3.978ZM19.741 7.328L15.296 2.328C15.107 2.119 14.838 2 14.556 2H6.556C5.146 2 4 3.122 4 4.5V19.5C4 20.878 5.146 22 6.556 22H17.444C18.854 22 20 20.878 20 19.5V8C20 7.751 19.908 7.512 19.741 7.328Z"
          />
          <mask
            id="Filemask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="4"
            y="2"
            width="16"
            height="20"
          >
            <path
              id="FileMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 3.978L17.742 8H14.714C14.32 8 14 7.619 14 7.15V3.978ZM19.741 7.328L15.296 2.328C15.107 2.119 14.838 2 14.556 2H6.556C5.146 2 4 3.122 4 4.5V19.5C4 20.878 5.146 22 6.556 22H17.444C18.854 22 20 20.878 20 19.5V8C20 7.751 19.908 7.512 19.741 7.328Z"
            />
          </mask>
          <g mask="url(#Filemask0)">
            <g id="File&#File240;&#File159;&#File142;&#File168; Color">
              <rect id="FileBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="File-oIcon/Outline/file">
          <path
            id="File-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.4443 20H6.5553C6.2493 20 6.0003 19.776 6.0003 19.5V4.5C6.0003 4.224 6.2493 4 6.5553 4H11.0003V8.15C11.0003 9.722 12.2173 11 13.7143 11H18.0003V19.5C18.0003 19.776 17.7503 20 17.4443 20ZM17.6493 9H13.7143C13.3203 9 13.0003 8.619 13.0003 8.15V4H13.1123L17.6493 9ZM19.7403 8.328L14.2963 2.328C14.1073 2.119 13.8383 2 13.5553 2H6.5553C5.1463 2 4.0003 3.122 4.0003 4.5V19.5C4.0003 20.878 5.1463 22 6.5553 22H17.4443C18.8533 22 20.0003 20.878 20.0003 19.5V9C20.0003 8.751 19.9073 8.512 19.7403 8.328Z"
          />
          <mask
            id="File-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="4"
            y="2"
            width="17"
            height="20"
          >
            <path
              id="File-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17.4443 20H6.5553C6.2493 20 6.0003 19.776 6.0003 19.5V4.5C6.0003 4.224 6.2493 4 6.5553 4H11.0003V8.15C11.0003 9.722 12.2173 11 13.7143 11H18.0003V19.5C18.0003 19.776 17.7503 20 17.4443 20ZM17.6493 9H13.7143C13.3203 9 13.0003 8.619 13.0003 8.15V4H13.1123L17.6493 9ZM19.7403 8.328L14.2963 2.328C14.1073 2.119 13.8383 2 13.5553 2H6.5553C5.1463 2 4.0003 3.122 4.0003 4.5V19.5C4.0003 20.878 5.1463 22 6.5553 22H17.4443C18.8533 22 20.0003 20.878 20.0003 19.5V9C20.0003 8.751 19.9073 8.512 19.7403 8.328Z"
            />
          </mask>
          <g mask="url(#File-omask0)">
            <g id="File-o&#File-o240;&#File-o159;&#File-o142;&#File-o168; Color">
              <rect id="File-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
