'use client'

import { useCommentStore } from '@/store/commentStore'
import {
  CommentBody,
  CommentCard,
  CommentEmail,
  CommentName,
  ContainerList,
} from './styled/StyledComponent'
import { useEffect } from 'react'

export default function CommentList() {
  const { comments, fetchComments, isLoading, error } = useCommentStore()

  useEffect(() => {
    fetchComments()
  }, [fetchComments])

  if (isLoading && comments.length === 0) {
    return <div>Wait, Loading comments...</div>
  }

  if (error && comments.length === 0) {
    return <div>Error: {error}</div>
  }

  return (
    <ContainerList>
      {comments.map((comment, index) => (
        <CommentCard key={comment.id + index}>
          <CommentName>{comment.name}</CommentName>
          <CommentEmail>{comment.email}</CommentEmail>
          <CommentBody>{comment.body}</CommentBody>
        </CommentCard>
      ))}
    </ContainerList>
  )
}
