'use client'

import {
  CommentBody,
  CommentCard,
  CommentEmail,
  CommentName,
  ContainerList,
} from './styled/StyledComponent'

export default function CommentList() {
  return (
    <ContainerList>
      <CommentCard>
        <CommentName>Comment Name</CommentName>
        <CommentEmail>Comment Email</CommentEmail>
        <CommentBody>Comment body</CommentBody>
      </CommentCard>
      <CommentCard>
        <CommentName>Comment Name</CommentName>
        <CommentEmail>Comment Email</CommentEmail>
        <CommentBody>Comment body</CommentBody>
      </CommentCard>
      <CommentCard>
        <CommentName>Comment Name</CommentName>
        <CommentEmail>Comment Email</CommentEmail>
        <CommentBody>Comment body</CommentBody>
      </CommentCard>
    </ContainerList>
  )
}
