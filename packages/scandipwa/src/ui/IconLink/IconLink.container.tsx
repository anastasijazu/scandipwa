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

import { Mods, ReactElement } from 'Type/Common.type';
import { ButtonVariants } from 'Ui/Button/Button.config';
import IconLink from 'Ui/IconLink/IconLink.component';
import {
    LinkContainer,
    mapDispatchToProps,
    mapStateToProps,
    NoMatchDispatcher,
} from 'Ui/Link/Link.container';

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
        const {
            mix,
            children,
            isOpenInNewTab,
            variant,
            color,
            isUnstyled,
            underline,
            disabled,
            key,
            onClick,
            ...restProps
        } = this.props;

        const mods: Mods = isUnstyled
            ? {}
            : {
                variant, color, disabled, underline,
            };

        return {
            key,
            to: this.getTo(),
            mix: {
                block: 'IconLink',
                mods,
                mix,
            },
            isOpenInNewTab,
            children,
            onClick,
            ...restProps,
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
