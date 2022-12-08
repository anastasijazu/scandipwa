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

import { ButtonColors, ButtonVariants } from './Button.config';
import { ButtonComponentProps } from './Button.type';

import './Button.style';

/** @namespace Ui/Button/Component */
export class ButtonComponent<
P extends ButtonComponentProps = ButtonComponentProps,
> extends PureComponent<P> {
    static defaultProps: Partial<ButtonComponentProps> = {
        mix: {},
        color: ButtonColors.PRIMARY,
        variant: ButtonVariants.FILLED,
        isLoading: false,
        isFullWidth: false,
    };

    render(): ReactElement {
        const {
            children,
            attr,
            events,
            color,
            variant,
            isLoading,
            disabled,
            onClick,
            mix,
            isFullWidth,
        } = this.props;

        return (
             <button
               block="Button"
               mods={ {
                   variant,
                   color,
                   isLoading,
                   isFullWidth,
               } }
               mix={ mix }
               disabled={ disabled }
               onClick={ onClick }
               { ...attr as ButtonHTMLAttributes<HTMLButtonElement> }
               { ...events as FieldReactEvents<HTMLButtonElement> }
             >
                 { children }
             </button>
        );
    }
}

export default ButtonComponent;
