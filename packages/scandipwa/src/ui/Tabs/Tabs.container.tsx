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

import {
    TabsComponentProps,
    TabsContainerFunctions,
    TabsContainerProps,
    TabsContainerPropsKeys,
} from './Tabs.type';
import TabsList from './TabsList';

/** @namespace Ui/Tabs/Container */
export class TabsContainer extends PureComponent<TabsContainerProps> {
    static List = TabsList;

    containerFunctions: TabsContainerFunctions = {
        // getData: this.getData.bind(this)
    };

    // Adjust keys for return
    containerProps(): Pick<TabsComponentProps, TabsContainerPropsKeys> {
        return {

        };
    }

    render() {
        return (
            <Tabs
              { ...this.containerFunctions }
              { ...this.containerProps() }
            />
        );
    }
}

export default TabsContainer;
