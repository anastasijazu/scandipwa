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
 import * as Tooltip from '@radix-ui/react-tooltip';
 import { TooltipComponentProps } from './Tooltip.type';
 import './Tooltip.style';

 /**
  * Tooltip block
  * @class Tooltip
  * @namespace Component/Tooltip/Component
  */
 export class TooltipComponent extends PureComponent<TooltipComponentProps> {
     static defaultProps: Partial<TooltipComponentProps> = {
         message: ''
     };

     render() {
        const { message } = this.props;
        return (
            <Tooltip.Provider>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <div className='Tooltip-IconButton'>
                    ?
                  </div>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content className='Tooltip-Content' sideOffset={5}>
                        { message }
                    <Tooltip.Arrow className='Tooltip-Arrow' />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </Tooltip.Provider>
          );
     }
 }

 export default TooltipComponent;
