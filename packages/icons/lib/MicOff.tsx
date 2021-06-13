/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="MicOffIcon/Fill/mic-off">
          <path
            id="MicOffMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.5791 12.751C15.8401 12.22 16.0001 11.631 16.0001 11V6C16.0001 3.794 14.2061 2 12.0001 2C10.0521 2 8.43011 3.401 8.07611 5.248L15.5791 12.751ZM19 11C19 10.448 18.553 10 18 10C17.447 10 17 10.448 17 11C17 11.909 16.738 12.75 16.312 13.484L17.775 14.947C18.547 13.823 19 12.464 19 11ZM12.0853 14.9918C12.0574 14.9959 12.0293 15 12 15C9.79401 15 8.00001 13.206 8.00001 11V10.828L12.156 14.984C12.1322 14.9849 12.1089 14.9883 12.0853 14.9918ZM20.707 19.293L4.70701 3.293C4.31601 2.902 3.68401 2.902 3.29301 3.293C2.90201 3.684 2.90201 4.316 3.29301 4.707L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293ZM13 20H15C15.55 20 16 20.45 16 21C16 21.55 15.55 22 15 22H9.00001C8.45001 22 8.00001 21.55 8.00001 21C8.00001 20.45 8.45001 20 9.00001 20H11V17.92C7.61301 17.432 5.00001 14.52 5.00001 11C5.00001 10.448 5.44701 10 6.00001 10C6.55301 10 7.00001 10.448 7.00001 11C7.00001 13.757 9.24301 16 12 16C12.362 16 12.714 15.957 13.055 15.883L14.648 17.476C14.127 17.69 13.573 17.836 13 17.919V20Z"
          />
          <mask
            id="MicOffmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="20"
            height="20"
          >
            <path
              id="MicOffMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.5791 12.751C15.8401 12.22 16.0001 11.631 16.0001 11V6C16.0001 3.794 14.2061 2 12.0001 2C10.0521 2 8.43011 3.401 8.07611 5.248L15.5791 12.751ZM19 11C19 10.448 18.553 10 18 10C17.447 10 17 10.448 17 11C17 11.909 16.738 12.75 16.312 13.484L17.775 14.947C18.547 13.823 19 12.464 19 11ZM12.0853 14.9918C12.0574 14.9959 12.0293 15 12 15C9.79401 15 8.00001 13.206 8.00001 11V10.828L12.156 14.984C12.1322 14.9849 12.1089 14.9883 12.0853 14.9918ZM20.707 19.293L4.70701 3.293C4.31601 2.902 3.68401 2.902 3.29301 3.293C2.90201 3.684 2.90201 4.316 3.29301 4.707L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293ZM13 20H15C15.55 20 16 20.45 16 21C16 21.55 15.55 22 15 22H9.00001C8.45001 22 8.00001 21.55 8.00001 21C8.00001 20.45 8.45001 20 9.00001 20H11V17.92C7.61301 17.432 5.00001 14.52 5.00001 11C5.00001 10.448 5.44701 10 6.00001 10C6.55301 10 7.00001 10.448 7.00001 11C7.00001 13.757 9.24301 16 12 16C12.362 16 12.714 15.957 13.055 15.883L14.648 17.476C14.127 17.69 13.573 17.836 13 17.919V20Z"
            />
          </mask>
          <g mask="url(#MicOffmask0)">
            <g id="MicOff&#MicOff240;&#MicOff159;&#MicOff142;&#MicOff168; Color">
              <rect id="MicOffBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="MicOff-oIcon/Outline/mic-off">
          <path
            id="MicOff-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 6C10 4.897 10.897 4 12 4C13.103 4 14 4.897 14 6V11C14 11.0325 13.9956 11.0636 13.9913 11.0946L13.9913 11.0946L13.9913 11.0946C13.9884 11.115 13.9856 11.1354 13.984 11.156L15.579 12.751C15.84 12.22 16 11.631 16 11V6C16 3.794 14.206 2 12 2C10.052 2 8.43001 3.401 8.07601 5.248L10 7.172V6ZM19 11C19 10.448 18.553 10 18 10C17.447 10 17 10.448 17 11C17 11.909 16.738 12.75 16.312 13.484L17.775 14.947C18.547 13.823 19 12.464 19 11ZM12.0853 14.9918C12.0574 14.9959 12.0293 15 12 15C9.79401 15 8.00001 13.206 8.00001 11V10.828L12.156 14.984C12.1322 14.9849 12.1089 14.9883 12.0853 14.9918ZM20.707 19.293L4.70701 3.293C4.31601 2.902 3.68401 2.902 3.29301 3.293C2.90201 3.684 2.90201 4.316 3.29301 4.707L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293ZM13 20H15C15.55 20 16 20.45 16 21C16 21.55 15.55 22 15 22H9.00001C8.45001 22 8.00001 21.55 8.00001 21C8.00001 20.45 8.45001 20 9.00001 20H11V17.92C7.61301 17.432 5.00001 14.52 5.00001 11C5.00001 10.448 5.44701 10 6.00001 10C6.55301 10 7.00001 10.448 7.00001 11C7.00001 13.757 9.24301 16 12 16C12.362 16 12.714 15.957 13.055 15.883L14.648 17.476C14.127 17.69 13.573 17.836 13 17.919V20Z"
          />
          <mask
            id="MicOff-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="20"
            height="20"
          >
            <path
              id="MicOff-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10 6C10 4.897 10.897 4 12 4C13.103 4 14 4.897 14 6V11C14 11.0325 13.9956 11.0636 13.9913 11.0946L13.9913 11.0946L13.9913 11.0946C13.9884 11.115 13.9856 11.1354 13.984 11.156L15.579 12.751C15.84 12.22 16 11.631 16 11V6C16 3.794 14.206 2 12 2C10.052 2 8.43001 3.401 8.07601 5.248L10 7.172V6ZM19 11C19 10.448 18.553 10 18 10C17.447 10 17 10.448 17 11C17 11.909 16.738 12.75 16.312 13.484L17.775 14.947C18.547 13.823 19 12.464 19 11ZM12.0853 14.9918C12.0574 14.9959 12.0293 15 12 15C9.79401 15 8.00001 13.206 8.00001 11V10.828L12.156 14.984C12.1322 14.9849 12.1089 14.9883 12.0853 14.9918ZM20.707 19.293L4.70701 3.293C4.31601 2.902 3.68401 2.902 3.29301 3.293C2.90201 3.684 2.90201 4.316 3.29301 4.707L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293ZM13 20H15C15.55 20 16 20.45 16 21C16 21.55 15.55 22 15 22H9.00001C8.45001 22 8.00001 21.55 8.00001 21C8.00001 20.45 8.45001 20 9.00001 20H11V17.92C7.61301 17.432 5.00001 14.52 5.00001 11C5.00001 10.448 5.44701 10 6.00001 10C6.55301 10 7.00001 10.448 7.00001 11C7.00001 13.757 9.24301 16 12 16C12.362 16 12.714 15.957 13.055 15.883L14.648 17.476C14.127 17.69 13.573 17.836 13 17.919V20Z"
            />
          </mask>
          <g mask="url(#MicOff-omask0)">
            <g id="MicOff-o&#MicOff-o240;&#MicOff-o159;&#MicOff-o142;&#MicOff-o168; Color">
              <rect id="MicOff-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
