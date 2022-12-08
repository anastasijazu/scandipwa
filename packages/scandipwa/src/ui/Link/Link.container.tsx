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

import { MouseEvent, PureComponent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ReactElement, Url } from 'Type/Common.type';
import { noopFn } from 'Util/Common';
import { RootState } from 'Util/Store/Store.type';
import { appendWithStoreCode } from 'Util/Url';

import { ButtonColors, ButtonVariants } from '../Button/Button.config';
import Link from './Link.component';
import { LinkUnderlineType } from './Link.config';
import {
    LinkComponentProps,
    LinkContainerComponentPropKeys,
    LinkContainerFunctions,
    LinkContainerMapDispatchProps,
    LinkContainerMapStateProps,
    LinkContainerProps,
} from './Link.type';

export const NoMatchDispatcher = import(
    /* webpackMode: "lazy", webpackChunkName: "dispatchers" */
    'Store/NoMatch/NoMatch.dispatcher'
);

/** @namespace Ui/Link/Container/mapStateToProps */
export const mapStateToProps = (state: RootState): LinkContainerMapStateProps => ({
    baseLinkUrl: state.ConfigReducer.base_link_url || '',
});

/** @namespace Ui/Link/Container/mapDispatchToProps */
export const mapDispatchToProps = (dispatch: Dispatch): LinkContainerMapDispatchProps => ({
    updateNoMatch: (noMatch) => NoMatchDispatcher.then(
        ({ default: dispatcher }) => dispatcher.updateNoMatch(dispatch, { noMatch }),
    ),
});

/** @namespace Ui/Link/Container */
export class LinkContainer<
P extends LinkContainerProps = LinkContainerProps,
> extends PureComponent<P> {
    static defaultProps: Partial<LinkContainerProps> = {
        onClick: noopFn,
        mix: {},
        isOpenInNewTab: false,
        variant: ButtonVariants.LINK,
        color: ButtonColors.PRIMARY,
        disabled: false,
        underline: LinkUnderlineType.NONE,
    };

    containerFunctions: LinkContainerFunctions = {
        onClick: this.onClick.bind(this),
    };

    containerProps(): Pick<LinkComponentProps, LinkContainerComponentPropKeys> {
        const {
            mix,
            children,
            isOpenInNewTab,
            attr,
            variant,
            color,
            disabled,
            baseLinkUrl,
            dispatch,
            isUnstyled,
            underline,
            key,
            ...restProps
        } = this.props;

        return {
            ...restProps,
            key,
            isUnstyled,
            to: this.getTo(),
            mix,
            isOpenInNewTab,
            children,
            attr,
            block: 'Link',
            mods: {
                variant, color, disabled, underline,
            },
        };
    }

    getTo(): Url | string {
        const { to: toProp } = this.props;
        // fix null, undefined and empty links
        const to = toProp || '/';

        if (typeof to === 'string') {
            // in case this URL is absolute or used for scroll, do not append store
            if (/^https?:\/\//.test(to) || /^#/.test(to)) {
                return to;
            }

            return appendWithStoreCode(to);
        }

        const pathname = to.pathname || '/';

        return {
            ...to,
            pathname: appendWithStoreCode(pathname),
        };
    }

    // Resets no match state on redirect
    onClick(e: MouseEvent): void {
        const { updateNoMatch, onClick } = this.props;

        updateNoMatch(false);

        if (onClick) {
            onClick(e);
        }
    }

    render(): ReactElement {
        return (
            <Link
              { ...this.containerProps() }
              { ...this.containerFunctions }
            />
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LinkContainer);
