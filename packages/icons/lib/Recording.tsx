/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="RecordingIcon/Fill/recording">
          <path
            id="RecordingMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 8C15.794 8 14 9.794 14 12C14 12.731 14.212 13.409 14.557 14H9.443C9.788 13.409 10 12.731 10 12C10 9.794 8.206 8 6 8C3.794 8 2 9.794 2 12C2 14.206 3.794 16 6 16H18C20.206 16 22 14.206 22 12C22 9.794 20.206 8 18 8Z"
          />
          <mask
            id="Recordingmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="8"
            width="20"
            height="8"
          >
            <path
              id="RecordingMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 8C15.794 8 14 9.794 14 12C14 12.731 14.212 13.409 14.557 14H9.443C9.788 13.409 10 12.731 10 12C10 9.794 8.206 8 6 8C3.794 8 2 9.794 2 12C2 14.206 3.794 16 6 16H18C20.206 16 22 14.206 22 12C22 9.794 20.206 8 18 8Z"
            />
          </mask>
          <g mask="url(#Recordingmask0)">
            <g id="Recording&#Recording240;&#Recording159;&#Recording142;&#Recording168; Color">
              <rect id="RecordingBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Recording-oIcon/Outline/recording">
          <path
            id="Recording-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18 14C16.897 14 16 13.103 16 12C16 10.897 16.897 10 18 10C19.103 10 20 10.897 20 12C20 13.103 19.103 14 18 14ZM4 12C4 10.897 4.897 10 6 10C7.103 10 8 10.897 8 12C8 13.103 7.103 14 6 14C4.897 14 4 13.103 4 12ZM18 8C15.794 8 14 9.794 14 12C14 12.731 14.212 13.409 14.557 14H9.443C9.788 13.409 10 12.731 10 12C10 9.794 8.206 8 6 8C3.794 8 2 9.794 2 12C2 14.206 3.794 16 6 16H18C20.206 16 22 14.206 22 12C22 9.794 20.206 8 18 8Z"
          />
          <mask
            id="Recording-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="8"
            width="20"
            height="8"
          >
            <path
              id="Recording-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 14C16.897 14 16 13.103 16 12C16 10.897 16.897 10 18 10C19.103 10 20 10.897 20 12C20 13.103 19.103 14 18 14ZM4 12C4 10.897 4.897 10 6 10C7.103 10 8 10.897 8 12C8 13.103 7.103 14 6 14C4.897 14 4 13.103 4 12ZM18 8C15.794 8 14 9.794 14 12C14 12.731 14.212 13.409 14.557 14H9.443C9.788 13.409 10 12.731 10 12C10 9.794 8.206 8 6 8C3.794 8 2 9.794 2 12C2 14.206 3.794 16 6 16H18C20.206 16 22 14.206 22 12C22 9.794 20.206 8 18 8Z"
            />
          </mask>
          <g mask="url(#Recording-omask0)">
            <g id="Recording-o&#Recording-o240;&#Recording-o159;&#Recording-o142;&#Recording-o168; Color">
              <rect id="Recording-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
