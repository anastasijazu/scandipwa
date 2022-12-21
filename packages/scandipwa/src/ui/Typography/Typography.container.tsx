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

import Typography from './Typography.component';
import { TypographyAppearance, TypographyVariants } from './Typography.config';
import {
    TypographyComponentProps,
    TypographyContainerProps,
    TypographyContainerPropsKey,
} from './Typography.type';

/** @namespace Ui/Typography/Container */
export class TypographyContainer extends PureComponent<TypographyContainerProps> {
    static defaultProps: Partial<TypographyContainerProps> = {
        variant: TypographyVariants.P,
        mix: {},
        attr: {},
        appearance: TypographyAppearance.DEFAULT,
    };

    containerProps(): Pick<TypographyComponentProps, TypographyContainerPropsKey> {
        const {
            mix,
            attr,
            children,
            variant,
            appearance,
        } = this.props;

        return {
            mix,
            attr,
            children,
            variant,
            appearance,
        };
    }

    render(): ReactElement {
        return (
            <Typography
              { ...this.containerProps() }
            />
        );
    }
}

export default TypographyContainer;
