import "@/styles/globals.css"
import { Cairo } from 'next/font/google'

const cairo = Cairo({ subsets: ['arabic'] })

export const metadata = {
  title: 'BAbalous - منتجات الفاكهة الطبيعية',
  description: 'اكتشف مجموعتنا من منتجات الفاكهة الصحية والطبيعية',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.className} bg-gray-50 text-gray-800`}>{children}</body>
    </html>
  )
}

