/* eslint-disable react/forbid-elements */
/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-props-destruction */
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

import { LinkHTMLAttributes, MouseEvent, PureComponent } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { stringify } from 'rebem-classname';

import { ReactElement } from 'Type/Common.type';

import { LinkComponentProps } from './Link.type';

import './Link.style';

/** @namespace ui/Link/Component */
export class LinkComponent<
P extends LinkComponentProps = LinkComponentProps,
> extends PureComponent<P> {
    scrollToElement(e: MouseEvent): void {
        const {
            to: cssIdentifier,
            onClick,
        } = this.props;

        const elem = document.querySelector<HTMLElement>(
            cssIdentifier !== '#' ? cssIdentifier as string : 'body',
        );

        e.preventDefault();

        window.scrollTo({
            top: elem?.offsetTop || 0,
            behavior: 'smooth',
        });

        elem?.focus();

        onClick(e);
    }

    renderRelativePathLink(): ReactElement {
        const {
            isOpenInNewTab,
            children,
            to,
            attr,
            mix,
            mods,
            block,
            ...props
        } = this.props;

        if (isOpenInNewTab) {
            return (
                <a
                  { ...props }
                  block={ block }
                  mods={ mods }
                  mix={ mix }
                  { ...attr as LinkHTMLAttributes<HTMLElement> }
                  onClick={ this.scrollToElement }
                  href={ to as string }
                  rel="noopener noreferrer"
                  target="_blank"
                >
                    { children }
                </a>
            );
        }

        return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <a
              { ...props }
              block={ block }
              mix={ mix }
              { ...attr as LinkHTMLAttributes<HTMLElement> }
              onClick={ this.scrollToElement }
              href={ to as string }
            >
                { children }
            </a>
        );
    }

    renderAbsolutePathLink(): ReactElement {
        const {
            isOpenInNewTab,
            children,
            to,
            mix,
            attr,
            mods,
            block,
            ...props
        } = this.props;

        if (isOpenInNewTab) {
            return (
                <a
                  { ...props }
                  block={ block }
                  mods={ mods }
                  mix={ mix }
                  { ...attr as LinkHTMLAttributes<HTMLElement> }
                  href={ to as string }
                    // eslint-disable-next-line react/forbid-dom-props
                  rel="noopener noreferrer"
                  target="_blank"
                >
                    { children }
                </a>
            );
        }

        return (
            <a
              { ...props }
              block={ block }
              mods={ { mods } }
              mix={ mix }
              { ...attr as LinkHTMLAttributes<HTMLElement> }
              href={ to as string }
            >
                { children }
            </a>
        );
    }

    render(): ReactElement {
        const {
            mix,
            attr,
            children,
            to,
            isOpenInNewTab,
            mods,
            block,
            ...props
        } = this.props;

        if (!to) {
            return (
                <div
                  { ...props }
                  block={ block }
                  mods={ mods }
                  mix={ mix }
                  { ...attr as LinkHTMLAttributes<HTMLElement> }
                >
                    { children }
                </div>
            );
        }

        if (/^#/.test(to as string)) {
            return this.renderRelativePathLink();
        }

        if (/^https?:\/\//.test(to as string) || isOpenInNewTab) {
            return this.renderAbsolutePathLink();
        }

        const classNameConverted = `${ stringify({ block, mods, mix })}`;

        return (
            <RouterLink
              { ...props }
              { ...attr as LinkHTMLAttributes<HTMLElement> }
              to={ to }
              // eslint-disable-next-line react/forbid-component-props
              className={ classNameConverted }
            >
                { children }
            </RouterLink>
        );
    }
}

export default LinkComponent;
