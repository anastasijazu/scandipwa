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

import Field from 'Component/Field';
import { FieldType } from 'Component/Field/Field.config';
import Form from 'Component/Form';
import Loader from 'Component/Loader';
import { ReactElement } from 'Type/Common.type';
import Button from 'Ui/Button';
import { ButtonType, ButtonVariants } from 'Ui/Button/Button.config';
import Typography from 'Ui/Typography';
import { TypographyVariants } from 'Ui/Typography/Typography.config';
import { ValidationInputType } from 'Util/Validator/Config';

import { MyAccountSignInComponentProps } from './MyAccountSignIn.type';

import './MyAccountSignIn.style.scss';

/** @namespace Component/MyAccountSignIn/Component */
export class MyAccountSignInComponent extends PureComponent<MyAccountSignInComponentProps> {
    static defaultProps: Partial<MyAccountSignInComponentProps> = {
        isLoading: false,
    };

    renderSignInForm(): ReactElement {
        const {
            onSignInSuccess,
            onFormError,
            handleForgotPassword,
            emailValue,
            isCheckout,
            handleEmailInput,
            isLoading,
        } = this.props;

        return (
            <Form
              key="sign-in"
              onSubmit={ onSignInSuccess }
              onError={ onFormError }
            >
                <Field
                  label={ __('Email') }
                  type={ FieldType.EMAIL }
                  attr={ {
                      id: 'email',
                      name: 'email',
                      placeholder: __('Your email address'),
                      defaultValue: emailValue,
                      autoComplete: isCheckout ? 'off' : 'email',
                  } }
                  validateOn={ ['onChange'] }
                  validationRule={ {
                      isRequired: true,
                      inputType: ValidationInputType.EMAIL,
                  } }
                  events={ { onChange: handleEmailInput } }
                  addRequiredTag
                />
                <Field
                  label={ __('Password') }
                  type={ FieldType.PASSWORD }
                  attr={ {
                      id: 'password',
                      name: 'password',
                      placeholder: __('Enter your password'),
                      autoComplete: 'current-password',
                  } }
                  validateOn={ isCheckout ? ['onSubmit'] : ['onChange'] }
                  validationRule={ {
                      isRequired: true,
                      inputType: ValidationInputType.PASSWORD,
                  } }
                  addRequiredTag
                />
                <Button
                  variant={ ButtonVariants.LINK }
                  mix={ { block: 'MyAccountOverlay', elem: 'ForgotPassword' } }
                  onClick={ handleForgotPassword }
                  attr={ {
                      type: ButtonType.BUTTON,
                  } }
                >
                    { __('Forgot password?') }
                </Button>
                <div block="MyAccountOverlay" elem="SignInButton">
                    <Button isFullWidth>{ __('Sign in') }</Button>
                </div>
                <Loader isLoading={ isLoading } />
            </Form>
        );
    }

    renderAdditionalField(): ReactElement {
        const {
            isCheckout,
            handleCreateAccount,
            state,
        } = this.props;

        if (isCheckout) {
            return null;
        }

        return (
            <article block="MyAccountOverlay" elem="Additional" mods={ { state } }>
                <section>
                    <Typography
                      variant={ TypographyVariants.H4 }
                      attr={ { id: 'forgot-password-label' } }
                    >
                        { __("Don't have an account?") }
                    </Typography>
                    <Button
                      variant={ ButtonVariants.LINK }
                      onClick={ handleCreateAccount }
                    >
                        { __('Create an account') }
                    </Button>
                </section>
            </article>
        );
    }

    render(): ReactElement {
        return (
            <>
                { this.renderSignInForm() }
                { this.renderAdditionalField() }
            </>
        );
    }
}

export default MyAccountSignInComponent;
