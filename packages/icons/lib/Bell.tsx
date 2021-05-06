/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="icon8715Icon/Fill/bell"><path id="icon8715Mask" fill-rule="evenodd" clip-rule="evenodd" d="M14 18.3413C14 19.2403 13.084 20.0003 12 20.0003C10.916 20.0003 10 19.2403 10 18.3413V18.0003H14V18.3413ZM20.521 15.2073L18.72 13.4043V8.93632C18.72 5.45532 16.218 2.49932 12.899 2.05932C10.978 1.80432 9.03803 2.39032 7.58303 3.66632C6.11903 4.94832 5.28003 6.79332 5.28003 8.72732L5.27903 13.4043L3.47903 15.2083C3.01003 15.6773 2.87103 16.3773 3.12503 16.9903C3.38003 17.6033 3.97303 18.0003 4.63703 18.0003H8.00003V18.3413C8.00003 20.3593 9.79403 22.0003 12 22.0003C14.206 22.0003 16 20.3593 16 18.3413V18.0003H19.362C20.026 18.0003 20.619 17.6043 20.873 16.9903C21.128 16.3773 20.989 15.6773 20.521 15.2073Z"/><mask id="icon8715mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="19" height="21"><path id="icon8715Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M14 18.3413C14 19.2403 13.084 20.0003 12 20.0003C10.916 20.0003 10 19.2403 10 18.3413V18.0003H14V18.3413ZM20.521 15.2073L18.72 13.4043V8.93632C18.72 5.45532 16.218 2.49932 12.899 2.05932C10.978 1.80432 9.03803 2.39032 7.58303 3.66632C6.11903 4.94832 5.28003 6.79332 5.28003 8.72732L5.27903 13.4043L3.47903 15.2083C3.01003 15.6773 2.87103 16.3773 3.12503 16.9903C3.38003 17.6033 3.97303 18.0003 4.63703 18.0003H8.00003V18.3413C8.00003 20.3593 9.79403 22.0003 12 22.0003C14.206 22.0003 16 20.3593 16 18.3413V18.0003H19.362C20.026 18.0003 20.619 17.6043 20.873 16.9903C21.128 16.3773 20.989 15.6773 20.521 15.2073Z"/></mask><g mask="url(#icon8715mask0)"><g id="icon8715&#icon8715240;&#icon8715159;&#icon8715142;&#icon8715168; Color"><rect id="icon8715Base" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="icon4384Icon/Outline/bell"><path id="icon4384Mask" fill-rule="evenodd" clip-rule="evenodd" d="M5.5146 16L6.6946 14.818C7.0726 14.44 7.2806 13.938 7.2806 13.404V8.72702C7.2806 7.37002 7.8706 6.07302 8.9006 5.17102C9.9386 4.26102 11.2606 3.86102 12.6376 4.04202C14.9646 4.35102 16.7196 6.45502 16.7196 8.93702V13.404C16.7196 13.938 16.9276 14.44 17.3046 14.817L18.4856 16H5.5146ZM13.9996 18.341C13.9996 19.24 13.0836 20 11.9996 20C10.9156 20 9.9996 19.24 9.9996 18.341V18H13.9996V18.341ZM20.5206 15.208L18.7196 13.404V8.93702C18.7196 5.45602 16.2176 2.49902 12.8996 2.06002C10.9776 1.80402 9.0376 2.39102 7.5826 3.66702C6.1186 4.94902 5.2806 6.79302 5.2806 8.72702L5.2796 13.404L3.4786 15.208C3.0096 15.678 2.8706 16.377 3.1246 16.99C3.3796 17.604 3.9726 18 4.6366 18H7.9996V18.341C7.9996 20.359 9.7936 22 11.9996 22C14.2056 22 15.9996 20.359 15.9996 18.341V18H19.3626C20.0266 18 20.6186 17.604 20.8726 16.991C21.1276 16.377 20.9896 15.677 20.5206 15.208Z"/><mask id="icon4384mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="2" width="19" height="20"><path id="icon4384Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M5.5146 16L6.6946 14.818C7.0726 14.44 7.2806 13.938 7.2806 13.404V8.72702C7.2806 7.37002 7.8706 6.07302 8.9006 5.17102C9.9386 4.26102 11.2606 3.86102 12.6376 4.04202C14.9646 4.35102 16.7196 6.45502 16.7196 8.93702V13.404C16.7196 13.938 16.9276 14.44 17.3046 14.817L18.4856 16H5.5146ZM13.9996 18.341C13.9996 19.24 13.0836 20 11.9996 20C10.9156 20 9.9996 19.24 9.9996 18.341V18H13.9996V18.341ZM20.5206 15.208L18.7196 13.404V8.93702C18.7196 5.45602 16.2176 2.49902 12.8996 2.06002C10.9776 1.80402 9.0376 2.39102 7.5826 3.66702C6.1186 4.94902 5.2806 6.79302 5.2806 8.72702L5.2796 13.404L3.4786 15.208C3.0096 15.678 2.8706 16.377 3.1246 16.99C3.3796 17.604 3.9726 18 4.6366 18H7.9996V18.341C7.9996 20.359 9.7936 22 11.9996 22C14.2056 22 15.9996 20.359 15.9996 18.341V18H19.3626C20.0266 18 20.6186 17.604 20.8726 16.991C21.1276 16.377 20.9896 15.677 20.5206 15.208Z"/></mask><g mask="url(#icon4384mask0)"><g id="icon4384&#icon4384240;&#icon4384159;&#icon4384142;&#icon4384168; Color"><rect id="icon4384Base" width="24" height="24"/></g></g></g></g>,
    })
))