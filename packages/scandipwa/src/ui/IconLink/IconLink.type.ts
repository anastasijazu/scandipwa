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
} from 'Src/ui/Link/Link.type';

export interface IconLinkContainerMapStateProps extends LinkContainerMapStateProps {}

export interface IconLinkContainerMapDispatchProps extends LinkContainerMapDispatchProps {}

export interface IconLinkContainerFunctions extends LinkContainerFunctions {}

export type IconLinkContainerProps =
 IconLinkContainerMapStateProps
 & IconLinkContainerMapDispatchProps
 & LinkContainerProps;

export interface IconLinkComponentProps extends LinkComponentProps {}

export type IconLinkContainerComponentPropKeys = LinkContainerComponentPropKeys;
