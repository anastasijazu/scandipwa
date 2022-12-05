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

import { ButtonHTMLAttributes, PureComponent } from 'react';

import { FieldReactEvents } from 'Component/Field/Field.type';
import { ReactElement } from 'Type/Common.type';

import { ButtonComponentProps, ButtonComponentPropsKey } from './Button.type';

import './Button.style';

/** @namespace ui/Button/Component */
export class ButtonComponent extends PureComponent<ButtonComponentProps> {
    static defaultProps: Partial<ButtonComponentProps> = {
        mix: {},
    };

    componentProps(): Pick<ButtonComponentProps, ButtonComponentPropsKey> {
        const { mix } = this.props;

        return { mix };
    }

    render(): ReactElement {
        const {
            children, attr, events, appearance,
        } = this.props;

        const mods = appearance ? { appearance } : {};

        return (
            <button
              block="Button"
              mods={ mods }
              { ...this.componentProps() }
              { ...attr as ButtonHTMLAttributes<HTMLButtonElement> }
              { ...events as FieldReactEvents<HTMLButtonElement> }
            >
                { children }
            </button>
        );
    }
}

export default ButtonComponent;
