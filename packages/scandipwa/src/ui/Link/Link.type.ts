/**
 * ScandiPWA - Progressive Web App for Magento
 *
 * Copyright © Scandiweb, Inc. All rights reserved.
 * See LICENSE for license details.
 *
 * @license OSL-3.0 (Open Software License ("OSL") v. 3.0)
 * @package scandipwa/scandipwa
 * @link https://github.com/scandipwa/scandipwa
 */

import {
    LinkHTMLAttributes, MouseEvent,
} from 'react';

import {
    Children,
    Mix,
    Url,
} from 'Type/Common.type';

import { LinkUnderlineType } from './Link.config';

export interface LinkAttributes extends LinkHTMLAttributes<HTMLLinkElement> {
    key: string | number;
    onClick: (e: MouseEvent) => void;
}

export interface LinkContainerMapStateProps {
    baseLinkUrl: string;
}

export interface LinkContainerMapDispatchProps {
    updateNoMatch: (noMatch: boolean) => void;
}

export interface LinkContainerFunctions {
    onClick: (e: MouseEvent) => void;
}

export type LinkContainerProps =
    LinkContainerMapStateProps
    & LinkContainerMapDispatchProps
    & LinkAttributes
    & {
        variant: string;
        color: string;
        to?: Url | string;
        children: Children;
        isOpenInNewTab: boolean;
        isUnstyled: boolean;
        underline: LinkUnderlineType;
        mix: Mix;
        disabled: boolean;
    };

export interface LinkComponentProps extends LinkAttributes {
    to: Url | string;
    children: Children;
    mix: Mix;
    isOpenInNewTab: boolean;
}

export type LinkContainerComponentPropKeys =
    | 'to'
    | 'children'
    | 'mix'
    | 'isOpenInNewTab'
    | 'onClick'
    | 'key';
