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

import ContentWrapper from 'Component/ContentWrapper';
import Loader from 'Component/Loader';
import {
    MyAccountOverlayComponent,
} from 'Component/MyAccountOverlay/MyAccountOverlay.component';
import { ReactElement } from 'Type/Common.type';
import Button from 'Ui/Button';
import Typography from 'Ui/Typography';
import { TypographyVariants } from 'Ui/Typography/Typography.config';

import { CreateAccountComponentProps } from './CreateAccount.type';

import './CreateAccount.style';

/** @namespace Route/CreateAccount/Component */
export class CreateAccountComponent extends MyAccountOverlayComponent<CreateAccountComponentProps> {
    renderSignInWrapper(): ReactElement {
        const { onLoginClick } = this.props;

        return (
            <div block="CreateAccount" elem="SignInWrapper">
                <Typography variant={ TypographyVariants.H3 }>{ __('Registered Customers') }</Typography>
                <p>{ __('If you have an account, sign in with your email address.') }</p>
                <Button
                  onClick={ onLoginClick }
                >
                    { __('Sign In') }
                </Button>
            </div>
        );
    }

    renderCreateAccountWrapper(): ReactElement {
        return (
            <div block="CreateAccount" elem="CreateAccountWrapper">
                <Typography variant={ TypographyVariants.H3 }>{ __('New Customers') }</Typography>
                <Typography>
                    { __('Creating an account has many benefits:') }
                    { __(' check out faster, keep more than one address, track orders and more.') }
                </Typography>
                { this.renderCreateAccount(true) }
            </div>
        );
    }

    renderForgotPasswordWrapper(): ReactElement {
        return (
            <div block="CreateAccount" elem="ForgetPasswordWrapper">
                <Typography variant={ TypographyVariants.H3 }>{ __('Forgot Your Password?') }</Typography>
                <Typography>
                    { __('Please enter your email address below to receive a password reset link.') }
                </Typography>
                { this.renderForgotPassword() }
            </div>
        );
    }

    renderContent(): ReactElement {
        const { device } = this.props;

        if (device.isMobile) {
            return this.renderCreateAccount();
        }

        return (
            <>
                { this.renderCreateAccountWrapper() }
                { this.renderSignInWrapper() }
            </>
        );
    }

    render(): ReactElement {
        const {
            isLoading,
        } = this.props;

        return (
            <ContentWrapper
              label="Create account page"
              mix={ {
                  block: 'CreateAccount',
              } }
            >
                <div block="CreateAccount" elem="InnerWrapper">
                    <Loader isLoading={ isLoading } />
                    { this.renderContent() }
                </div>
            </ContentWrapper>
        );
    }
}

export default CreateAccountComponent;
