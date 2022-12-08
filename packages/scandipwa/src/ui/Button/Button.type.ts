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

import { MouseEventHandler } from 'react';

import {
    FieldAttributes, FieldEvents,
} from 'Component/Field/Field.type';
import { Children, Mix, Mods } from 'Type/Common.type';

import { ButtonColors, ButtonVariants } from './Button.config';

export interface ButtonComponentProps {
    children: Children;
    mix: Mix;
    variant: ButtonVariants | string;
    color: ButtonColors | string;
    isFullWidth: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    mods: Mods;
    disabled?: boolean;
    attr?: FieldAttributes;
    events?: FieldEvents;
    isLoading: boolean;
}

export type ButtonComponentPropKeys =
    | 'mods'
    | 'onClick'
    | 'block'
    | 'disabled'
    | 'mix';
