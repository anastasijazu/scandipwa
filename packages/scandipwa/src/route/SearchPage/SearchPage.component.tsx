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

import CategoryPage from 'Route/CategoryPage/CategoryPage.component';
import Typography from 'Src/ui/Typography';
import { TypographyVariants } from 'Src/ui/Typography/Typography.config';
import { ReactElement } from 'Type/Common.type';
import { decodeString } from 'Util/Common';

import { SearchPageComponentProps, SearchPageComponentState } from './SearchPage.type';

import './SearchPage.style';

/** @namespace Route/SearchPage/Component */
export class SearchPageComponent extends CategoryPage<
SearchPageComponentProps,
SearchPageComponentState
> {
    renderSearchHeading(): ReactElement {
        const { search } = this.props;

        return (
            <Typography
              variant={ TypographyVariants.H1 }
              mix={ {
                  block: 'CategoryDetails',
                  elem: 'Heading',
                  mix: { block: 'SearchPage', elem: 'Heading' },
              } }
            >
                { __('Search results for: ') }
                <span>{ decodeString(search) }</span>
            </Typography>
        );
    }

    renderCategoryDetails(): ReactElement {
        return (
            <article block="CategoryDetails">
                <div block="CategoryDetails" elem="Description">
                    { this.renderSearchHeading() }
                </div>
            </article>
        );
    }

    renderCmsBlock(): ReactElement {
        return null;
    }
}

export default SearchPageComponent;
