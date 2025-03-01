'use client'

import { useState } from 'react'
import {
  Button,
  ErrorMessage,
  Form,
  FormButtonContainer,
  FormContainer,
  FormGroup,
  Input,
  Label,
  LoadingSpinner,
  Textarea,
} from './styled/StyledComponent'
import { PlusIcon } from '@radix-ui/react-icons'
import { useCommentStore } from '@/store/commentStore'
import { NewComment } from '@/types/comment'
import { enqueueSnackbar } from 'notistack'

export default function CommentForm() {
  const { addNewComment, isLoading } = useCommentStore()
  const [formCommentData, setFormCommentData] = useState<NewComment>({
    postId: 1,
    name: '',
    email: '',
    body: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formCommentData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formCommentData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formCommentData.email)) {
      newErrors.email = 'Email address not validated'
    }

    if (!formCommentData.body.trim()) {
      newErrors.body = 'Comment is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormCommentData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    try {
      await addNewComment(formCommentData)
      setFormCommentData({
        postId: 1,
        name: '',
        email: '',
        body: '',
      })
      enqueueSnackbar('Comment added successfully', { variant: 'success' })
    } catch (error) {
      console.error('Failed to add comment', error)
      enqueueSnackbar('Failed to add Comment', { variant: 'error' })
    }
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type='text'
            id='name'
            name='name'
            placeholder='E.g. Victor Perez'
            value={formCommentData.name}
            onChange={handleChange}
          />
          {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='E.g. yourEmail@gmail.com'
            value={formCommentData.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </FormGroup>
        <FormGroup>
          <Label>Comment</Label>
          <Textarea
            id='body'
            name='body'
            placeholder='E.g. I like to play videogames, music...'
            value={formCommentData.body}
            onChange={handleChange}
          />
          {errors.body && <ErrorMessage>{errors.body}</ErrorMessage>}
        </FormGroup>
        <FormButtonContainer>
          <Button type='submit' disabled={isLoading}>
            {isLoading ? (
              <>
                <LoadingSpinner /> Adding Comment...
              </>
            ) : (
              <>
                <PlusIcon />
                Add Comment
              </>
            )}
          </Button>
        </FormButtonContainer>
      </Form>
    </FormContainer>
  )
}
