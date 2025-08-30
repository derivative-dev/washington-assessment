'use client'

import React, { ReactNode, useRef, cloneElement, useCallback, useMemo, createContext, isValidElement, useContext, useState } from 'react'
import { DrawerOptions, FormHandle } from '@/lib/types';
import { 
    WDrawer,
    WDrawerFooter, 
    WDrawerHeader,
    WDrawerContent,
    WDrawerTitle,
} from './';
import WButton from '../WButton';
import WCircularButton from '../WCircularButton';
import { Send } from 'lucide-react';
import { X, ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DrawerContextType {
    currentOptions: DrawerOptions | null;
    closeDrawer: () => void;
    showDrawer: (options: DrawerOptions) => void;
    updateDrawer: (updates: Partial<DrawerOptions>) => void;
    formRef: React.RefObject<FormHandle | null>;
}

const DrawerContext = createContext<DrawerContextType | null>(null);

const DrawerProvider = ({ children }: { children: ReactNode }) => {
    const [currentOptions, setCurrentOptions] = useState<DrawerOptions | null>(null);
    const [isClosing, setIsClosing] = useState(false);
    const formRef = useRef<FormHandle | null>(null);

    const showDrawer = useCallback((opts : DrawerOptions) => {
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
        setIsClosing(false);
    }, []);

    const closeDrawer = useCallback(() => {
        setIsClosing(true);
        // Wait for animation to complete before removing from DOM
        setTimeout(() => {
            setCurrentOptions(null);
            setIsClosing(false);
        }, 300); // Match the duration in your CSS
    }, []);

    const updateDrawer = useCallback((updates: Partial<DrawerOptions>) => {
        setCurrentOptions(prev => {
            if (!prev) return prev;

            const merged: DrawerOptions = {...prev, ...updates};

            if (prev.primary && updates.primary) {
                merged.primary = {...prev.primary, ...updates.primary};
            }
            if (prev.secondary && updates.secondary) {
                merged.secondary = { ...prev.secondary, ...updates.secondary };
            }
            if (prev.discard && updates.discard) {
                merged.discard = { ...prev.discard, ...updates.discard };
            }

            return merged;
        });
    }, []);

    const ctxValue = useMemo(() => ({
        currentOptions,
        showDrawer,
        closeDrawer,
        updateDrawer,
        formRef
    }), [currentOptions, showDrawer, updateDrawer, closeDrawer, formRef]);

    return (
        <DrawerContext.Provider value={ctxValue}>
            {children}
            {currentOptions && (
                <WDrawer 
                    open={!isClosing}
                    onOpenChange={(open) => !open && closeDrawer()}
                >
                    <WDrawerContent className={cn(
                        currentOptions.widthClass ? currentOptions.widthClass + ' !max-w-none' : '',
                    )}>
                        <WDrawerHeader>
                            <WButton 
                                style='outlined'
                                leftIcon={ArrowLeft}
                                content='Back'
                                size='sm'
                                className='!p-0 !font-medium'
                                onClick={closeDrawer}
                            />
                            <WDrawerTitle>{currentOptions.title}</WDrawerTitle>
                            <WCircularButton 
                                style='outlined'
                                size='md'
                                icon={X}
                                className='absolute top-4 right-4'
                                onClick={closeDrawer}
                            />
                        </WDrawerHeader>
                        <div className="overflow-y-auto px-[27px] py-[24px]">
                            {currentOptions.body}
                        </div>
                        <WDrawerFooter>
                            {currentOptions.onDiscard && (
                                <WButton 
                                    style='outlined'
                                    content="Discard"
                                    onClick={currentOptions.onDiscard}
                                    {...currentOptions.discard}
                                />
                            )}
                            <div className='flex gap-2.5'>
                                {currentOptions.onSecondary && (
                                    <WButton 
                                        style='subtle'
                                        leftIcon={Send}
                                        content="Save Draft"
                                        onClick={async () => {
                                            await currentOptions.onSecondary?.();
                                        }}
                                        {...currentOptions.secondary}
                                    />
                                )}
                                {currentOptions.onPrimary && (
                                    <WButton 
                                        style='primary'
                                        leftIcon={Send}
                                        content="Save"
                                        onClick={async () => {
                                            await currentOptions.onPrimary?.();
                                        }}
                                        {...currentOptions.primary}
                                    />
                                )}
                            </div>
                        </WDrawerFooter>
                    </WDrawerContent>
                </WDrawer>
            )}
        </DrawerContext.Provider>
    )
}

export const useDrawer = () => {
    const context = useContext(DrawerContext);
    if (!context) {
        throw new Error('useDrawer must be used within a DrawerProvider');
    }
    return context;
}

export default DrawerProvider