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

import KeyValueTable from 'Component/KeyValueTable';
import { DataPair } from 'Component/KeyValueTable/KeyValueTable.type';
import { Customer } from 'Query/MyAccount.type';
import Button from 'Src/ui/Button';
import { ButtonVariants } from 'Src/ui/Button/Button.config';
import { ReactElement } from 'Type/Common.type';

import { MyAccountCustomerTableComponentProps } from './MyAccountCustomerTable.type';

/** @namespace Component/MyAccountCustomerTable/Component */
export class MyAccountCustomerTableComponent extends KeyValueTable<MyAccountCustomerTableComponentProps> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    dataPairArray(): DataPair<Partial<Customer>>[] {
        const { customer } = this.props;

        return [
            {
                key: 'firstname',
                label: __('First name'),
                source: customer,
            },
            {
                key: 'lastname',
                label: __('Last name'),
                source: customer,
            },
            {
                key: 'taxvat',
                label: __('Tax/VAT Number'),
                source: customer,
            },
            {
                key: 'email',
                label: __('Email'),
                source: customer,
            },
        ];
    }

    renderActions(): ReactElement {
        const { handleOnEditInformation, handleOnEditPassword } = this.props;

        return (
            <>
                <Button
                  variant={ ButtonVariants.OUTLINED }
                  onClick={ handleOnEditInformation }
                >
                    { __('Edit details') }
                </Button>
                <Button
                  variant={ ButtonVariants.TRANSPARENT }
                  onClick={ handleOnEditPassword }
                >
                    { __('Change password') }
                </Button>
            </>
        );
    }

    render(): ReactElement {
        return (
            <div block="MyAccountCustomerTable">
                { this.renderTable() }
                { this.renderActions() }
            </div>
        );
    }
}

export default MyAccountCustomerTableComponent;
