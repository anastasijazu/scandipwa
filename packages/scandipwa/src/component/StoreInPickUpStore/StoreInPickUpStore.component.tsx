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

import Html from 'Component/Html';
import { ReactElement } from 'Type/Common.type';
import Button from 'Ui/Button';
import { ButtonType } from 'Ui/Button/Button.config';
import Typography from 'Ui/Typography';
import { TypographyVariants } from 'Ui/Typography/Typography.config';

import { StoreInPickUpStoreComponentProps } from './StoreInPickUpStore.type';

import './StoreInPickUpStore.style';

/** @namespace Component/StoreInPickUpStore/Component */
export class StoreInPickUpStoreComponent extends PureComponent<StoreInPickUpStoreComponentProps> {
    renderActions(): ReactElement {
        const { isSelectedStore, handleSelectStore } = this.props;

        if (isSelectedStore) {
            return null;
        }

        return (
            <div block="StoreInPickUpStore" elem="StoreActions">
                <Button
                  onClick={ handleSelectStore }
                  type={ ButtonType.BUTTON }
                >
                    { __('Ship here') }
                </Button>
            </div>
        );
    }

    render(): ReactElement {
        const { store } = this.props;

        if (!store) {
            return null;
        }

        const {
            city,
            country,
            description,
            name,
            phone,
            postcode,
            region,
            street,
        } = store;

        return (
            <div block="StoreInPickUpStore" elem="Store">
                <div block="StoreInPickUpStore" elem="StoreData">
                    <Typography variant={ TypographyVariants.H3 }>{ name }</Typography>
                    <Typography>{ street }</Typography>
                    <Typography>{ `${city}, ${region || ''} ${postcode}` }</Typography>
                    <Typography>{ country }</Typography>
                    { /* eslint-disable-next-line react/forbid-elements */ }
                    <a href={ `tel:${phone}` }>{ phone }</a>
                    <Typography>
                        <Html content={ description || '' } />
                    </Typography>
                </div>
                <div block="StoreInPickUpStore" elem="StoreActions">
                    { this.renderActions() }
                </div>
            </div>
        );
    }
}

export default StoreInPickUpStoreComponent;
