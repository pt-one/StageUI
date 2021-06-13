/**
The MIT License (MIT)
*/
import React from 'react'
import { Props, createIcon } from '../Icon'

export default React.forwardRef((props: Props, ref: React.ForwardedRef<HTMLSpanElement>) =>
  createIcon(props, ref, {
    filled: (
      <g>
        <g id="SwapIcon/Fill/swap">
          <path
            id="SwapMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 8.00038H4.00002C3.44802 8.00038 3.00002 7.55338 3.00002 7.00038C3.00002 6.44738 3.44802 6.00038 4.00002 6.00038H17.082L15.524 4.79038C15.088 4.45138 15.009 3.82238 15.348 3.38738C15.687 2.95038 16.316 2.87138 16.751 3.21038L20.613 6.21038C20.86 6.40138 21.002 6.69638 21 7.00938C20.998 7.32038 20.85 7.61338 20.6 7.80038L16.6 10.8004C16.42 10.9354 16.209 11.0004 16.001 11.0004C15.697 11.0004 15.396 10.8624 15.2 10.6004C14.869 10.1584 14.958 9.53138 15.4 9.20038L17 8.00038ZM7.00002 15.0004H20C20.552 15.0004 21 15.4474 21 16.0004C21 16.5534 20.552 17.0004 20 17.0004H6.91802L8.47602 18.2104C8.91202 18.5494 8.99102 19.1784 8.65202 19.6134C8.45502 19.8674 8.16002 20.0004 7.86202 20.0004C7.64702 20.0004 7.43102 19.9324 7.24902 19.7904L3.38702 16.7904C3.14002 16.5994 2.99802 16.3044 3.00002 15.9914C3.00202 15.6804 3.15002 15.3874 3.40002 15.2004L7.40002 12.2004C7.84302 11.8694 8.46902 11.9584 8.80002 12.4004C9.13102 12.8424 9.04202 13.4694 8.60002 13.8004L7.00002 15.0004Z"
          />
          <mask
            id="Swapmask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="18"
            height="18"
          >
            <path
              id="SwapMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 8.00038H4.00002C3.44802 8.00038 3.00002 7.55338 3.00002 7.00038C3.00002 6.44738 3.44802 6.00038 4.00002 6.00038H17.082L15.524 4.79038C15.088 4.45138 15.009 3.82238 15.348 3.38738C15.687 2.95038 16.316 2.87138 16.751 3.21038L20.613 6.21038C20.86 6.40138 21.002 6.69638 21 7.00938C20.998 7.32038 20.85 7.61338 20.6 7.80038L16.6 10.8004C16.42 10.9354 16.209 11.0004 16.001 11.0004C15.697 11.0004 15.396 10.8624 15.2 10.6004C14.869 10.1584 14.958 9.53138 15.4 9.20038L17 8.00038ZM7.00002 15.0004H20C20.552 15.0004 21 15.4474 21 16.0004C21 16.5534 20.552 17.0004 20 17.0004H6.91802L8.47602 18.2104C8.91202 18.5494 8.99102 19.1784 8.65202 19.6134C8.45502 19.8674 8.16002 20.0004 7.86202 20.0004C7.64702 20.0004 7.43102 19.9324 7.24902 19.7904L3.38702 16.7904C3.14002 16.5994 2.99802 16.3044 3.00002 15.9914C3.00202 15.6804 3.15002 15.3874 3.40002 15.2004L7.40002 12.2004C7.84302 11.8694 8.46902 11.9584 8.80002 12.4004C9.13102 12.8424 9.04202 13.4694 8.60002 13.8004L7.00002 15.0004Z"
            />
          </mask>
          <g mask="url(#Swapmask0)">
            <g id="Swap&#Swap240;&#Swap159;&#Swap142;&#Swap168; Color">
              <rect id="SwapBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
    outline: (
      <g>
        <g id="Swap-oIcon/Outline/swap">
          <path
            id="Swap-oMask"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17 8.00038H4.00002C3.44802 8.00038 3.00002 7.55338 3.00002 7.00038C3.00002 6.44738 3.44802 6.00038 4.00002 6.00038H17.082L15.524 4.79038C15.088 4.45138 15.009 3.82238 15.348 3.38738C15.687 2.95038 16.316 2.87138 16.751 3.21038L20.613 6.21038C20.86 6.40138 21.002 6.69638 21 7.00938C20.998 7.32038 20.85 7.61338 20.6 7.80038L16.6 10.8004C16.42 10.9354 16.209 11.0004 16.001 11.0004C15.697 11.0004 15.396 10.8624 15.2 10.6004C14.869 10.1584 14.958 9.53138 15.4 9.20038L17 8.00038ZM7.00002 15.0004H20C20.552 15.0004 21 15.4474 21 16.0004C21 16.5534 20.552 17.0004 20 17.0004H6.91802L8.47602 18.2104C8.91202 18.5494 8.99102 19.1784 8.65202 19.6134C8.45502 19.8674 8.16002 20.0004 7.86202 20.0004C7.64702 20.0004 7.43102 19.9324 7.24902 19.7904L3.38702 16.7904C3.14002 16.5994 2.99802 16.3044 3.00002 15.9914C3.00202 15.6804 3.15002 15.3874 3.40002 15.2004L7.40002 12.2004C7.84302 11.8694 8.46902 11.9584 8.80002 12.4004C9.13102 12.8424 9.04202 13.4694 8.60002 13.8004L7.00002 15.0004Z"
          />
          <mask
            id="Swap-omask0"
            mask-type="alpha"
            maskUnits="userSpaceOnUse"
            x="3"
            y="3"
            width="18"
            height="18"
          >
            <path
              id="Swap-oMask_2"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 8.00038H4.00002C3.44802 8.00038 3.00002 7.55338 3.00002 7.00038C3.00002 6.44738 3.44802 6.00038 4.00002 6.00038H17.082L15.524 4.79038C15.088 4.45138 15.009 3.82238 15.348 3.38738C15.687 2.95038 16.316 2.87138 16.751 3.21038L20.613 6.21038C20.86 6.40138 21.002 6.69638 21 7.00938C20.998 7.32038 20.85 7.61338 20.6 7.80038L16.6 10.8004C16.42 10.9354 16.209 11.0004 16.001 11.0004C15.697 11.0004 15.396 10.8624 15.2 10.6004C14.869 10.1584 14.958 9.53138 15.4 9.20038L17 8.00038ZM7.00002 15.0004H20C20.552 15.0004 21 15.4474 21 16.0004C21 16.5534 20.552 17.0004 20 17.0004H6.91802L8.47602 18.2104C8.91202 18.5494 8.99102 19.1784 8.65202 19.6134C8.45502 19.8674 8.16002 20.0004 7.86202 20.0004C7.64702 20.0004 7.43102 19.9324 7.24902 19.7904L3.38702 16.7904C3.14002 16.5994 2.99802 16.3044 3.00002 15.9914C3.00202 15.6804 3.15002 15.3874 3.40002 15.2004L7.40002 12.2004C7.84302 11.8694 8.46902 11.9584 8.80002 12.4004C9.13102 12.8424 9.04202 13.4694 8.60002 13.8004L7.00002 15.0004Z"
            />
          </mask>
          <g mask="url(#Swap-omask0)">
            <g id="Swap-o&#Swap-o240;&#Swap-o159;&#Swap-o142;&#Swap-o168; Color">
              <rect id="Swap-oBase" width="24" height="24" />
            </g>
          </g>
        </g>
      </g>
    ),
  }),
)
