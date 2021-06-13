/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="ArchiveIcon/Fill/archive">
          <path
            id="ArchiveMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 7H6C5.449 7 5 6.551 5 6C5 5.449 5.449 5 6 5H18C18.552 5 19 5.449 19 6C19 6.551 18.552 7 18 7ZM15 13.134C15 13.61 14.61 14 14.134 14H9.866C9.39 14 9 13.61 9 13.134V12.866C9 12.39 9.39 12 9.866 12H14.134C14.61 12 15 12.39 15 12.866V13.134ZM18 3H6C4.346 3 3 4.346 3 6C3 6.883 3.391 7.67 4 8.22V18C4 19.654 5.346 21 7 21H17C18.654 21 20 19.654 20 18V8.22C20.609 7.67 21 6.883 21 6C21 4.346 19.654 3 18 3Z"
          />
          <mask
            id="Archivemask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="18"
            height="18"
          >
            <path
              id="ArchiveMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 7H6C5.449 7 5 6.551 5 6C5 5.449 5.449 5 6 5H18C18.552 5 19 5.449 19 6C19 6.551 18.552 7 18 7ZM15 13.134C15 13.61 14.61 14 14.134 14H9.866C9.39 14 9 13.61 9 13.134V12.866C9 12.39 9.39 12 9.866 12H14.134C14.61 12 15 12.39 15 12.866V13.134ZM18 3H6C4.346 3 3 4.346 3 6C3 6.883 3.391 7.67 4 8.22V18C4 19.654 5.346 21 7 21H17C18.654 21 20 19.654 20 18V8.22C20.609 7.67 21 6.883 21 6C21 4.346 19.654 3 18 3Z"
            />
          </mask>
          <g mask="url(#Archivemask0)">
            <g id="Archive&#Archive240;&#Archive159;&#Archive142;&#Archive168; Color">
              <rect id="ArchiveBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Archive-oIcon/Outline/archive">
          <path
            id="Archive-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.8662 14H14.1342C14.6102 14 15.0002 13.61 15.0002 13.134V12.866C15.0002 12.39 14.6102 12 14.1342 12H9.8662C9.3892 12 9.0002 12.39 9.0002 12.866V13.134C9.0002 13.61 9.3892 14 9.8662 14ZM18 18C18 18.551 17.552 19 17 19H7C6.449 19 6 18.551 6 18V9H18V18ZM6 5H18C18.552 5 19 5.449 19 6C19 6.551 18.552 7 18 7H6C5.449 7 5 6.551 5 6C5 5.449 5.449 5 6 5ZM21 6C21 4.346 19.654 3 18 3H6C4.346 3 3 4.346 3 6C3 6.883 3.391 7.67 4 8.22V18C4 19.654 5.346 21 7 21H17C18.654 21 20 19.654 20 18V8.22C20.609 7.67 21 6.883 21 6Z"
          />
          <mask
            id="Archive-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="18"
            height="18"
          >
            <path
              id="Archive-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.8662 14H14.1342C14.6102 14 15.0002 13.61 15.0002 13.134V12.866C15.0002 12.39 14.6102 12 14.1342 12H9.8662C9.3892 12 9.0002 12.39 9.0002 12.866V13.134C9.0002 13.61 9.3892 14 9.8662 14ZM18 18C18 18.551 17.552 19 17 19H7C6.449 19 6 18.551 6 18V9H18V18ZM6 5H18C18.552 5 19 5.449 19 6C19 6.551 18.552 7 18 7H6C5.449 7 5 6.551 5 6C5 5.449 5.449 5 6 5ZM21 6C21 4.346 19.654 3 18 3H6C4.346 3 3 4.346 3 6C3 6.883 3.391 7.67 4 8.22V18C4 19.654 5.346 21 7 21H17C18.654 21 20 19.654 20 18V8.22C20.609 7.67 21 6.883 21 6Z"
            />
          </mask>
          <g mask="url(#Archive-omask0)">
            <g id="Archive-o&#Archive-o240;&#Archive-o159;&#Archive-o142;&#Archive-o168; Color">
              <rect id="Archive-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
