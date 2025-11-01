"use client"

import { Analytics } from "./analytics"
import { AnalyticsVerification } from "./analytics-verification"
import { AnalyticsDebugger } from "./analytics-debugger"

export function AnalyticsProvider() {
  return (
    <>
      <Analytics />
      <AnalyticsVerification />
      <AnalyticsDebugger />
    </>
  )
}

export function AnalyticsWrapper() {
  return <AnalyticsProvider />
}
