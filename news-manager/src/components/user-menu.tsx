import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuGroup, DropdownMenuItem } from "./ui/dropdown-menu"
import { CircleUser, UserIcon, CreditCard, Plus, LogOut } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"

export const UserMenu = () => {
    return (
       <DropdownMenu>
        <DropdownMenuTrigger>
            <Button variant="ghost" size="icon">
                <CircleUser/>
                <span className="sr-only">Open user menu</span>
                </Button> </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Oliver Fruergaard</p>
                    <p className="text-xs leading-none text-muted-foreground">oliverfruergaard@gmail.com</p>
                </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuGroup>
                <DropdownMenuItem>
                    <Link href="/profile" className="w-full cursor-pointer flex items-center space-x-2">
                    <UserIcon/>
                    <span>Profile</span></Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/stories" className="w-full cursor-pointer flex items-center space-x-2">
                    <CreditCard/>
                    <span>Stories</span></Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link href="/new-story" className="w-full cursor-pointer flex items-center space-x-2">
                    <Plus/>
                    <span>New Story</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator/>
                {/* sign out */}
                <DropdownMenuItem className="cursor-pointer text-red-600 dark:text-red-400 focus:text-red-600 dark:focus:text-red-400">
                    <LogOut/>
                    <span>Sign out</span>
                </DropdownMenuItem>
            </DropdownMenuGroup>

        </DropdownMenuContent>
       </DropdownMenu>
    )
}