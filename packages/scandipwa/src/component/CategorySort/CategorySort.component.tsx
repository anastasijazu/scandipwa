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
import TextPlaceholder from 'Component/TextPlaceholder';
import { TextPlaceHolderLength } from 'Component/TextPlaceholder/TextPlaceholder.config';
import { SortDirections } from 'Route/CategoryPage/CategoryPage.config';
import Typography from 'Src/ui/Typography';
import { ReactElement } from 'Type/Common.type';

import { CategorySortComponentProps } from './CategorySort.type';

import './CategorySort.style';

/**
 * Product Sort
 * @class ProductSort
 * @namespace Component/CategorySort/Component
 */
export class CategorySortComponent extends PureComponent<CategorySortComponentProps> {
    __construct(props: CategorySortComponentProps): void {
        super.__construct?.(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(value: string): void {
        const { onSortChange } = this.props;
        const [direction, ...key] = value.split(' ');

        onSortChange(direction as SortDirections, key);
    }

    renderPlaceholder(): ReactElement {
        return (
            <Typography mix={ { block: 'CategorySort', elem: 'Placeholder' } }>
                <TextPlaceholder length={ TextPlaceHolderLength.SHORT } />
            </Typography>
        );
    }

    renderSortField(): ReactElement {
        const {
            sortKey,
            sortDirection,
            selectOptions,
            isMatchingInfoFilter,
            isCurrentCategoryLoaded,
        } = this.props;

        if (!isMatchingInfoFilter || !isCurrentCategoryLoaded) {
            return this.renderPlaceholder();
        }

        return (
            <Field
              type={ FieldType.SELECT }
              attr={ {
                  id: 'category-sort',
                  name: 'category-sort',
                  value: `${sortDirection} ${sortKey}`,
                  noPlaceholder: true,
              } }
              events={ {
                  onChange: this.onChange,
              } }
              isSortSelect
              options={ selectOptions }
              mix={ { block: 'CategorySort', elem: 'Select' } }
            />
        );
    }

    render(): ReactElement {
        return (
            <div block="CategorySort">
                { this.renderSortField() }
            </div>
        );
    }
}

export default CategorySortComponent;
