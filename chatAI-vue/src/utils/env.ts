/**
 * 环境变量配置
 */

// DeepSeek API Key（应该从环境变量读取，这里为了演示直接使用）
// 实际项目中应该使用 import.meta.env.VITE_DEEPSEEK_API_KEY
export const DEEPSEEK_API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY || 'sk-44349f794994429faafce602fac3376b'
export const DEEPSEEK_API_URL = 'https://api.deepseek.com/v1/chat/completions'

