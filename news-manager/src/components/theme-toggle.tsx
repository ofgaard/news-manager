import {Computer, Moon, Sun} from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from './ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from './ui/dropdown-menu';

export function ThemeToggle() {
    const { setTheme } = useTheme();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Moon className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <Button variant="ghost" size="icon" onClick={() => setTheme('light')}>
                    <Sun className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" onClick={() => setTheme('dark')}>
                    <Moon className="h-4 w-4" />
                </Button>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}