/**
 * API 服务层
 */

import { get, post, del } from './request'
import type { Message, Conversation } from '@/types'

export class ChatAPI {
  /**
   * 发送消息
   */
  static async sendMessage(prompt: string, model: string): Promise<{ content: string }> {
    try {
      // 这里应该调用真实的后端 API
      // 目前使用模拟数据
      return await mockSendMessage(prompt, model)
    } catch (error) {
      console.error('Send message error:', error)
      throw error
    }
  }

  /**
   * 获取对话历史
   */
  static async getHistory(): Promise<Conversation[]> {
    try {
      // 这里应该调用真实的后端 API
      // 目前返回空数组，实际数据从本地存储获取
      return []
    } catch (error) {
      console.error('Get history error:', error)
      throw error
    }
  }

  /**
   * 删除对话
   */
  static async deleteConversation(id: string): Promise<void> {
    try {
      // 这里应该调用真实的后端 API
      // 目前只做本地处理
      return Promise.resolve()
    } catch (error) {
      console.error('Delete conversation error:', error)
      throw error
    }
  }
}

/**
 * 模拟发送消息（用于演示）
 */
async function mockSendMessage(prompt: string, model: string): Promise<{ content: string }> {
  // 模拟网络延迟
  await new Promise((resolve) => setTimeout(resolve, 800 + Math.random() * 500))

  // 模拟不同的回复内容
  const responses = [
    `我已经理解了你的问题："${prompt}"。\n\n让我为你提供一个详细的回答...`,
    `关于"${prompt}"这个问题，我可以从以下几个方面来帮你：\n\n1. 首先...\n2. 其次...\n3. 最后...`,
    `好的，我来帮你解决这个问题。\n\n${prompt}\n\n基于你提供的信息，我的建议是...`,
  ]

  const randomResponse = responses[Math.floor(Math.random() * responses.length)]

  return {
    content: randomResponse,
  }
}

