"use client";
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/header';

const queryClient = new QueryClient();

export const AppProvider = ({children}: { children: React.ReactNode}) => {
    return (
        <QueryClientProvider client={queryClient}>
        <ThemeProvider>
            <div>
            <Header/>
            </div>
            {children}</ThemeProvider>
        <Toaster/>
        </QueryClientProvider>      

    )
}