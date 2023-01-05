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

import QuestionMarkIcon from 'Component/QuestionMarkIcon';
import { ReactElement } from 'Type/Common.type';

import { TooltipSideType } from './Tooltip.config';
import { TooltipComponentProps } from './Tooltip.type';

import './Tooltip.style';

/** @namespace Ui/Tooltip/Component */
export class TooltipComponent extends PureComponent<TooltipComponentProps> {
    static defaultProps: Partial<TooltipComponentProps> = {
        mix: {},
        content: '',
        side: TooltipSideType.TOP,
        sideOffset: 0,
    };

    renderDefaultTooltip(): ReactElement {
        const { mix } = this.props;

        return (
            <span block="Tooltip" mix={ mix }>
                <QuestionMarkIcon />
            </span>
        );
    }

    renderChildren(): ReactElement {
        const { children, mix } = this.props;

        if (!children) {
            return this.renderDefaultTooltip();
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
                    { content }
                    <Tooltip.Arrow className="Tooltip-Arrow" />
                  </Tooltip.Content>
              </Tooltip.Root>
            </Tooltip.Provider>
        );
    }
}

export default TooltipComponent;
