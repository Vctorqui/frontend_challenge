'use client'

import { create } from 'zustand'
import { Comment } from '@/types/comment'
import { getCommnets } from '@/services/api'

interface CommentState {
  comments: Comment[]
  isLoading: boolean
  error: string | null
  fetchComments: () => Promise<void>
}

export const useCommentStore = create<CommentState>((set) => ({
  comments: [],
  isLoading: false,
  error: null,
  fetchComments: async () => {
    set({ isLoading: true, error: null })
    try {
      const comments = await getCommnets()
      set({ comments, isLoading: false })
    } catch (error) {
      set({
        error:
          error instanceof Error ? error.message : 'Failed to get comments',
        isLoading: false,
      })
    }
  },
}))
