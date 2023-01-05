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

import TabsList from './TabsList.component';
import {
    TabsListComponentProps,
    TabsListContainerFunctions,
    TabsListContainerProps,
    TabsListContainerPropsKeys,
} from './TabsList.type';

/** @namespace Ui/Tabs/TabsList/Container */
export class TabsListContainer extends PureComponent<TabsListContainerProps> {
    containerFunctions: TabsListContainerFunctions = {
        // getData: this.getData.bind(this)
    };

    // Adjust keys for return
    containerProps(): Pick<TabsListComponentProps, TabsListContainerPropsKeys> {
        return {
            // isDisabled: this._getIsDisabled()
        };
    }

    render() {
        return (
            <TabsList
              { ...this.containerFunctions }
              { ...this.containerProps() }
            />
        );
    }
}

export default TabsListContainer;
