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

import ChevronIcon from 'Component/ChevronIcon';
import Button from 'Src/ui/Button';
import { ReactElement } from 'Type/Common.type';

import { MyAccountTabListItemComponentProps } from './MyAccountTabListItem.type';

import './MyAccountTabListItem.style';

/** @namespace Component/MyAccountTabListItem/Component */
export class MyAccountTabListItemComponent extends PureComponent<MyAccountTabListItemComponentProps> {
    static defaultProps: Partial<MyAccountTabListItemComponentProps> = {
        isActive: false,
        children: [],
    };

    __construct(props: MyAccountTabListItemComponentProps): void {
        super.__construct?.(props);

        this.changeActiveTab = this.changeActiveTab.bind(this);
    }

    changeActiveTab(): void {
        const { changeActiveTab, tabEntry: [key] } = this.props;

        changeActiveTab(key);
    }

    render(): ReactElement {
        const { children, tabEntry: [, { tabName }], isActive } = this.props;

        return (
            <li
              block="MyAccountTabListItem"
              mods={ { isActive } }
            >
                <Button
                  mix={ { block: 'MyAccountTabListItem', elem: 'Button' } }
                  attr={ { role: 'link' } }
                  events={ { onClick: this.changeActiveTab } }
                >
                    { tabName }
                    <ChevronIcon />
                </Button>
                { children }
            </li>
        );
    }
}

export default MyAccountTabListItemComponent;
