import { ThemeToggle } from "./theme-toggle"
import Link from "next/link"
import { UserMenu } from "./user-menu"
export const Header = () => {
    return (
        <header className="fixed top-0 w-full z-50 border-b bg-background/80 px-10 md:px-40">
 <div className="container flex items-center justify-between">
<Link href="/" className="flex items-center space-x-2 font-bold text-xl hover:text-primary transition-colors">News Planner</Link>
 <div>
 <UserMenu></UserMenu>
 <ThemeToggle></ThemeToggle>
 </div>
 
 </div>
        </header>
    )

}