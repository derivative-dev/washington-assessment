import React from 'react'
import WButton, { WButtonProps } from './WButton';
import { X } from 'lucide-react';
import WCircularButton, { WCircularButtonProps } from './WCircularButton';

interface WActionListProps {
    primary?: Partial<WButtonProps>;
    secondary?: Partial<WButtonProps>;
    tertiary?: Partial<WCircularButtonProps>;
}

const WActionList = ({
    primary,
    secondary,
    tertiary,
}: WActionListProps) => {
  return (
    <div className='gap-[8px] items-center justify-center inline-flex'>
        {primary && <WButton 
            style='primary'
            size='md'
            {...primary}
        />}
        {secondary && <WButton 
            style='subtle'
            size='md'
            {...secondary}
        />}
        {tertiary && <WCircularButton
            icon={X}
            {...tertiary}
        />}
    </div>
  )
}

export default WActionList