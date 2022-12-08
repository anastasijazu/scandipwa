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

import Button from 'Src/ui/Button';
import { ReactElement } from 'Type/Common.type';

import { MyAccountConfirmEmailComponentProps } from './MyAccountConfirmEmail.type';

/** @namespace Component/MyAccountConfirmEmail/Component */
export class MyAccountConfirmEmailComponent extends PureComponent<MyAccountConfirmEmailComponentProps> {
    render(): ReactElement {
        const { state, handleSignIn } = this.props;

        return (
            <article
              aria-labelledby="confirm-email-notice"
              block="MyAccountOverlay"
              elem="Additional"
              mods={ { state } }
            >
                <p id="confirm-email-notice">
                    { /* eslint-disable-next-line max-len */ }
                    { __('The email confirmation link has been sent to your email. Please confirm your account to proceed.') }
                </p>
                <Button
                  onClick={ handleSignIn }
                >
                    { __('Got it') }
                </Button>
            </article>
        );
    }
}

export default MyAccountConfirmEmailComponent;
