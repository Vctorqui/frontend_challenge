'use client'

import { create } from 'zustand'
import { Comment, NewComment } from '@/types/comment'
import { addComment, getCommnets } from '@/services/api'
import { error } from 'console'

interface CommentState {
  comments: Comment[]
  isLoading: boolean
  error: string | null
  fetchComments: () => Promise<void>
  addNewComment: (comment: NewComment) => Promise<void>
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
  addNewComment: async (newComment: NewComment) => {
    set({ isLoading: true, error: null })
    try {
      const comment = await addComment(newComment)
      set((state) => ({
        comments: [comment, ...state.comments],
        isLoading: false,
      }))
    } catch {
      set({
        error: error instanceof Error ? error.message : 'Failed to add comment',
        isLoading: false,
      })
    }
  },
}))
