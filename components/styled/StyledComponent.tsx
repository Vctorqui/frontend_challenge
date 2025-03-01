'use client'
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`

export const Header = styled.header`
  text-align: center;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`

export const Title = styled.h1`
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  border: none;
  border-radius: 0.25rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
  }
`

export const IconButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
`

// Card Component Syles
export const ContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`

export const CommentCard = styled.div`
  border-radius: 0.25rem;
  background-color: transparent;
  padding: 1.5rem;
  border: 3px solid ${(props) => props.theme.colors.darkGrey};
  box-shadow: 4px 4px 0 ${(props) => props.theme.colors.secondary};
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`

export const CommentName = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`

export const CommentEmail = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 1rem;
  font-style: italic;
`

export const CommentBody = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.text};
  line-height: 1.5;
`

// Form Component Styles
export const FormContainer = styled.div`
  border-radius: 0.25rem;
  border: 3px solid ${(props) => props.theme.colors.darkGrey};
  padding: 2rem;
  margin-bottom: 2rem;
`

export const FormButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.secondary};
`

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`

export const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  min-height: 120px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  margin-right: 0.5rem;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`
