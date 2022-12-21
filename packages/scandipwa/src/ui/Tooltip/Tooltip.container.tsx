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

import TooltipComponent from './Tooltip.component';
import {
    TooltipComponentProps,
    TooltipContainerComponentPropKeys,
    TooltipContainerProps,
} from './Tooltip.type';

/** @namespace Ui/Tooltip/Container */
export class TooltipContainer extends PureComponent<TooltipContainerProps> {
    static defaultProps: Partial<TooltipContainerProps> = {
        mix: {},
        content: 'test',
    };

    containerProps(): Pick<TooltipComponentProps, TooltipContainerComponentPropKeys> {
        const {
            mix,
            content,
            children,
        } = this.props;

        return {
            mix,
            content,
            children,
        };
    }

    render(): ReactElement {
        return (
            <TooltipComponent
              { ...this.containerProps() }
            />
        );
    }
}

export default TooltipContainer;
