/**
The MIT License (MIT)
*/

import { Props, createIcon } from '../Icon'
import React from 'react'

export default React.forwardRef((props: Props, ref: React.RefObject<HTMLSpanElement>) => (
    createIcon(props, ref, {
        filled: <g><g id="RewindLeftIcon/Fill/rewind-left"><path id="RewindLeftMask" fillRule="evenodd" clipRule="evenodd" d="M18.4502 6.20121C17.7162 5.85621 16.8492 5.95821 16.2412 6.46121L11.5002 10.3772V7.78721C11.5002 7.11421 11.0972 6.50721 10.4502 6.20121C9.71618 5.85621 8.84918 5.95821 8.24118 6.46121L3.14118 10.6742C2.73418 11.0102 2.50018 11.4942 2.50018 12.0002C2.50018 12.5062 2.73418 12.9902 3.14118 13.3262L8.24118 17.5402C8.60918 17.8442 9.07318 18.0012 9.54418 18.0012C9.85118 18.0012 10.1612 17.9342 10.4502 17.7992C11.0972 17.4932 11.5002 16.8862 11.5002 16.2132V13.6222L16.2412 17.5402C16.6092 17.8442 17.0732 18.0012 17.5442 18.0012C17.8512 18.0012 18.1612 17.9342 18.4502 17.7992C19.0972 17.4932 19.5002 16.8862 19.5002 16.2132V7.78721C19.5002 7.11421 19.0972 6.50721 18.4502 6.20121Z"/><mask id="RewindLeftmask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="5" width="18" height="14"><path id="RewindLeftMask_2" fillRule="evenodd" clipRule="evenodd" d="M18.4502 6.20121C17.7162 5.85621 16.8492 5.95821 16.2412 6.46121L11.5002 10.3772V7.78721C11.5002 7.11421 11.0972 6.50721 10.4502 6.20121C9.71618 5.85621 8.84918 5.95821 8.24118 6.46121L3.14118 10.6742C2.73418 11.0102 2.50018 11.4942 2.50018 12.0002C2.50018 12.5062 2.73418 12.9902 3.14118 13.3262L8.24118 17.5402C8.60918 17.8442 9.07318 18.0012 9.54418 18.0012C9.85118 18.0012 10.1612 17.9342 10.4502 17.7992C11.0972 17.4932 11.5002 16.8862 11.5002 16.2132V13.6222L16.2412 17.5402C16.6092 17.8442 17.0732 18.0012 17.5442 18.0012C17.8512 18.0012 18.1612 17.9342 18.4502 17.7992C19.0972 17.4932 19.5002 16.8862 19.5002 16.2132V7.78721C19.5002 7.11421 19.0972 6.50721 18.4502 6.20121Z"/></mask><g mask="url(#RewindLeftmask0)"><g id="RewindLeft&#RewindLeft240;&#RewindLeft159;&#RewindLeft142;&#RewindLeft168; Color"><rect id="RewindLeftBase" width="24" height="24"/></g></g></g></g>,
        outline: <g><g id="RewindLeft-oIcon/Outline/rewind-left"><path id="RewindLeft-oMask" fillRule="evenodd" clipRule="evenodd" d="M17.5 15.9854L12.678 12.0024L17.5 8.09139V15.9854ZM9.5 15.9854L4.678 12.0024L9.5 8.09139V15.9854ZM18.45 6.20139C17.716 5.85639 16.849 5.95839 16.241 6.46139L11.5 10.3774V7.78739C11.5 7.11439 11.098 6.50639 10.45 6.20139C9.716 5.85639 8.849 5.95839 8.241 6.46139L3.141 10.6734C2.734 11.0094 2.5 11.4944 2.5 12.0004C2.5 12.5064 2.734 12.9904 3.142 13.3264L8.241 17.5404C8.609 17.8434 9.073 18.0014 9.544 18.0014C9.851 18.0014 10.161 17.9344 10.45 17.7984C11.098 17.4934 11.5 16.8854 11.5 16.2134V13.6224L16.241 17.5404C16.609 17.8434 17.073 18.0014 17.544 18.0014C17.851 18.0014 18.161 17.9344 18.45 17.7984C19.098 17.4934 19.5 16.8854 19.5 16.2134V7.78739C19.5 7.11439 19.098 6.50639 18.45 6.20139Z"/><mask id="RewindLeft-omask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="2" y="5" width="18" height="14"><path id="RewindLeft-oMask_2" fillRule="evenodd" clipRule="evenodd" d="M17.5 15.9854L12.678 12.0024L17.5 8.09139V15.9854ZM9.5 15.9854L4.678 12.0024L9.5 8.09139V15.9854ZM18.45 6.20139C17.716 5.85639 16.849 5.95839 16.241 6.46139L11.5 10.3774V7.78739C11.5 7.11439 11.098 6.50639 10.45 6.20139C9.716 5.85639 8.849 5.95839 8.241 6.46139L3.141 10.6734C2.734 11.0094 2.5 11.4944 2.5 12.0004C2.5 12.5064 2.734 12.9904 3.142 13.3264L8.241 17.5404C8.609 17.8434 9.073 18.0014 9.544 18.0014C9.851 18.0014 10.161 17.9344 10.45 17.7984C11.098 17.4934 11.5 16.8854 11.5 16.2134V13.6224L16.241 17.5404C16.609 17.8434 17.073 18.0014 17.544 18.0014C17.851 18.0014 18.161 17.9344 18.45 17.7984C19.098 17.4934 19.5 16.8854 19.5 16.2134V7.78739C19.5 7.11439 19.098 6.50639 18.45 6.20139Z"/></mask><g mask="url(#RewindLeft-omask0)"><g id="RewindLeft-o&#RewindLeft-o240;&#RewindLeft-o159;&#RewindLeft-o142;&#RewindLeft-o168; Color"><rect id="RewindLeft-oBase" width="24" height="24"/></g></g></g></g>,
    })
))