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

import { ReactElement } from 'Type/Common.type';

import { TabColors } from './Tabs.config';

export interface TabsComponentProps {
    tabs: TabShape[];
    defaultValue: string;
    color: TabColors;
}

export interface TabShape {
    id: string;
    name: string;
    render: (key: string) => ReactElement;
    shouldTabBeRemoved?: () => boolean;
}
