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

import { PureComponent } from 'react';

import { ReactElement } from 'Type/Common.type';

import { ButtonComponentProps } from './Button.type';

import './Button.style';

/** @namespace Ui/Button/Component */
export class ButtonComponent<
P extends ButtonComponentProps = ButtonComponentProps,
> extends PureComponent<P> {
    render(): ReactElement {
        const {
            children,
            mix,
            ...restProps
        } = this.props;

        return (
             <button
               mix={ mix }
               { ...restProps }
             >
                 { children }
             </button>
        );
    }
}

export default ButtonComponent;
