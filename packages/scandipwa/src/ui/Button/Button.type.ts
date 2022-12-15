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

import { ButtonHTMLAttributes } from 'react';

import { Children, Mix } from 'Type/Common.type';

import { ButtonColors, ButtonVariants } from './Button.config';

export interface ButtonAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {}
export interface ButtonContainerProps extends ButtonAttributes {
    children: Children;
    mix: Mix;
    variant: ButtonVariants;
    color: ButtonColors;
    isLoading: boolean;
}

export interface ButtonComponentProps extends ButtonAttributes {
    children: Children;
    mix: Mix;
}

export type ButtonContainerComponentPropKeys = 'mix' | 'children';
