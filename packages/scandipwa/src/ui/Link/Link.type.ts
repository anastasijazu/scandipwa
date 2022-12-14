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
    HTMLAttributes, LinkHTMLAttributes, MouseEvent,
} from 'react';

import {
    Children,
    Mix,
    Mods,
    Url,
} from 'Type/Common.type';

import { LinkUnderlineType } from './Link.config';

export type LinkAttributes = LinkHTMLAttributes<HTMLLinkElement>
| HTMLAttributes<HTMLDivElement>;

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
    LinkContainerMapStateProps & LinkContainerMapDispatchProps & {
        variant: string;
        color: string;
        disabled: boolean;
        onClick: (e: MouseEvent) => void;
        to?: Url | string;
        children: Children;
        isOpenInNewTab: boolean;
        isUnstyled: boolean;
        underline: LinkUnderlineType;
        mix: Mix;
        attr: LinkAttributes;
        key: string | number;
        onMouseEnter: () => void;
        onMouseLeave: () => void;
    };

export interface LinkComponentProps {
    to: Url | string;
    children: Children;
    onClick: (e: MouseEvent) => void;
    block: string;
    mods: Mods;
    mix: Mix;
    key: string | number;
    isOpenInNewTab: boolean;
    isUnstyled: boolean;
    attr: LinkAttributes;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

export type LinkContainerComponentPropKeys =
    | 'to'
    | 'children'
    | 'mix'
    | 'isOpenInNewTab'
    | 'attr'
    | 'block'
    | 'mods'
    | 'isUnstyled'
    | 'key'
    | 'onMouseEnter'
    | 'onMouseLeave';
