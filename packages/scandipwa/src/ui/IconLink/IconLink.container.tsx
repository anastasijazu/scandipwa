/* eslint-disable react/prop-types */

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

import { connect } from 'react-redux';

import { ButtonVariants } from 'Src/ui/Button/Button.config';
import IconLink from 'Src/ui/IconLink/IconLink.component';
import {
    LinkContainer,
    mapDispatchToProps,
    mapStateToProps,
    NoMatchDispatcher,
} from 'Src/ui/Link/Link.container';
import { ReactElement } from 'Type/Common.type';

import {
    IconLinkComponentProps,
    IconLinkContainerComponentPropKeys,
    IconLinkContainerProps,
} from './IconLink.type';

export { mapDispatchToProps, mapStateToProps, NoMatchDispatcher };

/** @namespace Ui/IconLink/Container */
export class IconLinkContainer extends LinkContainer<IconLinkContainerProps> {
    static defaultProps: Partial<IconLinkContainerProps> = {
        ...LinkContainer.defaultProps,
        variant: ButtonVariants.TRANSPARENT,
    };

    containerProps(): Pick<IconLinkComponentProps, IconLinkContainerComponentPropKeys> {
        return {
            ...super.containerProps(),
            block: 'IconLink',
        };
    }

    render(): ReactElement {
        return (
             <IconLink
               { ...this.containerProps() }
               { ...this.containerFunctions }
             />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IconLinkContainer);
