'use client'

import { useState } from 'react'
import {
  Button,
  Form,
  FormButtonContainer,
  FormContainer,
  FormGroup,
  Input,
  Label,
  Textarea,
} from './styled/StyledComponent'
import { PlusIcon } from '@radix-ui/react-icons'

export default function CommentForm() {
  return (
    <FormContainer>
      <Form>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type='text'
            id='name'
            name='name'
            placeholder='E.g. Victor Perez'
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type='email'
            id='email'
            name='email'
            placeholder='E.g. yourEmail@gmail.com'
          />
        </FormGroup>
        <FormGroup>
          <Label>Comment</Label>
          <Textarea
            id='body'
            name='body'
            placeholder='E.g. I like to play videogames, music...'
          />
        </FormGroup>
        <FormButtonContainer>
          <Button type='submit'>
            <PlusIcon />
            Add Comment
          </Button>
        </FormButtonContainer>
      </Form>
    </FormContainer>
  )
}
