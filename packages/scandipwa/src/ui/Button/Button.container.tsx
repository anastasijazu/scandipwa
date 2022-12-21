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

import ButtonComponent from './Button.component';
import { ButtonColors, ButtonVariants } from './Button.config';
import {
    ButtonComponentProps,
    ButtonContainerComponentPropKeys,
    ButtonContainerProps,
} from './Button.type';

/** @namespace Ui/Button/Container */
export class ButtonContainer<
 P extends ButtonContainerProps = ButtonContainerProps,
 > extends PureComponent<P> {
    static defaultProps: Partial<ButtonContainerProps> = {
        mix: {},
        color: ButtonColors.PRIMARY,
        variant: ButtonVariants.FILLED,
        isLoading: false,
    };

    containerProps(): Pick<ButtonComponentProps, ButtonContainerComponentPropKeys> {
        const {
            children,
            color,
            variant,
            isLoading,
            mix,
            ...restProps
        } = this.props;

        return {
            children,
            mix: {
                block: 'Button',
                mods: { variant, color, isLoading },
                mix,
            },
            ...restProps,
        };
    }

    render(): ReactElement {
        return (
              <ButtonComponent
                { ...this.containerProps() }
              />
        );
    }
}

export default ButtonContainer;
