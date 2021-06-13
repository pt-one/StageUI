/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="FolderIcon/Fill/folder">
          <path
            id="FolderMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.5 20.5H4.5C3.122 20.5 2 19.409 2 18.068V5.932C2 4.591 3.122 3.5 4.5 3.5H9.101C9.4 3.5 9.685 3.635 9.875 3.867L12.474 7.046H19.5C20.878 7.046 22 8.137 22 9.478V18.068C22 19.409 20.878 20.5 19.5 20.5Z"
          />
          <mask
            id="Foldermask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="3"
            width="20"
            height="18"
          >
            <path
              id="FolderMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.5 20.5H4.5C3.122 20.5 2 19.409 2 18.068V5.932C2 4.591 3.122 3.5 4.5 3.5H9.101C9.4 3.5 9.685 3.635 9.875 3.867L12.474 7.046H19.5C20.878 7.046 22 8.137 22 9.478V18.068C22 19.409 20.878 20.5 19.5 20.5Z"
            />
          </mask>
          <g mask="url(#Foldermask0)">
            <g id="Folder&#Folder240;&#Folder159;&#Folder142;&#Folder168; Color">
              <rect id="FolderBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Folder-oIcon/Outline/folder">
          <path
            id="Folder-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 13.7554V18.0684C4 18.3064 4.224 18.5004 4.5 18.5004H19.5C19.776 18.5004 20 18.3064 20 18.0684V9.47843C20 9.23943 19.776 9.04643 19.5 9.04643H12C11.7 9.04643 11.416 8.91143 11.226 8.67843L8.626 5.50043H4.5C4.224 5.50043 4 5.69343 4 5.93143V13.7554ZM19.5 20.5004H4.5C3.122 20.5004 2 19.4094 2 18.0684V5.93143C2 4.59043 3.122 3.50043 4.5 3.50043H9.101C9.4 3.50043 9.685 3.63443 9.875 3.86743L12.474 7.04643H19.5C20.878 7.04643 22 8.13643 22 9.47843V18.0684C22 19.4094 20.878 20.5004 19.5 20.5004Z"
          />
          <mask
            id="Folder-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="3"
            width="20"
            height="18"
          >
            <path
              id="Folder-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4 13.7554V18.0684C4 18.3064 4.224 18.5004 4.5 18.5004H19.5C19.776 18.5004 20 18.3064 20 18.0684V9.47843C20 9.23943 19.776 9.04643 19.5 9.04643H12C11.7 9.04643 11.416 8.91143 11.226 8.67843L8.626 5.50043H4.5C4.224 5.50043 4 5.69343 4 5.93143V13.7554ZM19.5 20.5004H4.5C3.122 20.5004 2 19.4094 2 18.0684V5.93143C2 4.59043 3.122 3.50043 4.5 3.50043H9.101C9.4 3.50043 9.685 3.63443 9.875 3.86743L12.474 7.04643H19.5C20.878 7.04643 22 8.13643 22 9.47843V18.0684C22 19.4094 20.878 20.5004 19.5 20.5004Z"
            />
          </mask>
          <g mask="url(#Folder-omask0)">
            <g id="Folder-o&#Folder-o240;&#Folder-o159;&#Folder-o142;&#Folder-o168; Color">
              <rect id="Folder-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
