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
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
`

export const Button = styled.button`
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

export const ContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`

export const CommentCard = styled.div`
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
