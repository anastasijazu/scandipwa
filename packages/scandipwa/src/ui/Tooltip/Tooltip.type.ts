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

import { Children, Mix } from 'Type/Common.type';

import { TooltipSideType } from './Tooltip.config';

export interface TooltipContainerProps {
    children?: Children;
    mix: Mix;
    side: TooltipSideType;
    sideOffset: number;
    content: string;
}

export interface TooltipComponentProps {
    children?: Children;
    side: TooltipSideType;
    sideOffset: number;
    mix: Mix;
    content: string;
}

export type TooltipContainerComponentPropKeys =
    'mix'
    | 'children'
    | 'content'
    | 'side'
    | 'sideOffset';
