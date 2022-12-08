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

import { ButtonHTMLAttributes } from 'react';

import { FieldReactEvents } from 'Component/Field/Field.type';
import Button from 'Src/ui/Button';
import { ReactElement } from 'Type/Common.type';

import { ButtonVariants } from '../Button/Button.config';
import { IconButtonComponentProps } from './IconButton.type';

import './IconButton.style';

/** @namespace Ui/IconButton/Component */
export class IconButtonComponent extends Button<IconButtonComponentProps> {
    static defaultProps: Partial<IconButtonComponentProps> = {
        ...Button.defaultProps,
        variant: ButtonVariants.TRANSPARENT,
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
        } = this.props;

        return (
             <button
               block="IconButton"
               mods={ {
                   variant,
                   color,
                   isLoading,
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

export default IconButtonComponent;
