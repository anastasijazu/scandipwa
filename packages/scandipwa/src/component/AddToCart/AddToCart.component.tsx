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

import CartIcon from 'Component/CartIcon';
import { ReactElement } from 'Type/Common.type';
import Button from 'Ui/Button';
import { ButtonAppearance } from 'Ui/Button/Button.config';

import { AddToCartComponentProps } from './AddToCart.type';

import './AddToCart.style';

/**
 * Button for adding product to Cart
 * @class AddToCart
 * @namespace Component/AddToCart/Component
 */
export class AddToCartComponent extends PureComponent<AddToCartComponentProps> {
    renderCartIcon(): ReactElement {
        const { isIconEnabled } = this.props;

        if (!isIconEnabled) {
            return null;
        }

        return <CartIcon />;
    }

    render(): ReactElement {
        const {
            mix,
            layout,
            isDisabled,
            isAdding,
            handleButtonClick,
        } = this.props;

        return (
            <Button
              appearance={ ButtonAppearance.PRIMARY }
              events={ { onClick: handleButtonClick } }
              attr={ { disabled: isDisabled || isAdding } }
              mix={ { block: 'AddToCart', mods: { layout }, mix } }
            >
                { this.renderCartIcon() }
                <span>{ isAdding ? __('Adding...') : __('Add to cart') }</span>
            </Button>
        );
    }
}

export default AddToCartComponent;
