'use client'

import { Sidebar } from "@/components/sidebar";
import { DashboardLayoutContainer, DashboardLayoutContent } from "@/features/dashboard/layout.style";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('auth-token')

    if (!token) {
      router.replace('/sign-in')
    } else {
      setAuthorized(true)
    }
  }, [router])

  if (!authorized) return null

  return (
    <DashboardLayoutContainer>
      <Sidebar />

      <DashboardLayoutContent>
        {children}
      </DashboardLayoutContent>
    </DashboardLayoutContainer>
  )
}