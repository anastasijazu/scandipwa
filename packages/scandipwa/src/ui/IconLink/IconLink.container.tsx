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
import { Dispatch } from 'redux';

import IconLink from 'Src/ui/IconLink/IconLink.component';
import {
    LinkContainer,
    mapDispatchToProps as sourceMapDispatchToProps,
    mapStateToProps as sourceMapStateToProps,
} from 'Src/ui/Link/Link.container';
import { ReactElement } from 'Type/Common.type';

import {
    IconLinkComponentProps,
    IconLinkContainerComponentPropKeys,
    IconLinkContainerMapDispatchProps,
    IconLinkContainerMapStateProps,
    IconLinkContainerProps,
} from './IconLink.type';

export const NoMatchDispatcher = import(
    /* webpackMode: "lazy", webpackChunkName: "dispatchers" */
    'Store/NoMatch/NoMatch.dispatcher'
);

/** @namespace ui/IconLink/Container/mapStateToProps */
export const mapStateToProps = (): IconLinkContainerMapStateProps => ({
    ...sourceMapStateToProps,
});

/** @namespace ui/IconLink/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch: Dispatch): IconLinkContainerMapDispatchProps => ({
    ...sourceMapDispatchToProps(dispatch),
});

/** @namespace ui/IconLink/Container */
export class IconLinkContainer extends LinkContainer<IconLinkContainerProps> {
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
