import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className="flex items-center space-x-2 text-sm font-medium text-gray-500 mb-8 py-4">
            <Link
                href="/"
                className="flex items-center hover:text-primary transition-colors"
            >
                <Home className="w-4 h-4 mr-1" />
                <span>Home</span>
            </Link>

            {items.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                    {index === items.length - 1 ? (
                        <span className="text-primary font-bold">{item.label}</span>
                    ) : (
                        <Link
                            href={item.href}
                            className="hover:text-primary transition-colors"
                        >
                            {item.label}
                        </Link>
                    )}
                </div>
            ))}
        </nav>
    );
}
