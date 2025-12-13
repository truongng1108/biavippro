"use client"

import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart, type CartItem } from "@/lib/cart-context"
import { useState } from "react"

interface AddToCartButtonProps {
  item: Omit<CartItem, "quantity">
  inStock?: boolean
  variant?: "default" | "outline"
  size?: "default" | "sm" | "lg"
  className?: string
}

export function AddToCartButton({
  item,
  inStock = true,
  variant = "default",
  size = "lg",
  className = "",
}: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addItem(item)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <Button size={size} variant={variant} className={className} onClick={handleAddToCart} disabled={!inStock || added}>
      <ShoppingCart className="h-5 w-5 mr-2" />
      {added ? "Đã thêm!" : inStock ? "Thêm vào giỏ hàng" : "Hết hàng"}
    </Button>
  )
}
