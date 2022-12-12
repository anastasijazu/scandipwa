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

import { ChangeEvent, PureComponent } from 'react';

import Field from 'Component/Field';
import { FieldType } from 'Component/Field/Field.config';
import { EventFieldData } from 'Component/Field/Field.type';
import Form from 'Component/Form';
import Loader from 'Component/Loader';
import { ReactElement } from 'Type/Common.type';
import Button from 'Ui/Button';
import { ButtonColors, ButtonType, ButtonVariants } from 'Ui/Button/Button.config';
import Typography from 'Ui/Typography';
import { TypographyVariants } from 'Ui/Typography/Typography.config';

import { CartCouponComponentProps, CartCouponComponentState } from './CartCoupon.type';

import './CartCoupon.style';

/** @namespace Component/CartCoupon/Component */
export class CartCouponComponent extends PureComponent<CartCouponComponentProps, CartCouponComponentState> {
    static defaultProps: Partial<CartCouponComponentProps> = {
        couponCode: '',
    };

    state: CartCouponComponentState = {
        enteredCouponCode: '',
        isFieldWithError: false,
    };

    __construct(props: CartCouponComponentProps): void {
        super.__construct?.(props);

        this.handleCouponCodeChange = this.handleCouponCodeChange.bind(this);
        this.handleApplyCoupon = this.handleApplyCoupon.bind(this);
        this.handleRemoveCoupon = this.handleRemoveCoupon.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidUpdate(prevProps: CartCouponComponentProps): void {
        const { isIncorrectCoupon: prevIsIncorrectCoupon = false } = prevProps;
        const { isIncorrectCoupon = false, resetIsIncorrectCoupon } = this.props;

        if (isIncorrectCoupon && prevIsIncorrectCoupon !== isIncorrectCoupon) {
            this.toggleIsFieldWithError(isIncorrectCoupon);
            resetIsIncorrectCoupon();
        }
    }

    toggleIsFieldWithError(value: boolean): void {
        this.setState({
            isFieldWithError: value,
        });
    }

    handleCouponCodeChange(event: ChangeEvent<HTMLInputElement>, field?: EventFieldData): void {
        const { value = '' } = field || {};

        this.setState({
            enteredCouponCode: value,
            isFieldWithError: false,
        });
    }

    handleApplyCoupon(): void {
        const { handleApplyCouponToCart } = this.props;
        const { enteredCouponCode } = this.state;

        handleApplyCouponToCart(enteredCouponCode);
    }

    handleRemoveCoupon(): void {
        const { handleRemoveCouponFromCart } = this.props;

        handleRemoveCouponFromCart();

        // We need to reset input field. If we do it in applyCouponCode,
        // then it will disappear if code is incorrect. We want to avoid it
        this.setState({
            enteredCouponCode: '',
        });
    }

    handleFormSubmit(): void {
        const { couponCode } = this.props;

        if (couponCode) {
            this.handleRemoveCoupon();

            return;
        }

        this.handleApplyCoupon();
    }

    renderApplyCoupon(): ReactElement {
        const { enteredCouponCode, isFieldWithError } = this.state;

        return (
            <>
                <div block="CartCoupon" elem="Input">
                    <Field
                      type={ FieldType.TEXT }
                      attr={ {
                          id: 'couponCode',
                          name: 'couponCode',
                          defaultValue: enteredCouponCode,
                          placeholder: __('Your discount code'),
                          'aria-label': __('Your discount code'),
                      } }
                      events={ {
                          onChange: this.handleCouponCodeChange,
                      } }
                      validateOn={ ['onChange'] }
                      mix={ { mods: { hasError: isFieldWithError }, block: 'Field' } }
                    />
                </div>
                <Button
                  variant={ ButtonVariants.OUTLINED }
                  color={ ButtonColors.PRIMARY }
                  mix={ {
                      block: 'CartCoupon',
                      elem: 'Button',
                  } }
                  attr={ { type: ButtonType.BUTTON } }
                  disabled={ !enteredCouponCode }
                  onClick={ this.handleApplyCoupon }
                >
                    { __('Submit') }
                </Button>
            </>
        );
    }

    renderRemoveCoupon(): ReactElement {
        const { couponCode } = this.props;

        return (
            <>
                <div block="CartCoupon" elem="Message">
                    <Typography mix={ { block: 'CartCoupon', elem: 'MessageText' } }>
                        { __('Applied coupon code: ') }
                        <strong>{ couponCode.toUpperCase() }</strong>
                    </Typography>
                </div>
                <Button
                  variant={ ButtonVariants.OUTLINED }
                  mix={ {
                      block: 'CartCoupon',
                      elem: 'Button',
                  } }
                  attr={ { type: ButtonType.BUTTON } }
                  onClick={ this.handleRemoveCoupon }
                >
                    { __('Remove Coupon') }
                </Button>
            </>
        );
    }

    renderTitle(): ReactElement {
        const { title } = this.props;

        if (!title) {
            return null;
        }

        return (
            <Typography
              variant={ TypographyVariants.H3 }
              mix={ { block: 'CartCoupon', elem: 'Title' } }
            >
                { title }
            </Typography>
        );
    }

    render(): ReactElement {
        const { isLoading, couponCode, mix } = this.props;

        return (
            <div
              block="CartCoupon"
              mix={ mix }
            >
                <Form
                  onSubmit={ this.handleFormSubmit }
                  returnAsObject
                >
                    <Loader isLoading={ isLoading } />
                    { this.renderTitle() }
                    { (couponCode
                        ? this.renderRemoveCoupon()
                        : this.renderApplyCoupon()
                    ) }
                </Form>
            </div>
        );
    }
}

export default CartCouponComponent;
