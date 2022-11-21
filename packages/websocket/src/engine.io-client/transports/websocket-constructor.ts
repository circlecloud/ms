import { WebSocket as ws } from "../../client"

export const WebSocket = ws
export const usingBrowserWebSocket = false
export const defaultBinaryType = "nodebuffer"
export const nextTick = process.nextTick
