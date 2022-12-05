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
    FieldAttributes, FieldEvents,
} from 'Component/Field/Field.type';
import { Children, Mix } from 'Type/Common.type';

import { ButtonColors, ButtonVariants } from './Button.config';

export interface ButtonComponentProps {
    children: Children;
    mix: Mix;
    variant: ButtonVariants | string;
    color: ButtonColors | string;
    attr?: FieldAttributes;
    events?: FieldEvents;
    isLoading?: boolean;
}
