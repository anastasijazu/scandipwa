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
    LinkComponentProps,
    LinkContainerComponentPropKeys,
    LinkContainerFunctions,
    LinkContainerMapDispatchProps,
    LinkContainerMapStateProps,
    LinkContainerProps,
} from 'Ui/Link/Link.type';

export interface IconLinkContainerFunctions extends LinkContainerFunctions {}

export type IconLinkContainerProps =
 LinkContainerMapStateProps
 & LinkContainerMapDispatchProps
 & LinkContainerProps;

export interface IconLinkComponentProps extends LinkComponentProps {}

export type IconLinkContainerComponentPropKeys = LinkContainerComponentPropKeys;
