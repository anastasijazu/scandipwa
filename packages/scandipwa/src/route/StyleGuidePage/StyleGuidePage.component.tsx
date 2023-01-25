/* eslint-disable react/forbid-elements */
/* eslint-disable react/forbid-dom-props */
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

import Breadcrumbs from 'Component/Breadcrumbs/Breadcrumbs.component';
import ContentWrapper from 'Component/ContentWrapper';
import Field from 'Component/Field';
import { FieldType } from 'Component/Field/Field.config';
import LockIcon from 'Component/LockIcon';
import Notification from 'Component/Notification';
import IconButton from 'Src/ui/IconButton';
import Tabs from 'Src/ui/Tabs';
import { TooltipSideType } from 'Src/ui/Tooltip/Tooltip.config';
import { ReactElement } from 'Type/Common.type';
import Button from 'Ui/Button';
import { ButtonColors, ButtonVariants } from 'Ui/Button/Button.config';
import Link from 'Ui/Link';
import { LinkUnderlineType } from 'Ui/Link/Link.config';
import Tooltip from 'Ui/Tooltip';
import Typography from 'Ui/Typography';
import { TypographyVariants } from 'Ui/Typography/Typography.config';

import {
    ADDITIONAL_ELEMENTS,
    BUTTONS, COLORS,
    INPUTS,
    NOTIFICATION_ERROR_DATA,
    NOTIFICATION_INFO_DATA,
    NOTIFICATION_SUCCESS_DATA,
    TEXT_STYLES,
} from './StyleGuidePage.config';
import { StyleGuidePageComponentProps } from './StyleGuidePage.type';

import './StyleGuidePage.style';

/** @namespace Route/StyleGuidePage/Component */
export class StyleGuidePageComponent extends PureComponent<StyleGuidePageComponentProps> {
    renderMap = {
        [ COLORS ]: (): ReactElement => this.renderColors(),
        [ BUTTONS ]: (): ReactElement => this.renderButtons(),
        [ TEXT_STYLES ]: (): ReactElement => this.renderTextStyles(),
        [ INPUTS ]: (): ReactElement => this.renderInputs(),
        [ ADDITIONAL_ELEMENTS ]: (): ReactElement => this.renderAdditionalElements(),
    };

    tabMap = [
        {
            id: 'First tab',
            name: __('First tab'),
            render: (): ReactElement => 'First content',
        },
        {
            id: 'Second tab',
            name: __('Second tab'),
            shouldTabBeRemoved: () => true,
            render: (): ReactElement => 'Second content',
        },
        {
            id: 'Third tab',
            name: __('Third tab'),
            render: (): ReactElement => 'Third content',
        },
    ];

    renderContentWrapper(): ReactElement {
        return (
            <>
                <ContentWrapper wrapperMix={ { block: 'StyleGuidePage', elem: 'DesktopContentWrapper' } }>
                    <Typography variant={ TypographyVariants.H3 }>{ __('Desktop Content Wrapper Max Width: 1400px') }</Typography>
                    <Typography variant={ TypographyVariants.H4 }>{ __('Padding Right: 32px') }</Typography>
                    <Typography variant={ TypographyVariants.H4 }>{ __('Padding Left: 32px') }</Typography>
                </ContentWrapper>
                <div block="StyleGuidePage" elem="Mt70" />
                <ContentWrapper wrapperMix={ { block: 'StyleGuidePage', elem: 'MobileContentWrapper' } }>
                    <Typography variant={ TypographyVariants.H3 }>{ __('Mobile Content Wrapper Max Width: 810px') }</Typography>
                    <Typography variant={ TypographyVariants.H4 }>{ __('Padding Right: 14px') }</Typography>
                    <Typography variant={ TypographyVariants.H4 }>{ __('Padding Left: 14px') }</Typography>
                </ContentWrapper>
            </>
        );
    }

    renderColors(): ReactElement {
        return (
            <div block="StyleGuidePage" elem="Colors">
                <Typography variant={ TypographyVariants.H4 } mix={ { block: 'StyleGuidePage', elem: 'SubHeading' } }>
                    { __('Color scheme') }
                </Typography>
                <div>
                    <div block="StyleGuidePage" elem="Color" id="primaryBase" />
                    <span block="StyleGuidePage" elem="ColorLabel">{ __('PRIMARY BASE') }</span>
                </div>
                <div>
                    <div block="StyleGuidePage" elem="Color" id="primaryHover" />
                    <span block="StyleGuidePage" elem="ColorLabel">{ __('PRIMARY HOVER') }</span>
                </div>
                <div>
                    <div block="StyleGuidePage" elem="Color" id="primaryHighlight" />
                    <span block="StyleGuidePage" elem="ColorLabel">{ __('PRIMARY HIGHTLIGHT') }</span>
                </div>
                <div>
                    <div block="StyleGuidePage" elem="Color" id="secondaryBase" />
                    <span block="StyleGuidePage" elem="ColorLabel">{ __('SECONDARY BASE') }</span>
                </div>
                <div>
                    <div block="StyleGuidePage" elem="Color" id="secondaryHover" />
                    <span block="StyleGuidePage" elem="ColorLabel">{ __('SECONDARY HOVER') }</span>
                </div>
                <div>
                    <div block="StyleGuidePage" elem="Color" id="secondaryHightlight" />
                    <span block="StyleGuidePage" elem="ColorLabel">{ __('SECONDARY HIGHLIGHT') }</span>
                </div>
                <div>
                    <div block="StyleGuidePage" elem="Color" id="text" />
                    <span block="StyleGuidePage" elem="ColorLabel">{ __('TEXT') }</span>
                </div>
                <div>
                    <div block="StyleGuidePage" elem="Color" id="error" />
                    <span block="StyleGuidePage" elem="ColorLabel">{ __('ERROR') }</span>
                </div>
                <div>
                    <div block="StyleGuidePage" elem="Color" id="success" />
                    <span block="StyleGuidePage" elem="ColorLabel">{ __('SUCCESS') }</span>
                </div>
                <div>
                    <div block="StyleGuidePage" elem="Color" id="info" />
                    <span block="StyleGuidePage" elem="ColorLabel">{ __('INFO') }</span>
                </div>
            </div>
        );
    }

    renderButtons(): ReactElement {
        return (
            <>
                <div block="StyleGuidePage" elem="Buttons">
                    <Typography variant={ TypographyVariants.H4 } mix={ { block: 'StyleGuidePage', elem: 'SubHeading' } }>
                        { __('Primary filled [default state + disabled]') }
                    </Typography>
                    <div>
                        <Button>
                            { __('Button text') }
                        </Button>
                        <Button disabled>
                            { __('Button text') }
                        </Button>
                    </div>
                    <div>
                        <Button variant={ ButtonVariants.FILLED } color={ ButtonColors.PRIMARY }>
                                <LockIcon />
                                { __('Button text') }
                        </Button>
                        <Button disabled>
                                <LockIcon />
                                { __('Button text') }
                        </Button>
                    </div>
                    <div>
                        <Link to="/" variant={ ButtonVariants.FILLED }>
                            { __('Link text') }
                        </Link>
                        <Link to="/" variant={ ButtonVariants.FILLED } disabled>
                            { __('Link text') }
                        </Link>
                    </div>
                </div>

                <div block="StyleGuidePage" elem="Buttons">
                    <Typography variant={ TypographyVariants.H4 } mix={ { block: 'StyleGuidePage', elem: 'SubHeading' } }>
                        { __('Primary outlined [default state + disabled]') }
                    </Typography>
                    <div>
                        <Button variant={ ButtonVariants.OUTLINED }>
                            { __('Button text') }
                        </Button>
                        <Button variant={ ButtonVariants.OUTLINED } disabled>
                            { __('Button text') }
                        </Button>
                    </div>
                    <div>
                        <Button variant={ ButtonVariants.OUTLINED }>
                                <LockIcon />
                                { __('Button text') }
                        </Button>
                        <Button variant={ ButtonVariants.OUTLINED } disabled>
                                <LockIcon />
                                { __('Button text') }
                        </Button>
                    </div>
                    <div>
                        <Link to="/" variant={ ButtonVariants.OUTLINED }>
                            { __('Link text') }
                        </Link>
                        <Link to="/" variant={ ButtonVariants.OUTLINED } disabled>
                            { __('Link text') }
                        </Link>
                    </div>
                </div>

                <div block="StyleGuidePage" elem="Buttons">
                    <Typography variant={ TypographyVariants.H4 } mix={ { block: 'StyleGuidePage', elem: 'SubHeading' } }>
                        { __('Secondary filled [default state + disabled]') }
                    </Typography>
                    <div>
                        <Button color={ ButtonColors.SECONDARY }>
                            { __('Button text') }
                        </Button>
                        <Button color={ ButtonColors.SECONDARY } disabled>
                            { __('Button text') }
                        </Button>
                    </div>
                    <div>
                        <Button color={ ButtonColors.SECONDARY }>
                                <LockIcon />
                                { __('Button text') }
                        </Button>
                        <Button color={ ButtonColors.SECONDARY } disabled>
                                <LockIcon />
                                { __('Button text') }
                        </Button>
                    </div>
                    <div>
                        <Link to="/" variant={ ButtonVariants.FILLED } color={ ButtonColors.SECONDARY }>
                            { __('Link text') }
                        </Link>
                        <Link to="/" variant={ ButtonVariants.FILLED } color={ ButtonColors.SECONDARY } disabled>
                            { __('Link text') }
                        </Link>
                    </div>
                </div>

                <div block="StyleGuidePage" elem="Buttons">
                    <Typography variant={ TypographyVariants.H4 } mix={ { block: 'StyleGuidePage', elem: 'SubHeading' } }>
                        { __('Primary transparent [default state + disabled]') }
                    </Typography>
                    <div>
                        <Button variant={ ButtonVariants.TRANSPARENT }>
                            { __('Button text') }
                        </Button>
                        <Button variant={ ButtonVariants.TRANSPARENT } disabled>
                            { __('Button text') }
                        </Button>
                    </div>
                    <div>
                        <Button variant={ ButtonVariants.TRANSPARENT }>
                                <LockIcon />
                                { __('Button text') }
                        </Button>
                        <Button variant={ ButtonVariants.TRANSPARENT } disabled>
                                <LockIcon />
                                { __('Button text') }
                        </Button>
                    </div>
                    <div>
                        <Link to="/" variant={ ButtonVariants.TRANSPARENT }>
                            { __('Link text') }
                        </Link>
                        <Link to="/" variant={ ButtonVariants.TRANSPARENT } disabled>
                            { __('Link text') }
                        </Link>
                    </div>
                </div>

                <div block="StyleGuidePage" elem="Buttons">
                    <Typography variant={ TypographyVariants.H4 } mix={ { block: 'StyleGuidePage', elem: 'SubHeading' } }>
                        { __('Secondary transparent [default state + disabled]') }
                    </Typography>
                    <div>
                        <Button variant={ ButtonVariants.TRANSPARENT } color={ ButtonColors.SECONDARY }>
                            { __('Button text') }
                        </Button>
                        <Button variant={ ButtonVariants.TRANSPARENT } color={ ButtonColors.SECONDARY } disabled>
                            { __('Button text') }
                        </Button>
                    </div>
                    <div>
                        <Button variant={ ButtonVariants.TRANSPARENT } color={ ButtonColors.SECONDARY }>
                                <LockIcon />
                                { __('Button text') }
                        </Button>
                        <Button variant={ ButtonVariants.TRANSPARENT } color={ ButtonColors.SECONDARY } disabled>
                                <LockIcon />
                                { __('Button text') }
                        </Button>
                    </div>

                    <div>
                        <Link to="/" variant={ ButtonVariants.TRANSPARENT } color={ ButtonColors.SECONDARY }>
                            { __('Link text') }
                        </Link>
                        <Link to="/" variant={ ButtonVariants.TRANSPARENT } color={ ButtonColors.SECONDARY } disabled>
                            { __('Link text') }
                        </Link>
                    </div>
                </div>

                <div block="StyleGuidePage" elem="ButtonsLinks">
                    <Typography variant={ TypographyVariants.H4 } mix={ { block: 'StyleGuidePage', elem: 'SubHeading' } }>
                        { __('Primary and secondary button and link [default state + disabled]') }
                    </Typography>
                    <div>
                        <Typography>
                            { __('The ') }
                            <Button variant={ ButtonVariants.LINK }>
                                { __('website (button)') }
                            </Button>
                                { __(' aims to achieve') }
                            <strong>{ __(' following ') }</strong>
                            { __('business goals:') }
                        </Typography>

                        <Typography>
                            { __('The ') }
                            <Button variant={ ButtonVariants.LINK } disabled>
                                { __('website (button)') }
                            </Button>
                            { __(' aims to achieve') }
                            <strong>{ __(' following ') }</strong>
                            { __('business goals:') }
                        </Typography>

                        <Typography>
                            { __('The ') }
                            <Button variant={ ButtonVariants.LINK } color={ ButtonColors.SECONDARY }>
                                { __('website (button)') }
                            </Button>
                            { __(' aims to achieve') }
                            <strong>{ __(' following ') }</strong>
                            { __('business goals:') }
                        </Typography>

                        <Typography>
                            { __('The ') }
                            <Button variant={ ButtonVariants.LINK } color={ ButtonColors.SECONDARY } disabled>
                                { __('website (button)') }
                            </Button>
                            { __(' aims to achieve') }
                            <strong>{ __(' following ') }</strong>
                            { __('business goals:') }
                        </Typography>

                        <Typography>
                            { __('The ') }
                            <Link to="/" underline={ LinkUnderlineType.HOVER }>
                                { __('website (link)') }
                            </Link>
                            { __(' aims to achieve') }
                            <strong>{ __(' following ') }</strong>
                            { __('business goals:') }
                        </Typography>

                        <Typography>
                            { __('The ') }
                            <Link to="/" disabled>
                                { __('website (link)') }
                            </Link>
                            { __(' aims to achieve') }
                            <strong>{ __(' following ') }</strong>
                            { __('business goals:') }
                        </Typography>

                        <Typography>
                            { __('The ') }
                            <Link to="/" color={ ButtonColors.SECONDARY } underline={ LinkUnderlineType.ALWAYS }>
                                { __('website (link)') }
                            </Link>
                            { __(' aims to achieve') }
                            <strong>{ __(' following ') }</strong>
                            { __('business goals:') }
                        </Typography>

                        <Typography>
                            { __('The ') }
                            <Link to="/" color={ ButtonColors.SECONDARY } disabled>
                                { __('website (link)') }
                            </Link>
                            { __(' aims to achieve') }
                            <strong>{ __(' following ') }</strong>
                            { __('business goals:') }
                        </Typography>
                    </div>
                </div>
            </>
        );
    }

    renderTextStyles(): ReactElement {
        return (
            <>
                <div block="StyleGuidePage" elem="DesktopTextStyles">
                    <Typography
                      variant={ TypographyVariants.H4 }
                      mix={ { block: 'StyleGuidePage', elem: 'SubHeading' } }
                    >
                        { __('Desktop') }
                    </Typography>
                    <Typography variant={ TypographyVariants.H1 }>{ __('Heading 1') }</Typography>
                    <Typography variant={ TypographyVariants.H2 }>{ __('Heading 2') }</Typography>
                    <Typography variant={ TypographyVariants.H3 }>{ __('Heading 3') }</Typography>
                    <Typography variant={ TypographyVariants.P }>
                        { __('The website aims to achieve') }
                        <strong>{ __(' following ') }</strong>
                        { __('business goals:') }
                    </Typography>
                    <Typography variant={ TypographyVariants.CAPTION }>
                        { __('The website aims to achieve') }
                        <strong>{ __(' following ') }</strong>
                        { __('business goals:') }
                    </Typography>
                </div>
                <div block="StyleGuidePage" elem="MobileTextStyles">
                    <Typography
                      mix={ { block: 'StyleGuidePage', elem: 'SubHeading' } }
                      variant={ TypographyVariants.H4 }
                    >
                        { __('Mobile') }
                    </Typography>
                    <Typography variant={ TypographyVariants.H1 }>{ __('Heading 1') }</Typography>
                    <Typography variant={ TypographyVariants.H2 }>{ __('Heading 2') }</Typography>
                    <Typography variant={ TypographyVariants.H3 }>{ __('Heading 3') }</Typography>
                    <Typography variant={ TypographyVariants.P }>
                        { __('The website aims to achieve') }
                        <strong>{ __(' following ') }</strong>
                        { __('business goals:') }
                    </Typography>
                    <Typography variant={ TypographyVariants.CAPTION }>
                        { __('The website aims to achieve') }
                        <strong>{ __(' following ') }</strong>
                        { __('business goals:') }
                    </Typography>
                </div>
            </>
        );
    }

    renderInputs(): ReactElement {
        return (
            <>
                <Typography variant={ TypographyVariants.H4 } mix={ { block: 'StyleGuidePage', elem: 'SubHeading' } }>
                    { __('Select') }
                </Typography>
                <Field
                  type={ FieldType.SELECT }
                  label="Color"
                  attr={ {
                      selectPlaceholder: __('Select color'),
                  } }
                  addRequiredTag
                  options={ [{ label: 'Yellow', value: 'yellow' }, { label: 'Orange', value: 'Orange' }] }
                />
                <Field
                  type={ FieldType.SELECT }
                  label="Color"
                  attr={ {
                      selectPlaceholder: __('Select color'),
                  } }
                  isDisabled
                />
                <Field
                  type={ FieldType.SELECT }
                  label="Color"
                  attr={ {
                      selectPlaceholder: __('Select color'),
                  } }
                  options={ [{ label: 'Yellow', value: 'yellow' }, { label: 'Orange', value: 'Orange' }] }
                />
                <div block="StyleGuidePage" elem="Mt70" />
                <Field
                  type={ FieldType.SELECT }
                  label="Color"
                  attr={ {
                      selectPlaceholder: __('Select color'),
                      isExpanded: true,
                  } }
                  options={ [
                      { label: 'Yellow', value: 'yellow', isHovered: true },
                      { label: 'Orange', value: 'Orange' },
                  ] }
                />
                <div block="StyleGuidePage" elem="Mt150" />
                <Field
                  type={ FieldType.SELECT }
                  label="Color"
                  attr={ {
                      selectPlaceholder: __('Select color'),
                      block: 'StyleGuidePage',
                      elem: 'Select',
                      mods: { hasError: true },
                  } }
                  options={ [
                      { label: 'Yellow', value: 'yellow' },
                      { label: 'Orange', value: 'Orange' },
                  ] }
                  addRequiredTag
                />
                <div block="Field" elem="ErrorMessages">
                    <div block="Field" elem="ErrorMessage">
                        This field is required!
                    </div>
                </div>
                <Field
                  type={ FieldType.SELECT }
                  label="Color"
                  attr={ {
                      selectPlaceholder: __('Select color'),
                      value: 'orange',
                      block: 'StyleGuidePage',
                      elem: 'Select',
                      mods: { isValid: true },
                  } }
                  options={ [
                      { label: 'Yellow', value: 'yellow' },
                      { label: 'Orange', value: 'orange' },
                  ] }
                />

                <Typography variant={ TypographyVariants.H4 } mix={ { block: 'StyleGuidePage', elem: 'SubHeading' } }>
                    { __('Text') }
                </Typography>
                <Field
                  type={ FieldType.TEXT }
                  label="Email"
                  attr={ {
                      placeholder: __('Your email address'),
                  } }
                  addRequiredTag
                />
                <Field
                  type={ FieldType.TEXT }
                  label="Email"
                  attr={ {
                      placeholder: __('Your email address'),
                  } }
                  isDisabled
                />
                <Field
                  type={ FieldType.TEXT }
                  label="Email"
                  attr={ {
                      placeholder: __('Your email address'),
                  } }
                />
                <Field
                  type={ FieldType.TEXT }
                  label="Email"
                  attr={ {
                      placeholder: __('Your email address'),
                      block: 'StyleGuidePage',
                      elem: 'Text',
                      mods: { isFocused: true },
                  } }
                />
                <Field
                  type={ FieldType.TEXT }
                  label="Email"
                  attr={ {
                      placeholder: __('Your email address'),
                      block: 'StyleGuidePage',
                      elem: 'Text',
                      mods: { hasError: true },
                  } }
                  addRequiredTag
                />
                <div block="Field" elem="ErrorMessages">
                    <div block="Field" elem="ErrorMessage">
                        This field is required!
                    </div>
                </div>
                <Field
                  type={ FieldType.TEXT }
                  label="Email"
                  attr={ {
                      placeholder: __('Your email address'),
                      block: 'StyleGuidePage',
                      elem: 'Text',
                      mods: { isValid: true },
                      value: 'email@example.com',
                  } }
                />

                <Typography variant={ TypographyVariants.H4 } mix={ { block: 'StyleGuidePage', elem: 'SubHeading' } }>
                    { __('Number') }
                </Typography>
                <Field
                  type={ FieldType.NUMBER }
                  label="Number"
                  attr={ {
                      placeholder: __('Number'),
                      step: 5,
                      min: 0,
                  } }
                  addRequiredTag
                />
                <Field
                  type={ FieldType.NUMBER }
                  label="Number"
                  attr={ {
                      placeholder: __('Number'),
                      step: 5,
                      min: 0,
                  } }
                  isDisabled
                />
                <Field
                  type={ FieldType.NUMBER }
                  label="Number"
                  attr={ {
                      placeholder: __('Number'),
                      step: 5,
                      min: 0,
                  } }
                />
                <Field
                  type={ FieldType.NUMBER }
                  label="Number"
                  attr={ {
                      placeholder: __('Number'),
                      block: 'StyleGuidePage',
                      elem: 'Text',
                      mods: { isFocused: true },
                      step: 5,
                      min: 0,
                  } }
                />
                <Field
                  type={ FieldType.NUMBER }
                  label="Number"
                  attr={ {
                      placeholder: __('Number'),
                      block: 'StyleGuidePage',
                      elem: 'Text',
                      mods: { hasError: true },
                      step: 5,
                      min: 0,
                  } }
                  addRequiredTag
                />
                <div block="Field" elem="ErrorMessages">
                    <div block="Field" elem="ErrorMessage">
                        This field is required!
                    </div>
                </div>
                <Field
                  type={ FieldType.NUMBER }
                  label="Number"
                  attr={ {
                      placeholder: __('Number'),
                      block: 'StyleGuidePage',
                      elem: 'Text',
                      mods: { isValid: true },
                      value: 56,
                      step: 5,
                      min: 0,
                  } }
                />

                <Typography variant={ TypographyVariants.H4 } mix={ { block: 'StyleGuidePage', elem: 'SubHeading' } }>
                    { __('Telephone') }
                </Typography>
                <Field
                  type={ FieldType.TEL }
                  label="Telephone"
                  attr={ {
                      placeholder: __('Telephone'),
                  } }
                  addRequiredTag
                />
                <Field
                  type={ FieldType.TEL }
                  label="Telephone"
                  attr={ {
                      placeholder: __('Telephone'),
                  } }
                  isDisabled
                />
                <Field
                  type={ FieldType.TEL }
                  label="Telephone"
                  attr={ {
                      placeholder: __('Telephone'),
                  } }
                />
                <Field
                  type={ FieldType.TEL }
                  label="Telephone"
                  attr={ {
                      placeholder: __('Telephone'),
                      block: 'StyleGuidePage',
                      elem: 'Text',
                      mods: { isFocused: true },
                  } }
                />
                <Field
                  type={ FieldType.TEL }
                  label="Telephone"
                  attr={ {
                      placeholder: __('Telephone'),
                      block: 'StyleGuidePage',
                      elem: 'Text',
                      mods: { hasError: true },
                  } }
                  addRequiredTag
                />
                <div block="Field" elem="ErrorMessages">
                    <div block="Field" elem="ErrorMessage">
                        This field is required!
                    </div>
                </div>
                <Field
                  type={ FieldType.TEL }
                  label="Telephone"
                  attr={ {
                      placeholder: __('Telephone'),
                      block: 'StyleGuidePage',
                      elem: 'Text',
                      mods: { isValid: true },
                      value: '998901234567',
                  } }
                />

                <Typography variant={ TypographyVariants.H4 } mix={ { block: 'StyleGuidePage', elem: 'SubHeading' } }>
                    { __('Checkbox') }
                </Typography>
                <Field
                  type={ FieldType.CHECKBOX }
                  label="Remember me"
                  isDisabled
                />
                <Field
                  type={ FieldType.CHECKBOX }
                  label="Remember me"
                />
                <Field
                  type={ FieldType.CHECKBOX }
                  label="Remember me"
                  attr={ { block: 'StyleGuidePage', elem: 'HoveredInput', id: 'hoveredCheckbox' } }
                />
                <Field
                  type={ FieldType.CHECKBOX }
                  label="Remember me"
                  attr={ { block: 'StyleGuidePage', elem: 'ErrorInput', id: 'errorCheckbox' } }
                />
                <div block="Field" elem="ErrorMessages">
                    <div block="Field" elem="ErrorMessage">
                        This is an error message
                    </div>
                </div>
                <Field
                  type={ FieldType.CHECKBOX }
                  label="Remember me"
                  attr={ {
                      checked: true,
                  } }
                />

                <Typography variant={ TypographyVariants.H4 } mix={ { block: 'StyleGuidePage', elem: 'SubHeading' } }>
                    { __('Radio') }
                </Typography>
                <Field
                  type={ FieldType.RADIO }
                  label="Remember me"
                  isDisabled
                />
                <Field
                  type={ FieldType.RADIO }
                  label="Remember me"
                />
                <Field
                  type={ FieldType.RADIO }
                  label="Remember me"
                  attr={ { block: 'StyleGuidePage', elem: 'HoveredInput', id: 'hoveredRadio' } }
                />
                <Field
                  type={ FieldType.RADIO }
                  label="Remember me"
                  attr={ { block: 'StyleGuidePage', elem: 'ErrorInput', id: 'errorRadio' } }
                />
                <div block="Field" elem="ErrorMessages">
                    <div block="Field" elem="ErrorMessage">
                        This is an error message
                    </div>
                </div>
                <Field
                  type={ FieldType.RADIO }
                  label="Remember me"
                  attr={ { checked: true } }
                />
            </>
        );
    }

    renderAdditionalElements(): ReactElement {
        const { fakeFunction } = this.props;
        const content = <b>Tooltip content</b>;

        return (
            <>
                <Typography variant={ TypographyVariants.H4 } mix={ { block: 'StyleGuidePage', elem: 'SubHeading' } }>
                    { __('Breadcrumbs') }
                </Typography>
                <Breadcrumbs
                  breadcrumbs={ [{ url: '/styleguide', name: 'Style Guide' }] }
                  areBreadcrumbsVisible
                />
                <Breadcrumbs
                  breadcrumbs={ [{ name: 'Style Guide' }] }
                  areBreadcrumbsVisible
                />

                <Typography variant={ TypographyVariants.H4 } mix={ { block: 'StyleGuidePage', elem: 'SubHeading' } }>
                    { __('Notification messages') }
                </Typography>

                <Notification
                  onHideNotification={ fakeFunction }
                  lifeTime={ 9999999 }
                  notificationId="success"
                  notification={ NOTIFICATION_SUCCESS_DATA }
                  id="notificationSuccess"
                />
                <Notification
                  onHideNotification={ fakeFunction }
                  lifeTime={ 9999999 }
                  notificationId="error"
                  notification={ NOTIFICATION_ERROR_DATA }
                  id="notificationError"
                />
                <Notification
                  onHideNotification={ fakeFunction }
                  lifeTime={ 9999999 }
                  notificationId="info"
                  notification={ NOTIFICATION_INFO_DATA }
                  id="notificationInfo"
                />

                <Typography variant={ TypographyVariants.H4 } mix={ { block: 'StyleGuidePage', elem: 'SubHeading' } }>
                    { __('Tooltips') }
                </Typography>

                <Tooltip content={ content } side={ TooltipSideType.BOTTOM } />

                <Tooltip
                  content="Tooltip content"
                  mix={ { block: 'StyleGuidePage', elem: 'Tooltip' } }
                  sideOffset={ 20 }
                >
                    <IconButton variant={ ButtonVariants.OUTLINED }>
                        <LockIcon />
                    </IconButton>
                </Tooltip>

                <Typography variant={ TypographyVariants.H4 } mix={ { block: 'StyleGuidePage', elem: 'SubHeading' } }>
                    { __('Tabs') }
                </Typography>

                <Tabs tabs={ this.tabMap } defaultValue="Third tab" />
            </>
        );
    }

    renderItem(title: string, render: () => ReactElement): ReactElement {
        return (
            <div block="StyleGuidePage" elem="Component" key={ title }>
                <Typography
                  variant={ TypographyVariants.H1 }
                  mix={ { block: 'StyleGuidePage', elem: 'Heading' } }
                >
                    { title }
                </Typography>
                { render() }
            </div>
        );
    }

    render(): ReactElement {
        return (
            <main block="StyleGuidePage">
                { this.renderContentWrapper() }
                <ContentWrapper
                  wrapperMix={ { block: 'StyleGuidePage', elem: 'Wrapper' } }
                  label={ __('Style Guide page') }
                >
                    { Object.entries(this.renderMap).map(([key, item]) => this.renderItem(key, item)) }
                </ContentWrapper>
            </main>
        );
    }
}

export default StyleGuidePageComponent;
