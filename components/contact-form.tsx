"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Cảm ơn bạn đã liên hệ!</h3>
        <p className="text-muted-foreground">Chúng tôi sẽ phản hồi trong thời gian sớm nhất.</p>
        <Button variant="outline" className="mt-4 bg-transparent" onClick={() => setIsSubmitted(false)}>
          Gửi tin nhắn khác
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Họ và tên *</Label>
          <Input id="name" name="name" placeholder="Nguyễn Văn A" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Số điện thoại *</Label>
          <Input id="phone" name="phone" type="tel" placeholder="0839 682 234" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="email@example.com" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Chủ đề</Label>
        <Input id="subject" name="subject" placeholder="Tư vấn chọn gậy bi a" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Nội dung tin nhắn *</Label>
        <Textarea id="message" name="message" placeholder="Nhập nội dung tin nhắn của bạn..." rows={5} required />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          "Đang gửi..."
        ) : (
          <>
            <Send className="h-4 w-4 mr-2" />
            Gửi tin nhắn
          </>
        )}
      </Button>
    </form>
  )
}
