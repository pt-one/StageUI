/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="VolumeIcon/Fill/volume">
          <path
            id="VolumeMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 20.9999C16.802 20.9999 16.604 20.9409 16.435 20.8249L10.023 16.4289H5C4.448 16.4289 4 15.9809 4 15.4289V8.5709C4 8.0189 4.448 7.5709 5 7.5709H10.023L16.435 3.1749C16.74 2.9649 17.137 2.9409 17.466 3.1149C17.794 3.2879 18 3.6289 18 3.9999V19.9999C18 20.3709 17.794 20.7119 17.466 20.8849C17.32 20.9619 17.16 20.9999 17 20.9999Z"
          />
          <mask
            id="Volumemask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="4"
            y="2"
            width="14"
            height="19"
          >
            <path
              id="VolumeMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 20.9999C16.802 20.9999 16.604 20.9409 16.435 20.8249L10.023 16.4289H5C4.448 16.4289 4 15.9809 4 15.4289V8.5709C4 8.0189 4.448 7.5709 5 7.5709H10.023L16.435 3.1749C16.74 2.9649 17.137 2.9409 17.466 3.1149C17.794 3.2879 18 3.6289 18 3.9999V19.9999C18 20.3709 17.794 20.7119 17.466 20.8849C17.32 20.9619 17.16 20.9999 17 20.9999Z"
            />
          </mask>
          <g mask="url(#Volumemask0)">
            <g id="Volume&#Volume240;&#Volume159;&#Volume142;&#Volume168; Color">
              <rect id="VolumeBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Volume-oIcon/Outline/volume">
          <path
            id="Volume-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 14.4287H10.333C10.535 14.4287 10.732 14.4907 10.899 14.6037L16 18.1017V5.8987L10.899 9.3967C10.732 9.5097 10.535 9.5717 10.333 9.5717H6V14.4287ZM17 20.9997C16.802 20.9997 16.604 20.9417 16.435 20.8247L10.023 16.4287H5C4.448 16.4287 4 15.9817 4 15.4287V8.5717C4 8.0187 4.448 7.5717 5 7.5717H10.023L16.435 3.1747C16.74 2.9647 17.137 2.9417 17.466 3.1157C17.794 3.2877 18 3.6287 18 3.9997V19.9997C18 20.3707 17.794 20.7117 17.466 20.8847C17.32 20.9617 17.16 20.9997 17 20.9997Z"
          />
          <mask
            id="Volume-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="4"
            y="2"
            width="14"
            height="19"
          >
            <path
              id="Volume-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6 14.4287H10.333C10.535 14.4287 10.732 14.4907 10.899 14.6037L16 18.1017V5.8987L10.899 9.3967C10.732 9.5097 10.535 9.5717 10.333 9.5717H6V14.4287ZM17 20.9997C16.802 20.9997 16.604 20.9417 16.435 20.8247L10.023 16.4287H5C4.448 16.4287 4 15.9817 4 15.4287V8.5717C4 8.0187 4.448 7.5717 5 7.5717H10.023L16.435 3.1747C16.74 2.9647 17.137 2.9417 17.466 3.1157C17.794 3.2877 18 3.6287 18 3.9997V19.9997C18 20.3707 17.794 20.7117 17.466 20.8847C17.32 20.9617 17.16 20.9997 17 20.9997Z"
            />
          </mask>
          <g mask="url(#Volume-omask0)">
            <g id="Volume-o&#Volume-o240;&#Volume-o159;&#Volume-o142;&#Volume-o168; Color">
              <rect id="Volume-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
