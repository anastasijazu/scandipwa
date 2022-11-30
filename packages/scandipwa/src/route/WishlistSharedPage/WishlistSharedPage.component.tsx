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
import SourceWishlist from 'Component/MyAccountMyWishlist/MyAccountMyWishlist.component';
import SharedWishlistItem from 'Component/SharedWishlistItem';
import Typography from 'Src/ui/Typography';
import { TypographyVariants } from 'Src/ui/Typography/Typography.config';
import { ObjectEntries, ReactElement } from 'Type/Common.type';
import { IndexedWishlistProduct } from 'Util/Product/Product.type';

import { WishlistSharedPageComponentProps } from './WishlistSharedPage.type';

import './WishlistSharedPage.style';

/** @namespace Route/WishlistSharedPage/Component */
export class WishlistSharedPageComponent extends SourceWishlist<WishlistSharedPageComponentProps> {
    renderActionLine(): ReactElement {
        return (
            <div block="WishlistSharedPage" elem="ActionBar">
                { this.renderAddAllToCart() }
            </div>
        );
    }

    renderProduct([id, product]: ObjectEntries<Record<string, IndexedWishlistProduct>>): ReactElement {
        return (
            <SharedWishlistItem
              key={ id }
              product={ product }
            />
        );
    }

    renderCreatorsInfo(): ReactElement {
        const { creatorsName } = this.props;

        return (
            <Typography
              variant={ TypographyVariants.H1 }
              mix={ { block: 'WishlistSharedPage', elem: 'CreatorsInfo' } }
            >
                { __('Wishlist shared by ') }
                <strong>{ creatorsName }</strong>
            </Typography>
        );
    }

    renderContent(): ReactElement {
        const {
            isWishlistLoading,
            isWishlistEmpty,
            isLoading,
        } = this.props;

        if (isWishlistEmpty && !isWishlistLoading) {
            return this.renderNoProductsFound();
        }

        return (
            <div block="WishlistSharedPage" elem="Products">
                <Loader isLoading={ isLoading } />
                { this.renderProducts() }
            </div>
        );
    }

    render(): ReactElement {
        return (
            <main block="WishlistSharedPage">
                <ContentWrapper>
                    { this.renderActionLine() }
                    { this.renderCreatorsInfo() }
                    { this.renderContent() }
                </ContentWrapper>
            </main>
        );
    }
}

export default WishlistSharedPageComponent;
