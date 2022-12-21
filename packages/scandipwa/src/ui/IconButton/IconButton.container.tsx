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

import { ReactElement } from 'Type/Common.type';
import { ButtonVariants } from 'Ui/Button/Button.config';
import ButtonContainer from 'Ui/Button/Button.container';

import IconButtonComponent from './IconButton.component';
import {
    IconButtonComponentProps,
    IconButtonContainerComponentPropKeys,
    IconButtonContainerProps,
} from './IconButton.type';

/** @namespace Ui/IconButton/Container */
export class IconButtonContainer extends ButtonContainer<IconButtonContainerProps> {
    static defaultProps: Partial<IconButtonContainerProps> = {
        ...ButtonContainer.defaultProps,
        variant: ButtonVariants.TRANSPARENT,
    };

    containerProps(): Pick<IconButtonComponentProps, IconButtonContainerComponentPropKeys> {
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
                block: 'IconButton',
                mods: { variant, color, isLoading },
                mix,
            },
            ...restProps,
        };
    }

    render(): ReactElement {
        return (
               <IconButtonComponent
                 { ...this.containerProps() }
               />
        );
    }
}

export default IconButtonContainer;
