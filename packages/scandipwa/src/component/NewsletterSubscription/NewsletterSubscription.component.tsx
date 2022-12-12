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
import { FieldContainerProps } from 'Component/Field/Field.type';
import FieldForm from 'Component/FieldForm';
import { FormContainerProps } from 'Component/Form/Form.type';
import { ReactElement } from 'Type/Common.type';
import Button from 'Ui/Button';
import { ButtonType, ButtonVariants } from 'Ui/Button/Button.config';

import newsletterSubscriptionForm from './NewsletterForm.form';
import { NewsletterSubscriptionComponentProps } from './NewsletterSubscription.type';

import './NewsletterSubscription.style';

/**
 * Newsletter Subscription form
 * @class NewsletterSubscription
 * @namespace Component/NewsletterSubscription/Component
 */
export class NewsletterSubscriptionComponent extends FieldForm<NewsletterSubscriptionComponentProps> {
    fieldMap(): Partial<FieldContainerProps>[] {
        return newsletterSubscriptionForm();
    }

    renderActions(): ReactElement {
        return (
            <Button
              variant={ ButtonVariants.OUTLINED }
              attr={ {
                  type: ButtonType.SUBMIT,
                  'aria-label': __('Submit'),
              } }
            >
                { __('Subscribe') }
            </Button>
        );
    }

    renderFormBody(): ReactElement {
        const { isLoading } = this.props;

        return (
            <div block="FieldForm" elem="Fieldset" mods={ { isLoading } }>
                { super.renderFormBody() }
            </div>
        );
    }

    getFormProps(): Partial<FormContainerProps> {
        const { onFormSubmit } = this.props;

        return {
            onSubmit: onFormSubmit,
        };
    }

    render(): ReactElement {
        return (
            <div block="NewsletterSubscription">
                { super.render() }
            </div>
        );
    }
}

export default NewsletterSubscriptionComponent;
