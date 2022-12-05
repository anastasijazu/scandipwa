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

import { ReactElement } from 'Type/Common.type';
import Button from 'Ui/Button';

import { MyAccountOrderTabComponentProps } from './MyAccountOrderTab.type';

import './MyAccountOrderTab.style';

/** @namespace Component/MyAccountOrderTab/Component */
export class MyAccountOrderTabComponent extends PureComponent<MyAccountOrderTabComponentProps> {
    render(): ReactElement {
        const { title, isActive, handleClickOnTab } = this.props;

        return (
            <li
              block="MyAccountOrderTab"
              elem="Item"
              mods={ { isActive } }
            >
                <Button
                  mix={ { block: 'MyAccountOrderTab', elem: 'Button' } }
                  events={ { onClick: handleClickOnTab } }
                >
                    { title }
                </Button>
            </li>
        );
    }
}

export default MyAccountOrderTabComponent;
