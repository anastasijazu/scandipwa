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

import Tab from './Tab.component';
import {
    TabComponentProps,
    TabContainerFunctions,
    TabContainerProps,
    TabContainerPropsKeys,
} from './Tab.type';

/** @namespace Component/Tab/Container */
export class TabContainer extends PureComponent<TabContainerProps> {
    containerFunctions: TabContainerFunctions = {
        // getData: this.getData.bind(this)
    };

    // Adjust keys for return
    containerProps(): Pick<TabComponentProps, TabContainerPropsKeys> {
        return {
            // isDisabled: this._getIsDisabled()
        };
    }

    render() {
        return (
            <Tab
              { ...this.containerFunctions }
              { ...this.containerProps() }
            />
        );
    }
}

export default TabContainer;
