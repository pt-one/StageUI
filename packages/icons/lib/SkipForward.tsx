/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="SkipForwardIcon/Fill/skip-forward">
          <path
            id="SkipForwardMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 6C15.448 6 15 6.447 15 7V10.818C14.953 10.77 14.912 10.718 14.858 10.674L9.759 6.46C9.15 5.958 8.282 5.856 7.55 6.201C6.902 6.507 6.5 7.114 6.5 7.787V16.213C6.5 16.886 6.902 17.493 7.55 17.799C7.839 17.935 8.149 18.001 8.456 18.001C8.927 18.001 9.391 17.844 9.759 17.539L14.859 13.326C14.912 13.282 14.953 13.23 15 13.182V17C15 17.553 15.448 18 16 18C16.552 18 17 17.553 17 17V7C17 6.447 16.552 6 16 6Z"
          />
          <mask
            id="SkipForwardmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="6"
            y="5"
            width="11"
            height="14"
          >
            <path
              id="SkipForwardMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 6C15.448 6 15 6.447 15 7V10.818C14.953 10.77 14.912 10.718 14.858 10.674L9.759 6.46C9.15 5.958 8.282 5.856 7.55 6.201C6.902 6.507 6.5 7.114 6.5 7.787V16.213C6.5 16.886 6.902 17.493 7.55 17.799C7.839 17.935 8.149 18.001 8.456 18.001C8.927 18.001 9.391 17.844 9.759 17.539L14.859 13.326C14.912 13.282 14.953 13.23 15 13.182V17C15 17.553 15.448 18 16 18C16.552 18 17 17.553 17 17V7C17 6.447 16.552 6 16 6Z"
            />
          </mask>
          <g mask="url(#SkipForwardmask0)">
            <g id="SkipForward&#SkipForward240;&#SkipForward159;&#SkipForward142;&#SkipForward168; Color">
              <rect id="SkipForwardBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="SkipForward-oIcon/Outline/skip-forward">
          <path
            id="SkipForward-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.5 15.9082V8.01421L13.322 11.9982L8.5 15.9082ZM16 6.00021C15.448 6.00021 15 6.44721 15 7.00021V10.8182C14.953 10.7692 14.912 10.7182 14.858 10.6742L9.759 6.46021C9.15 5.95821 8.282 5.85621 7.55 6.20121C6.902 6.50721 6.5 7.11421 6.5 7.78721V16.2132C6.5 16.8862 6.902 17.4932 7.55 17.7992C7.839 17.9342 8.149 18.0012 8.456 18.0012C8.927 18.0012 9.391 17.8442 9.759 17.5392L14.859 13.3262C14.912 13.2822 14.953 13.2302 15 13.1812V17.0002C15 17.5532 15.448 18.0002 16 18.0002C16.552 18.0002 17 17.5532 17 17.0002V7.00021C17 6.44721 16.552 6.00021 16 6.00021Z"
          />
          <mask
            id="SkipForward-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="6"
            y="5"
            width="11"
            height="14"
          >
            <path
              id="SkipForward-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.5 15.9082V8.01421L13.322 11.9982L8.5 15.9082ZM16 6.00021C15.448 6.00021 15 6.44721 15 7.00021V10.8182C14.953 10.7692 14.912 10.7182 14.858 10.6742L9.759 6.46021C9.15 5.95821 8.282 5.85621 7.55 6.20121C6.902 6.50721 6.5 7.11421 6.5 7.78721V16.2132C6.5 16.8862 6.902 17.4932 7.55 17.7992C7.839 17.9342 8.149 18.0012 8.456 18.0012C8.927 18.0012 9.391 17.8442 9.759 17.5392L14.859 13.3262C14.912 13.2822 14.953 13.2302 15 13.1812V17.0002C15 17.5532 15.448 18.0002 16 18.0002C16.552 18.0002 17 17.5532 17 17.0002V7.00021C17 6.44721 16.552 6.00021 16 6.00021Z"
            />
          </mask>
          <g mask="url(#SkipForward-omask0)">
            <g id="SkipForward-o&#SkipForward-o240;&#SkipForward-o159;&#SkipForward-o142;&#SkipForward-o168; Color">
              <rect id="SkipForward-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
