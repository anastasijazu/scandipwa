/* eslint-disable react/forbid-component-props */
/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
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

import * as Tooltip from '@radix-ui/react-tooltip';
import { PureComponent } from 'react';

import Html from 'Component/Html';
import { ReactElement } from 'Type/Common.type';

import { TooltipComponentProps } from './Tooltip.type';

import './Tooltip.style';

/** @namespace Ui/Tooltip/Component */
export class TooltipComponent extends PureComponent<TooltipComponentProps> {
    renderChildren(): ReactElement {
        const { children, mix } = this.props;

        if (!children) {
            return (
                <span block="Tooltip" mix={ mix }>Tooltip</span>
            );
        }

        return <span block="Tooltip" mix={ mix }>{ children }</span>;
    }

    render(): ReactElement {
        const { content, side, sideOffset } = this.props;

        return (
            <Tooltip.Provider>
              <Tooltip.Root delayDuration={ 100 }>
                <Tooltip.Trigger asChild>
                  { this.renderChildren() }
                </Tooltip.Trigger>
                  <Tooltip.Content
                    className="Tooltip-Content"
                    side={ side }
                    sideOffset={ sideOffset }
                  >
                    <Html content={ content } />
                    <Tooltip.Arrow className="Tooltip-Arrow" />
                  </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
        );
    }
}

export default TooltipComponent;
