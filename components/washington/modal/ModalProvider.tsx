'use client'

import React, { ReactNode, useRef, cloneElement, createContext, isValidElement, useContext, useState, useCallback, useMemo } from 'react';
import WCircularButton from '../WCircularButton';
import WButton from '../WButton';
import { ModalOptions, FormHandle } from '@/lib/types';
import { cn } from '@/lib/utils';
import { 
    WModal,
    WModalContent,
    WModalHeader,
    WModalTitle,
    WModalDescription,
    WModalFooter,
} from './';
import { X, Send } from 'lucide-react';

interface ModalContextType {
    currentOptions: ModalOptions | null;
    closeModal: () => void;
    showModal: (options: ModalOptions) => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

const ModalProvider = ({ children }: { children: ReactNode }) => {
    const [currentOptions, setCurrentOptions] = useState<ModalOptions | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef<FormHandle | null>(null);

    const showModal = useCallback((opts : ModalOptions) => {
        const shouldInjectRef =
            isValidElement(opts.body) &&
            typeof opts.body.type !== 'string';

        const bodyWithRef = shouldInjectRef
        ? cloneElement(
            opts.body as React.ReactElement<{ ref?: React.Ref<FormHandle> }>,
            { ref: formRef }
        )
        : opts.body;

        setCurrentOptions({
            ...opts,
            body: bodyWithRef
        });
    }, []);

    const closeModal = useCallback(() => setCurrentOptions(null), []);

  const value = useMemo(() => ({ currentOptions, showModal, closeModal }), [currentOptions, showModal, closeModal]);

  return (
    <ModalContext.Provider value={value}>
        {children}
        {currentOptions && (
            <WModal
                open={true}
                onOpenChange={(open) => !open && closeModal()}
            >
                <WModalContent
                    className={cn(
                        currentOptions.width ? currentOptions.width : undefined,
                        currentOptions.height ? currentOptions.height : undefined
                    )}
                >
                    <WModalHeader>
                        <div className="flex gap-[8px] text-body-m">
                            {currentOptions.headerIcon && (
                                <currentOptions.headerIcon className="w-[24px] h-[24px] text-brand-primary" />
                            )}
                            {currentOptions.headerTitle}
                        </div>
                        <WCircularButton 
                            style='outlined'
                            size='lg'
                            icon={X}
                            onClick={() => closeModal()}
                        />
                    </WModalHeader>
                    {(currentOptions.title || currentOptions.description) && (
                      <div className="flex pt-[20px] pb-[6px] px-[20px] flex-col justify-center items-start gap-2.5 shrink-0 border-t border-fg-muted">
                        {currentOptions.title && (
                          <WModalTitle>
                            {currentOptions.title}
                          </WModalTitle>
                        )}
                        {currentOptions.description && (
                          <WModalDescription className="text-fg-hushed text-body-s">
                            {currentOptions.description}
                          </WModalDescription>
                        )}
                      </div>
                    )}
                    <div className='overflow-y-auto p-5 border-b border-fg-muted'>
                        {currentOptions.body}
                    </div>
                    <WModalFooter>
                        {currentOptions.secondary !== null && (
                            <WButton 
                                {...currentOptions.secondary}
                                style='subtle'
                                leftIcon={X}
                                content="Cancel"
                                onClick={() => closeModal()}
                            />
                        )}
                        <WButton 
                            {...currentOptions.primary}
                            style='primary'
                            leftIcon={Send}
                            content="Save"
                            state={isLoading ? 'loading' : 'default'}
                            onClick={async () => {
                                if (isLoading) return; // Prevent double-clicks
                                
                                setIsLoading(true);
                                try {
                                    if (formRef.current && typeof formRef.current.getValue === 'function') {
                                        const value = formRef.current.getValue();
                                        currentOptions.onSubmit?.(value);
                                    } else {
                                        currentOptions.onSubmit?.(undefined);
                                    }
                                    
                                    await currentOptions.onPrimary?.();
                                    closeModal();
                                } finally {
                                    setIsLoading(false);
                                }
                            }}
                        />
                    </WModalFooter>
                </WModalContent>
            </WModal>
        )}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
      throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
};

export default ModalProvider