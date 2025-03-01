'use client'

import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from '@radix-ui/react-icons'
import React from 'react'
import styled from 'styled-components'

interface PaginationProps {
  totalItems: number
  currentPage: number
  itemsPerPage: number
  maxPageButtons?: number
  onPageChange: (page: number) => void
  onItemsPerPageChange?: (itemsPerPage: number) => void
  itemsPerPageOptions?: number[]
  className?: string
}

interface PaginationButtonProps {
  $active?: boolean
  disabled?: boolean
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  currentPage,
  itemsPerPage,
  maxPageButtons = 5,
  onPageChange,
  onItemsPerPageChange,
  itemsPerPageOptions = [10, 25, 50, 100],
  className,
}) => {
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage))
  const safePage = Math.min(Math.max(1, currentPage), totalPages)

  const getPageRange = () => {
    if (totalPages <= maxPageButtons) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    let start = Math.max(safePage - Math.floor(maxPageButtons / 2), 1)
    let end = start + maxPageButtons - 1

    if (end > totalPages) {
      end = totalPages
      start = Math.max(end - maxPageButtons + 1, 1)
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i)
  }

  const pageRange = getPageRange()

  const handlePageChange = (page: number) => {
    if (page !== safePage && page >= 1 && page <= totalPages) {
      onPageChange(page)
    }
  }

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newItemsPerPage = parseInt(e.target.value, 10)
    if (onItemsPerPageChange) {
      onItemsPerPageChange(newItemsPerPage)

      onPageChange(1)
    }
  }

  return (
    <PaginationContainer
      className={className}
      role='navigation'
      aria-label='Pagination'
    >
      <PaginationControls>
        <PaginationButton
          onClick={() => handlePageChange(1)}
          disabled={safePage === 1}
          aria-label='Go to first page'
          title='First page'
        >
          <DoubleArrowLeftIcon />
        </PaginationButton>

        <PaginationButton
          onClick={() => handlePageChange(safePage - 1)}
          disabled={safePage === 1}
          aria-label='Go to previous page'
          title='Previous page'
        >
          <ArrowLeftIcon />
        </PaginationButton>

        <PaginationPages>
          {pageRange.map((page) => (
            <PaginationButton
              key={page}
              onClick={() => handlePageChange(page)}
              $active={page === safePage}
              aria-label={`Page ${page}`}
              aria-current={page === safePage ? 'page' : undefined}
            >
              {page}
            </PaginationButton>
          ))}
        </PaginationPages>

        <PaginationButton
          onClick={() => handlePageChange(safePage + 1)}
          disabled={safePage === totalPages}
          aria-label='Go to next page'
          title='Next page'
        >
          <ArrowRightIcon />
        </PaginationButton>

        <PaginationButton
          onClick={() => handlePageChange(totalPages)}
          disabled={safePage === totalPages}
          aria-label='Go to last page'
          title='Last page'
        >
          <DoubleArrowRightIcon />
        </PaginationButton>
      </PaginationControls>

      {onItemsPerPageChange && (
        <PaginationInfo>
          <span>Items per page:</span>
          <Select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            aria-label='Items per page'
          >
            {itemsPerPageOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          <span>
            Showing {Math.min((safePage - 1) * itemsPerPage + 1, totalItems)}-
            {Math.min(safePage * itemsPerPage, totalItems)} of {totalItems}{' '}
            items
          </span>
        </PaginationInfo>
      )}
    </PaginationContainer>
  )
}

// Pagination component styles
const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 2rem 0;
  width: 100%;

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const PaginationControls = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

const PaginationPages = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`

interface PaginationButtonProps {
  active?: boolean
  disabled?: boolean
}

const PaginationButton = styled.button<PaginationButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2.5rem;
  height: 2.5rem;
  padding: 0 0.75rem;
  border-radius: 4px;
  font-size: 0.875rem;
  font-weight: ${(props) => (props.$active ? '600' : '400')};
  background-color: ${(props) =>
    props.$active ? props.theme.colors.primary : props.theme.colors.background};
  color: ${(props) => (props.$active ? 'white' : props.theme.colors.text)};
  border: 1px solid
    ${(props) =>
      props.$active ? props.theme.colors.primary : props.theme.colors.border};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  transition: all 0.2s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary}40;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    min-width: 2rem;
    height: 2rem;
    padding: 0 0.5rem;
  }
`

const PaginationInfo = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.secondary};

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.background};
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`

export default Pagination
