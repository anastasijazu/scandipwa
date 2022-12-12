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

import { ORDER_ID } from 'Component/MyAccountOrder/MyAccountOrder.config';
import { AccountPageUrl } from 'Route/MyAccount/MyAccount.config';
import { ReactElement } from 'Type/Common.type';
import { ButtonVariants } from 'Ui/Button/Button.config';
import Link from 'Ui/Link';
import Typography from 'Ui/Typography';
import { TypographyVariants } from 'Ui/Typography/Typography.config';
import { isSignedIn } from 'Util/Auth';
import { appendWithStoreCode } from 'Util/Url';

import { CheckoutSuccessComponentProps } from './CheckoutSuccess.type';

import './CheckoutSuccess.style';

/** @namespace Component/CheckoutSuccess/Component */
export class CheckoutSuccessComponent extends PureComponent<CheckoutSuccessComponentProps> {
    renderButtons(): ReactElement {
        return (
            <div block="CheckoutSuccess" elem="ButtonWrapper">
                <Link
                  variant={ ButtonVariants.FILLED }
                  mix={ { block: 'CheckoutSuccess', elem: 'ContinueButton' } }
                  to="/"
                >
                    { __('Continue shopping') }
                </Link>
            </div>
        );
    }

    renderCreateAccountButton(): ReactElement {
        const {
            isEmailAvailable,
            email,
            firstName,
            lastName,
            orderID,
        } = this.props;

        if (!isEmailAvailable || isSignedIn()) {
            return null;
        }

        sessionStorage.setItem(ORDER_ID, orderID);

        return (
            <div block="CheckoutRegistrationLink">
                <Typography>
                    { __('You can track your order status by creating an account.') }
                </Typography>
                <Typography>
                    { `${__('Email address')}: ${email}` }
                </Typography>
                <Link
                  variant={ ButtonVariants.FILLED }
                  to={ {
                      pathname: appendWithStoreCode(`${ AccountPageUrl.REGISTRATION_URL }`),
                      state: {
                          firstName,
                          lastName,
                          email,
                          orderID,
                      },
                  } }
                >
                    { __('Create account') }
                </Link>
            </div>
        );
    }

    render(): ReactElement {
        const { orderID } = this.props;

        return (
            <div block="CheckoutSuccess">
                <Typography variant={ TypographyVariants.H3 }>{ __('Your order # is: %s', orderID) }</Typography>
                <Typography>{ __('We`ll email you an order confirmation with details and tracking info.') }</Typography>
                { this.renderButtons() }
                { this.renderCreateAccountButton() }
            </div>
        );
    }
}

export default CheckoutSuccessComponent;
