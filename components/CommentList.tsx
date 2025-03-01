'use client'

import { useCommentStore } from '@/store/commentStore'
import {
  CommentBody,
  CommentCard,
  CommentEmail,
  CommentName,
  ContainerList,
} from './styled/StyledComponent'
import { useEffect, useState } from 'react'
import Pagination from './Pagination'

export default function CommentList() {
  const { comments, fetchComments, isLoading, error } = useCommentStore()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(3)

  useEffect(() => {
    fetchComments()
  }, [fetchComments])

  if (isLoading && comments.length === 0) {
    return <div>Wait, Loading comments...</div>
  }

  if (error && comments.length === 0) {
    return <div>Error: {error}</div>
  }

  //   Manage of pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentComments = comments.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage)
    setCurrentPage(1)
  }

  return (
    <>
      <ContainerList>
        {currentComments.map((comment, index) => (
          <CommentCard key={comment.id + index}>
            <CommentName>{comment.name}</CommentName>
            <CommentEmail>{comment.email}</CommentEmail>
            <CommentBody>{comment.body}</CommentBody>
          </CommentCard>
        ))}
      </ContainerList>

      {comments.length > 0 && (
        <Pagination
          totalItems={comments.length}
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          onItemsPerPageChange={handleItemsPerPageChange}
          itemsPerPageOptions={[ 3, 5, 10, 25, 50]}
          maxPageButtons={5}
        />
      )}
    </>
  )
}
