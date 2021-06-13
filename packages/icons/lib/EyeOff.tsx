/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="EyeOffIcon/Fill/eye-off">
          <path
            id="EyeOffMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.407 17.993L20.707 19.293C21.098 19.684 21.098 20.316 20.707 20.707C20.512 20.902 20.256 21 20 21C19.744 21 19.488 20.902 19.293 20.707L16.586 18L16 17.414L14.655 16.069L14.586 16L12.0837 13.4977C12.056 13.4992 12.0281 13.5 12 13.5C11.173 13.5 10.5 12.827 10.5 12C10.5 11.9719 10.5008 11.944 10.5023 11.9163L7.283 8.69701L5.532 6.94601L3.293 4.70701C2.902 4.31601 2.902 3.68401 3.293 3.29301C3.684 2.90201 4.316 2.90201 4.707 3.29301L6.42 5.00601L7.885 6.47101L11.9163 10.5023C11.944 10.5008 11.9719 10.5 12 10.5C12.827 10.5 13.5 11.173 13.5 12C13.5 12.0281 13.4992 12.056 13.4977 12.0837L17.414 16L19.407 17.993ZM8.5928 5.76421L11.3898 8.56121C11.5888 8.52621 11.7908 8.50021 11.9998 8.50021C13.9298 8.50021 15.4998 10.0702 15.4998 12.0002C15.4998 12.2092 15.4738 12.4112 15.4388 12.6102L18.1208 15.2932L18.9548 16.1272C20.4768 14.7392 21.4528 13.2202 21.8678 12.4972C22.0438 12.1892 22.0438 11.8102 21.8678 11.5022C21.2298 10.3902 17.7058 4.81621 11.7298 5.00321C10.5458 5.03421 9.4738 5.28921 8.5018 5.67421L8.5928 5.76421ZM13.948 16.7771L15.293 18.1211L15.498 18.3261C14.526 18.7111 13.455 18.9661 12.271 18.9961C12.189 18.9991 12.106 19.0001 12.025 19.0001C6.162 19.0001 2.762 13.5951 2.132 12.4971C1.956 12.1891 1.956 11.8101 2.132 11.5021C2.547 10.7801 3.523 9.26111 5.045 7.87311L6.576 9.40511L8.562 11.3901C8.526 11.5891 8.5 11.7911 8.5 12.0001C8.5 13.9301 10.07 15.5001 12 15.5001C12.209 15.5001 12.411 15.4741 12.61 15.4381L13.879 16.7071L13.948 16.7771Z"
          />
          <mask
            id="EyeOffmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="20"
            height="19"
          >
            <path
              id="EyeOffMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.407 17.993L20.707 19.293C21.098 19.684 21.098 20.316 20.707 20.707C20.512 20.902 20.256 21 20 21C19.744 21 19.488 20.902 19.293 20.707L16.586 18L16 17.414L14.655 16.069L14.586 16L12.0837 13.4977C12.056 13.4992 12.0281 13.5 12 13.5C11.173 13.5 10.5 12.827 10.5 12C10.5 11.9719 10.5008 11.944 10.5023 11.9163L7.283 8.69701L5.532 6.94601L3.293 4.70701C2.902 4.31601 2.902 3.68401 3.293 3.29301C3.684 2.90201 4.316 2.90201 4.707 3.29301L6.42 5.00601L7.885 6.47101L11.9163 10.5023C11.944 10.5008 11.9719 10.5 12 10.5C12.827 10.5 13.5 11.173 13.5 12C13.5 12.0281 13.4992 12.056 13.4977 12.0837L17.414 16L19.407 17.993ZM8.5928 5.76421L11.3898 8.56121C11.5888 8.52621 11.7908 8.50021 11.9998 8.50021C13.9298 8.50021 15.4998 10.0702 15.4998 12.0002C15.4998 12.2092 15.4738 12.4112 15.4388 12.6102L18.1208 15.2932L18.9548 16.1272C20.4768 14.7392 21.4528 13.2202 21.8678 12.4972C22.0438 12.1892 22.0438 11.8102 21.8678 11.5022C21.2298 10.3902 17.7058 4.81621 11.7298 5.00321C10.5458 5.03421 9.4738 5.28921 8.5018 5.67421L8.5928 5.76421ZM13.948 16.7771L15.293 18.1211L15.498 18.3261C14.526 18.7111 13.455 18.9661 12.271 18.9961C12.189 18.9991 12.106 19.0001 12.025 19.0001C6.162 19.0001 2.762 13.5951 2.132 12.4971C1.956 12.1891 1.956 11.8101 2.132 11.5021C2.547 10.7801 3.523 9.26111 5.045 7.87311L6.576 9.40511L8.562 11.3901C8.526 11.5891 8.5 11.7911 8.5 12.0001C8.5 13.9301 10.07 15.5001 12 15.5001C12.209 15.5001 12.411 15.4741 12.61 15.4381L13.879 16.7071L13.948 16.7771Z"
            />
          </mask>
          <g mask="url(#EyeOffmask0)">
            <g id="EyeOff&#EyeOff240;&#EyeOff159;&#EyeOff142;&#EyeOff168; Color">
              <rect id="EyeOffBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="EyeOff-oIcon/Outline/eye-off">
          <path
            id="EyeOff-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 13.5C11.173 13.5 10.5 12.827 10.5 12C10.5 11.9869 10.503 11.9741 10.506 11.9613L10.506 11.9613C10.5088 11.9496 10.5115 11.9379 10.512 11.926L12.074 13.488C12.0621 13.4885 12.0504 13.4912 12.0387 13.494C12.0259 13.497 12.0131 13.5 12 13.5ZM4.70699 3.29301C4.31599 2.90201 3.68399 2.90201 3.29299 3.29301C2.90199 3.68401 2.90199 4.31601 3.29299 4.70701L8.92299 10.337C8.64699 10.846 8.49999 11.411 8.49999 12C8.49999 13.93 10.07 15.5 12 15.5C12.589 15.5 13.154 15.353 13.663 15.077L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293L4.70699 3.29301ZM12.2197 16.9976C7.91469 17.0976 5.10469 13.4146 4.17269 11.9956C4.62969 11.2816 5.39569 10.2356 6.45569 9.28461L5.04469 7.87261C3.52269 9.26161 2.54669 10.7796 2.13269 11.5026C1.95569 11.8106 1.95569 12.1896 2.13269 12.4976C2.76169 13.5946 6.16169 18.9996 12.0247 18.9996C12.1067 18.9996 12.1887 18.9986 12.2707 18.9966C13.4547 18.9666 14.5267 18.7106 15.4977 18.3266L13.9177 16.7466C13.3827 16.8886 12.8197 16.9826 12.2197 16.9976ZM11.7297 5.00341C17.7047 4.81641 21.2297 10.3904 21.8677 11.5024C22.0437 11.8104 22.0437 12.1894 21.8677 12.4974C21.4527 13.2204 20.4767 14.7384 18.9547 16.1274L17.5437 14.7154C18.6037 13.7644 19.3707 12.7184 19.8267 12.0044C18.8947 10.5854 16.0717 6.89441 11.7807 7.00241C11.1807 7.01741 10.6177 7.11141 10.0817 7.25341L8.50169 5.67341C9.47369 5.28941 10.5447 5.03341 11.7297 5.00341Z"
          />
          <mask
            id="EyeOff-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="2"
            y="2"
            width="20"
            height="19"
          >
            <path
              id="EyeOff-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 13.5C11.173 13.5 10.5 12.827 10.5 12C10.5 11.9869 10.503 11.9741 10.506 11.9613L10.506 11.9613C10.5088 11.9496 10.5115 11.9379 10.512 11.926L12.074 13.488C12.0621 13.4885 12.0504 13.4912 12.0387 13.494C12.0259 13.497 12.0131 13.5 12 13.5ZM4.70699 3.29301C4.31599 2.90201 3.68399 2.90201 3.29299 3.29301C2.90199 3.68401 2.90199 4.31601 3.29299 4.70701L8.92299 10.337C8.64699 10.846 8.49999 11.411 8.49999 12C8.49999 13.93 10.07 15.5 12 15.5C12.589 15.5 13.154 15.353 13.663 15.077L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293L4.70699 3.29301ZM12.2197 16.9976C7.91469 17.0976 5.10469 13.4146 4.17269 11.9956C4.62969 11.2816 5.39569 10.2356 6.45569 9.28461L5.04469 7.87261C3.52269 9.26161 2.54669 10.7796 2.13269 11.5026C1.95569 11.8106 1.95569 12.1896 2.13269 12.4976C2.76169 13.5946 6.16169 18.9996 12.0247 18.9996C12.1067 18.9996 12.1887 18.9986 12.2707 18.9966C13.4547 18.9666 14.5267 18.7106 15.4977 18.3266L13.9177 16.7466C13.3827 16.8886 12.8197 16.9826 12.2197 16.9976ZM11.7297 5.00341C17.7047 4.81641 21.2297 10.3904 21.8677 11.5024C22.0437 11.8104 22.0437 12.1894 21.8677 12.4974C21.4527 13.2204 20.4767 14.7384 18.9547 16.1274L17.5437 14.7154C18.6037 13.7644 19.3707 12.7184 19.8267 12.0044C18.8947 10.5854 16.0717 6.89441 11.7807 7.00241C11.1807 7.01741 10.6177 7.11141 10.0817 7.25341L8.50169 5.67341C9.47369 5.28941 10.5447 5.03341 11.7297 5.00341Z"
            />
          </mask>
          <g mask="url(#EyeOff-omask0)">
            <g id="EyeOff-o&#EyeOff-o240;&#EyeOff-o159;&#EyeOff-o142;&#EyeOff-o168; Color">
              <rect id="EyeOff-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
