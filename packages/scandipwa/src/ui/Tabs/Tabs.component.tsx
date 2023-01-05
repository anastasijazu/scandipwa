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

import { PureComponent } from 'react';

import AddIcon from 'Component/AddIcon';

import { TabsComponentProps } from './Tabs.type';

import './Tabs.style';

/** @namespace Ui/Tabs/Component */
export class TabsComponent extends PureComponent<TabsComponentProps> {
    static Test = AddIcon;

    render() {
        return (
            <div block="Tabs">
                { /* TODO: Implement render method */ }
            </div>
        );
    }
}

export default TabsComponent;
