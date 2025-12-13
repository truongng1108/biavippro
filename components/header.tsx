"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ShoppingCart, Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useCart } from "@/lib/cart-context"

const navigation = [
  { name: "Trang chủ", href: "/" },
  {
    name: "Sản phẩm",
    href: "/san-pham",
    children: [
      { name: "Tất cả sản phẩm", href: "/san-pham" },
      { name: "Gậy Bi A", href: "/gay-custom" },
      { name: "Phụ kiện Bi A", href: "/phu-kien" },
    ],
  },
  { name: "Dịch vụ", href: "/dich-vu" },
  { name: "Khóa học", href: "/khoa-hoc" },
  { name: "Blog", href: "/blog" },
  { name: "Liên hệ", href: "/lien-he" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <span className="font-serif text-3xl font-semibold tracking-tight text-foreground">
              Đức Cường Billiards
            </span>
          </Link>

          {/* Desktop Navigation - centered */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) =>
              item.children ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-widest font-medium outline-none">
                    {item.name}
                    <ChevronDown className="h-3 w-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="min-w-[200px]">
                    {item.children.map((child) => (
                      <DropdownMenuItem key={child.name} asChild>
                        <Link href={child.href} className="cursor-pointer">
                          {child.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm uppercase tracking-widest font-medium"
                >
                  {item.name}
                </Link>
              ),
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex text-muted-foreground hover:text-foreground">
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="relative text-muted-foreground hover:text-foreground"
              asChild
            >
              <Link href="/gio-hang">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-muted-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border">
            <div className="flex flex-col gap-1">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name}>
                    <span className="text-muted-foreground text-sm uppercase tracking-widest font-medium py-3 px-4 block">
                      {item.name}
                    </span>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors text-sm py-2 px-8 block"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors text-sm uppercase tracking-widest font-medium py-3 px-4 rounded"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
