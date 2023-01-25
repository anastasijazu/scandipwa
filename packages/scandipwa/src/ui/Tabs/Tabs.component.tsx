/* eslint-disable react/forbid-component-props */
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

import * as Tabs from '@radix-ui/react-tabs';
import { PureComponent } from 'react';
import { stringify } from 'rebem-classname';

import { ReactElement } from 'Type/Common.type';

import { TabColors } from './Tabs.config';
import { TabsComponentProps, TabShape } from './Tabs.type';

import './Tabs.style';

/** @namespace Ui/Tabs/Component */
export class TabsComponent extends PureComponent<TabsComponentProps> {
    static defaultProps: Partial<TabsComponentProps> = {
        defaultValue: '',
        color: TabColors.SECONDARY,
    };

    renderTab(item: TabShape): ReactElement {
        const { id, name, shouldTabBeRemoved } = item;

        if (shouldTabBeRemoved) {
            return null;
        }

        return (
            <Tabs.Trigger value={ id }>{ name }</Tabs.Trigger>
        );
    }

    renderTabContent(item: TabShape): ReactElement {
        const {
            id, name, render, shouldTabBeRemoved,
        } = item;

        if (shouldTabBeRemoved) {
            return null;
        }

        return (
            <Tabs.Content value={ id }>{ render(name) }</Tabs.Content>
        );
    }

    getDefaultValue(): string | undefined {
        const { tabs } = this.props;

        const defaultActiveTab = tabs.find(({ shouldTabBeRemoved }) => !shouldTabBeRemoved);

        return defaultActiveTab?.id;
    }

    renderTabs(): ReactElement {
        const { tabs, defaultValue, color } = this.props;

        if (!tabs?.length) {
            return null;
        }

        const classNameConverted = `${ stringify({
            block: 'Tabs',
            mods: { color },
        })}`;

        return (
            <Tabs.Root defaultValue={ defaultValue || this.getDefaultValue() }>
                <Tabs.List className={ classNameConverted }>
                    { tabs.map(this.renderTab.bind(this)) }
                </Tabs.List>
                { tabs.map(this.renderTabContent.bind(this)) }
            </Tabs.Root>
        );
    }

    render(): ReactElement {
        return this.renderTabs();
    }
}

export default TabsComponent;
