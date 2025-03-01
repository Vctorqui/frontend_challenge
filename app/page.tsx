'use client'
import {
  Button,
  Container,
  Header,
  Title,
} from '@/components/styled/StyledComponent'
import { useState } from 'react'
import CommentList from '@/components/CommentList'
import CommentForm from '@/components/CommentForm'
import { EyeClosedIcon, PlusIcon } from '@radix-ui/react-icons'

export default function Home() {
  const [showForm, setShowForm] = useState(false)

  return (
    <Container>
      <Header>
        <Title>Comments List</Title>
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? (
            <>
              <EyeClosedIcon />
              Hide Form
            </>
          ) : (
            <>
              <PlusIcon /> Add New Comment
            </>
          )}
        </Button>
      </Header>
      {showForm && <CommentForm />}
      <CommentList />
    </Container>
  )
}
