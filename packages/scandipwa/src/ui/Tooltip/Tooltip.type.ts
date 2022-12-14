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

import { TooltipPlacementType } from './Tooltip.config';

export interface TooltipContainerProps {
    children: Children;
    mix: Mix;
    content: any;
    placement: TooltipPlacementType;
    arrow: boolean;
}
