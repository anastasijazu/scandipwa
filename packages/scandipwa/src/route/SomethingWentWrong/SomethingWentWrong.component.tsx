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

import ContentWrapper from 'Component/ContentWrapper';
import { ReactElement } from 'Type/Common.type';
import { ButtonVariants } from 'Ui/Button/Button.config';
import Link from 'Ui/Link';
import Typography from 'Ui/Typography';
import { TypographyVariants } from 'Ui/Typography/Typography.config';

import { SomethingWentWrongComponentProps } from './SomethingWentWrong.type';

import './SomethingWentWrong.style';

/** @namespace Route/SomethingWentWrong/Component */
export class SomethingWentWrongComponent extends PureComponent<SomethingWentWrongComponentProps> {
    renderErrorDetails(): ReactElement {
        const { errorDetails: { err, info: { componentStack } = {} } } = this.props;
        const errorString = err.toString();

        // eslint-disable-next-line no-console
        console.groupCollapsed('Suppressed error log:');
        // eslint-disable-next-line no-console
        console.error(errorString);
        // eslint-disable-next-line no-console
        console.groupEnd();

        if (process.env.NODE_ENV === 'production') {
            return null;
        }

        return (
            <div block="SomethingWentWrong" elem="Debug">
                { errorString }
                { componentStack }
            </div>
        );
    }

    render(): ReactElement {
        const { onClick } = this.props;

        return (
            <main block="SomethingWentWrong">
                <ContentWrapper label="Something went wrong on the page.">
                    <Typography
                      variant={ TypographyVariants.H1 }
                      mix={ { block: 'SomethingWentWrong', elem: 'Heading' } }
                    >
                        { __('Ooops!') }
                    </Typography>
                    <Typography
                      variant={ TypographyVariants.H2 }
                      mix={ { block: 'SomethingWentWrong', elem: 'SubHeading' } }
                    >
                        { __('Something went wrong!') }
                    </Typography>
                    { /* eslint-disable-next-line react/forbid-elements */ }
                    <Link
                      variant={ ButtonVariants.FILLED }
                      to="/"
                      mix={ { block: 'SomethingWentWrong', elem: 'Button' } }
                      onClick={ onClick }
                    >
                        { __('Back to homepage') }
                    </Link>
                    { this.renderErrorDetails() }
                </ContentWrapper>
            </main>
        );
    }
}

export default SomethingWentWrongComponent;
